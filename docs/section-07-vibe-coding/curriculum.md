# 📋 Chương trình đào tạo (Curriculum) · Section 7

## 🎨 Vibe Coding Dự Án Thực Tế: VibeSpace Studio (React + Stitch MCP)

> **Thời lượng:** ~6 - 8 giờ thực hành  
> **Phương pháp:** Specs-Driven Vibe Coding (Lập trình dựa trên tài liệu đặc tả cùng AI Agent)  
> **Công nghệ:** ReactJS, Vite, Tailwind CSS / Vanilla CSS, Stitch MCP, GitHub MCP, YouTube Player API

---

## 🎯 Mục tiêu tổng quan

Sau khi hoàn thành Section 7, học viên sẽ:
1. **Làm chủ quy trình Vibe Coding chuyên nghiệp**: Từ ý tưởng ban đầu -> tài liệu đặc tả (PRD) -> thiết kế UI mockup (Stitch) -> tự động tạo code React (`react-components` skill) -> lập trình logic -> tối ưu và deploy.
2. **Khai thác tối đa hệ sinh thái AI MCP**: Sử dụng thành thạo Stitch MCP (Designer) và GitHub MCP (DevOps/Git) kết hợp cùng Antigravity IDE.
3. **Thành thạo Context Engineering**: Biết cách cung cấp context chuẩn xác để AI Agent code đúng ngay từ lần đầu, giảm thiểu tối đa lỗi logic hoặc sai lệch thiết kế.
4. **Sở hữu dự án thực chiến cao cấp**: Có một ứng dụng Ambient Space & Productivity Dashboard (VibeSpace Studio) cực kỳ bắt mắt để đưa vào portfolio cá nhân.

---

## 📚 Nội dung chi tiết 11 bài học

### Bài 7.1: Tổng quan Vibe Coding & Giới thiệu VibeSpace
*   **Thời lượng:** 30 phút
*   **Mô tả:** Giới thiệu triết lý Vibe Coding (Andrej Karpathy 2025), sự dịch chuyển vai trò từ coder thành Product Manager điều phối AI Agent, và giới thiệu các tính năng của dự án VibeSpace Studio.
*   **Mục tiêu học tập:** Hiểu rõ mind-set "Vibe Coding" và workflow tổng thể của Section 7.
*   **Sản phẩm đầu ra:** Nắm vững cấu trúc ứng dụng đích cần đạt được.

### Bài 7.2: Specs-Driven Vibe Coding – Viết PRD & Lập kế hoạch
*   **Thời lượng:** 35 phút
*   **Mô tả:** Học cách hướng dẫn Agent tạo tài liệu PRD (`PRD.md`) và kế hoạch phát triển (`PLAN.md`) chi tiết. Học cách thiết kế spec rõ ràng trước khi viết code để tránh AI "đi lạc".
*   **Mục tiêu học tập:** Biết cách prompt để AI phân tích tính năng, định nghĩa data model và lên roadmap từng phần.
*   **Sản phẩm đầu ra:** File `PRD.md` và `PLAN.md` chuẩn chỉ trong dự án.

### Bài 7.3: Setup Môi trường & Khởi tạo Context Engineering
*   **Thời lượng:** 30 phút
*   **Mô tả:** Khởi tạo project React (Vite) trong workspace. Hướng dẫn cài đặt công cụ Stitch CLI và nạp các skills cần thiết cho Agent. Thiết lập các file context cho dự án.
*   **Mục tiêu học tập:** Thiết lập workspace sạch, sẵn sàng giao quyền cho AI Agent đọc/ghi file và tương tác với Stitch.
*   **Sản phẩm đầu ra:** Project React trống chạy trên local dev server kèm theo cấu hình Stitch hoàn chỉnh.

### Bài 7.4: Thiết kế Design System với Stitch
*   **Thời lượng:** 45 phút
*   **Mô tả:** Thiết lập bộ nhận diện thiết kế Cyber-Zen thông qua skill `design-md`. Xác định bảng màu HSL, typography (Outfit font), và các thông số Glassmorphism (backdrop-filter, border opacity).
*   **Mục tiêu học tập:** Nắm vững cách xây dựng Design Tokens bằng AI để các UI screen đồng bộ hoàn toàn về mặt mỹ thuật.
*   **Sản phẩm đầu ra:** File `.stitch/DESIGN.md` chứa định nghĩa thiết kế hệ thống.

### Bài 7.5: Tạo UI Màn hình Sảnh chờ (Lobby UI) với Stitch
*   **Thời lượng:** 50 phút
*   **Mô tả:** Thiết kế màn hình Lobby (đầu vào của ứng dụng) hiển thị welcome message, statistics mock (số người đang tập trung) và nút CTA chuyển vào Không gian focus.
*   **Mục tiêu học tập:** Sử dụng Stitch MCP để phác thảo và tinh chỉnh layout thô, định dạng lưới/ flexbox của screen đầu tiên.
*   **Sản phẩm đầu ra:** Mockup thiết kế cho màn hình Lobby lưu trong thư mục Stitch.

