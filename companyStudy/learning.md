## ant pagination 分页逻辑

```
          <a-input-search
            v-model:value="formState.searchKey"
            placeholder="请输入关键字查询"
            style="width: 250px"
            @search="onSearchName"
            @change="clearInputFn"
            enter-button
            allowClear
          />

<a-pagination
          v-model:current="pageParams.params.pageNo"
          v-model:pageSize="pageParams.params.pageSize"
          :pageSizeOptions="pageSizeOptions"
          show-size-changer
          :total="pageParams.total"
          @change="onShowSizeChange" />
```

```
// 有input search 
 type FormType = {
    searchKey?: String;
    sortOrder?: 'asc' | 'desc';
    sortColumn: String;
  }
  const formState = ref<FormType>({
    searchKey: '',
    sortOrder: 'asc',
    sortColumn: 'createTime',
  });

  const pageParams = ref({
    params: {
      pageSize: 9,
      pageNo: 1,
    },
    total: 0,
  });
  const pageSizeOptions = reactive(['9', '12', '30', '60', '90']);
  const loading = ref(false);
 const onShowSizeChange = (current: number, pageSize: number) => {
    pageParams.value.params = { ...pageParams.value.params, pageNo: current, pageSize: pageSize };
    // getModelPageList();
  };
  const onSearchName = () => {
    // 通过更改 params , watch 监听，掉用
    pageParams.value.params = { ...pageParams.value.params, pageNo: 1 };
    // getModelPageList(formState.value);
  };
// 注意： 为了保证页码一致，带条件搜索的时候，页码要记得归一
// pageParams.value.params = { ...pageParams.value.params, pageNo: 1 };

// 数据更改
  const getModelPageList = (params?: Object) => {
    loading.value = true;
    modelPageList({ ...pageParams.value.params, ...params, public: true, labelList: tags })
      .then((res) => {
        resultNum.value = res.total;
        modelList.value = res.records;
        pageParams.value.total = res.total;
      })
      .catch(() => {})
      .finally(() => {
        loading.value = false;
      });
  };

// 监听 params 变化，再调用，或者在onShowSizeChange 调用
  watch(
    () => pageParams.value.params,
    (val) => {
      getModelPageList(formState.value);
    },
    { deep: true, immediate: true }
  );
```

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

## 解决 3.0 form 与全局样式冲突问题，宽度问题

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

## less 代码变量

less 代码变量设置

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

# 修改 ant-form 表单元素的属性的背景样式， 选项框

![1747625425364](images/learning/1747625425364.png)

```
// template
        <a-radio-group v-model:value="formState.isRequired">
          <a-radio-button v-for="item in selectList" :key="item.value" :value="item.value">{{ item.label }}</a-radio-button>
        </a-radio-group>

// js
  const selectList = [
    { label: '必填', value: true },
    { label: '非必填', value: false },
  ];

// css
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
```

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

```
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

使用

## 使用 ant 创建弹框组件，有校验

```
<template>
<a-button type="text" @click="() => handleTuning(item)">微调</a-button>
<FineTuningModel v-model:visible="tuningDrawerVisible" :modelInfo="selectedModelInfo" />
</template>
<script>
  import FineTuningModel from '../components/fineTuningModel.vue';
  const tuningDrawerVisible = ref(false);
  const selectedModelInfo = ref({});
  const handleTuning = (item) => {
    tuningDrawerVisible.value = true;
    selectedModelInfo.value = item;
  };
