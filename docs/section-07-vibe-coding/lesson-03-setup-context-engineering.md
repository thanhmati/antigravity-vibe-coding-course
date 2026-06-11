# 📘 Bài 3: Setup Môi trường & Khởi tạo Context Engineering

> **Section 7** · Vibe Coding Dự Án Thực Tế  
> **Thời lượng:** ~30 phút  
> **Yêu cầu:** Đã hoàn thành Bài 2

---

## 🎯 Mục tiêu bài học

Sau bài này, bạn sẽ:
- ✅ Khởi tạo thành công dự án React (Vite) bằng câu lệnh CLI không tương tác (`non-interactive`).
- ✅ Cài đặt công cụ Stitch CLI và cấu hình môi trường thiết kế.
- ✅ Thiết lập cơ chế **Context Engineering** giúp AI Agent nắm bắt chính xác cấu trúc thư mục của dự án mà không cần giải thích lại nhiều lần.

---

## 1. Khởi tạo dự án React (Vite)

Trong Vibe Coding, việc thiết lập dự án cần được tối ưu nhanh chóng. Chúng ta sẽ sử dụng Vite để tạo bộ khung ReactJS cực nhẹ.

### Lệnh chạy trên Terminal:
Sử dụng cờ `--template react-ts` (hoặc `react` nếu bạn muốn dùng JavaScript thuần túy) và đặt chế độ cài đặt tự động.

```bash
# Khởi tạo project React + TypeScript sử dụng Vite
npm create vite@latest vibespace-app -- --template react-ts

# Di chuyển vào thư mục dự án
cd vibespace-app

# Cài đặt dependencies cơ bản
npm install
```

---

## 2. Cài đặt Stitch CLI & Kích hoạt MCP

Stitch là MCP Server thiết kế giao diện giúp AI Agent "nhìn thấy" và tạo ra các mockups UI sống động trước khi build code.

### Bước 1: Setup Stitch CLI
Cài đặt Stitch toàn cục (hoặc trực tiếp qua npx):
```bash
npm install -g @stitch/cli
```

### Bước 2: Khởi tạo Stitch trong dự án
Chạy lệnh init để cấu hình môi trường thiết kế:
```bash
stitch init
```
Lệnh này sẽ tạo ra một folder ẩn là `.stitch/` nơi lưu trữ các metadata thiết kế, các file design mockup thô và file `DESIGN.md` (Design System).

---

## 3. Thiết lập Context Engineering cho Agent

**Context Engineering** là cách bạn tổ chức thông tin dự án để AI Agent (như Antigravity) hiểu rõ ngữ cảnh mà không bị quá tải bộ nhớ (Context Limit).

Chúng ta sẽ tạo các tài liệu chỉ dẫn cho AI Agent nằm trong thư mục gốc.

### Tạo file chỉ dẫn `.agentcontext`
File `.agentcontext` (hoặc `.clinerules`) là một file markdown chứa các quy tắc phát triển dự án để Agent luôn tuân theo mỗi khi đọc workspace.

#### 💬 Prompt yêu cầu AI khởi tạo Context:
> *"Hãy tạo file `.agentcontext` ở thư mục gốc của dự án React này. Quy định các quy tắc sau cho AI Agent khi làm việc:
> 1. Luôn tuân thủ tài liệu thiết kế `.stitch/DESIGN.md` khi viết CSS/Component.
> 2. Luôn cập nhật tiến trình vào file `PLAN.md` mỗi khi hoàn thành xong một task.
> 3. Cấu trúc folder React: Các components đa dụng nằm trong `src/components/`, các pages chính nằm trong `src/pages/`, styles nằm trong `src/index.css`."*

---

## 🛠️ Thực hành bài học

1. Mở Terminal tích hợp trong Antigravity IDE.
2. Chạy lệnh khởi tạo project React + Vite (`vibespace-app`).
3. Khởi tạo Stitch bằng cách chạy `stitch init` trong thư mục dự án.
4. Yêu cầu Agent tạo file `.agentcontext` theo prompt hướng dẫn ở trên.
5. Chạy thử server phát triển local:
   ```bash
   npm run dev
   ```
   Kiểm tra xem ứng dụng mặc định của Vite đã khởi chạy thành công chưa.

---

## 🏁 Checkpoint hoàn thành

- [ ] Folder dự án `vibespace-app` đã được tạo thành công với cấu trúc React + Vite.
- [ ] Folder `.stitch/` được khởi tạo.
- [ ] File `.agentcontext` được cấu hình để định hướng Agent.
- [ ] Lệnh `npm run dev` khởi chạy local server thành công mà không gặp lỗi.

---

<div align="center">

[← Bài 2: Viết PRD & Lập kế hoạch](lesson-02-prd-and-project-planning.md) · [Mục lục Section 7](README.md) · [Bài 4: Thiết kế Design System →](lesson-04-design-system-with-stitch.md)

</div>
