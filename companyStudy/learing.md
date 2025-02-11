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

# 修改ant-form 表单元素的属性的背景样式

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

## 使用ant 创建弹框组件，有校验

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

## mock请求

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
