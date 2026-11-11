1. # LangGraph

Node	一个工作步骤
Edge	步骤之间的连接
State	整个流程共享的数据/记忆
Loop	执行失败后重新跑
Human-in-the-loop	中途让人参与 
Human Gate	人工确认的闸门

# 二：Harness 包括什么

1. System Prompt
  告诉模型：
  “你是谁？你应该怎么工作？”

2. Memory
  Memory 就是：
  Agent 能记住什么。

3. tools

4. skills

5. SubAgent
  一个 Agent 再叫其他 Agent 干活。

6. 安全规则
  控制模型，哪些事不能干。

  ```
  Model
   ↓
  请求执行命令
   ↓
  Harness
   ↓
  Permission Check
   ↓
  危险？
   ├── 是 → Human Gate
   └── 否 → 执行
  ```

  包括

  ```
  权限
  Sandbox
  文件访问范围
  命令白名单
  网络权限
  Secret 管理
  Human Approval
  Prompt Injection 防护
  Audit Log
  ```
## 完整的harness

```
                    Agent Harness
┌────────────────────────────────────────────────┐
│                                                │
│  Prompt / System Prompt                        │
│                                                │
│  Context Manager                               │
│       ↓                                        │
│  Memory                                        │
│       ↓                                        │
│  Skills                                        │
│       ↓                                        │
│  Tools ─────── MCP                             │
│       ↓                                        │
│  SubAgents                                     │
│       ↓                                        │
│  Agent Loop                                    │
│       ↓                                        │
│  State                                         │
│       ↓                                        │
│  Permission / Safety                           │
│       ↓                                        │
│  Human Gate                                    │
│       ↓                                        │
│  Sandbox / Execution Environment               │
│       ↓                                        │
│  Retry / Recovery                              │
│       ↓                                        │
│  Logging / Tracing / Evaluation                │
│                                                │
│                    ↓                           │
│                   LLM                          │
└────────────────────────────────────────────────┘
```



## 关于 langchain langGraph harness

LangChain 官方 2026 年的文章就是这么定位这三个东西的，而且明确说三者是可以组合的，不是互斥替代关系。

```
LangGraph
    ↓
Agent Runtime

LangChain
    ↓
Agent Framework

Deep Agents
    ↓
Agent Harness
```

Harness 是一种架构概念。围绕 LLM 构建的一整套 Agent 运行和控制体系。

**LangChain 更偏 Agent 开发框架，提供模型、工具、Prompt、Middleware 等开发抽象；LangGraph 更偏 Agent Runtime / Workflow Runtime，用 State、Node、Edge、Checkpoint、Interrupt 等机制控制复杂 Agent 的执行流程；Harness 则是更高层的概念，指围绕 LLM 构建的一整套 Agent 运行环境，包括 Prompt、Context、Memory、Tools、Skills、SubAgents、执行循环、权限、安全、Human-in-the-loop、Sandbox 和 Observability 等。**

**所以 Harness 并不是 LangChain 或 LangGraph 的“下一代替代品”，而是一个更高层的架构概念。LangGraph 完全可以作为 Harness 内部的 Agent Runtime。**




# MCP / Skill插件结构，一个skill目录里面有什么文件、怎么加载
Skill 更像“给 Agent 一本操作手册 + 一些辅助文件”；MCP 更像“给 Agent 接一个可以调用的外部服务/工具箱”。

SKILL.md  告诉 Agent：“我这个 Skill 是干什么的，以及你应该怎么使用我。”
因为 Agent 不是一启动就把所有 Skill 的全文都塞进 Context。所以 SKILL.md 是一个“说明书”，告诉 Agent：“你应该怎么使用我。”

```
有 100 个 Skill
      ↓
启动 Agent
      ↓
先只看：
name
description
      ↓
用户发请求
      ↓
判断哪个 Skill 可能有用
      ↓
加载对应 SKILL.md
```

Progressive Disclosure（渐进式加载）

###  **Skill Loader**

```
ZIP
 ↓
解压
 ↓
Skill Validator
 ↓
Skill Registry
 ↓
读取 name + description
 ↓
启动时注册到 Agent
 ↓
用户任务
 ↓
description 匹配
 ↓
Load SKILL.md
 ↓
注入 Context
 ↓
Agent 执行
 ↓
需要时读取 references/
 ↓
需要时执行 scripts/
```

  Registry = 登记表 / 注册中心。Skill Validator 是校验器。


# jev gVisor

> 我们的 Agent 执行代码有两层安全机制。第一层是 Jev，在代码或命令真正执行前进行安全策略检查，根据风险决定允许、拒绝或者要求人工确认；第二层是 gVisor，即使检查通过，实际代码也运行在隔离的 Sandbox 中，限制它对宿主机文件、系统资源和其他环境的访问。这样实现“执行前预审 + 执行时隔离”的纵深防御。

jev 防止 Agent 做出不应该做的事情。自己批准或者同意，或者请求人类批准同意。

```
Agent：
  我要执行 npm test
       ↓
      Jev
       ↓
    安全检查
       ↓
     允许
       ↓
     执行
```

gVisor 运行时隔离 / Sandbox（沙箱）。即使代码有问题，也尽可能把它限制在一个隔离环境里。

