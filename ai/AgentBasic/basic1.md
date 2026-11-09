# LangGraph
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









