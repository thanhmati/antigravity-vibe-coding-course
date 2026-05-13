# 📖 Glossary — Thuật Ngữ Khóa Học

> Bảng thuật ngữ alphabetical cho tất cả khái niệm kỹ thuật trong khóa học.

---

## A

### Agent (AI Agent)
Hệ thống AI có khả năng **tự suy nghĩ, lập kế hoạch và hành động** để hoàn thành task. Khác với AI truyền thống chỉ trả lời câu hỏi, Agent có thể gọi tools, đọc/ghi files, và tương tác với hệ thống ngoài.

### Agent Skills
Các khả năng mở rộng cho AI Agent — như plugins. Ví dụ: `stitch-design`, `react-components`, `enhance-prompt`. Agent Skills cho phép Agent thực hiện các task chuyên biệt.

### Agentic AI
Paradigm AI mới trong đó AI **chủ động hành động** thay vì chỉ phản hồi passive. Agent tự lập kế hoạch, phân rã task, và thực thi multi-step workflows.

### Antigravity (Google Antigravity)
Nền tảng/IDE của Google cho phép build AI App và AI Agent. Tích hợp LLM, MCP, Agent Skills trong một môi trường development thống nhất.

### ARCHITECTURE.md
File mô tả kiến trúc hệ thống dự án. Giúp AI Agent hiểu cấu trúc code mà không cần scan toàn bộ source — tiết kiệm token.

### AGENTS.md
File "luật chơi" cho AI Agent — chứa convention, tech stack, do's & don'ts. Agent đọc file này để hiểu dự án ngay lập tức.

---

## C

### Context Engineering
Kỹ thuật **thiết kế, quản lý và tối ưu toàn bộ thông tin** mà AI Agent nhận được. Bao trùm Prompt Engineering — không chỉ viết prompt hay mà thiết kế cả hệ thống context (instructions, tools, memory, retrieval, state).

### Context Window
Giới hạn lượng thông tin AI model có thể "nhìn thấy" tại 1 thời điểm. Giống như RAM: có giới hạn, khi đầy thì thông tin cũ bị mất. Thường 128K – 1M tokens tùy model.

### Context Compaction
Kỹ thuật "nén" conversation dài bằng cách yêu cầu Agent tóm tắt. Summary này được dùng làm input cho phiên tiếp theo, tiết kiệm token đáng kể.

### Context Rot
Hiện tượng thông tin cũ/sai trong conversation dài gây nhầm lẫn cho Agent. Ví dụ: đổi từ Tailwind sang CSS Modules nhưng Agent vẫn sinh Tailwind code.

---

## D

### Design System
Tập hợp các quy tắc thiết kế nhất quán: màu sắc, typography, spacing, components. Được tạo trên Stitch và document trong `DESIGN.md`.

### DESIGN.md
File mô tả design system bằng ngôn ngữ tự nhiên. Được tạo bởi skill `design-md`, giúp AI Agent hiểu và maintain UI consistency.

---

## H

### Hallucination
Khi AI "bịa" thông tin không có thật — tự tạo file, function, hoặc API không tồn tại. Thường xảy ra khi thiếu context hoặc context window bị đầy.

### Handoff Document
File bàn giao giữa các phiên làm việc (`handoff.md`). Chứa: đã làm gì, đang dở gì, blockers, next steps. Giúp Agent tiếp tục từ nơi dừng lại.

---

## K

### Knowledge Items (KI)
Bộ nhớ dài hạn của Antigravity, tồn tại xuyên conversations. Chứa kiến thức đã được distill: architecture patterns, deployment flows, coding conventions.

---

## L

### LLM (Large Language Model)
Mô hình ngôn ngữ lớn — "bộ não" của AI Agent. Ví dụ: Gemini, Claude, GPT. LLM xử lý text input và sinh text output.

---

## M

### MCP (Model Context Protocol)
Protocol chuẩn để kết nối AI Agent với hệ thống ngoài (API, database, tools). Giống USB cho AI — một chuẩn kết nối thống nhất.

### MCP Server
Server cung cấp capabilities cho AI Agent qua MCP protocol. Ví dụ: **Stitch MCP** (thiết kế UI), **GitHub MCP** (quản lý git).

### Multi-Agent System
Hệ thống gồm nhiều AI Agent phối hợp với nhau. Mỗi agent chuyên 1 việc, Orchestrator điều phối workflow.

---

## O

### Orchestrator
Agent đặc biệt trong Multi-Agent System có nhiệm vụ **điều phối** các agent khác: phân công task, thu thập kết quả, quản lý workflow.

---

## P

### Planner (Agent)
Agent chuyên **phân rã task** thành các bước nhỏ, xác định dependency, và phân công cho đúng agent.

### Prompt Engineering
Kỹ thuật viết câu lệnh (prompt) để AI cho kết quả tốt. Là 1 phần nhỏ của Context Engineering.

---

## R

### Rules
Cấu hình trong Antigravity kiểm soát hành vi Agent: coding convention, output format, constraints. Được áp dụng tự động cho mọi conversation.

---

## S

### Stitch (Google Stitch)
Công cụ AI-powered design của Google. Kết nối với Antigravity qua MCP để thiết kế UI, tạo design system, sinh React components.

### Stitch Skills
Agent Skills chuyên biệt cho Stitch: `stitch-design`, `stitch-loop`, `enhance-prompt`, `design-md`, `react-components`.

---

## T

### Token
Đơn vị nhỏ nhất AI model xử lý. ~1 token ≈ 4 ký tự tiếng Anh, ~1-2 ký tự tiếng Việt. Token = đơn vị chi phí — nhiều token = tốn tiền hơn.

---

## V

### Vibe Coding
Phương pháp lập trình mô tả ý tưởng bằng ngôn ngữ tự nhiên, AI Agent thực thi. Được đặt tên bởi Andrej Karpathy. Developer = Product Manager, AI = Developer.

---

## W

### Workflows
Chuỗi các bước được định nghĩa trước để Agent tự động thực thi. Biến quy trình thủ công thành automation.

---

<div align="center">

[← Quay về README](README.md) · [📑 Mục lục](docs/SUMMARY.md)

</div>
