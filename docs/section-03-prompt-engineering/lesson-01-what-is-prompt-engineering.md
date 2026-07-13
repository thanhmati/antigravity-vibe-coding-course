# 📘 Bài 3.1: Prompt Engineering cho AI Agent là gì?

> **Section 3** · Prompt Engineering for AI Agents
> **Thời lượng:** ~20 phút | 📖 Theory
> **Yêu cầu:** Đã hoàn thành Section 1-2

---

## 🎯 Mục tiêu bài học

Sau bài này, bạn sẽ:

- ✅ Hiểu **Prompt Engineering** là gì trong bối cảnh AI Agent
- ✅ Phân biệt được **Prompt cho Chatbot** vs **Prompt cho AI Agent** — tại sao chúng khác nhau hoàn toàn
- ✅ Nắm tại sao prompt ảnh hưởng trực tiếp đến **cách Agent suy nghĩ và hành động**
- ✅ Nhận ra tầm quan trọng cốt lõi của kỹ năng này trong **Vibe Coding thực chiến**

---

## 1. Prompt Engineering là gì?

> **Định nghĩa:** Prompt Engineering là kỹ thuật thiết kế và tối ưu hóa câu lệnh (prompt) để AI hiểu đúng yêu cầu và trả về kết quả mong muốn một cách nhất quán, đáng tin cậy.

Hãy tưởng tượng bạn vừa onboard một **Senior Software Engineer cực giỏi** vào team — người đó biết mọi ngôn ngữ lập trình, đọc mọi tài liệu kỹ thuật, không bao giờ mệt, làm việc 24/7. Nhưng có một điều: họ **chỉ làm đúng những gì bạn mô tả**. Nếu bạn mô tả mơ hồ, họ sẽ tự giả định — và giả định của họ không nhất thiết khớp ý bạn.

**Prompt Engineering** chính là kỹ năng "giao việc" cho người kỹ sư đó một cách rõ ràng, đầy đủ và hiệu quả.

---

## 2. Chatbot vs AI Agent — Một sự khác biệt sống còn

Đây là điểm quan trọng nhất mà đa số developer mới dùng Agent bỏ qua.

### Mô hình Chatbot (ChatGPT, Claude web)

```
Bạn → [Prompt] → AI → [Text trả lời] → Bạn đọc → Bạn tự làm
```

Chatbot chỉ **trả lời**. Bạn đọc câu trả lời, tự copy code, tự chạy terminal, tự sửa file. **Bạn là người thực thi.** Prompt tệ → câu trả lời dở → bạn đọc xong, bỏ qua, không mất gì lớn.

### Mô hình AI Agent (Google Antigravity)

```
Bạn → [Prompt] → AI Agent → [Lập kế hoạch] → [Thực thi tự động]
                                    ↓                  ↓
                               Chọn tools          Viết/xóa file
                               Phân tích code      Chạy terminal
                               Ra quyết định       Gọi API ngoài
                               Spawn subagents     Deploy code
```

AI Agent không chỉ trả lời — nó **hành động thật trên hệ thống của bạn**. Nó có thể:
- 📁 Đọc/ghi/xóa file trong project
- 💻 Chạy terminal commands (npm install, git commit...)
- 🌐 Gọi external API
- 🤖 Spawn subagents để làm việc song song
- 🚀 Deploy ứng dụng lên server

### So sánh hậu quả

| Tình huống | Chatbot | AI Agent |
|-----------|---------|----------|
| **Prompt tốt** | Câu trả lời hay, bạn copy-paste | Task hoàn thành tự động, chính xác |
| **Prompt tệ** | Câu trả lời sai → bạn đọc xong bỏ | Agent xóa nhầm file, viết sai 200 dòng, loop vô hạn |

> 💡 **Nguyên tắc vàng:** Với chatbot, prompt tệ tốn 30 giây đọc câu trả lời dở. Với AI Agent, prompt tệ có thể tốn 30 phút để undo những gì Agent đã làm.

---

## 3. Ví dụ thực tế — Cùng một prompt, khác nhau hoàn toàn

**Tình huống:** Bạn cần tạo một React Button component.

### ❌ Prompt tệ
```
"Tạo button"
```

**Chatbot nhận được:** Trả lời đoạn HTML `<button>Click me</button>`. Bạn thấy không đúng, thôi bỏ.

**AI Agent nhận được:** Agent không biết:
- Project dùng React hay Vue hay Svelte?
- Có TypeScript không?
- Styling: Tailwind, CSS Modules, hay styled-components?
- Button có variants không (primary, secondary, danger)?
- File đặt ở đâu? `src/components/` hay `src/ui/`?
- Export default hay named export?

