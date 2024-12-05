## next注意事项

学习的注意事项：

能看英文版本就别看中文版本！！！！中文版本一般很老，很旧！！！

[next学习教程](https://nextjs.org/learn)

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

###  ❗ ❗搜索分页

[搜索分页](https://nextjs.org/learn/dashboard-app/adding-search-and-pagination)

Capture the user's input.

##### 捕获用户的输入

```
'use client';
 
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
 
export default function Search({ placeholder }: { placeholder: string }) {
  function handleSearch(term: string) {
    console.log(term);
  }
 
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
```

##### 使用参数更新url

  const searchParams = useSearchParams();

在 `handleSearch 中，`使用新的 `searchParams` 变量创建新的 [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams) 实例。

```
'use client';
 
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams } from 'next/navigation';
 
export default function Search() {
  const searchParams = useSearchParams();
 
   function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
  }
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
  // ...
}
```

Next.js 的 `useRouter` 和 `usePathname` 钩子来更新 URL.

当用户在搜索栏中键入内容时，`params.toString（）` 会将此输入转换为 URL 友好的格式。

`replace(${pathname}?${params.toString()})` 使用用户的搜索数据更新 URL。例如，如果用户搜索“Lee”，`则为 /dashboard/invoices？query=lee`。

```
'use client';
 
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
 
export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
 
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }
}
```

##### 保持url同步输入

要确保 input 字段与 URL 同步并在共享时填充，您可以通过从 searchParams 读取来将 defaultValue 传递给 input

```
<input
  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
  placeholder={placeholder}
  onChange={(e) => {
    handleSearch(e.target.value);
  }}
  defaultValue={searchParams.get('query')?.toString()}
/>
```

##### 更新 table 组件

页面组件[接受名为 `searchParams` 的 prop](https://nextjs.org/docs/app/api-reference/file-conventions/page)，因此您可以将当前 URL 参数传递给 `<Table>` 组件。

/app/dashboard/invoices/page.tsx:

```
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
 
export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
 
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}
```

如果导航到 `<Table>` 组件，您将看到 `query` 和 `currentPage` 这两个 props 被传递给 `fetchFilteredInvoices（）` 函数，该函数返回与查询匹配的发票。

/app/ui/invoices/table.tsx

```
// ...
export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);
  // ...
}
```

注意：

`<Search>` 是一个客户端组件，因此您使用了 `useSearchParams（）` 钩子从客户端访问参数。

`<Table>` 是一个服务器组件，它获取自己的数据，因此您可以将 `searchParams` 属性从页面传递给组件。

为一般规则，如果你想从客户端读取参数，请使用 `useSearchParams（）` 钩子，因为这样可以避免返回服务器

##### 去除抖动

pnpm i use-debounce

```
// ...
import { useDebouncedCallback } from 'use-debounce';
 
// Inside the Search Component...
const handleSearch = useDebouncedCallback((term) => {
  console.log(`Searching... ${term}`);
 
  const params = new URLSearchParams(searchParams);
  if (term) {
    params.set('query', term);
  } else {
    params.delete('query');
  }
  replace(`${pathname}?${params.toString()}`);
}, 300);
```

添加分页

[分页](https://nextjs.org/learn/dashboard-app/adding-search-and-pagination#adding-the-search-functionality)

/app/dashboard/invoices/page.tsx

```
// ...
import { fetchInvoicesPages } from '@/app/lib/data';
 
export default async function Page(
  props: {
    searchParams?: Promise<{
      query?: string;
      page?: string;
    }>;
  }
) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);
 
  return (
    // ...
  );
}
```

`fetchInvoicesPages` 根据搜索查询返回总页数。例如，如果有 12 张发票与搜索查询匹配，并且每页显示 6 张发票，则总页数将为 2。

接下来，将 `totalPages` 属性传递给 `<Pagination/>` 组件：

/app/ui/invoices/pagination.tsx



### ❗ ❗更改数据

多看，多看，不是很理解

##### 类型校验

[数据更改](https://nextjs.org/learn/dashboard-app/mutating-data#creating-new-dates)

在将表单数据发送到数据库之前，您需要确保其格式正确且类型正确。

使用 zod 这是一个 TypeScript 优先的验证库。

在 `actions.ts` 文件中，导入 Zod 并定义与表单对象的形状匹配的架构。此架构将在将 `formData` 保存到数据库之前对其进行验证。

/app/lib/actions.ts

```
'use server';
 
import { z } from 'zod';
 
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});
 
const CreateInvoice = FormSchema.omit({ id: true, date: true });
 
export async function createInvoice(formData: FormData) {
  // ...
}
```

##### 引入sql，将数据插入数据库

```
import { z } from 'zod';
import { sql } from '@vercel/postgres';
 
// ...
 
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
 
  await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
}
```

##### 重新验证，重定向

Next.js 有一个 [Client-side Router Cache](https://nextjs.org/docs/app/building-your-application/caching#router-cache)，用于将 Route Segments 存储在用户的浏览器中一段时间。除了[预取之外](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#1-prefetching)，此缓存还确保用户可以在路由之间快速导航，同时减少向服务器发出的请求数。

由于您正在更新 invoices 路由中显示的数据，因此您需要清除此缓存并触发对服务器的新请求。您可以使用 [`Next.js 中的 revalidatePath`](https://nextjs.org/docs/app/api-reference/functions/revalidatePath) 函数执行此操作：

此时，您还需要将用户重定向回 `/dashboard/invoices` 页面。您可以使用 [`Next.js 中的 redirect`](https://nextjs.org/docs/app/api-reference/functions/redirect) 函数执行此操作：

- 清除缓存，触发新请求。
- ​

```
'use server';
 
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
// ...
 
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
 
  await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
 
  revalidatePath('/dashboard/invoices');
  import { redirect } from 'next/navigation';
}
```



#### 处理Error

##### try(){}catch(){}

```
export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}
```

测试bug:

可以通过  throw new Error('Failed to Delete Invoice');

来抛出错误，查看执行到哪

```
export async function deleteInvoice(id: string) {
  throw new Error('Failed to Delete Invoice');
 
  // Unreachable code block
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice' };
  }
}
```

##### 使用error.tsx来处理错误

`error.tsx` 文件可用于定义路由段的 UI 边界。它用作意外错误的 **catch-all**，并允许您向用户显示回退 UI。

/dashboard/invoices/error.tsx

```
'use client';
 
import { useEffect } from 'react';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}
```

##### 使用not-found组件

如果是导航去到不存在的资源，可使用not-found

/dashboard/invoices/[id]/edit/page.tsx

```
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { updateInvoice } from '@/app/lib/actions';
import { notFound } from 'next/navigation';
 
export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
 
  if (!invoice) {
    notFound();
  }
 
  // ...
}
```

/dashboard/invoices/[id]/edit/not-found.tsx

新建一个自己的notfound组件

```
import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
 
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}
```



#### 辅助功能插件

##### Eslint辅助功能

Next.js 在其 ESLint 配置中包含了 [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) 插件，以帮助及早发现可访问性问题。

（可选）如果您想尝试此操作，请将 `next lint` 作为脚本添加到 `package.json` 文件中：

```
"scripts": {
    "build": "next build",
    "dev": "next dev",
    "start": "next start",
    "lint": "next lint"
},
```

终端运行：

```
npm lint
```

注意：可以尝试配置一下，ctrl+s自动修复，以及eslint 页面报错等问题。

##### 表单辅助

**语义 HTML**：使用语义元素（`<input>`、`<option>` 等）而不是 `<div>`。这允许辅助技术 （AT） 专注于输入元素并向用户提供适当的上下文信息，从而使表单更易于导航和理解。

**标签**：包括 `<label>` 和 `htmlFor` 属性可确保每个表单字段都有一个描述性文本标签。这通过提供上下文来改进 AT 支持，并通过允许用户单击标签以专注于相应的输入字段来增强可用性。

**焦点轮廓**：字段的样式正确，以便在它们成为焦点时显示轮廓。这对于辅助功能至关重要，因为它可以直观地指示页面上的活动元素，从而帮助键盘和屏幕阅读器用户了解他们在表单上的位置。您可以通过按 `Tab` 键来验证这一点。

##### 表单校验

表单每一项都应该有校验规则。

##### 服务器上验证表单

在你的 `create-form.tsx` 组件中，从 `react` 导入 `useActionState` 钩子。由于 `useActionState` 是一个钩子，你需要使用 `“use client”` 指令将你的表单变成一个 Client 组件：

在你的表单组件中，`useActionState` 钩子：

采用两个参数：`（action， initialState）。`

返回两个值：`[state， formAction]` - 表单状态，以及提交表单时要调用的函数。

将 `createInvoice` 操作作为 `useActionState` 的参数传递，然后在 `<form action={}>` 属性中调用 `formAction`。

/app/ui/invoices/create-form.tsx

```
// ...
import { createInvoice, State } from '@/app/lib/actions';
import { useActionState } from 'react';
 
export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createInvoice, initialState);
 
  return <form action={formAction}>...</form>;
}
```

在 `action.ts` 文件中，您可以使用 Zod 验证表单数据。更新您的 `FormSchema`，如下所示：

```
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});
```

接下来，更新您的 `createInvoice` 操作以接受两个参数 - `prevState` 和 `formData`：

/app/lib/actions.ts

```
export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};
 
export async function createInvoice(prevState: State, formData: FormData) {
  // ...
}
```

然后，将 Zod `parse（）` 函数更改为 `safeParse（）：`

`safeParse（）` 将返回一个包含 `success` 或 `error` 字段的对象。这将有助于更优雅地处理验证，而无需将此 logic 放入 `try/catch` 块中。

在将信息发送到数据库之前，请检查表单字段是否已使用条件正确验证：

```
export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
 
  // ...
}
```

如果 `validatedFields` 不成功，我们会提前返回函数，并显示来自 Zod 的错误消息。

最后，由于你在 try/catch 块之外单独处理表单验证，你可以为任何数据库错误返回特定消息，你的最终代码应该看起来像这样：

```
export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
 
  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
 
  // Insert data into the database
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
 
  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
```

现在让我们在表单组件中显示错误。返回 `create-form.tsx` 组件，你可以使用 form `状态`访问错误。

添加一个三**元运算符**，用于检查每个特定错误。

```
<form action={formAction}>
  <div className="rounded-md bg-gray-50 p-4 md:p-6">
    {/* Customer Name */}
    <div className="mb-4">
      <label htmlFor="customer" className="mb-2 block text-sm font-medium">
        Choose customer
      </label>
      <div className="relative">
        <select
          id="customer"
          name="customerId"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          defaultValue=""
          aria-describedby="customer-error"
        >
          <option value="" disabled>
            Select a customer
          </option>
          {customers.map((name) => (
            <option key={name.id} value={name.id}>
              {name.name}
            </option>
          ))}
        </select>
        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
      </div>
      <div id="customer-error" aria-live="polite" aria-atomic="true">
        {state.errors?.customerId &&
          state.errors.customerId.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
    </div>
    // ...
  </div>
</form>
```

在上面的代码中，您还将添加以下 aria 标签：

`aria-describedby="customer-error"` ：这将在 `select` 元素和错误消息容器之间建立关系。它指示 `id=“customer-error”` 的容器描述了 `select` 元素。当用户与`选择`框交互以通知他们错误时，屏幕阅读器将阅读此描述。

`id=“customer-error”`：此 `id` 属性唯一标识保存 `select` 输入的错误消息的 HTML 元素。这对于 `aria-describedby` 建立关系是必要的。

`aria-live=“polite”`： 当 `div` 中的错误更新时，屏幕阅读器应该礼貌地通知用户。当内容发生更改时（例如，当用户更正错误时），屏幕阅读器将读出这些更改，但仅在用户空闲时播报，以免打断这些更改。



#### 身份校验

安全的网站通常使用多种方式来检查用户的身份。例如，输入您的用户名和密码后，该网站可能会向您的设备发送验证码或使用 Google Authenticator 等外部应用程序。这种 2 因素身份验证 （2FA） 有助于提高安全性。即使有人知道了您的密码，如果没有您的唯一令牌，他们也无法访问您的账户。

- **身份验证**是关于确保用户是他们所说的那个人。您正在使用您拥有的东西（例如用户名和密码）来证明您的身份。
- **授权**是下一步。确认用户的身份后，授权将决定允许他们使用应用程序的哪些部分。

##### 创建登录路由

在应用程序中创建一个名为 /login 的新路由，然后粘贴以下代码：

```
import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
```

我们将使用 [NextAuth.js](https://nextjs.authjs.dev/) 为您的应用程序添加身份验证。NextAuth.js 抽象化了管理会话、登录和注销以及身份验证的其他方面所涉及的大部分复杂性。虽然您可以手动实现这些功能，但该过程可能非常耗时且容易出错。NextAuth.js简化了流程，为 Next.js 应用程序中的身份验证提供了统一的解决方案。

通过在终端中运行以下命令来安装 NextAuth.js：

```
pnpm i next-auth@beta
```

接下来，为您的应用程序生成密钥。此密钥用于加密 Cookie，确保用户会话的安全性。您可以通过在终端中运行以下命令来执行此操作：

```
openssl rand -base64 32
```

然后，在 `.env` 文件中，将生成的密钥添加到 `AUTH_SECRET` 变量中：

```
AUTH_SECRET=your-secret-key
```

要使 auth 在生产环境中工作，您还需要更新 Vercel 项目中的环境变量。查看[本指南，](https://vercel.com/docs/projects/environment-variables)了解如何在 Vercel 上添加环境变量。



##### 添加page选项

在项目的根目录中创建一个 `auth.config.ts` 文件，用于导出 `authConfig` 对象。此对象将包含 NextAuth.js 的配置选项。目前，它仅包含 `pages` 选项：

/auth.config.ts

```
import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
} satisfies NextAuthConfig;
```

使用 `pages` 选项指定自定义登录、注销和错误页面的路由。这不是必需的，但通过将 `signIn： '/login'` 添加到我们的`页面`选项中，用户将被重定向到我们的自定义登录页面，而不是NextAuth.js默认页面。



##### 添加中间件保护路由

/auth.config.ts

`authorized` 回调用于验证请求是否被授权通过 [Next.js Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware) 访问页面。在请求完成之前调用它，并接收具有 `auth` 和 `request` 属性的对象。`auth` 属性包含用户的会话，`request` 属性包含传入请求。

`providers` 选项是一个数组，您可以在其中列出不同的登录选项。目前，它是一个满足 NextAuth 配置的空数组。您将在 [添加凭证提供程序](https://nextjs.org/learn/dashboard-app/adding-authentication#adding-the-credentials-provider) 部分。

/middleware.ts

```
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
```

在这里，您将使用 `authConfig` 对象初始化 NextAuth.js 并导出 `auth` 属性。你还使用 Middleware 中的 `matcher` 选项来指定它应该在特定路径上运行。

使用 Middleware 完成此任务的优点是，在 Middleware 验证身份验证之前，受保护的路由甚至不会开始渲染，从而增强了应用程序的安全性和性能。



##### 对密码的hash校验

在 `seed.js` 文件中，您使用了一个名为 `bcrypt` 的软件包对用户的密码进行哈希处理，然后将其存储到数据库中。在本章后面，您将*再次*使用它来比较用户输入的密码是否与数据库中的密码匹配。但是，您需要为 `bcrypt` 软件包创建一个单独的文件。这是因为 `bcrypt` 依赖于 Next.js Middleware 中不可用的 Node.js API。

创建一个名为 `auth.ts` 的新文件，用于传播您的 `authConfig` 对象：

```
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
});
```



##### 添加provider

[账号密码](https://nextjs.org/learn/dashboard-app/adding-authentication#adding-the-pages-option)

provider 允许用户使用账号密码登录。



##### 登录功能

您可以使用 `authorize` 函数来处理身份验证逻辑。与 Server Actions 类似，您可以使用 `zod` 在检查用户是否存在于数据库中之前验证电子邮件和密码：

/auth.ts

```
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
      },
    }),
  ],
});
```

验证凭证后，创建一个新的 `getUser` 函数，用于从数据库中查询用户。

/auth.ts

```
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
 
async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
        }
 
        return null;
      },
    }),
  ],
});
```

调用 `bcrypt.compare` 检查密码是否匹配：

```
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { sql } from '@vercel/postgres';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
 
// ...
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        // ...
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);
 
          if (passwordsMatch) return user;
        }
 
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});
```

最后，如果密码不匹配，则返回 `null` 以阻止用户登录。



##### 更新登录表单

将身份验证逻辑与登录表单连接起来。在 `actions.ts` 文件中，创建一个名为 `authenticate` 的新操作。此操作应从 `auth.ts` 导入 `signIn` 函数：

/app/lib/actions.ts

```
'use server';
 
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
 
// ...
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
```

在你的 `login-form.tsx` 组件中，你可以使用 React 的 `useActionState` 来调用服务器操作，处理表单错误，并显示表单的待处理状态：

```
'use client';
 
import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '@/app/ui/button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
 
export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );
 
  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <Button className="mt-4 w-full" aria-disabled={isPending}>
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}
```



#### 注销功能

要将注销功能添加到 `<SideNav />`，请在 `<form>` 元素中从 `auth.ts` 调用 `signOut` 函数；

```
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
 
export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      // ...
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
```



#### 添加元数据

元数据对于 SEO 和可共享性至关重要。

在 Web 开发中，元数据提供有关网页的其他详细信息。元数据对访问页面的用户不可见。相反，它在幕后工作，嵌入到页面的 HTML 中，通常在 `<head>` 元素中。这些隐藏信息对于需要更好地了解您网页内容的搜索引擎和其他系统至关重要。

元数据在增强网页的 SEO 方面发挥着重要作用，使其更易于搜索引擎和社交媒体平台访问和理解。适当的元数据有助于搜索引擎有效地为网页编制索引，从而提高它们在搜索结果中的排名。此外，Open Graph 等元数据改善了社交媒体上共享链接的外观，使内容对用户更具吸引力和信息量。

##### 元数据类型

**标题元数据**：负责浏览器选项卡上显示的网页的标题。这对 SEO 至关重要，因为它可以帮助搜索引擎了解网页的内容。

```
<title>Page Title</title>
```

**描述元数据**：此元数据提供网页内容的简要概述，通常显示在搜索引擎结果中。

```
<meta name="description" content="A brief description of the page content." />
```

**关键字元数据**：此元数据包括与网页内容相关的关键字，可帮助搜索引擎为页面编制索引。

```
<meta name="keywords" content="keyword1, keyword2, keyword3" />
```

**开放图元数据**：此元数据增强了网页在社交媒体平台上共享时的表示方式，提供标题、描述和预览图像等信息。

```
<meta property="og:title" content="Title Here" />
<meta property="og:description" content="Description Here" />
<meta property="og:image" content="image_url_here" />
```

**网站图标元数据**：此元数据将网站图标（一个小图标）链接到网页，显示在浏览器的地址栏或选项卡中。

```
<link rel="icon" href="path/to/favicon.ico" />
```



##### 添加元数据

Next.js 具有可用于定义应用程序元数据的元数据 API。有两种方法可以将元数据添加到应用程序：

- **基于配置**：将[静态`元数据`对象](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-object)或动态 [`generateMetadata` 函数](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function)导出到 `layout.js` 或 `page.js` 文件中。
- **基于文件**：Next.js 具有一系列专门用于元数据的特殊文件：
  - `favicon.ico`、`apple-icon.jpg` 和 `icon.jpg`：用于网站图标和图标
  - `opengraph-image.jpg`和`twitter-image.jpg`：用于社交媒体图像
  - `robots.txt`：提供搜索引擎爬网的说明
  - `sitemap.xml`：提供有关网站结构的信息

##### 网站图标与open graph 图标

在您的 `/public` 文件夹中，您会注意到您有两个图像：`favicon.ico` 和 `opengraph-image.jpg`。

将这些图像移动到 `/app` 文件夹的根目录。

执行此操作后，Next.js将自动识别并使用这些文件作为您的网站图标和 OG 图像。您可以通过在 dev tools 中检查应用程序的 `<head>` 元素来验证这一点。



##### 页面标题与描述

您还可以包含任何 `layout.js` 或 `page.js` 文件中的[`元数据`对象](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields)，以添加其他页面信息，如标题和描述。`layout.js` 中的任何元数据都将由使用它的所有页面继承。

在根布局中，使用以下字段创建新的`元数据`对象：

/app/layout.tsx

```
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
 
export default function RootLayout() {
  // ...
}
```

Next.js 会自动将标题和元数据添加到您的应用程序中。

如果您想为特定页面添加自定义标题，向页面本身添加`元数据`对象来实现此目的。嵌套页面中的元数据将覆盖父页面中的元数据。

在 `/dashboard/invoices` 页面中，您可以更新页面标题：

```
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Invoices | Acme Dashboard',
};
```

在根布局中，更新 `metadata` 对象以包含模板：

```
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
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



### TS开发注意

我们手动声明数据类型，但为了更好的类型安全性，我们建议使用 [Prisma](https://www.prisma.io/) 或 [Drizzle](https://orm.drizzle.team/)，它们会根据您的数据库架构自动生成类型。



