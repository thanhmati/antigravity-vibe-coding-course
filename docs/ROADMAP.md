# 🗺️ Learning Roadmap — Lộ Trình Học

> Bản đồ visual giúp bạn hiểu lộ trình học và mối liên hệ giữa các section.

---

## Overview

```mermaid
graph TD
    START(("🎬 Bắt đầu")) --> S1

    S1["🧱 Section 1: Foundation\n━━━━━━━━━━━━━━\n• AI Agent là gì?\n• Setup Antigravity\n• 5 lectures · ~2h"]

    S1 --> S2["⚙️ Section 2: Core Concepts\n━━━━━━━━━━━━━━\n• Model, Rules, Workflows\n• Agent Skills\n• 9 lectures · ~4h"]

    S2 --> S3["✍️ Section 3: Prompt Engineering\n━━━━━━━━━━━━━━\n• Thiết kế prompt hiệu quả\n• Debug & tối ưu\n• 6 lectures · ~3h"]

    S3 --> S4["🧠 Section 4: Context Engineering\n━━━━━━━━━━━━━━\n• Context docs & memory\n• Token optimization\n• 10 lectures · ~4-5h"]

    S4 --> S5["🤖 Section 5: Multi-Agent\n━━━━━━━━━━━━━━\n• Subagents & Orchestration\n• /goal, /grill-me, /schedule\n• 6 lectures · ~3-4h"]

    S5 --> S6["🔌 Section 6: MCP\n━━━━━━━━━━━━━━\n• Kết nối external systems\n• Stitch & GitHub MCP\n• 6 lectures · ~3h"]

    S6 --> S7["🎨 Section 7: Vibe Coding Project\n━━━━━━━━━━━━━━\n• Build dự án thực tế\n• End-to-end workflow\n• 11 lectures · ~6-8h"]

    S7 --> FINISH(("🏆 Hoàn thành!"))

    style START fill:#fbbf24,stroke:#f59e0b,color:#000
    style S1 fill:#3b82f6,stroke:#2563eb,color:#fff
    style S2 fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style S3 fill:#ec4899,stroke:#db2777,color:#fff
    style S4 fill:#f59e0b,stroke:#d97706,color:#000
    style S5 fill:#10b981,stroke:#059669,color:#fff
    style S6 fill:#ef4444,stroke:#dc2626,color:#fff
    style S7 fill:#06b6d4,stroke:#0891b2,color:#fff
    style FINISH fill:#22c55e,stroke:#16a34a,color:#fff
```

---

## Skill Progression

```mermaid
graph LR
    subgraph "🟢 Beginner"
        B1["Hiểu AI Agent"]
        B2["Setup Antigravity"]
        B3["Viết Prompt cơ bản"]
    end

    subgraph "🟡 Intermediate"
        I1["Rules & Workflows"]
        I2["Context Engineering"]
        I3["Token Optimization"]
    end

    subgraph "🔴 Advanced"
        A1["Multi-Agent Design"]
        A2["MCP Integration"]
        A3["Production Vibe Coding"]
    end

    B1 --> B2 --> B3 --> I1 --> I2 --> I3 --> A1 --> A2 --> A3

    style B1 fill:#dcfce7,stroke:#16a34a,color:#000
    style B2 fill:#dcfce7,stroke:#16a34a,color:#000
    style B3 fill:#dcfce7,stroke:#16a34a,color:#000
    style I1 fill:#fef9c3,stroke:#ca8a04,color:#000
    style I2 fill:#fef9c3,stroke:#ca8a04,color:#000
    style I3 fill:#fef9c3,stroke:#ca8a04,color:#000
    style A1 fill:#fecaca,stroke:#dc2626,color:#000
    style A2 fill:#fecaca,stroke:#dc2626,color:#000
    style A3 fill:#fecaca,stroke:#dc2626,color:#000
```

---

## Section Dependencies

```mermaid
graph TD
    S1["Section 1: Foundation"] --> S2["Section 2: Core Concepts"]
    S2 --> S3["Section 3: Prompt Engineering"]
    S3 --> S4["Section 4: Context Engineering"]
    S4 --> S5["Section 5: Multi-Agent"]
    S4 --> S6["Section 6: MCP"]
    S5 --> S7["Section 7: Vibe Coding"]
    S6 --> S7

    S2 -.->|"Skills được dùng ở"| S7
    S3 -.->|"Prompt patterns"| S4
```

> 💡 **Tip:** Sections 5 và 6 có thể học song song sau khi hoàn thành Section 4. Cả hai đều cần trước Section 7.

---

## Time Estimate

| Section | Thời lượng | Tổng tích lũy |
|---------|-----------|----------------|
| Section 1: Foundation | ~2 giờ | 2 giờ |
| Section 2: Core Concepts | ~4 giờ | 6 giờ |
| Section 3: Prompt Engineering | ~3 giờ | 7 giờ |
| Section 4: Context Engineering | ~4-5 giờ | 11-12 giờ |
| Section 5: Multi-Agent | ~3-4 giờ | 15-17 giờ |
| Section 6: MCP | ~3 giờ | 18-19 giờ |
| Section 7: Vibe Coding | ~6-8 giờ | **24-27 giờ** |

---

<div align="center">

[← Quay về README](../README.md) · [📑 Mục lục](SUMMARY.md)

</div>
