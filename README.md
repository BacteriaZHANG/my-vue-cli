# 文档规范

## 使用命令

```bash
# 安装 node_modules
npm install

# 初始化项目请首先运行该命令
npm run dll

# 开发用命令
npm run dev

# 生产环境打包命令
npm run build

# 构建生产包同时查看日志报告
npm run build --report
```

## 开发

###一、 组件使用

##### 1、命名（必要）

不允许有单个单词的组件命名出现，单词之间使用中划线。组件文件名同样。

```javascript
// my-component.vue 文件
export default {
  name: 'my-component',
  // ...
}
```

##### 2、引入（必要）

组件引入名务必使用 PascalCase 格式（也叫大驼峰格式——每个单词首字母大写）

```javascript
import MyComponent from './my-component.vue'
```

在 DOM 模板中使用中划线（必要）

```html
<my-component></my-component>
```

##### 3、base 基础组件

一个输入框或按钮之类的元素，相对通用。会在各个组件中被频繁的用到。

1、定义：

- 放在 base 目录下，必须以 Base 开头，且所有单词首字母大写，否则无法生效

```javascript
base/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue
```

2、使用：（注：不需要 import 导入和注册）

```vue
<template>
    <div>
      <!-- 直接使用即可 -->
      <base-button></base-button>
    </div>
</template>

<script type="text/ecmascript-6">
 // 不需要 import 导入和注册
</script>

<style scoped lang="scss">
</style>

```

##### 4、单例组件命名

单例组件非只使用一次的组件，而是不需要通过 props 传值的组件，
命名必须以 The 开头的 PascalCase 格式。（The 单词有唯一的意思）

```javascript
components/
|- TheHeading.vue
|- TheSidebar.vue
```

##### 5、只要父组件存在复用性很低的子组件，禁止建立子文件夹。而采用以父组件的名字作为前缀的父子组件同级结构。

``` javascript
components/
|- TodoList.vue // 父组件
|- TodoListItem.vue // 子组件
|- TodoListItemButton.vue // 子组件
```

##### 6、组件名中的单词顺序

组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。

```javascript
例：SearchButtonClear.vue // 一个有清空功能的搜索按钮

    Search           Button   Clear.vue
      |                |       |
    搜索              按钮    清空
      |                |       |
直接描述性形容词       主体    功能
```

```javascript
好例子：
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputExcludeGlob.vue
|- SearchInputQuery.vue
|- SettingsCheckboxLaunchOnStartup.vue
|- SettingsCheckboxTerms.vue
```

```javascript
反例：
components/
|- ClearSearchButton.vue
|- ExcludeFromSearchInput.vue
|- LaunchOnStartupCheckbox.vue
|- RunSearchButton.vue
|- SearchInput.vue
|- TermsCheckbox.vue
```

### 二、 prop 使用

##### 1、命名规范
在声明 prop 的时候，其命名应该始终使用 camelCase（小驼峰格式），而在模板和 JSX 中应该始终使用 kebab-case（烤串模式——单词小写，中划线分隔）。

```javascript
props: {
  greetingText: String
       |
   小驼峰格式
}
```
```html
<WelcomeMessage greeting-text="hi"/>
                        |
               DOM 中使用中划线格式
```

##### 2、多个特性的元素

多个特性的元素应该分多行撰写，每个特性一行。结构清晰，易于查看。建议有绑定属性的元素均采纳。

```html
<img
  src="https://vuejs.org/images/logo.png"
  alt="Vue Logo"
>
```

```html
<MyComponent
  foo="a"
  bar="b"
  baz="c"
></MyComponent>
```

##### 3、prop 定义

prop 的定义应该尽量详细，至少需要指定其类型。

```javascript
好例子：
props: {
  status: {
    type: String, // 定义类型
    default: '', // 默认值
    required: true, // 是否必传
    validator: function (value) { // 校验
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```

### 三、 根路经引用

template 中图片引用根路径使用 ~images 即可。

```html
<img src="~images/logo.png" alt="">
```

style 中 scss 文件的引用根路径使用 ~@ 即可

```scss
// scss 引用
@import '~@/common/sass/px2rem';

// 图片引用
div {
  background: url(~@/common/images/***.jpg) center no-repeat;
}
```

### 四、px 单位

所有 scss 编写使用 px 单位时，会自动转化为 rem

```scss
// 编译前
div { border: 1px solid red; padding: 0 26px;}

// 编译后
div { border: 1px solid red; padding: 0 0.856278rem;}
```

### 五、v-for

v-for 务必使用 key 绑定属性，不要使用 index 索引去赋值，而采用一个特有的字符串来区分（如下方的 user.name ）

```html
<ul>
  <li
    v-for="(user,index) in activeUsers"
    :key="user.name"
  >
    {{ user.name }}
  </li>
</ul>
```

### 六、vuex规范

1、 禁止修改 store 中的 index.js 文件

2、 所有状态只能在 state.js 中定义

```javascript
// 例：
const state = {
    someState: '张焱鑫',
    otherState: '李杰',
    // 等等...
}
```

3、 所有状态的输出只能在 getter.js 中定义

```javascript
// 例：
export const someState = state => state.someState;
export const otherState = state => state.otherState;
// 等等...
```

4、 关于改变状态的 mutations:

首先在 mutation-types.js 里定义要提交的 mutation 名称（注：单词全部用大写，下划线连接）

```javascript
// 例：
export const SOME_MUTATIONS = 'SOME_MUTATIONS'
export const OTHER_MUTATIONS = 'OTHER_MUTATIONS'
// 等等...
```

- mutations.js 的定义

统一使用 es6 的计算属性在对象内定义函数

```text
注意下方 [types.SOME_MUTATIONS] 计算属性的应用,统一从 mutation-types.js 中 types 获得
！！！禁止在此文件 mutations 中私自定义属性
```

```javascript
// 例：
import * as types from './mutation-types'

const mutations = {
  // 注意，只能通过 types 获得，禁止私自定义
  [types.SOME_MUTATIONS](state, val) {
    state.someState = val
  }
}
```

- 在组件中提交 mutations，统一使用 mapMutations

```javascript
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}
```

5、 用于操作需要异步提交的 mutations 的 actions 的使用

mutations 只能通过 types 引用

```javascript
// 例：
import * as types from './mutation-types'

export const increment = function({commit, state}, {val, list}) {
    commit(types.SOME_MUTATIONS, val)
    commit(types.OTHER_MUTATIONS, list)
}

export const incrementBy = function({commit, state}, {val, list}) {
    commit(...) // 一个异步 mutation
    commit(...) // 另一个异步 mutation
}
// 等等其他 actons
```

- 组件中分发异步 actions 的一般用法，统一使用 mapActions

```javascript
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
}
```

### 七、数据请求

使用全局 axios 来请求数据，禁止在 vue 文件中通过 import 引入

```javascript
// 例
this.$axios.get(...).then(...).catch(...)
this.$axios.post(...).then(...).catch(...)
```

### 八、图片存放路径

- 需要动态替换的图片统一放在根目录下的 static/images 下，动态替换即需要通过接口请求或js修改等后期维护的图片

- 不需要动态替换的小图标统一放在 src/common/images 下
