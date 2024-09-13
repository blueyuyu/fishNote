### 以 tag 标签为例子
uv-tag 作者，在组件封装的思路上和我有不同；

### 组件样式的命名规范问题
- **文件夹命名**

建议使用 kebab-case 命名方式,如 **components/student-dashboard-settings.vue**。这样看起来更清晰。

- **组件命名**

自定义组件名必须是多个单词组合的完整单词,不能使用缩写。如 student-dashboard-settings.vue。
单文件组件的文件名应该全部使用 kebab-case 格式,如 student-dashboard-settings.vue。这样更方便记忆和使用。
应用特定样式和约定的基础组件(展示类、无逻辑或无状态组件)应该以 Base、App 或 V 等前缀开头,并全局注册。如 BaseButton.vue。
组件名中的单词顺序应该以高级别的通用描述开头,以描述性的修饰词结尾。如 SearchButtonClear.vue。
在 JavaScript 中注册组件时,使用 PascalCase 格式。
在 HTML 模板中使用组件时,统一使用 kebab-case 格式,无论是单标签还是双标签。

- **Prop 命名**

模板模板中传入 prop 到子组件时,使用 kebab-case 格式。
在子组件中接收 prop 时,使用 camelCase 格式。

- **事件命名**

所有事件名使用 kebab-case 格式,并以动词结尾。如 dom-resize、api-load。



css样式命名