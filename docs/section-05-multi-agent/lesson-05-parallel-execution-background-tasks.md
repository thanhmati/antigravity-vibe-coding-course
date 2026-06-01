# 📘 Bài 5: Parallel Execution & Background Tasks

> **Section:** Multi-Agent Systems & Orchestration — Hệ thống nhiều Agent phối hợp  
> **Thời lượng:** 25-30 phút  
> **Loại:** 📖 Lý thuyết chuyên sâu & Phân tích  
> **Yêu cầu:** Đã hoàn thành Bài 4

---

## 🎯 Mục tiêu bài học

Sau bài học này, bạn sẽ:

- ✅ Hiểu rõ cơ chế **Async Execution (Chạy bất đồng bộ)** giúp giải phóng màn hình làm việc
- ✅ Sử dụng thành thạo công cụ **`manage_task`** để quản lý, theo dõi và dừng các tác vụ ngầm
- ✅ Thiết lập được lịch trình tự động bằng lệnh **`/schedule`** (chạy một lần hoặc lặp lại theo cron)
- ✅ Nắm vững các kỹ thuật **Đồng bộ hóa & Tránh xung đột** khi nhiều Agent chạy song song

---

## 1. Async & Parallel Execution — Sức mạnh của sự bất đồng bộ

Trong lập trình truyền thống và lập trình với AI thế hệ cũ, khi bạn yêu cầu AI làm việc, bạn phải ngồi chờ (blocking UI) cho đến khi nó trả lời xong thì mới có thể gõ câu lệnh tiếp theo. 

Antigravity 2.0 phá vỡ giới hạn này bằng **Async & Parallel Execution (Chạy song song & Bất đồng bộ)**:

```
Chạy tuần tự (Sequential):
User: ──[Đợi Agent A code UI]──▶ ──[Đợi Agent B kết nối API]──▶ ──[Đợi Agent C viết test]──▶ Xong!

Chạy song song (Parallel) trong Antigravity 2.0:
User: ──[Spawn 3 Agents]
         ├─── 🤖 Agent A: Code UI (Chạy ngầm) ─────────────────────────┐
         ├─── 🤖 Agent B: API Connect (Chạy ngầm) ──────────────────────┼──▶ Xong nhanh gấp 3 lần!
         └─── 🤖 Agent C: Viết Test (Chạy ngầm) ────────────────────────┘
```

### Ưu điểm vượt trội:
- **Giải phóng IDE của bạn:** Bạn có thể tiếp tục tự tay code file khác, mở cuộc hội thoại mới với Agent khác, hoặc thậm chí đóng máy đi ngủ. Agents vẫn âm thầm chạy ngầm trên cloud hoặc Git worktree cô lập.
- **Tiết kiệm thời gian:** Các task không phụ thuộc nhau (ví dụ: vừa viết CSS cho UI, vừa viết SQL schema cho DB) sẽ được làm đồng thời, giảm thời gian hoàn thành tổng thể xuống còn 1/3.

---

## 2. Công cụ quản lý tác vụ ngầm: `manage_task`

Khi các Agent của bạn đang chạy ngầm (background), làm thế nào để bạn biết chúng đang làm gì và kiểm soát chúng ra sao? Antigravity 2.0 cung cấp một công cụ hệ thống siêu việt mang tên **`manage_task`**.

Bạn có thể tương tác với công cụ này trực tiếp qua chat hoặc thông qua giao diện `/agents` panel:

```
  ┌────────────────────────────────────────────────────────┐
  │ 📋 BACKGROUND TASK MANAGER                             │
  ├────────────────────────────────────────────────────────┤
  │ ID: task-ui-9912   | Status: RUNNING  | [ VIEW LOGS ]  │
  │ ID: task-api-0128  | Status: WAITING  | [ VIEW LOGS ]  │
  │                                                        │
  │ Action:                                                │
  │ [ 🔍 List Tasks ]   [ 💬 Send Input ]   [ 🛑 Kill Task ]│
  └────────────────────────────────────────────────────────┘
```

### Các hành động (Actions) chính của `manage_task`:

1. **`list` (Liệt kê):** Xem danh sách tất cả các tác vụ đang chạy ngầm, ID của chúng và thời gian bắt đầu.
2. **`status` (Trạng thái):** Kiểm tra tiến độ hiện tại của một task cụ thể và xem đường dẫn file log của task đó để debug khi cần.
3. **`send_input` (Gửi dữ liệu):** Khi một task chạy ngầm cần bạn nhập thông tin (ví dụ: nhập API key, xác nhận cổng port, hoặc lựa chọn phương án thiết kế), bạn có thể gửi text trực tiếp vào tiến trình đó mà không cần mở lại chat chính.
4. **`kill` (Hủy bỏ):** Dừng ngay lập tức một tiến trình chạy ngầm nếu bạn thấy nó bị treo, chạy sai hướng hoặc tốn quá nhiều tài nguyên.

---