→ Agent **tự giả định tất cả** và tạo file theo cách nó nghĩ là đúng. Kết quả: file sai cấu trúc, sai naming convention, không khớp codebase.

### ✅ Prompt tốt
```
Bạn là Senior React Developer.
Tạo component Button với các variants: primary, secondary, danger.
Tech stack: React 18, TypeScript, Tailwind CSS.
File đặt tại: src/components/ui/Button.tsx
Props: variant, size (sm/md/lg), disabled, onClick, children.
Output: file tsx hoàn chỉnh với TypeScript types đầy đủ.
```

**AI Agent nhận được:** Đủ thông tin để tạo file chính xác, đúng chỗ, đúng format ngay lần đầu.

---

## 4. Tại sao Agent cần nhiều context hơn Chatbot?

Chatbot trả lời một câu → kết thúc. AI Agent phải **ra hàng chục quyết định nhỏ** trong quá trình thực thi:

```
"Tạo button" → Agent phải quyết định:
├── Framework nào? (React/Vue/Svelte)
├── TypeScript hay JavaScript?
├── Tên file là gì? (Button.tsx / button.tsx / ButtonComponent.tsx)
├── Đặt ở thư mục nào?
├── Import style như thế nào?
├── Export theo kiểu nào?
├── Có viết test không?
├── Có update index.ts không?
└── Có tạo Storybook story không?
```

Mỗi quyết định sai có thể dẫn đến kết quả không như ý. **Prompt tốt giúp Agent không phải đoán mò.**

---

## 5. Prompt Engineering không phải "magic words"

Có một hiểu lầm phổ biến: nhiều developer nghĩ PE là tìm "từ thần kỳ" hay tricks đặc biệt để AI làm theo ý mình.

**Thực tế:** Prompt Engineering là **kỹ năng giao tiếp có cấu trúc** — giống như viết User Story trong Agile hay spec trong tech design doc.

```
❌ User Story tệ: "Làm tính năng đăng nhập"

✅ User Story tốt:
  Là người dùng mới,
  tôi muốn đăng nhập bằng email và password,
  để truy cập được dashboard cá nhân.
  Acceptance criteria:
  - Hiển thị lỗi cụ thể nếu sai email/password
  - Redirect về /dashboard nếu thành công
  - Disable button khi đang loading
```

Cấu trúc prompt tốt = cấu trúc spec tốt. Rõ ràng, cụ thể, đo lường được.

---

## 6. Ba cấp độ Prompt Engineering

```
🟢 Level 1 — Beginner: Mô tả task đơn giản
   "Tạo component LoginForm"

🟡 Level 2 — Intermediate: Thêm context và constraints
   "Tạo LoginForm bằng React + TypeScript,
    dùng Tailwind, có validation, file tại src/components/auth/"

🔴 Level 3 — Advanced: Framework RGCO đầy đủ
   [Role] + [Goal] + [Constraints] + [Output format]
   → Kết quả chính xác, nhất quán, dùng được ngay
```

**Mục tiêu của Section 3:** Đưa bạn từ Level 1 → Level 3 thông qua lý thuyết + demo + workshop thực hành.

---

## 🔑 Tóm tắt bài học

```
AI Agent ≠ Chatbot
Agent hành động thật → Prompt tệ có hậu quả thật

Prompt Engineering = Kỹ năng giao tiếp có cấu trúc
Không phải "magic words" — là spec rõ ràng cho Agent

Agent cần context để ra quyết định đúng
Ít context → Agent tự đoán → Kết quả không như ý
```

| Nguyên tắc | Giải thích |
|-----------|-----------|
| **Rõ ràng** | Không để Agent phải đoán điều gì |
| **Đầy đủ** | Cung cấp đủ context để Agent ra quyết định |
| **Cụ thể** | File path, tech stack, format output |
| **Có giới hạn** | Nói rõ những gì Agent KHÔNG được làm |

---

## ⏭️ Bài tiếp theo

Bài 3.1 đã cho bạn nền tảng tư duy. Bài 3.2 sẽ đi vào **những lỗi phổ biến nhất** mà developer mắc phải — để bạn nhận ra và tránh ngay từ đầu.

👉 **[Bài 3.2 → Các lỗi phổ biến khi viết Prompt](lesson-02-common-prompt-mistakes.md)**

---

*📚 Section 3 · Prompt Engineering for AI Agents · Google Antigravity: Xây dựng AI Agent, AI App & Vibe Coding*
