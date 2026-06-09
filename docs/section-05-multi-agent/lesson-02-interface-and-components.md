# 📘 Bài 2: Antigravity 2.0 — Làm Quen Giao Diện & Các Thành Phần Chính

> **Section:** Multi-Agent Systems & Orchestration — Hệ thống nhiều Agent phối hợp  
> **Thời lượng:** 20-25 phút  
> **Yêu cầu:** Đã hoàn thành Bài 1

---

## 🎯 Mục tiêu bài học

Sau bài này, bạn sẽ:

- ✅ Nắm vững cấu trúc bố cục giao diện mới của **Antigravity 2.0 IDE**.
- ✅ Hiểu rõ chức năng của **Inbox**, **`/agents` panel**, và **Artifacts Tab**.
- ✅ Biết cách cấu hình các thông số ban đầu trước khi khởi chạy một Agent.

---

## 1. Bản đồ bố cục giao diện Antigravity 2.0

Khi bạn mở phiên bản Antigravity 2.0, giao diện lập trình sẽ được chia thành 4 khu vực chức năng chính nhằm tối ưu hóa việc quản lý các Agent tự chạy ngầm:

```
┌─────────────────┬───────────────────────────┬──────────────────┐
│                 │                           │  📋 ARTIFACTS    │
│  💬 CHAT PANEL  │     💻 CODE EDITOR         │  - Plan Tab      │
│  - Prompt Input │     (Workspace hiển thị)   │  - Task Tab      │
│  - Slash Cmds   │                           │  - Walkthrough   │
│                 │                           │                  │
├─────────────────┴───────────────────────────┼──────────────────┤
│           🎛️ CONTROL CENTER & LIVE LOGS     │  🤖 /AGENTS      │
│           - Agent Execution logs            │  Inbox & Active  │
│           - Terminal Output                 │  Subagents List  │
└─────────────────────────────────────────────┴──────────────────┘
```

### 1.1 Khung Chat & Nhập Lệnh (Chat Panel)
Nằm ở góc trái màn hình, đây là nơi bạn đưa ra Goal hoặc thảo luận với Parent Agent. Ở phiên bản 2.0, thanh input hỗ trợ các **Slash Commands** chuyên biệt như:
*   `/goal`: Giao tác vụ dài hạn chạy autonomous.
*   `/grill-me`: Bắt đầu phiên phỏng vấn làm rõ specs.
*   `/browser`: Yêu cầu Agent mở trình duyệt để Visual QA.
*   `/schedule`: Hẹn lịch chạy định kỳ hoặc đặt lịch nhắc nhở.

### 1.2 Bảng Quản Lý Agent (`/agents` panel)
Nằm ở phía dưới bên phải, đây là "bàn điều khiển trung tâm" của Multi-Agent:
*   **Inbox (Hộp thư đến):** Nơi hiển thị các yêu cầu phê duyệt kế hoạch, cấp quyền đọc/ghi file hoặc các câu hỏi cần bạn trả lời trực tiếp.
*   **Active Agents (Agent đang chạy):** Danh sách hiển thị theo dạng cây phân cấp các subagents đang hoạt động. Bạn có thể xem nhanh trạng thái (`Running`, `Paused`, `Completed`, `Failed`) hoặc nút **Kill** để chấm dứt các agent bị lỗi.

### 1.3 Khu Vực Trình Bày Artifacts (Artifacts Tab)
Tự động hiển thị ở biên phải khi có Agent hoạt động. Thay vì mở các file Markdown thuần túy, Antigravity 2.0 render chúng dưới dạng giao diện tương tác:
*   **Plan:** Hiển thị trực quan các tệp tin sẽ bị ảnh hưởng (Thêm mới, Sửa đổi, Xóa) kèm mã màu.
*   **Task:** Danh sách checklist động, bạn có thể thấy các gạch đầu dòng tự động chuyển màu từ xám sang xanh lá kèm icon loading khi Agent bắt đầu code.
*   **Walkthrough:** Hiển thị tóm tắt thay đổi, các tệp tin đã tạo và test kết quả kèm theo bằng chứng hình ảnh (nếu có).

---

## 2. Các thành phần điều khiển cấu hình cốt lõi

Trước khi chạy Agent, bạn cần nắm rõ 2 cấu hình quan trọng sau:

### 2.1 Mode Selector (Trình chọn chế độ chạy)
Khi nhập prompt và nhấn gửi, hệ thống sẽ hỏi bạn chọn mode:
*   **Local Mode:** Sửa đổi trực tiếp trên code bạn đang làm việc.
*   **New Worktree Mode (Khuyên dùng):** Tạo một bản sao thư mục dự án độc lập ở background để Agent làm việc, tránh xung đột code hiện tại của bạn.

### 2.2 Reasoning Model Configuration
Antigravity 2.0 hỗ trợ cấu hình model riêng biệt cho từng loại Agent:
*   **Parent Agent (Orchestrator):** Thường sử dụng các model reasoning mạnh nhất (như Claude 3.5 Sonnet hoặc Gemini 1.5 Pro) để lập kế hoạch chính xác.
*   **Subagents (Workers):** Có thể cấu hình sử dụng các model nhỏ hơn, nhanh hơn (như Gemini 1.5 Flash) để viết code nhanh và tiết kiệm chi phí token.

---

## 📝 Tóm tắt bài học

- **Giao diện Antigravity 2.0** được thiết kế để phục vụ việc lập trình không đồng bộ và giám sát nhiều Agent chạy ngầm.
- **Inbox** là cầu nối giao tiếp duy nhất giúp bạn duyệt kế hoạch hoặc trả lời câu hỏi của Agent mà không bị trôi tin nhắn.
- **`/agents` panel** giúp quản lý vòng đời của subagents (Theo dõi logs, Kill agent lỗi).

---

## ⏭️ Bài tiếp theo

**[Bài 3: Multi-Agent System là gì? Từ Single Agent → Multi-Agent](lesson-03-what-is-multi-agent.md)** — Bắt đầu đi sâu vào lý thuyết cốt lõi của Multi-Agent: tại sao một Agent đơn lẻ bị giới hạn và cách thiết lập một đội ngũ AI phối hợp làm việc nhịp nhàng.

---

*📚 Multi-Agent Systems & Orchestration · Google Antigravity: Xây dựng AI Agent, AI App & Vibe Coding*