```
                Agent
                  ↓
             想执行代码
                  ↓
        ┌─────────────────┐
        │      Jev        │
        │   执行前预审     │
        └────────┬────────┘
                 ↓
          能不能执行？
          /          \
        拒绝          允许
         ↓             ↓
        END          gVisor
                       ↓
                ┌─────────────┐
                │   Sandbox   │
                │   隔离执行   │
                └──────┬──────┘
                       ↓
                    代码运行
                       ↓
                  结果返回 Agent
```



## Baseline 

Baseline = 你拿来做比较的“基准版本”。



### RSI 为什么极度依赖靠谱的评测？

你可以先把 RSI 简单理解成：

> **根据评测结果不断判断哪些方向/改动值得继续优化。**

也就是说，它非常依赖一个东西：

> **评测结果到底准不准。**

RSI 的上限，很大程度上取决于评测体系的可靠程度。

```
                    Agent 改动
                        │
                        ▼
                ┌──────────────┐
                │ 预测模型      │
                │ 快速预筛      │
                └──────┬───────┘
                       │
                值得继续评测
                       │
                       ▼
              ┌────────────────┐
              │ 全量 Benchmark  │
              │ 集群运行        │
              └───────┬────────┘
                      │
                      ▼
                评测结果
                      │
             ┌────────┴────────┐
             ▼                 ▼
          Success           Failure
             │
             ▼
       和 Baseline 比较
             │
             ▼
        判断是否提升
             │
             ▼
            RSI
             │
             ▼
       指导下一轮优化
```

Baseline 定基准，Benchmark 做测试，Success Rate 衡量结果；预测模型负责低成本预筛，全量评测负责最终裁判，而 RSI 根据可靠的评测结果指导下一轮优化。



## 显存是什么？为什么大模型这么吃显存？

显存英文叫 VRAM，你可以把它理解成 GPU 自己的高速工作内存。

CPU 有系统内存 RAM，GPU 有显存。

例如一张 A100 80GB，意思就是它有大约 80GB 的显存容量。



![](E:\fishNote\docs\ai\img\zs\view2.png)

70B 模型，也就是约 700 亿参数。特别多，所以大模型需要多卡部署，量化。



## 量化是什么？FP8 又是什么？

量化就是用更少的位数表示数字。

量化核心在于： **牺牲一定的数值精度，换取更低的存储成本，有时还能获得更快的计算速度。**

```
原始数值：0.123456789
低精度后：0.123
```

​                   70B 模型，权重计算：用FP16存储 = 70B x 2 字节 约等于 130GB  四舍五入按照  140GB算吧

![](E:\fishNote\docs\ai\img\zs\view3.png)

## vLLM 是什么？为什么大模型推理要用它？

专门负责高效运行大语言模型的推理引擎。

vLLM 是为了解决：

当多用户请求的时候： 

显存利用率不够，请求调度效率低，KV Cache 占用大，GPU 没有被充分利用。



- Continuous Batching（连续批处理）连续批处理则允许在调度过程中动态加入新请求、移除已完成请求。

  ```
  第一轮：A + B + C
  第二轮：A + B + C
  第三轮：A + C + D  （B 完成，D 加入）
  第四轮：A + D + E  （C 完成，E 加入）
  ```

  

- PagedAttention（分页注意力缓存管理）

  大模型生成文字时，需要保存之前 token 的 Key、Value 数据，这就是 KV Cache。

  PagedAttention 把 **KV Cache** 分块管理，减少显存浪费，让系统更灵活地处理不同长度的请求。

  

## 算子是什么？Kernel 又是什么？

算子是一种计算操作。

Kernel = 算子在底层的具体执行程序

> 算子描述“要算什么”，Kernel 描述“具体怎么在硬件上算”。



```
MatMul 算子
    ↓
选择 CUDA Kernel
    ↓
GPU 执行
    ↓
返回结果
```

Kernel Fusion（算子融合）

算子融合要注意一个问题，不是所有算子都适合融合，融合之后的表现也不一定是更好的！！！

```
算子 A
  ↓
算子 B
  ↓
算子 C
```

优化之后

```
A + B + C
    ↓
融合 Kernel
    ↓
一次完成更多计算
```



## 那评测体系具体做什么？

我们拿固定的 1000 条测试任务，分别测试优化前和优化后的模型

![](E:\fishNote\docs\ai\img\zs\view4.png)

所以整个过程是：

1. 先固定 Baseline：保存优化前的速度、显存和正确率。
2. 进行推理优化：例如 BF16 → FP8。
3. 运行 Benchmark：让两个版本完成相同的任务。
4. 比较结果：不仅看速度，也看成功率和错误类型。
5. 决定是否采用：只有满足预先设定的性能和质量要求，才考虑上线。



## K8S

容器编排平台。负责管理容器运行、资源分配、故障恢复等

主要工作

```
任务提交
   ↓
K8s 调度器
   ↓
寻找满足资源要求的服务器
   ↓
启动容器
   ↓
运行任务
```





## 算力调度平台是什么？CubeStudio 这类平台干什么？

K8s 是管理服务器和容器的基础设施，算力调度平台是在上面提供更适合 AI 业务的资源管理能力。

 CubeStudio 用来做 AI 开发、训练、推理和任务运行，同时也会支持一些资源的调度。

1. 异构卡的调度
2. 任务优先级调度
3. 资源隔离



## 评测低优先级、线上推理高优先级，到底怎么运行？

优先保证线上任务的运行，评测占用剩下的资源就行，没有资源就让评测任务排队。

![](E:\fishNote\docs\ai\img\zs\view5.png)









