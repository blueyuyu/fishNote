// 进入api文件夹后，执行： node generateApi.js
// -------------***** 只需要修改下方的配置即可 *********-----------------------

const prefixNameFilePath = '@tocc-common/src/api/config.js'; // 定义的后端前缀路径文件地址

const prefixName = 'ToccLawEnforce'; // 前端请求服务的路径（在上面的定义文件中声明）
const apiPath = 'http://172.25.22.135:23165/v2/api-docs'; // 后端API文档接口
const serviceModule = 'tocc-law-enforce'; // 后端服务名字
const matchPrefix = '/enforcer/resume/'; // 后端服务子模块

// -------------***** 只需要修改上方的配置即可 *********-----------------------

const path = require('path');
const request = require('request');
const fs = require('fs');
request(apiPath, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        handleRes(body);
    }
});

// 首字母大写
const upperFirstStr = str => {
    return str[0].toUpperCase() + str.slice(1);
};
// 首字母小写
const lowerFirstStr = str => {
    return str[0].toLowerCase() + str.slice(1);
};

const handleRes = data => {
    let resData = JSON.parse(data);
    // 支持获取全部接口
    let moduleName = matchPrefix === '/' ? '/' : matchPrefix[1].toUpperCase() + matchPrefix.slice(2);
    if (moduleName.length > 2 && moduleName[moduleName.length - 1] === '/') {
        moduleName = moduleName.slice(0, -1);
    }
    let matchedKeys = Object.keys(resData.paths).filter(key => key.indexOf(matchPrefix) === 0); // 当前匹配的路径

    let tagToApiPrefix = matchedKeys.reduce((prev, curr) => {
        let currentPathInfo = resData.paths[curr]; // 当前路径的信息
        let methods = Object.keys(currentPathInfo); // 获取当前路径的全部方法
        methods.forEach(method => {
            let methodInfo = currentPathInfo[method];
            let tags = methodInfo.tags;
            let paths = curr.split('/').filter(item => {
                return item && item.indexOf('{') === -1;
            });
            if (!prev[tags[0]]) {
                prev[tags[0]] = {
                    prefix: '',
                    apis: []
                };
            }
            let currentTagObj = prev[tags[0]];
            let newPrefix = paths.map(item => upperFirstStr(item)).join('');
            let oldPrefix = currentTagObj.prefix;
            if (!oldPrefix) {
                currentTagObj.prefix = newPrefix;
                oldPrefix = newPrefix;
            }
            currentTagObj.prefix = newPrefix.length < oldPrefix.length ? newPrefix : oldPrefix;
            if (!currentTagObj.apis.includes(curr)) {
                currentTagObj.apis.push(curr);
            }
            return prev;
        });
        return prev;
    }, {});
    let isMultipleModuels = Object.keys(tagToApiPrefix).length > 1; // 是否匹配多个模块
    // 如果有多个模块，导出的对象名字需要拼接2个路径
    Object.keys(tagToApiPrefix).forEach(subModule => {
        tagToApiPrefix[subModule].prefix = tagToApiPrefix[subModule].apis[0]
            .split('/')
            .filter(item => !!item)
            .map(item => upperFirstStr(item))
            .slice(0, isMultipleModuels ? 2 : 1)
            .join('');
    });

    // console.log('%c [ tagToApiPrefix ]-35', 'font-size:13px; background:pink; color:#bf2c9f;', matchedKeys, tagToApiPrefix, moduleName);

    const generateModuleFile = (moduleMathcedKeys, moduleName) => {
        let str = `
    import Axios from 'axios';
    import { ${prefixName} } from '${prefixNameFilePath}';
    import { genParams } from '@tocc-common/src/utils/common';
    const prefix = ${prefixName};
    // import qs from 'qs';
    export const ${moduleName}Api = {
        ${moduleMathcedKeys
            .map(key => {
                // key 是接口路径
                let data = resData['paths'][key];
                let methods = Object.keys(data);
                // 可能同个路径有多个方法
                let isMutipleMethod = methods.length > 1;
                return methods
                    .map(method => {
                        let methodDetail = data[method];
                        let requestPath = key; // 请求路径
                        let summary = methodDetail.summary;
                        let splitPaths = key.split('/').filter(item => !!item);
                        // let moduelName = splitPaths[0];
                        let subPaths = splitPaths.splice(1);
                        let requestName = ''; // 请求的方法名字
                        // 处理特殊路径 .eg /xx/{id}
                        let isRequestWithSimpleId = key.match(/\{.*\}/g); // ['{id}'] or null
                        if (isRequestWithSimpleId) {
                            requestPath = requestPath.replace(isRequestWithSimpleId[0], '');
                            let lastWord = requestPath
                                .split('/')
                                .filter(item => !!item)
                                .pop();
                            requestName = method + upperFirstStr(lastWord);
                            // console.log('%c [ requestName ]-111', 'font-size:13px; background:pink; color:#bf2c9f;', requestPath, lastWord, requestName);
                        } else {
                            requestName = subPaths
                                .slice(-2)
                                .map((item, index) => {
                                    return index === 0 ? item : upperFirstStr(item);
                                })
                                .join('');
                            if (isMutipleMethod) {
                                requestName = method + upperFirstStr(requestName);
                            }
                        }

                        let finalParams = {
                            delete: () => {
                                return isRequestWithSimpleId ? '' : '{data: genParams(params)}';
                            },
                            get: () => {
                                return isRequestWithSimpleId ? '' : '{ params }';
                            },
                            put: () => {
                                return isRequestWithSimpleId ? '' : 'genParams(params)';
                            },
                            post: () => {
                                try {
                                    return methodDetail.parameters[0] && methodDetail.consumes[0] === 'application/json' && methodDetail.parameters[0].in === 'query'
                                        ? `qs.stringify(params),
                                        {
                                            headers: {
                                                'content-type': 'application/x-www-form-urlencoded',
                                            },
                                        }`
                                        : 'genParams(params)';
                                } catch (error) {
                                    return 'genParams(params)';
                                }
                            }
                        };
                        let reqParams = method in finalParams ? finalParams[method]() : '{ params }';
                        return `// ${summary}
        ${requestName}(params) {
            return Axios.${method}(prefix + '${requestPath}'${isRequestWithSimpleId ? '+ params' : ''}, ${reqParams}).then(
                (res) => res.data
            );
        },
    `;
                    })
                    .join('');
            })
            .join('')}
    }
        `;
        const floderPath = serviceModule + '/' + lowerFirstStr(moduleName);
        let fileName = 'index.js';
        let filePath = path.join(__dirname, floderPath, fileName);
        if (fs.existsSync(filePath)) {
            fileName = 'index.' + Math.round(Math.random() * 1000) + '.js';
            filePath = path.join(__dirname, floderPath, fileName);
        }
        fs.mkdir(path.join(__dirname, floderPath), { recursive: true }, err => {
            if (err) throw err;
            fs.writeFile(filePath, str, err => {
                if (err) throw err;
                console.log('File created successfully!');
                // 20240829：不需要在 index.js 导出全部一级模块，避免出现命名冲突的情况
                // // 重写模块的导出
                // // 使用node读取serviceModule文件夹下的全部一级文件夹
                // const serviceModuleFolderPath = path.join(__dirname, serviceModule);
                // const folderNames = fs.readdirSync(serviceModuleFolderPath).filter(file => fs.statSync(path.join(serviceModuleFolderPath, file)).isDirectory());
                // let exportStr = folderNames.map(item => `export * from './${item}/index';`).join('\n') + '\n';
                // fs.writeFile(path.join(__dirname, serviceModule, 'index.js'), exportStr, err => {
                //     if (err) throw err;
                //     console.log('export file created successfully!');
                // });
            });
        });
    };
    Object.keys(tagToApiPrefix).forEach(subModule => {
        let moduleMathcedKeys = tagToApiPrefix[subModule].apis;
        let moduleName = tagToApiPrefix[subModule].prefix;
        generateModuleFile(moduleMathcedKeys, moduleName);
    });
};
