# Bài 2: Specs-Driven Vibe Coding – PRD & Định hướng Thiết kế

Trong quy trình **Vibe Coding**, AI Agent đóng vai trò là một lập trình viên cao cấp (Developer), còn bạn đóng vai trò là Người quản lý sản phẩm (Product Manager - PM) hoặc Nhà phân tích nghiệp vụ (Business Analyst - BA). 

Để AI có thể xây dựng ứng dụng chính xác theo mong muốn của bạn mà không phải sửa đi sửa lại nhiều lần, vũ khí quan trọng nhất của bạn chính là **PRD (Product Requirements Document - Tài liệu Yêu cầu Sản phẩm)**.

Bài học này sẽ cung cấp cho bạn bản PRD rút gọn tiêu chuẩn của dự án **VibeSpace** và **Template Prompt** giúp bạn tự động sinh ra PRD cho bất kỳ dự án nào khác.

---

## 1. Bản PRD: VibeSpace v1.0

## 1. Project Overview (Tổng quan dự án)
**VibeSpace** là một ứng dụng web (web application) cá nhân hóa, tối giản và có tính thẩm mỹ cao, được thiết kế để giúp user tập trung, học tập và thư giãn. Đây là một workspace không cần thiết lập (zero-setup): user có thể mở trang web và ngay lập tức sử dụng mọi tính năng mà không cần đăng ký hay đăng nhập tài khoản.

Mục tiêu là tạo ra một môi trường liền mạch (seamless), không gây xao nhãng, kết hợp giữa âm thanh (Lofi & White Noise), hình ảnh (background thư giãn) và các công cụ tối ưu năng suất (Pomodoro Timer & Daily Todo List).

---

## 2. Target Audience (Đối tượng mục tiêu)
- Học sinh, sinh viên cần môi trường học tập.
- Remote worker, developer và writer đang tìm kiếm một không gian làm việc tập trung (focus space).
- Bất kỳ ai đang tìm kiếm một dashboard đơn giản, thư giãn để quản lý công việc hàng ngày trong khi nghe các âm thanh ambient.

---

## 3. Product Principles (Nguyên tắc sản phẩm)
- **Instant Gratification (Trải nghiệm tức thì):** Không có rào cản đăng ký/đăng nhập. Tải trang (load) và sử dụng ngay lập tức.
- **Aesthetic Excellence (Thẩm mỹ vượt trội):** Giao diện người dùng (UI) theo phong cách Glassmorphism cao cấp, hiện đại với các hiệu ứng chuyển cảnh (transitions) mượt mà và hình ảnh được chọn lọc kỹ lưỡng.
- **Local-First (Ưu tiên lưu trữ cục bộ):** Tất cả tùy chọn của user, playlist tùy chỉnh và các todo item đều được lưu cục bộ trong trình duyệt của user (`localStorage`).
- **Simplicity (Sự tối giản):** Giảm thiểu sự lộn xộn của UI. Các control panel có thể tự động ẩn đi (fade out) hoặc dễ dàng bật/tắt (toggle) để user tập trung hoàn toàn vào công việc.

---

## 4. Feature Requirements (Yêu cầu tính năng)

### 4.1. YouTube Lofi Music Player (Trình phát nhạc YouTube Lofi)
- **Core Functionality (Tính năng cốt lõi):** Tích hợp trình phát nhạc YouTube sử dụng YouTube Iframe API.
- **Default Playlists (Playlist mặc định):** Hệ thống tự động chọn sẵn một danh sách các luồng livestream/playlist Lofi chất lượng cao (ví dụ: Lofi Girl, Chillhop, Cozy Coffee Shop).
- **Search & Customization (Tìm kiếm & Tùy biến):**
  - User có thể copy và paste trực tiếp bất kỳ URL Video hoặc Playlist nào từ YouTube để load và phát nhạc.
- **Controls (Bộ điều khiển):**
  - Play, Pause, Next, Previous track (nếu là playlist).
  - Điều chỉnh âm lượng (volume control) riêng biệt cho trình phát (độc lập với âm lượng hệ thống).
  - Bật/tắt hiển thị metadata của track (Title, Channel).

