## .ant-row 导致 使用 a-row 的元素，换行排列

```
.ant-row {
    display: flex;
    flex-flow: row wrap; 
    min-width: 0;
}
```

其中 flex-flow 导致换行；

`flex-flow` 是一个简写属性，用于同时设置 `flex-direction` 和 `flex-wrap` 属性。在你的代码中，`flex-flow: row wrap;` 的意思是：

1. `flex-direction: row;`：这表示主轴方向是水平的，即从左到右。
2. `flex-wrap: wrap;`：这表示当子元素超出容器宽度时，子元素会自动换行。

修改：

```
:deep(.ant-row){
flex-flow: row nowrap;
}
```

## 解决3.0 form 与全局样式冲突问题，宽度问题

```
// 修复因为某个页面ant-col 设置为 100% 导致的全局样式问题
:deep(.ant-col) {
    width: auto;
}

// 修复因为某个页面ant-form-item 设置为 100% 导致的全局样式问题
:deep(.ant-form-item) {
    height: auto;
}
```

## less代码变量

less代码变量设置

```
@input-bg-color: #FCFCFC;
@btn-font-color: #194787;

.set-bg-color(@color) {
    background-color: @color;
}

.set-btn-hovor-color(@color) {
    color: @color;
    border-color: @color;
}
```

# 修改ant-form 表单元素的属性

```
@input-bg-color: #FCFCFC;
@btn-font-color: #194787;

.set-bg-color(@color) {
    background-color: @color;
}

.set-btn-hovor-color(@color) {
    color: @color;
    border-color: @color;
}


:deep(.ant-form-item .ant-form-item-label >label) {
    font-weight: 400;
    font-size: 14px;
    color: #194787 !important;
    text-align: left;
    font-style: normal;
    text-transform: none;
}

// radio 选中样式
:deep(.ant-radio-group) {
    display: flex;
}

:deep(.ant-radio-button-wrapper) {
    flex: 1;
    text-align: center;
    border-radius: 0%;
}

:deep(.ant-radio-button-wrapper:first-child) {
    margin-right: 12px;
}

:deep(.ant-radio-button-wrapper:hover) {
    color: #194787;
}

:deep(.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover) {
    .set-btn-hovor-color(@btn-font-color)
}

:deep(.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)) {
    .set-btn-hovor-color(@btn-font-color)
}

:deep(.ant-radio-button-wrapper-checked::after) {
    content: url("../../../../assets/icons/check-mark.svg");
    position: absolute;
    bottom: 8px;
    right: 4px;
    width: 12px;
    height: 12px;
}

// 添加参数
:deep(.ant-btn-dashed:not(:disabled)) {
    .set-btn-hovor-color(@btn-font-color)
}

// 对jex-table的样式进行修改

:deep(.jeecg-basic-table .ant-table-wrapper) {
    padding: 0;
}

:deep(.jeecg-basic-table-form-container) {
    padding: 0;
}

:deep(.ant-table-wrapper .ant-table.ant-table-middle .ant-table-thead>tr>th) {
    padding: 7px 8px;
    background-color: #D4E4F5;
    border-inline-end: none;
}

// table 内部边框
:deep(.ant-table-wrapper .ant-table.ant-table-bordered >.ant-table-container >.ant-table-header >table >thead>tr>th) {
    border-inline-end: none;
}

// 输入框背景色的修改
:deep(.ant-radio-button-wrapper) {
    .set-bg-color(@input-bg-color);
    // background-color: #FCFCFC;
}

:deep(.ant-select:not(.ant-select-customize-input) .ant-select-selector) {
    .set-bg-color(@input-bg-color);
}

// 下方间距
// :deep(.ant-form-item){
//     margin-bottom: 24px;
// }

:deep(.ant-input) {
    .set-bg-color(@input-bg-color);
}
```

## jeccg

table 内的配置

```echarts
// 列表页面公共参数、方法
const { tableContext } = useListPage({
    designScope: 'basic-table-demo-ajax',
    tableProps: {
        api: fetchMockData,
        afterFetch: getListApi,
        columns: columns,
        actionColumn: {
            width: 120,
        },
        showTableSetting: false,
    },
});
```

## mock请求

## 其他jett

form使用

```



const [registerInnerModal, { closeModal, setModalProps }] = useModalInner(({ record }) => {
    // 此处回显数据
    //TODO 此处回显数据
    getListItemById({ id: record?.id }).then((res) => {
        // 找一下basicForm 如何设置初始值
       setFieldsValue(res);
    });
});
```

## ts 请求

```
    setFieldsValue: async <T>(values: T) => {
      const form = await getForm();
      form.setFieldsValue<T>(values);
    },
```
