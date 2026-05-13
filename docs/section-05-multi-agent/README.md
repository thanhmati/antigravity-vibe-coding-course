# 🤖 Section 5 · Multi-Agent Systems & Orchestration

<p align="center">
  <img src="https://img.shields.io/badge/Section-5_of_7-10b981?style=for-the-badge" alt="Section 5" />
  <img src="https://img.shields.io/badge/Lectures-4-blue?style=for-the-badge" alt="4 Lectures" />
  <img src="https://img.shields.io/badge/Duration-~3_hours-green?style=for-the-badge" alt="~3 hours" />
  <img src="https://img.shields.io/badge/Level-Advanced-red?style=for-the-badge" alt="Advanced" />
</p>

> **Thiết kế hệ thống nhiều Agent phối hợp giải quyết bài toán phức tạp**

---

## 🎯 Mục tiêu Section

Sau section này, bạn sẽ:

- ✅ Hiểu cách nhiều **AI Agents phối hợp** để giải quyết bài toán phức tạp
- ✅ Biết cách thiết kế **Orchestrator** để điều phối agents
- ✅ Nắm được cách **Planner** phân rã task và xác định dependency
- ✅ Hiểu **Parallel Agent Execution** — chạy nhiều agents song song

---

## 📚 Lectures

| # | Lecture | Mô tả | Thời lượng |
|---|---------|--------|------------|
| 5.1 | **Multi-Agent System là gì?** | Hiểu cách nhiều AI agents phối hợp với nhau. | ~30 phút |
| 5.2 | **Thiết kế Orchestrator** | Xây dựng Orchestrator điều phối agents, quản lý workflow và tổng hợp kết quả. | ~45 phút |
| 5.3 | **Thiết kế Planner** | Phân tích yêu cầu, chia nhỏ thành tasks, xác định dependency, phân công agent. | ~45 phút |
| 5.4 | **Parallel Agent Execution** | Agent Manager — chạy nhiều agents song song. | ~30 phút |

---

## 🔑 Key Concepts

```mermaid
graph TD
    O["🎯 Orchestrator\nĐiều phối tổng thể"]
    O --> P["📋 Planner\nPhân rã task"]
    P --> A1["🤖 Agent 1\nFrontend"]
    P --> A2["🤖 Agent 2\nBackend"]
    P --> A3["🤖 Agent 3\nTesting"]
    A1 --> R["📊 Result Aggregator"]
    A2 --> R
    A3 --> R

    style O fill:#10b981,stroke:#059669,color:#fff
    style P fill:#f59e0b,stroke:#d97706,color:#000
    style A1 fill:#3b82f6,stroke:#2563eb,color:#fff
    style A2 fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style A3 fill:#ec4899,stroke:#db2777,color:#fff
    style R fill:#06b6d4,stroke:#0891b2,color:#fff
```

---

## 📋 Prerequisites

- ✅ Hoàn thành **Section 1-4** — Đặc biệt Context Engineering

---

<div align="center">

[← Section 4](../section-04-context-engineering/README.md) · [🏠 Home](../../README.md) · [📑 Mục lục](../SUMMARY.md) · [Section 6 →](../section-06-mcp/README.md)

</div>