### 4.2. Ambient White Noise Mixer (Bộ trộn âm thanh nền Ambient)
- **Core Functionality (Tính năng cốt lõi):** Một panel dạng floating để phát và mix đồng thời nhiều vòng lặp âm thanh (sound loops).
- **Sound Catalog (Danh mục âm thanh - Tối thiểu 5 loại):**
  - Tiếng mưa rơi / Bão sấm sét (Rain / Thunderstorm)
  - Tiếng lửa trại tách bách (Crackling Campfire)
  - Tiếng gió / Gió thổi rừng thông (Wind / Forest Breeze)
  - Tiếng sóng biển / Bờ biển (Ocean Waves / Sea Shore)
  - Không gian quán cà phê (Coffee Shop Ambience)
- **Controls (Bộ điều khiển):**
  - Nút Master Mute/Unmute.
  - Bật/tắt (Toggle ON/OFF) cho từng loại âm thanh.
  - Thanh trượt âm lượng (volume slider) riêng cho từng âm thanh để user tự mix theo sở thích.
- **Audio Delivery (Phương thức truyền tải âm thanh):** Tải file từ các CDN trực tuyến tốc độ cao chứa các file ambient sound lặp (looping) miễn phí bản quyền để giữ cho mã nguồn (repository) siêu nhẹ.

### 4.3. Aesthetic Background Switcher (Bộ chuyển đổi ảnh nền thẩm mỹ)
- **Core Functionality (Tính năng cốt lõi):** Thay đổi vibe không gian làm việc bằng các hình nền chất lượng cao, đậm chất thư giãn.
- **Visual Options (Tùy chọn hình ảnh):**
  - Bộ sưu tập hình nền phong cảnh độ phân giải cao được chọn lọc (Rừng thông, Đại dương, Căn phòng ấm cúng, Núi non).
  - Hỗ trợ tải ảnh nền từ URL tùy chỉnh của user.
- **Visual Style (Phong cách hiển thị):** Lớp phủ (overlay) phong cách Glassmorphism với độ mờ (opacity) có thể tùy chỉnh.

### 4.4. Pomodoro Timer (Đồng hồ Pomodoro)
- **Core Functionality (Tính năng cốt lõi):** Trung tâm của Zen dashboard. Hiển thị đồng hồ đếm ngược kỹ thuật số trực quan.
- **Cycles (Chu kỳ hoạt động):**
  - Focus Session (Mặc định: 25 phút)
  - Short Break (Mặc định: 5 phút)
  - Long Break (Mặc định: 15 phút)
- **Controls (Bộ điều khiển):** Start, Pause, Reset, Skip.
- **Notifications (Thông báo):** Âm thanh chime nhẹ nhàng khi kết thúc một chu kỳ, kết hợp hiệu ứng nhấp nháy (flashing) tiêu đề tab trên trình duyệt.
- **Settings (Cài đặt):** Cho phép tùy chỉnh thời gian của Focus, Short Break và Long Break.

### 4.5. Daily Todo List (Danh sách công việc hàng ngày)
- **Core Functionality (Tính năng cốt lõi):** Một checklist công việc hàng ngày.
- **Interaction (Tương tác):** Add task, toggle completion (đánh dấu hoàn thành), delete.
- **Daily Reset Logic (Logic tự động reset theo ngày):**
  - Tự động xóa sạch/reset danh sách khi hệ thống phát hiện sang ngày mới dựa trên múi giờ địa phương (local timezone) của user khi họ mở hoặc reload trang web.

### 4.6. Zen Layout & Floating UI Widgets (Bố cục Zen & Các widget nổi)
- **Zen Focus Layout (Bố cục tập trung):** Theo mặc định, giao diện cực kỳ trống trải và sạch sẽ, chỉ hiển thị đồng hồ Pomodoro lớn ở chính giữa và hình nền thư giãn.
- **Floating Controls (Điều khiển dạng nổi):** Các widget phụ (Music Player, Sound Mixer, Todo List) được truy cập thông qua các nút floating action buttons (FABs) tối giản. Khi click vào một button sẽ mở ra một panel overlay mờ ảo dạng Glassmorphism để user thao tác.

---

## 5. Non-Functional Requirements (Yêu cầu phi chức năng)
- **Performance (Hiệu năng):** Thời gian tải trang ban đầu cực nhanh (LCP < 1.5 giây). Các luồng âm thanh phải được tối ưu hóa/nén để tải nhanh nhất.
- **Responsiveness (Giao diện đáp ứng):** Responsive tốt từ màn hình desktop cho đến màn hình mobile (mặc dù desktop là use-case chính).
- **Browser Compatibility (Độ tương thích trình duyệt):** Hoạt động tốt trên tất cả các trình duyệt hiện đại (Chrome, Safari, Firefox, Edge).
- **Reliability (Độ tin cậy):** Âm thanh phải loop mượt mà, không có khoảng dừng ngắt quãng dễ nhận thấy hoặc gây rò rỉ bộ nhớ (memory leaks).

