# ts举例学习

资料来源： [vant组件库](https://gitee.com/vant-contrib/vant/tree/main/packages/vant/src/picker)

[ts 常用内置工具类]: https://segmentfault.com/a/1190000041910773#item-9



## 函数1

```
export type Writeable<T> = { -readonly [P in keyof T]: T[P]};
// pick 挑选对象内，指定键数组[] , 生成新数组并且返回
// const obj = {a: 1, b:2, c:3}   const keys = [a,c] 
export function pick<T, U extends keyof T>(
  obj: T,
  keys: ReadonlyArray<U>,
  ignoreUndefined?: boolean,
) {
  return keys.reduce(
    (ret, key) => {
      if (!ignoreUndefined || obj[key] !== undefined) {
        ret[key] = obj[key];
      }
      return ret;
    },
    {} as Writeable<Pick<T, U>>,
  );
}
```



+ 解释：

在这TypeScript函数中，`U extends keyof T` 意味着类型 `U` 是 `T` 类型的某个键的子集。换句话说，`U` 只能是 `T` 类型中定义的属性名。这种约束保证了传入的 `keys` 数组中的每一个元素都是 `obj` 对象中可以合法访问的属性。这有助于确保类型安全，避免在访问不存在的键时引发错误。

接下来看 `{} as Writeable<Pick<T, U>>`。这里的 `Pick<T, U>` 是一个条件类型，用于从 `T` 类型中选择出一组属性，这些属性的键是 `U` 中定义的；换句话说，它会构建一个新类型，仅包含 `T` 中由 `U` 指定的属性。

`Writeable<Pick<T, U>>` 是一个进一步的类型，它假定 `Pick<T, U>` 可能是只读的，比如通过 `readonly` 修饰符来实现的。`Writeable` 是一种工具类型，它会将被选出的属性变为可写的，也就是说允许你对这些属性进行赋值。

因此，`{} as Writeable<Pick<T, U>>` 的意义是：初始化一个空对象，并将其类型断言为一个可写的对象，该对象包含了 `T` 中的部分属性，这些属性是从 `U` 中选取的。这使得返回的对象能够正确反映出所需的属性及其可写性。

###  {} as Writeable<Pick<T, U>>

 `Writeable<Pick<T, U>>` 是 TypeScript 中的一种类型构造写法。我们可以逐步解释这个表达式的含义：

1. **`Pick<T, U>`**: `Pick` 是 TypeScript 的一个内置类型工具，用于从类型 `T` 中选取一组属性 `U`。`U` 通常是一个字符串字面量的联合类型，它定义了想要从 `T` 中选择的属性名。最终，`Pick<T, U>` 的结果是一个新的类型，只包含 `T` 中选定的属性。

2. **`Writeable<X>`**: `Writeable` 是自定义或定义好的类型（这通常是为使某些属性可写而设计），它的作用是将类型 `X` 中的只读属性转变为可写属性。比如，如果某个属性是用 `readonly` 修饰的，`Writeable` 可以移除这个修饰，使得属性可以被修改。

结合在一起，`Writeable<Pick<T, U>>` 表示先从类型 `T` 中挑选出属性 `U`，然后将这些挑选出来的属性的只读特性转换为可写特性。这种写法通常用于想要对特定属性进行修改、更新或输入的情况，确保这些属性可以被修改。

### Writeable<T>

```
export type Writeable<T> = { -readonly [P in keyof T]: T[P] };
```

把只读改为可写，很有用。

这段 TypeScript 代码定义了一个类型别名 `Writeable<T>`，它的目的是将给定类型 `T` 中的所有属性从只读（readonly）变为可写（writable）。下面是对这段代码的逐步解释：

1. **类型别名**：使用 `export type` 关键字定义一个类型别名，使其可以在其他模块中导入和使用。

2. **泛型 `<T>`**：`Writeable<T>` 是一个泛型类型，`<T>` 代表任何类型。当你使用这个类型时，可以传入具体的类型，比如接口或对象类型。

3. **映射类型**：使用 `{ [P in keyof T]: T[P] }` 创建一个新的类型。这里的 `keyof T` 获取类型 `T` 的所有属性名的联合类型。`P` 表示 `T` 中的每一个属性名。

4. **只读属性的去修饰**：`-readonly` 是 TypeScript 中的一种语法，用于去掉属性的只读修饰符。当你在映射类型中使用 `-readonly` 时，它会把所有只读属性变为可写。例如，如果属性是 `readonly name: string`，在 `Writeable` 之后就会变成 `name: string`。

综上所述，这段代码的作用是定义一个新类型 `Writeable<T>`，其所有属性均为可写。这在需要将只读对象转换为可修改对象时非常有用。

### U extends keyof T

限定u里的key类型就是T里的键。

`U extends keyof T` 中，`keyof T` 用于确保 `U` 的值仅限于 `T` 中存在的属性键。这样，`U` 可以被视为一种对类型安全性的约束，确保你只能选择在 `T` 中真正存在的属性作为 `U`。







## 组件1

```

```



## 类型1

```
export type RequiredParams<T> = T extends (...args: infer P) => infer R
  ? (...args: { [K in keyof P]-?: NonNullable<P[K]> }) => R
  : never;
```

这段 TypeScript 代码定义了一个类型别名 `RequiredParams<T>`，其主要作用是将一个函数类型的参数中所有的可选参数转换为必需参数。下面我们逐步解析这段代码。

**逐步解析**

1. **类型别名**：`export type RequiredParams<T>` 定义了一个类型别名 `RequiredParams`，允许在其他模块中导入和使用。

2. **泛型参数 `T`**：这个类型别名是泛型的，`T` 可以代表任何类型。在这个上下文中，它通常期望是一个函数类型。

3. **条件类型**：`T extends (...args: infer P) => infer R` 是一个条件类型，检查 `T` 是否为一个函数类型。
   - `(...args: infer P)`：通过 `infer P` 推导出函数参数 `args` 的类型，并将它存储在类型变量 `P` 中。
   - `=> infer R`：推导出函数的返回值类型，并将其存储在类型变量 `R` 中。

4. **映射类型**：
   - 如果条件为真（即 `T` 是一个函数类型），则类型为：
     ```typescript
     (...args: { [K in keyof P]-?: NonNullable<P[K]> }) => R
     ```
     - `{ [K in keyof P]-?: NonNullable<P[K]> }` 是一个映射类型，表示对 `P` 中的每一个参数类型进行变换：
       - `keyof P` 获取参数的所有键（即参数的类型）。
       - `-?` 操作符去掉了可选属性的修饰符，确保所有参数都是必需的。
       - `NonNullable<P[K]>` 是一个条件类型，用于确保参数类型不为 `null` 或 `undefined`，将这些类型转化为非空类型。

5. **返回类型**：这个映射类型所创建的新参数类型会被用在新的函数定义上，最终返回一个新的函数类型，其参数为必需的非空参数，返回值类型仍然为 `R`。

6. **条件不满足时**：如果 `T` 不是一个函数类型，则返回 `never`，这种情况下 `RequiredParams<T>` 的结果为无效类型。

总结

综上所述，`RequiredParams<T>` 的作用是将一个函数类型的所有可选参数转换为必需参数，并确保参数不为 `null` 或 `undefined`。这样做可以在需要严格参数验证时提高函数使用的类型安全性。



## 类型2  交叉类型

```
export type PickerChangeEventParams = PickerConfirmEventParams & {
  columnIndex: number;
};
```

`&` 符号用于创建交叉类型（intersection type）。交叉类型允许将多个类型合并为一个新类型，这个新类型将同时包含所有参与合并的类型的属性。



## 类型3 定义函数类型写法

```
export type PickerExpose = {
  confirm: () => void;
  getSelectedOptions: () => Array<PickerOption | undefined>;
  setValue: (value: string) => void;
  setOptions: (options: PickerOption[]) => void;
  stopMomentum: () => void;
};
```


## 类型4 内置工具类omit

```
interface UserObj {
    readonly name: string; // readonly 只读属性 只能初始化定义 不能二次赋值
    age: number;
    id: number;
    sex: 0 | 1;
    address: string;
    weight: number;
}

// 剔除省略自己不需要的
type Person = Omit<UserObj, "age" | "sex"  | "address" | "weight">;

// 此时Person 等同于 Person1

interface Person1 {
    readonly name: string;
    id: number;
}


```

源码

```
// Omit 的源码
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```



## 类型4 内置工具类Picker

```
interface UserObj {
    readonly name: string;
    age: number;
    id: number;
    sex: 0 | 1;
    address: string;
    weight: number;
 }
 
 // 采集需要的
 type Person = Pick<UserObj, "name" | "id">;
 
 // 此时Person 等同于 Person1
 interface Person1 {
     readonly name: string;
     id: number;
}
```

源码

```
// Pick 的源码
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```



## 类型5 Partial（全部转化为**可选项**） 

```
// 已有定义类型Person
interface Person {
    name: string;
    age: number;
    id: number;
    sex: 0 | 1;
    address: string;
    weight: number;
}

// 使用方法
const newObj: Partial<Person> = {
    name: '张三' // 假如只需要一项 Partial的便捷性 可以不需要从新定义类型
};

// Partial<Person>等同于 NewPerson
interface NewPerson {
    name?: string;
    age?: number;
    id?: number;
    sex?: 0 | 1;
    address?: string;
    weight?: number;
}

```

源码

```
type Partial<T> = {
    [P in keyof T]?: T[P];
};
```

## 类型6 Required（全部必须） 

```
// 已有定义类型Person
interface Person {
    name: string;
    age: number;
    id?: number;
    sex?: 0 | 1;
}

// 使用方法
const newObj: Required<Person> = {
    name: '张三',
    age: 1,
    id: 1,
    sex: 1
};

// Required<Person>等同于 NewPerson
interface NewPerson {
    name: string;
    age: number;
    id: number;
    sex: 0 | 1;
}

```

源码

```
type Required<T> {
    [P in keyof T]-?: T[P];
}
```


## 类型7 Readonly (转化只读) 

```
interface Person {
    readonly name: string; // 只有这一项有readonly
    age: number;
    id?: number;
}

// 使用方法
const newObj: Readonly<Person> = {
    name: '张三',
    age: 1,
    id: 1
};
// newObj.name = '李四'; // 异常 因为有readonly只读属性，只能初始化声明，不能赋值。

// Readonly<Person> 等同于 NewPerson
interface NewPerson {
    readonly name: string;
    readonly age: number;
    readonly id?: number;
}

```

源码

```
/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
```

## 类型8 Extract (提取/包括)

```
// 处理联合类型
type Test1 = '1' | '2' | '3'
const obj: Extract<Test1, '1' | '2'> = '1'; // 1,2 OK 赋值3就会error
```

源码

```
// Extract实现源码 原理很简单
type Extract<T, U> = T extends U ? T : never;
```

## 类型9 Exclude (排除/不包括) 

```
// 处理联合类型
type Test1 = '1' | '2' | '3'

const obj: Exclude<Test1, '1' | '2'> = '3'; // 3 OK 赋值1,2就会error
```

源码

```
// Exclude源码
type Exclude<T, U> = T extends U ? never : T;
```

## ??类型10 ReturnType(函数的类型推导返回)

```
// 正确用法
const myFun = () => ({
    name: 'zhangsan',
    age: 233,
    sex: '1',
    tel: 123456789,
    fun: () => {
        return 233;
    },
    arr: [1,2,3,4,5,6]
});
type Test2 = ReturnType<typeof myFun>; // OK 鼠标放到Test2上可以发现 已推导出了myFun函数的返回类型。

// 错误用法
const someValue = 42;  
type InvalidReturnType = ReturnType<typeof someValue>; // error错误！someValue 不是一个函数。
```

源码

```
// ReturnType源码
/**
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```
## 类型11 NonNullable (类型中排除 `null` 和 `undefined`)

```
type MaybeString = string | null | undefined;  
  
const value: MaybeString = getSomeStringValue(); // 假设这个函数可能返回一个字符串、null 或 undefined  
  
// 使用 NonNullable 确保 value 不会是 null 或 undefined  
const nonNullableValue: NonNullable<MaybeString> = value!; // 使用 ! 断言操作符，或者通过其他方式确保值不为 null 或 undefined  
  
// 现在，nonNullableValue 的类型是 string，因为我们已经排除了 null 和 undefined  
console.log(nonNullableValue.length); // 这是安全的，因为我们知道 nonNullableValue 一定是字符串

// 其实就是某些场景绝对为了排除null,undefined的类型才用的
```

源码

```
// 源码
/**
 * Exclude null and undefined from T
 */
type NonNullable<T> = T & {}; // 源码的这一句写的很有意思，泛型参数T和{}的交集就默认排除了`null` 和 `undefined`
```











## vue项目中的ts

### ui组件类型1

```
import type { VNode } from "vue";
import type { TableColumnCtx } from "element-plus";

type RH = {
    column: TableColumnCtx<any>;
    $index: number;
};

export type TableColumn = {
index?: number | ((index: number) => number);
renderHeader?: (data: RH) => VNode | string;
filters?: Array<{
    text: string;
    value: string;
}>;
}
```



- **Array<{ text: string; value: string; }>**:
  - `filters` 是一个数组，数组中的每个元素都是一个对象。
  - 每个对象有两个属性：
    - `text`：过滤项的显示文本，即用户在界面上看到的选项文本。
    - `value`：过滤项的值，这是实际传递给过滤方法的值。



### interface extends

```
export interface TableColumns extends TableColumn {
    /** 是否隐藏 */
    hide?: boolean | CallableFunction;
    /** 自定义列的内容插槽 */
    slot?: string;
    /** 自定义表头的内容插槽 */
    headerSlot?: string;
    /** 多级表头，内部实现原理：嵌套 `el-table-column` */
    children?: Array<TableColumns>;
    /** 自定义单元格渲染器（`jsx`语法） */
    cellRenderer?: (data: TableColumnRenderer) => VNode | string;
    /** 自定义头部渲染器（`jsx`语法） */
    headerRenderer?: (data: TableColumnRenderer) => VNode | string;
}


interface TableColumnList extends Array<TableColumns> {}
```

`type` 来定义类型别名，而用 `interface` 来定义对象结构。

合并能力：
interface 支持声明合并（Declaration Merging）。这意味着如果你有多个同名的接口，TypeScript 会将它们合并成一个接口。
type 则不支持声明合并。每个 type 定义都是独立的，如果尝试重新定义同一个 type，会导致编译错误。

**如果你需要在不同的地方逐步构建一个复杂的类型，并且希望这些部分能够自动合并，那么 interface 是更好的选择。**
**例如，在大型项目中，不同模块可能需要扩展同一个接口，使用 interface 可以方便地实现这一点。**

```
// 第一个文件或模块中
type User = {
  name: string;
};

// 另一个文件或模块中
type User = {
  age: number;
};

// 这会导致编译错误
// Duplicate identifier 'User'.
```



```
// 第一个文件或模块中
interface User {
  name: string;
}

// 另一个文件或模块中
interface User {
  age: number;
}

// 合并后的 User 接口
const user: User = {
  name: 'Alice',
  age: 30
};
```



### Declaration File