## 3. Lên lịch trình tự động với `/schedule`

Một tính năng cực kỳ mạnh mẽ dành cho các kỹ sư Vibe Coding chuyên nghiệp là **`/schedule`** (Hẹn giờ/Đặt lịch). Nó hỗ trợ 2 chế độ chính:

### Chế độ 1: One-shot timer (Hẹn giờ chạy 1 lần)
Sử dụng khi bạn chuẩn bị thực hiện một tác vụ tốn nhiều thời gian (ví dụ: build production bundle hoặc deploy lên Vercel) và bạn muốn Agent nhắc nhở hoặc kiểm tra hộ bạn sau một khoảng thời gian.
- **Ví dụ:** `/schedule DurationSeconds=300, Prompt="Hãy check xem trang web đã deploy lên Vercel xong chưa và chạy thử link deploy xem có lỗi không."`

### Chế độ 2: Recurring cron (Chạy định kỳ lặp lại)
Sử dụng cú pháp tiêu chuẩn 5 trường của Cron (minute, hour, day, month, weekday) để lặp lại một hành động.
- **Ví dụ:** `/schedule CronExpression="*/15 * * * *", Prompt="Chạy linter và auto-tests để đảm bảo code của tôi không có lỗi cú pháp mới nào."`
- Điều này giống như bạn có một kỹ sư QA tự động chạy kiểm thử **mỗi 15 phút** ngay trong workspace của mình!

---

## 4. Phối hợp & Tránh xung đột (Coordination & Conflict Resolution)

Khi chạy song song nhiều Agent trên cùng một codebase, xung đột là điều không thể tránh khỏi. Antigravity 2.0 sử dụng các cơ chế thông minh sau để điều phối:

### 4.1 Tránh sửa đè file (Workspace Isolation)
Nếu Agent A và Agent B cùng muốn sửa file `App.tsx`:
- Antigravity sẽ tự động tạo hàng đợi (Queue) hoặc cách ly hai Agent này vào hai Git Worktree khác nhau.
- Sau khi Agent A hoàn thành và merge code, Agent B sẽ tự động nhận được thông báo để pull code mới nhất về và thực hiện tính năng của mình trên nền code đã cập nhật.

### 4.2 Giao tiếp qua Artifacts (Shared State)
Các Agent con giao tiếp với nhau và báo cáo cho Parent Agent thông qua các file Markdown trung gian (`implementation_plan.md`, `task.md`).
- **Ví dụ:** Agent viết Test (Subagent C) sẽ liên tục đọc file `task.md` để xem Agent code API (Subagent B) đã hoàn thành phần việc của mình chưa (`[x] Subagent B completed`). Khi thấy dấu tích xanh xuất hiện, Subagent C mới tự động kích hoạt tiến trình viết test của mình.

### 4.3 Error Handling Patterns (Xử lý lỗi tự động)
Nếu một Agent con gặp lỗi nghiêm trọng (ví dụ: npm build thất bại do thiếu thư viện):
1. **Auto-retry with backoff:** Nó tự động cài đặt lại package hoặc thử các phương án code thay thế.
2. **Graceful degradation:** Nếu task phụ bị lỗi (như generate tài liệu), nó sẽ bỏ qua để hoàn thành trước các task chính (như code tính năng).
3. **Human escalation:** Nếu không thể tự sửa, nó sẽ dừng ngầm và gửi thông báo khẩn cấp lên `/agents` panel để bạn can thiệp: *"Tôi không thể kết nối tới Database của bạn, vui lòng kiểm tra lại connection string."*

---

## 📝 Tóm tắt bài học

| Tính năng | Lợi ích thực tế | Cách kiểm soát |
|---|---|---|
| **Async Parallel** | Chạy nhiều việc cùng lúc, nhanh gấp 3 lần, không khóa IDE. | Theo dõi trên `/agents` panel. |
| **`manage_task`** | Quản lý tiến trình ngầm: xem trạng thái, gửi input, dừng task. | Click giao diện hoặc gõ lệnh chat. |
| **`/schedule`** | Hẹn giờ hoặc chạy định kỳ (cron) để giám sát, test tự động. | Dùng cú pháp cron hoặc giây tùy chọn. |
| **Coordination** | Tránh xung đột file, tự động hàng đợi và giao tiếp qua `task.md`. | Tự động xử lý dưới nắp máy. |

---

## ⏭️ Bài tiếp theo

**[Bài 6: Workshop — Build feature phức tạp với Multi-Agent](lesson-06-workshop-multi-agent-feature.md)** — Bài học thực hành cuối cùng của Section! Bạn sẽ được giao một bài tập thực tế lớn, áp dụng toàn bộ kiến thức về Subagents, `/goal`, `/grill-me`, `/browser`, và Background Tasks để xây dựng một tính năng hoàn chỉnh từ A-Z.

---

*📚 Multi-Agent Systems & Orchestration · Google Antigravity: Xây dựng AI Agent, AI App & Vibe Coding*