---

## 6. Out of Scope (V1) (Nằm ngoài phạm vi phiên bản 1)
- Tài khoản người dùng (user accounts), đồng bộ hóa đám mây (cloud sync) và biểu đồ lịch sử làm việc.
- Không gian làm việc chung (collaborative workspaces - phòng học tập chung).
- Tích hợp trực tiếp Spotify/Apple Music (do giới hạn API và yêu cầu xác thực người dùng).

---

## 2. Template Prompt sinh ra PRD cho mọi dự án

Khi bạn có một ý tưởng ứng dụng mới và muốn AI Agent lập trình cho mình, hãy copy template dưới đây, điền đầy đủ thông tin vào các phần trong ngoặc vuông `[...]` và gửi cho AI (Gemini, Claude, GPT). AI sẽ lập tức tạo ra một bản PRD chuẩn chỉnh, đơn giản và dễ hiểu tương tự như trên.

```markdown
Bạn là một Product Manager (PM) và Business Analyst (BA) chuyên nghiệp. Hãy viết một bản tài liệu yêu cầu sản phẩm (PRD) đơn giản, tập trung hoàn toàn vào trải nghiệm người dùng, hành vi giao diện và tiêu chí chấp nhận (Acceptance Criteria). 

Hãy viết bằng Tiếng Việt, sử dụng định dạng Markdown rõ ràng, KHÔNG đưa code hoặc các đặc tả kỹ thuật phức tạp vào tài liệu này.

Thông tin về dự án của tôi như sau:
1. Tên ứng dụng: [Điền tên app, ví dụ: SmartTask]
2. Ý tưởng cốt lõi & Vấn đề cần giải quyết: [Mô tả ngắn gọn app làm gì và giải quyết nỗi đau nào của người dùng]
3. Người dùng mục tiêu: [Ai là người dùng chính của app này?]
4. Định hướng giao diện & Bố cục:
   - Phong cách thiết kế: [Ví dụ: Sáng sủa, Tối giản, Glassmorphism, Neumorphism, hay Dark Mode mặc định...]
   - Bố cục chính (Layout): [Mô tả sơ qua vị trí các widget trên màn hình]
5. Các tính năng chính muốn xây dựng (Kèm mô tả ngắn cho từng tính năng):
   - Tính năng 1: [Ví dụ: Bộ lọc công việc thông minh theo độ ưu tiên]
   - Tính năng 2: [Ví dụ: Thống kê năng suất cuối ngày bằng biểu đồ]
   - Tính năng 3: [Ví dụ: ...]
6. Những thứ KHÔNG LÀM ở phiên bản đầu tiên (Out of Scope): [Ví dụ: Không đăng nhập, không cơ sở dữ liệu cloud, chỉ chạy trên máy khách...]

Hãy tạo PRD theo cấu trúc chuẩn:
- 📌 Tổng quan sản phẩm
- 🎨 Định hướng Thiết kế & Bố cục (Layout & Design Direction)
- ⚙️ Chi tiết các tính năng chính (Với mỗi tính năng phải có: Mô tả, Hành vi người dùng mong muốn, và Tiêu chí chấp nhận - Acceptance Criteria dạng checkbox)
- 🚫 Phạm vi KHÔNG làm (Out of Scope)
```

---

### 💡 Hướng dẫn thực hành cho học viên
1. **Bước 1:** Đọc kỹ bản PRD của **VibeSpace** ở trên để hình dung rõ cấu trúc một tài liệu yêu cầu sản phẩm dành cho Vibe Coding.
2. **Bước 2:** Copy **Template Prompt** ở trên.
3. **Bước 3:** Thử điền thông tin cho một ứng dụng khác (ví dụ: *Ứng dụng ghi chú âm thanh bằng giọng nói* hoặc *Bảng theo dõi thói quen hàng ngày*).
4. **Bước 4:** Gửi prompt cho AI để xem kết quả PRD được sinh ra. Bạn sẽ thấy AI hiểu cực kỳ nhanh và chuẩn xác mong muốn thiết kế của bạn!