### Bài 7.6: Tạo UI Màn hình Focus Studio & các Widget
*   **Thời lượng:** 50 phút
*   **Mô tả:** Thiết kế màn hình lõi `/space` chứa đồng hồ Pomodoro chính giữa và các panel bên trái/phải chứa widget: Mixer, YouTube, Todo, Scene Switcher.
*   **Mục tiêu học tập:** Sử dụng `stitch-loop` và `enhance-prompt` để điều hướng Agent tạo layout 3 cột dạng Dashboard phức tạp với hiệu ứng Glassmorphism.
*   **Sản phẩm đầu ra:** Mockup chi tiết cho các Widget và màn hình Space.

### Bài 7.7: Convert Design sang React Components
*   **Thời lượng:** 55 phút
*   **Mô tả:** Hướng dẫn sử dụng skill `react-components` để quét các mockup thiết kế của Stitch và tự động sinh code React Component sạch đẹp (JSX/TSX) và CSS đồng bộ.
*   **Mục tiêu học tập:** Hiểu cách AI ánh xạ các phần tử thiết kế thô thành cấu trúc Component phân rã, tái sử dụng được trong React.
*   **Sản phẩm đầu ra:** Các file React component tĩnh: `PomodoroTimer.tsx`, `AmbientMixer.tsx`, `LofiPlayer.tsx`, `TodoChecklist.tsx`, `SceneSelector.tsx`.

### Bài 7.8: GitHub Workflow Tự động với GitHub MCP
*   **Thời lượng:** 45 phút
*   **Mô tả:** Kết nối dự án với Git. Sử dụng GitHub MCP thông qua Agent để tự động hóa: tạo branch tính năng, commit định kỳ, đẩy PR (Pull Request), và thực hiện merge.
*   **Mục tiêu học tập:** Sử dụng AI quản lý mã nguồn, giảm tải thao tác Git thủ công và tạo thói quen làm việc theo nhánh tính năng.
*   **Sản phẩm đầu ra:** Nhánh git sạch sẽ, các commit được viết mô tả rõ ràng bằng AI và PR được phê duyệt.

### Bài 7.9: Tích hợp Logic (Pomodoro, Audio Mixer, YouTube API)
*   **Thời lượng:** 45 phút
*   **Mô tả:** Đổ logic nghiệp vụ (business logic) vào các component React tĩnh. Thiết lập state tập trung (STATE engine), quản lý Web Audio API cho mixer, khởi tạo YouTube IFrame API và kết nối LocalStorage lưu Todo.
*   **Mục tiêu học tập:** Từng bước dẫn dắt Agent tích hợp JS logic từ phiên bản Vanilla cũ sang cấu trúc Hooks và Lifecycle của React.
*   **Sản phẩm đầu ra:** Ứng dụng chạy mượt mà tất cả các tính năng cơ bản trên máy học viên.

### Bài 7.10: Tối ưu UI, Transition & Hoạt ảnh SVG
*   **Thời lượng:** 45 phút
*   **Mô tả:** Polish giao diện: thêm transition chuyển trang mượt mà (View Transitions API hoặc CSS), hoạt ảnh SVG Breathing Bubble (bong bóng nhịp thở thiền định), responsive cho tablet/mobile và fix các bug hiển thị.
*   **Mục tiêu học tập:** Nâng cấp trải nghiệm người dùng (UX) để đạt chuẩn "Stunning and WOW design" như guidelines.
*   **Sản phẩm đầu ra:** Ứng dụng VibeSpace hoàn hảo, đẹp mắt trên mọi kích thước màn hình.

### Bài 7.11: Review, Tối ưu hóa & Deploy
*   **Thời lượng:** 35 phút
*   **Mô tả:** Hướng dẫn deploy ứng dụng lên Vercel/Netlify hoặc GitHub Pages. Tổng kết các bài học về Prompt Engineering, cách sửa lỗi khi Agent sinh code sai, và tư duy phát triển sản phẩm thời đại AI.
*   **Mục tiêu học tập:** Đóng gói sản phẩm, xuất bản ra Internet và nắm vững phương pháp khắc phục lỗi thường gặp của AI.
*   **Sản phẩm đầu ra:** Đường link deploy thực tế của VibeSpace và chứng nhận hoàn thành khóa học.

---

<div align="center">

[← Bài 1: Tổng quan](lesson-01-vibe-coding-overview.md) · [Mục lục Section 7](README.md) · [Bài 2: Viết PRD →](lesson-02-prd-and-project-planning.md)

</div>
