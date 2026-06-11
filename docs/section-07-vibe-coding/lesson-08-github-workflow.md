# 📘 Bài 8: GitHub Workflow Tự động với GitHub MCP

> **Section 7** · Vibe Coding Dự Án Thực Tế  
> **Thời lượng:** ~45 phút  
> **Yêu cầu:** Đã hoàn thành Bài 7

---

## 🎯 Mục tiêu bài học

Sau bài này, bạn sẽ:
- ✅ Hiểu cách kết nối GitHub MCP Server với Antigravity IDE.
- ✅ Biết cách ra lệnh cho AI Agent tự động quản lý Git: tạo branch mới, commit code, đẩy lên GitHub, tạo Pull Request (PR) và merge.
- ✅ Áp dụng quy trình làm việc theo nhánh tính năng (Feature branching) để code luôn sạch sẽ và có kiểm soát.

---

## 1. Tại sao cần Git Workflow tự động?

Khi Vibe Coding, tốc độ sinh code của AI Agent cực kỳ nhanh. Nếu bạn không commit thường xuyên hoặc không làm việc trên các nhánh (branches) riêng biệt:
- Bạn sẽ rất khó để "quay xe" (revert) khi AI sinh code lỗi hàng loạt.
- Codebase dễ bị xung đột (conflict) nếu bạn muốn phát triển song song nhiều tính năng.
- Việc kiểm soát lịch sử thay đổi (Git history) trở nên hỗn loạn.

Sử dụng **GitHub MCP** cho phép AI Agent đóng vai trò như một **DevOps Engineer**, tự lo toàn bộ phần thủ tục của Git để bạn tập trung tinh thần vào sản phẩm!

---

## 2. Kết nối và ủy quyền GitHub MCP

Trước khi chạy lệnh, đảm bảo GitHub MCP Server đã được cấu hình trong Antigravity IDE với Personal Access Token (PAT) của bạn và bạn đã khởi tạo git ở thư mục dự án:

```bash
git init
git add .
git commit -m "feat: initial static layout built by stitch"
```

---

## 3. Quản lý nhánh tính năng bằng Prompt

Chúng ta sẽ tạo một nhánh mới có tên `feat/integrate-logic` để bắt đầu phát triển phần logic nghiệp vụ cho VibeSpace ở bài học sau.

#### 💬 Prompt mẫu tạo nhánh và đẩy commit:
> *"Hãy sử dụng GitHub MCP thực hiện các bước sau:
> 1. Tạo một nhánh Git mới tên là `feat/integrate-logic` từ nhánh main hiện tại và chuyển sang nhánh đó.
> 2. Kiểm tra xem có thay đổi nào chưa commit không. Nếu có, hãy commit với message rõ ràng chuẩn Conventional Commits (ví dụ: 'feat: add route configurations and empty widget files').
> 3. Push nhánh này lên remote repository trên GitHub."*

#### 💬 Prompt mẫu tạo Pull Request (PR) sau khi hoàn tất code:
> *"Hãy tạo một Pull Request trên GitHub từ nhánh `feat/integrate-logic` vào nhánh `main`. 
> Viết phần mô tả PR thật chi tiết gồm: Các thay đổi đã thực hiện, danh sách component đã convert thành công, và cách test kiểm thử."*

---

## 🛠️ Thực hành bài học

1. Khởi tạo Git repository trong thư mục `vibespace-app` (nếu chưa làm).
2. Tạo repo mới trên GitHub cá nhân của bạn và set remote origin cho project local.
3. Sử dụng các prompt mẫu ở trên để yêu cầu Agent tạo branch `feat/integrate-logic`.
4. Xác nhận nhánh mới đã được tạo thành công bằng lệnh:
   ```bash
   git branch
   ```

---

## 🏁 Checkpoint hoàn thành

- [ ] Project đã liên kết thành công với một repository trên GitHub.
- [ ] AI Agent tự động chuyển đổi sang nhánh `feat/integrate-logic`.
- [ ] Toàn bộ trạng thái code hiện tại được commit sạch sẽ và push lên remote repository.

---

<div align="center">

[← Bài 7: Convert Design → Code](lesson-07-convert-design-to-react.md) · [Mục lục Section 7](README.md) · [Bài 9: Tích hợp Logic & APIs →](lesson-09-integrate-logic-and-apis.md)

</div>
