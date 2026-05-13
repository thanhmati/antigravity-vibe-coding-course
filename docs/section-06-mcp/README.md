# 🔌 Section 6 · Model Context Protocol (MCP)

<p align="center">
  <img src="https://img.shields.io/badge/Section-6_of_7-ef4444?style=for-the-badge" alt="Section 6" />
  <img src="https://img.shields.io/badge/Lectures-6-blue?style=for-the-badge" alt="6 Lectures" />
  <img src="https://img.shields.io/badge/Duration-~3_hours-green?style=for-the-badge" alt="~3 hours" />
  <img src="https://img.shields.io/badge/Level-Advanced-red?style=for-the-badge" alt="Advanced" />
</p>

> **Kết nối AI Agents với External Systems — API, Database, Tools**

---

## 🎯 Mục tiêu Section

Sau section này, bạn sẽ:

- ✅ Hiểu **MCP** là gì và vai trò trong việc xây dựng AI Agents
- ✅ Kết nối Antigravity với **Google Stitch MCP Server**
- ✅ Cài đặt và sử dụng **Stitch Agent Skills**
- ✅ Setup **GitHub MCP Server** trong Antigravity
- ✅ Áp dụng **4 use cases thực tế** với GitHub MCP

---

## 📚 Lectures

| # | Lecture | Mô tả | Thời lượng |
|---|---------|--------|------------|
| 6.1 | **MCP là gì?** | Tổng quan và kiến trúc hệ thống. | ~30 phút |
| 6.2 | **Workflow Vibe Coding với MCP + Stitch** | Review workflow thực tế. | ~25 phút |
| 6.3 | **Kết nối IDE tới Stitch MCP Server** | Setup thực hành. | ~30 phút |
| 6.4 | **Cài đặt Stitch Agent Skills** | `stitch-design`, `stitch-loop`, `enhance-prompt`, `design-md`, `react-components` | ~25 phút |
| 6.5 | **GitHub MCP Server** | Setup trong Antigravity. | ~25 phút |
| 6.6 | **GitHub MCP Demo: 4 Use Cases** | Branch, PR, Review, Merge — tất cả tự động. | ~30 phút |

---

## 🔑 Key Concepts

```mermaid
graph TD
    MCP["🔌 MCP Protocol"]
    MCP --> S["🎨 Stitch MCP\nThiết kế UI"]
    MCP --> G["🐙 GitHub MCP\nQuản lý Git"]

    S --> SK["🧩 Stitch Skills"]
    SK --> SD["stitch-design"]
    SK --> SL["stitch-loop"]
    SK --> EP["enhance-prompt"]
    SK --> DM["design-md"]
    SK --> RC["react-components"]

    style MCP fill:#ef4444,stroke:#dc2626,color:#fff
    style S fill:#8b5cf6,stroke:#7c3aed,color:#fff
    style G fill:#10b981,stroke:#059669,color:#fff
    style SK fill:#f59e0b,stroke:#d97706,color:#000
```

---

## 🛠 Stitch Skills Reference

| Skill | Mục đích | Lệnh cài đặt |
|-------|---------|---------------|
| `stitch-design` | Thiết kế UI tổng thể | `npx skills add google-labs-code/stitch-skills --skill stitch-design --global` |
| `stitch-loop` | Sinh multi-page website | `npx skills add google-labs-code/stitch-skills --skill stitch-loop --global` |
| `enhance-prompt` | Tối ưu prompt cho Stitch | `npx skills add google-labs-code/stitch-skills --skill enhance-prompt --global` |
| `design-md` | Tạo design system document | `npx skills add google-labs-code/stitch-skills --skill design-md --global` |
| `react-components` | Convert design → React | `npx skills add google-labs-code/stitch-skills --skill react:components --global` |

---

## 📋 Prerequisites

- ✅ Hoàn thành **Section 1-4** — Đặc biệt Context Engineering
- ✅ Tài khoản GitHub

---

## 🔗 Links

- [Stitch Skills Repository](https://github.com/google-labs-code/stitch-skills)
- [Stitch MCP Setup](https://stitch.withgoogle.com/docs/mcp/setup)

---

<div align="center">

[← Section 5](../section-05-multi-agent/README.md) · [🏠 Home](../../README.md) · [📑 Mục lục](../SUMMARY.md) · [Section 7 →](../section-07-vibe-coding/README.md)

</div>
