# Section 4: Context Engineering – Giúp AI Agent "Nhớ" và Tối Ưu Token

> **Chủ đề trọng tâm:** Quản lý context & memory cho AI Agent khi Vibe Coding, tránh Agent "quên" dự án, giảm token usage, tăng tốc development.

---

## 🧩 Vấn đề thực tế mà Section này giải quyết

Khi Vibe Coding một dự án thực tế, bạn sẽ gặp các vấn đề sau:

| Vấn đề                          | Biểu hiện                                            | Hậu quả                           |
| ------------------------------- | ---------------------------------------------------- | --------------------------------- |
| **Agent quên context**          | Code xung đột, tạo file trùng, không theo convention | Phải giải thích lại từ đầu        |
| **Token bùng nổ**               | Agent analyze cả source code mỗi lần hỏi             | Tốn tiền, chậm, hay bị giới hạn   |
| **Mất liên tục giữa các phiên** | Mở conversation mới → Agent không biết gì về dự án   | Phải paste lại toàn bộ context    |
| **Context rot**                 | Thông tin cũ, lỗi thời trong conversation dài        | Agent sinh code dựa trên data sai |

**Section này dạy cách giải quyết triệt để các vấn đề trên.**

---

## 📋 Tổng quan Section

| Thông tin               | Chi tiết                                                |
| ----------------------- | ------------------------------------------------------- |
| **Số bài học**          | 10 bài học                                              |
| **Thời lượng ước tính** | 4-5 giờ                                                 |
| **Trọng tâm**           | Context management, Memory, Token optimization          |
| **Kết quả cuối**        | Bộ context documents hoàn chỉnh + workflow tối ưu token |
| **Yêu cầu trước**       | Section 1-3 (Agent basics, Rules, Prompt Engineering)   |

---

## 🎯 Curriculum Chi Tiết

---

### Lecture 4.1: Context Engineering là gì và khác gì Prompt Engineering
- **Thời lượng:** ~35 phút
- **Nội dung:** 
  - Khái niệm Context Engineering và sự tiến hóa từ Prompt Engineering.
  - LLM như CPU và Context Window như RAM (theo Andrej Karpathy).
  - 5 trụ cột của Context Engineering: Instructions, Tools, Memory, Retrieval, State.

### Lecture 4.2: Context Window là gì?
- **Thời lượng:** ~20 phút
- **Nội dung:**
  - Định nghĩa Context Window và cơ chế hoạt động của "RAM" trong LLM.
  - Phân tích giới hạn context window của các mô hình phổ biến (Gemini, Claude, GPT).
  - Hiện tượng "Lost in the middle" khi context quá lớn.

### Lecture 4.3: 5 trụ cột của Context Engineering
- **Thời lượng:** ~30 phút
- **Nội dung:**
  - Đi sâu phân tích 5 trụ cột chính: Instructions, Tools, Memory, Retrieval, State.
  - Cách 5 trụ cột này ánh xạ tương ứng vào các tính năng của Google Antigravity.

### Lecture 4.4: Token là gì? Tại sao quan trọng?
- **Thời lượng:** ~20 phút
- **Nội dung:**
  - Định nghĩa token và cách LLM đếm ký tự.
  - Tại sao token ảnh hưởng trực tiếp đến chi phí, tốc độ phản hồi và giới hạn sử dụng của AI Agent.

### Lecture 4.5: Context Documents – Bộ nhớ ngoài cho Agent
- **Thời lượng:** ~45 phút
- **Nội dung:**
  - Giải pháp lưu trữ thông tin dự án qua bộ Context Documents ngoài: `AGENTS.md`, `ARCHITECTURE.md`, `PLAN.md`.
  - Demo sự khác biệt về độ chính xác của Agent trước và sau khi có Context Documents.

### Lecture 4.6: AGENTS.md – File quan trọng nhất
- **Thời lượng:** ~25 phút
- **Nội dung:**
  - Cách thiết lập `AGENTS.md` để quy định luật chơi, tech stack, conventions và do's & don'ts cho Agent.
  - Template `AGENTS.md` mẫu cho dự án phát triển web.

### Lecture 4.7: ARCHITECTURE.md – Bản đồ dự án
- **Thời lượng:** ~20 phút
- **Nội dung:**
  - Cách viết `ARCHITECTURE.md` tóm tắt sơ đồ cấu trúc thư mục, luồng dữ liệu và API endpoint.
  - Giúp Agent hiểu kiến trúc hệ thống ngay lập tức mà không cần scan toàn bộ source code.

### Lecture 4.8: PLAN.md – Trạng thái dự án
- **Thời lượng:** ~15 phút
- **Nội dung:**
  - Quản lý task list, tiến độ và độ ưu tiên thông qua `PLAN.md`.
  - Giữ trạng thái làm việc đồng bộ giữa developer và AI Agent xuyên suốt dự án.

### Lecture 4.9: Kỹ thuật Summarize Context - Giữ Agent "tỉnh táo" trong những phiên làm việc dài
- **Thời lượng:** ~40 phút
- **Nội dung:**
  - Khi nào conversation bị loãng hoặc ngộ độc context.
  - Kỹ thuật tự động hóa tóm tắt conversation hiện tại để chuyển giao sang session mới.
  - Sử dụng Handoff document (`handoff.md`) để duy trì liên tục tiến độ dự án.

### Lecture 4.10: Context Compaction – "Nén" lại conversation
- **Thời lượng:** ~30 phút
- **Nội dung:**
  - Kỹ thuật "nén" cuộc hội thoại dài bằng cách gộp lịch sử và loại bỏ các chi tiết thừa thãi.
  - Cách thức khởi tạo một conversation sạch kết hợp inject context đã được "nén" để tiết kiệm token và tăng tốc độ xử lý.

---

## 🛠 Tổng hợp kỹ thuật Context Engineering

| Kỹ thuật                  | Vấn đề giải quyết                | Token tiết kiệm | Bài học |
| ------------------------- | -------------------------------- | --------------- | ------- |
| **AGENTS.md**             | Agent không biết convention      | ~30%            | Bài 4.6 |
| **ARCHITECTURE.md**       | Agent scan toàn bộ source        | ~40%            | Bài 4.7 |
| **PLAN.md**               | Mất kiểm soát tiến trình dự án   | ~20%            | Bài 4.8 |
| **Handoff Document**      | Mất context giữa các phiên       | ~60%            | Bài 4.9 |
| **Context Compaction**    | Conversation dài bị quên         | ~50%            | Bài 4.10|
