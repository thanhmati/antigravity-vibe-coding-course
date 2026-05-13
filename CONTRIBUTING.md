# 🤝 Contributing — Hướng Dẫn Đóng Góp

> Cảm ơn bạn đã quan tâm đến việc đóng góp cho khóa học!

---

## 💡 Ways to Contribute

| Type | Description | How |
|------|-------------|-----|
| 🐛 **Bug Report** | Lỗi chính tả, link hỏng, code sai | [Open Issue](../../issues/new?template=bug_report.md) |
| 📝 **Content Fix** | Sửa nội dung chưa chính xác | Submit a Pull Request |
| 💡 **Feature Request** | Đề xuất bài học mới | [Open Issue](../../issues/new?template=feature_request.md) |
| ❓ **Question** | Hỏi về nội dung bài học | [Open Issue](../../issues/new?template=question.md) |

---

## 🚀 Getting Started

```bash
# 1. Fork & Clone
git clone https://github.com/<your-username>/antigravity-vibe-coding-course.git
cd antigravity-vibe-coding-course

# 2. Create branch
git checkout -b fix/typo-section-3

# 3. Make changes & commit
git commit -m "fix: correct typo in section 3 lesson 2"

# 4. Push & create PR
git push origin fix/typo-section-3
```

**Branch naming:** `fix/`, `feat/`, `docs/`, `refactor/`

---

## ✍️ Style Guide

### Markdown Conventions

| Element | Convention |
|---------|-----------|
| **Headings** | 1 `h1` per file, `#` tăng dần |
| **Emoji** | Dùng cho headings chính: `## 🎯 Mục tiêu` |
| **Code blocks** | Luôn chỉ rõ language |
| **Links** | Relative links cho nội bộ repo |

### File Naming

- Tên file: **lowercase, kebab-case** (e.g. `lesson-01-what-is-context-engineering.md`)
- Section folders: **section-XX-name/** (e.g. `section-04-context-engineering/`)

### Lesson Template

```markdown
# 📘 Bài X: [Tên bài]

> **Section:** [Tên section]  
> **Thời lượng:** XX-XX phút  
> **Yêu cầu:** [Prerequisites]

---

## 🎯 Mục tiêu bài học
## [Nội dung chính]
## 📝 Tóm tắt bài học
## ⏭️ Bài tiếp theo
```

---

## 🔄 Pull Request Process

1. PR chỉ thay đổi files liên quan
2. Update `docs/SUMMARY.md` nếu thêm bài mới
3. Follow style guide
4. Test markdown rendering trên GitHub preview

### Commit Messages: `<type>: <description>`

Types: `fix`, `feat`, `docs`, `refactor`, `style`

---

## 📜 Code of Conduct

- 🤝 Tôn trọng mọi người
- 💬 Phản hồi mang tính xây dựng
- 🌍 Chào đón mọi trình độ

---

<div align="center">

[← Quay về README](README.md)

</div>