</script>
```

组件内部

```
<template>
  <div class="h-full">
    <a-modal
      width="35%"
      :maskClosable="false"
      :visible="props.visible"
      :centered="true"
      :closable="true"
      title="模型微调"
      @cancel="cancelFineTurningModal"
      @ok="cancelFineTurningModal"
    >
      <template #footer>
        <a-button key="back" @click="cancelFineTurningModal">取消</a-button>
        <a-button key="submit" type="primary" @click="confirmFineTurningModal">确定</a-button>
      </template>
      <div class="p-5">
        <a-form style="width: 100%" ref="myFormOfFineTurningModalRef" :model="modelFineTuningForm" @keydown.enter.prevent="">
          <a-form-item label="数据集路径" :labelCol="{ span: 5 }" name="datasetPath" :rules="[{ required: true, message: '请选择数据集路径' }]">
            <a-select
              ref="select"
              v-model:value="modelFineTuningForm.datasetPath"
              placeholder="请选择数据集路径"
              style="width: 100%"
              :options="dataSetList"
              @change="changeDatasetPath"
            ></a-select>
            <!-- <a-input v-model:value="modelFineTuningForm.datasetPath" placeholder="请输入文件名称" style="width: 100%" /> -->
          </a-form-item>

          <a-form-item label="模型版本" :labelCol="{ span: 5 }" name="tag" :rules="[{ required: true, message: '请选择模型版本' }]">
            <a-select
              ref="versionRef"
              v-model:value="modelFineTuningForm.version"
              style="width: 100%"
              :options="versionList"
              @change="changeLabelVersionList"
              placeholder="请选择模型版本"
            ></a-select>
            <!-- <a-input v-model:value="modelFineTuningForm.datasetPath" placeholder="请输入文件名称" style="width: 100%" /> -->
          </a-form-item>
          <a-form-item
            :labelCol="{ span: 5 }"
            class="custom-label required-custom-label w-full"
            :rules="[{ required: true, message: '请选择分区!' }]"
            label="分区："
            name="partition"
          >
            <div class="input-item">
              <a-select
                v-model:value="modelFineTuningForm.partition"
                mode="combobox"
                @change="changePartition"
                style="width: 100%"
                placeholder="请选择分区"
              >
                <template v-for="item in partitions" :key="`${item}`">
                  <a-select-option :value="item">{{ item }}</a-select-option>
                </template>
              </a-select>
            </div>
          </a-form-item>
          <a-form-item
            :labelCol="{ span: 5 }"
            class="custom-label required-custom-label w-full"
            label="CPU："
            name="cpu"
            :rules="[
              { required: true, message: '请输入CPU!' },
              {
                validator: validatorCpu,
              },
            ]"
          >
            <div class="flex items-center w-full">
              <a-input-number
                style="width: 100%"
                type="number"
                :controls="false"
                :placeholder="`请输入cpu,不能超过 ${cpu.cpuMax}`"
                v-model:value="modelFineTuningForm.cpu"
                addon-after="核"
              />
              <a-tooltip placement="top">
                <template #title>
                  <div class="user-name-tips">
                    <div>{{ `CPU核数不能小于${cpu.cpuMin}且不能大于${cpu.cpuMax}核!` }}</div>
                  </div>
                </template>
                <Icon icon="mdi:question-mark-circle-outline" :size="20" class="more-fill info-drawer-icon" />
              </a-tooltip>
            </div>
            <!-- <a-input class="title_cpu"  v-model:value:value="formSate.cpu" addon-after="核" :placeholder="`请输入cpu,不能超过 ${cpuMax}`" /> -->
          </a-form-item>
          <a-form-item
            :labelCol="{ span: 5 }"
            label="内存："
            name="memory"
            :rules="[
              { required: true, message: '请输入内存!' },
              {
                validator: validatorMemory,
              },
            ]"
          >
            <div class="flex items-center">
              <a-input
                v-model:value="modelFineTuningForm.memory"
                :placeholder="`请输入内存,不能超过 ${memory.memoryMax} ${memory.memoryMaxUnit}`"
                addon-after="GiB"
              >
                <!-- <template #addonAfter>
                <a-select v-model:value="modelFineTuningForm.memoryUnit" style="width: 100px">
                  <a-select-option value="GiB">GiB</a-select-option>
                  <a-select-option value="TiB">TiB</a-select-option>
                </a-select>
              </template> -->
              </a-input>
              <a-tooltip placement="top">
                <template #title>
                  <div>
                    <div>
                      {{ `内存不能大于${memory.memoryMax} ${memory.memoryMaxUnit}!` }}
                    </div>
                  </div>
                </template>
                <Icon icon="mdi:question-mark-circle-outline" :size="20" class="more-fill info-drawer-icon1" />
              </a-tooltip>
            </div>
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref, watch } from 'vue';
  import { cloneDeep } from 'lodash-es';
  import StorageByteUtil from '/@/views/hpc/common/storageByteUtil';
  import type { SelectProps } from 'ant-design-vue';

  const props = defineProps({
    visible: {
      type: Boolean,
      default: false,
    },
    modelInfo: {
      type: Object,
      default: () => ({}),
    },
  });

  const emit = defineEmits(['update:visible']);

  console.log('yuyuTODO', props.modelInfo);

  const myFormOfFineTurningModalRef = ref();

  const modelFineTuningForm = ref({
    datasetPath: '',
    partition: '',
    cpu: 1,
    memory: 2,
    version: 'v1.13.1',
    fileType: '',
    owner: '',
    datasetId: '',
    name: 'hpc-label-studio',
    tag: 'v1.13.1',
    memoryUnit: 'GiB',
  });

  const dataSetList = ref<SelectProps['options']>([]);
  const versionList = ref<SelectProps['options']>([]);
  const partitions = ref([]) as any;
  const resourceList = ref();
  const memory = ref({
    // memoryUnit: 'Gi',
    memoryMax: 1,
    memoryMaxUnit: 'TiB',
    sharedMemoryUnit: 'GiB',
  });
  const cpu = ref({
    cpuMin: 1,
    cpuMax: 1,
  });

  const getDatasetList = async () => {
    let params = {};
    // await datasetList(params).then((res) => {
    //   let arr = [];
    //   if (res && res.length > 0) {
    //     arr = res.map((item) => {
    //       item.key = item.id;
    //       item.label = item.name;
    //       item.value = item.path;
    //       return item;
    //     });
    //   }
    //   dataSetList.value = arr.filter((item) => !isZip(item?.name));
    // });
  };
  getDatasetList();
  const changePartition = async (val) => {
    modelFineTuningForm.value.partition = partitions.value[0];
    // let data = await getCheckedPartitionResources({ partitions: val });
    // // let data = kubeResources.value?.partitions[val].available;
    // resourceList.value = data;
    // memory.value.memoryMaxUnit = data.memory.split(' ')[1] || 'GiB';
    // let memoryMax = data.memory.split(' ')[0] || 0;
    // memory.value.memoryMax = Math.round(memoryMax * 100) / 100;
    // cpu.value.cpuMax = data.cpu;
  };

  const changeDatasetPath = (val) => {
    // let obj = dataSetList.value.find((item) => item.path === val);
    //   fileName.value = '数据集标注';
    //   labelMarkModalForm.value.datasetPath = obj.path;
    //   labelMarkModalForm.value.owner = obj.owner;
    //   // labelMarkModalForm.value.name = obj.name;
    //   labelMarkModalForm.value.datasetId = obj.id;
  };
  const validatorCpu = (rule, value, callback) => {
    const regex = /^[1-9]\d*$/;
    if (value && value < 1) {
      callback(new Error('CPU的值必须大于等于1'));
      return;
    } else if (value && value > cpu.value.cpuMax) {
      if (cpu.value.cpuMax <= 0) {
        callback(new Error(`暂无可分配的CPU资源`));
      } else {
        callback(new Error(`CPU必须在${cpu.value.cpuMax}范围内`));
      }
      return;
    } else if (value && !regex.test(value)) {
      callback(new Error(`CPU必须是整数`));
      return;
    } else {
      callback();
    }
  };
  const validatorMemory = (rule, value, callback) => {
    // const regex = /^[1-9]\d*$/;
    const memoryValue = Number(StorageByteUtil.convertToGiB(value, String(modelFineTuningForm.value.memoryUnit)));
    const memoryMaxValue = Number(StorageByteUtil.convertToGiB(memory.value.memoryMax, memory.value.memoryMaxUnit));
    if (value && memoryValue < 0.5) {
      callback(new Error(`内存的值必须大于等于0.5 GiB`));
      return;
    } else if (value && memoryValue > memoryMaxValue) {
      if (memoryMaxValue <= 0) {
        callback(new Error(`暂无可分配的内存资源`));
      } else {
        callback(new Error(`内存必须在${memoryMaxValue} ${memory.value.memoryMaxUnit}范围内`));
      }
      return;
    } else {
      callback();
    }
  };

  const changeLabelVersionList = () => {};

  const cancelFineTurningModal = () => {
    myFormOfFineTurningModalRef.value.resetFields();
    emit('update:visible', false);
  };

  const confirmFineTurningModal = () => {
    myFormOfFineTurningModalRef.value.validate().then(async (res) => {
      let obj = cloneDeep(modelFineTuningForm.value) as any;
    });
  };
