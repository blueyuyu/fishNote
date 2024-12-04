## next注意事项

学习的注意事项：

能看英文版本就别看中文版本！！！！中文版本一般很老，很旧！！！

[next学习教程](https://nextjs.org/learn/dashboard-app/adding-search-and-pagination)

### Button

```tsx
<Button
  type="submit"
  className='w-full'
  {...(isName && isEmail && isPassword && { onClick: () => onGenerate0TP(getValues('email'), getValues('password'), setCurrentStep) })}
>
  Continue
</Button>
```

{...(isName && isEmail && isPassword && { onClick: () => onGenerate0TP(getValues('email'), getValues('password'), setCurrentStep) })}:

这是一个条件表达式，它使用逻辑与运算符 && 来检查 isName, isEmail, 和 isPassword 是否都为 true。
如果所有这些条件都为 true，则会生成一个包含 onClick 属性的对象 { onClick: () => onGenerate0TP(getValues('email'), getValues('password'), setCurrentStep) }。
然后，这个对象会被展开（通过 ... 语法）并作为属性传递给button组件。

### 页面路由

页面组件可以具有任何名称，但您必须将其导出为默认导出。其组件地址为路由地址；

```
export default function FirstPost() {
  return <h1>First Post</h1>
}
```

### 页面之间的导航

#### link

`<Link>` 允许您对应用程序中的其他页面进行客户端导航。

```
import Link from 'next/link'
```

use:

```
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
 
// ...
 
export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
}
```



#### 获取用户路径url

由于 [`usePathname（）`](https://nextjs.org/docs/app/api-reference/functions/use-pathname) 是一个钩子，你需要将 `nav-links.tsx` 转换为客户端组件

```
'use client';
 
import {
  UserGroupIcon,
  HomeIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
 
// ...
 
export default function NavLinks() {
  const pathname = usePathname();
 
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
```



### Assets资源

Next.js 可以在**顶级 public 目录**下提供静态文件，如图像。`public` 中的文件可以从应用程序的根目录引用，类似于 [`pages`]。

```
<img src="/vercel.svg" alt="Vercel Logo" className="logo" />
```

徽标图像位于应用程序顶层的 `public` 目录中。

以及任何同类型其他静态资源。



### 数据

#### 数据库链接

#### React Server Components

服务器组件支持 Promise，为异步任务（如数据获取）提供更简单的解决方案。你可以使用 `async/await` 语法，而无需访问 `useEffect、useState` 或数据``获取库。

服务器组件在服务器上执行，因此您可以将昂贵的数据获取和逻辑保留在服务器上，并且仅将结果发送到客户端。

 Server Components 在服务器上执行，因此您可以直接查询数据库，而无需额外的 API 层。

#### 并行请求

使用Promise.all()   

避免瀑布流的常见方法是同时启动所有数据请求 - 并行。

同时开始执行所有数据提取，这可能会导致性能提升。

```
    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);
```

问题：但是，仅依赖这种 JavaScript 模式有一个**缺点**：如果一个数据请求比所有其他数据请求慢，会发生什么情况？

#### 使用stream流改善请求

流式处理是一种数据传输技术，它允许您将路由分解为更小的 “块”，并在它们准备就绪时逐步将它们从服务器流式传输到客户端。

在 Next.js 中，有两种方法可以实现流式处理：

1. At the page level, with the `loading.tsx` file.
   在页面级别，使用 `loading.tsx` 文件。
2. For specific components, with `<Suspense>`.
   对于特定组件，使用 `<Suspense>`.

##### loading

`loading.tsx` 是一个建立在 Suspense 之上的特殊 Next.js 文件，它允许您创建回退 UI，以便在页面内容加载时显示为替换。

用户不必等待页面完成加载即可离开（这称为可中断导航）。

/app/dashboard/loading.tsx

```
export default function Loading() {
  return <div>Loading...</div>;
}
```

##### 加载骨架屏

/app/dashboard/loading.tsx

```
import DashboardSkeleton from '@/app/ui/skeletons';
 
export default function Loading() {
  return <DashboardSkeleton />;
}
```

##### Suspense

流式处理组件；

Suspense 允许你推迟渲染应用程序的某些部分，直到满足某些条件（例如，加载数据）。您可以将动态组件包装在 Suspense 中。然后，向其传递一个 fallback 组件，以便在动态组件加载时显示。

刷新页面，您应该会看到所有卡同时加载。当您希望同时加载多个组件时，可以使用此模式。

父组件(/app/dashboard/page.tsx)

```
import CardWrapper from '@/app/ui/dashboard/cards';
// ...
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';
 
export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      // ...
    </main>
  );
}
```

子组件(/app/ui/dashboard/cards.tsx)

```
// ...
import { fetchCardData } from '@/app/lib/data';
 
// ...
 
export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
 
  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}
```



learn to https://nextjs.org/learn/dashboard-app/adding-search-and-pagination

#### PPR





### Metadata 元数据

想要设置页面的header

```
import Head from 'next/head';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      …
    </>
  )
}
```













### css样式

要使用 [CSS 模块](https://www.nextjs.cn/docs/basic-features/built-in-css-support#adding-component-level-css)，CSS 文件名必须以 `.module.css` 结尾。

#### Global Styles 全局样式

全局样式。全局样式必须写在固定位置，在固定位置引用，不然会报错。

- 如果是app app/globals.css 为全局样式。在layout组件内引入即可。


- 在 Next.js 中，您可以通过从 [`pages/_app.js`](https://www.nextjs.cn/docs/advanced-features/custom-app) 导入[全局 CSS](https://www.nextjs.cn/docs/basic-features/built-in-css-support#adding-a-global-stylesheet) 文件来添加它们。**您不能**在其他任何位置导入全局 CSS。

#### 样式设置组合

一般是使用 `classnames` 库切换类，自定义 PostCSS 配置，tailwind 结合进行样式书写。



### 字体与图像优化

推荐阅读：https://nextjs.org/learn/dashboard-app/optimizing-fonts-images





### 数据渲染







### TS开发注意

我们手动声明数据类型，但为了更好的类型安全性，我们建议使用 [Prisma](https://www.prisma.io/) 或 [Drizzle](https://orm.drizzle.team/)，它们会根据您的数据库架构自动生成类型。