</script>

<style lang="less" scoped></style>
```

## 其他 jett

form 使用

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

## mock 请求

```
function returnPromise<T>(result: any, code = 200, timeout = 500): Promise<[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 模拟后端返回的数据
      const mockData = {
        code,
        message: 'Data fetched successfully!',
        result
      };
      resolve(mockData.result as []);
      // const error = { status: 'error', message: 'Failed to fetch data.' };
      // reject(error);
    }, timeout);
  })
}

// 列表项的数据
const mockListData = [
  { id: 1, name: 'num-layers', type: 'double', max: '64', min: '0.01', step: 1 },
  { id: 2, name: 'optimizer', type: 'integer', max: '64', min: '0.01', step: 1 },
];
// 列表请求
export function fetchMockData() {
  return returnPromise(mockListData);
}
```

## 页面基础

![1747635123599](images/learning/1747635123599.png)

```
<template>
  <div class="h-full box-border px-27px pt-16px pb-10px deviceManagement">
    <div class="deviceManagement-container w-full h-full box-border pt-19px px-28px"> 123 </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
  .deviceManagement {
    .deviceManagement-container {
      background: #ffffff;
      box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);
      border-radius: 5px 5px 5px 5px;
    }
  }
</style>

```

## 基础的Table 增删改查

## 





简单的流式图片操作

使用 column-count 进行列限制

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            background-color: #242223;
        }

        img {
            width: 100%;
            margin-bottom: 1em;
        }

        /* flexbox布局 */
        .layout-container {
            column-count: 3;
        }

        @media screen and (max-width: 600px) {
            .layout-container {
                column-count: 2;
            }
        }
    </style>
</head>

<body>
    <div class="layout-container">
        <div class="image-container" id="image-container">
            <img src="./assets/1.jpg">
            <img src="./assets/2.jpg">
            <img src="./assets/3.jpg">
            <img src="./assets/4.jpg">
            <img src="./assets/5.jpg">
            <img src="./assets/6.jpg">
            <img src="./assets/7.jpg">
            <img src="./assets/8.jpg">
            <img src="./assets/9.jpg">
            <img src="./assets/10.jpg">
        </div>
        <button onclick="loadMoreImages()">加载更多图片</button>
    </div>

    <script>
        function loadMoreImages() {
            const imageContainer = document.getElementById('image-container');
            const newImages = [11, 12, 13].map((i) => {
                const img = document.createElement('img');
                img.src = `./assets/${i}.jpg`;
                return img;
            });
            newImages.forEach((img) => {
                imageContainer.appendChild(img);
            });
        }
    </script>
</body>

</html>

```
