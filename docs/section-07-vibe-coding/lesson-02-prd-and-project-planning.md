# Bài 2: Specs-Driven Vibe Coding – PRD & Định hướng Thiết kế

Trong quy trình **Vibe Coding**, AI Agent đóng vai trò là một lập trình viên cao cấp (Developer), còn bạn đóng vai trò là Người quản lý sản phẩm (Product Manager - PM) hoặc Nhà phân tích nghiệp vụ (Business Analyst - BA). 

Để AI có thể xây dựng ứng dụng chính xác theo mong muốn của bạn mà không phải sửa đi sửa lại nhiều lần, vũ khí quan trọng nhất của bạn chính là **PRD (Product Requirements Document - Tài liệu Yêu cầu Sản phẩm)**.

Bài học này sẽ cung cấp cho bạn bản PRD rút gọn tiêu chuẩn của dự án **VibeSpace** và **Template Prompt** giúp bạn tự động sinh ra PRD cho bất kỳ dự án nào khác.

---

## 1. Bản PRD rút gọn: VibeSpace v1.0

> [!NOTE]
> Đây là bản PRD được viết hoàn toàn dưới lăng kính PM/BA: Tập trung mô tả **trải nghiệm người dùng (UX)**, **hành vi giao diện** và **tiêu chí chấp nhận (Acceptance Criteria)**. Tài liệu hoàn toàn không chứa code hay đặc tả kỹ thuật sâu để đảm bảo tính trực quan.

### 📌 Tổng quan sản phẩm
**VibeSpace** là một ứng dụng web giúp người dùng tạo ra một **không gian làm việc và học tập tập trung cá nhân hóa**. Người dùng mở trang web là có thể sử dụng ngay lập tức (không cần đăng ký tài khoản) để nghe nhạc lofi, bật tiếng mưa rơi, đếm giờ Pomodoro và quản lý các công việc cần làm trong ngày trên một giao diện thư giãn, tuyệt đẹp.

---

### 🎨 Định hướng Thiết kế & Bố cục (Design Direction & Layout)

Giao diện của VibeSpace được thiết kế theo phong cách tối giản, hiện đại và tập trung vào cảm xúc (Vibe):
* **Chủ đề (Theme):** Chế độ tối (Dark Mode) làm mặc định để chống mỏi mắt.
* **Phong cách UI:** Hiệu ứng **kính mờ (Glassmorphism)** (nền panel bán trong suốt kết hợp làm mờ hậu cảnh) tạo cảm giác cao cấp và chiều sâu.
* **Phông chữ:** Sử dụng phông chữ không chân hiện đại, thanh lịch (ví dụ: Google Font **Outfit**).
* **Bảng màu:** Màu tím/indigo (`#6366f1`, `#8b5cf6`) làm chủ đạo cho các nút bấm, màu xanh lá (`#10b981`) cho trạng thái hoàn thành công việc, màu đỏ/hồng cho hành động xóa.

#### 📐 Bố cục màn hình (Layout)
Màn hình được chia làm 3 khu vực chính nhằm giữ cho khoảng không ở giữa luôn thoáng đãng để ngắm cảnh nền:

```
┌────────────────────────────────────────────────────────────────────────┐
│ [Logo] VibeSpace                   ● 38 người đang tập trung           │ (Header)
├───────────────────┬────────────────────────────────┬───────────────────┤
│                   │                                │                   │
│ [Todo List]       │                                │ [YouTube Player]  │
│ (Trái - Trên)     │                                │ (Phải - Trên)     │
│                   │                                │                   │
│                   │      [Đồng hồ Pomodoro]        │                   │
│                   │          (Chính giữa)          │                   │
│                   │      (Trong suốt hoàn toàn)    │                   │
│                   │                                │ [Ambient Sounds]  │
│ [Chọn Cảnh Nền]   │                                │ (Phải - Dưới)     │
│ (Trái - Dưới)     │                                │                   │
│                   │                                │                   │
└───────────────────┴────────────────────────────────┴───────────────────┘
```

* **Vùng chính giữa:** Đồng hồ Pomodoro nổi trực tiếp trên cảnh nền. **Không sử dụng hộp nền (background card)** để tránh che khuất cảnh quan phía sau.
* **Cột bên trái:** 
  * Cạnh trên: Widget Quản lý công việc (Todo List).
  * Cạnh dưới: Widget Chọn cảnh nền (Scene Selector).
* **Cột bên phải:** 
  * Cạnh trên: Widget Trình phát nhạc YouTube (YouTube Player).
  * Cạnh dưới: Widget Bộ trộn âm thanh thiên nhiên (Ambient Sounds Mixer).
* **Cạnh trên cùng:** Header mỏng, trong suốt chứa Logo và bộ đếm số người đang tập trung.

---

### ⚙️ Chi tiết các tính năng chính

#### F1. Không gian nền phong cảnh (Scene Background)
* **Mô tả:** Thay đổi toàn bộ hình nền của website để tạo cảm hứng làm việc.
* **Hành vi:**
  * Cung cấp sẵn 4 cảnh nền chất lượng cao: **Rừng thông (mặc định), Bãi biển hoàng hôn, Quán café, Vũ trụ**.
  * Chọn cảnh thông qua 4 ô ảnh thu nhỏ (thumbnail) ở góc trái dưới. Click vào ô nào thì cảnh nền thay đổi ngay lập tức với hiệu ứng chuyển cảnh mượt mà.
  * Ứng dụng tự động ghi nhớ cảnh nền được chọn gần nhất cho lần truy cập sau.
* **Tiêu chí chấp nhận (Acceptance Criteria - AC):**
  - [ ] Hiển thị hình nền tràn màn hình (Fullscreen).
  - [ ] Đổi nền ngay lập tức khi click thumbnail (thời gian chuyển < 1 giây).
  - [ ] Thumbnail của cảnh đang chọn phải có viền sáng nổi bật.
  - [ ] Trạng thái cảnh nền được lưu vào bộ nhớ trình duyệt (localStorage).

#### F2. Đồng hồ Pomodoro chính giữa (Focus Timer)
* **Mô tả:** Đồng hồ đếm ngược giúp người dùng làm việc khoa học theo chu kỳ 25 phút tập trung - 5 phút nghỉ ngơi.
* **Hành vi:**
  * Hiển thị ở chính giữa màn hình với phông chữ số cực lớn (khoảng 5.5rem). Bao quanh số giờ là một vòng tròn tiến trình (progress ring) siêu mảnh tự động co ngắn lại khi thời gian trôi đi.
  * Có 3 chế độ lựa chọn nhanh: **Tập trung (25 phút), Nghỉ ngắn (5 phút), Nghỉ dài (15 phút)**.
  * Có ô nhập nội dung *"Bạn đang làm gì?"* để người dùng ghi nhớ mục tiêu hiện tại. Khi timer chạy, nội dung này cùng thời gian đếm ngược sẽ hiển thị lên tiêu đề tab trình duyệt (ví dụ: `[24:50] VibeSpace | Viết PRD`).
  * Có nút điều khiển: Bắt đầu (Play) / Tạm dừng (Pause) và Đặt lại (Reset). Khi hết giờ, phát âm thanh chuông báo nhẹ nhàng.
* **Tiêu chí chấp nhận (AC):**
  - [ ] Đồng hồ đếm ngược chính xác từng giây.
  - [ ] Chuyển đổi giữa các chế độ tự động đặt lại thời gian tương ứng.
  - [ ] Tiêu đề tab trình duyệt cập nhật động theo thời gian thực.
  - [ ] Phát âm thanh thông báo khi thời gian đếm ngược về `00:00`.
  - [ ] Vòng tiến trình SVG chạy mượt mà, đồng bộ với giây đếm ngược.

#### F3. Bộ trộn âm thanh thiên nhiên (Ambient Sound Mixer)
* **Mô tả:** Người dùng tự tùy biến âm thanh nền bằng cách trộn nhiều tiếng động tự nhiên lại với nhau.
* **Hành vi:**
  * Cung cấp 4 kênh âm thanh lặp (loop) chất lượng cao: **Tiếng mưa, Lửa trại, Tiếng gió, Rừng thông**.
  * Mỗi âm thanh có nút bật/tắt độc lập và thanh trượt (slider) điều chỉnh âm lượng từ `0%` đến `100%`.
  * Người dùng có thể bật cùng lúc nhiều âm thanh (ví dụ: vừa mưa vừa lửa trại). Mặc định tất cả âm thanh ở trạng thái tắt khi mới vào trang.
* **Tiêu chí chấp nhận (AC):**
  - [ ] Các thanh slider phản hồi nhạy bén, âm lượng thay đổi tức thì.
  - [ ] Âm thanh phát lặp vô hạn, không bị vấp hay giật lag khi chuyển tiếp.
  - [ ] Ghi nhớ mức âm lượng của từng kênh khi tải lại trang.

#### F4. Trình phát nhạc YouTube (YouTube Player)
* **Mô tả:** Phát nhạc lofi hoặc playlist cá nhân từ YouTube làm nhạc nền.
* **Hành vi:**
  * Hiển thị một khung phát video YouTube thu nhỏ. Mặc định có sẵn một bài nhạc lofi cực chill khi người dùng truy cập lần đầu.
  * Cung cấp ô nhập để người dùng dán link YouTube bất kỳ (dạng đầy đủ hoặc rút gọn) để đổi bài hát.
  * Có thanh điều chỉnh âm lượng riêng biệt cho YouTube và nút Tắt tiếng nhanh (Mute).
* **Tiêu chí chấp nhận (AC):**
  - [ ] Video mặc định chạy bình thường khi bấm Play.
  - [ ] Đổi video thành công khi dán link hợp lệ và bấm nút tải mà không cần reload trang.
  - [ ] Hiển thị thông báo lỗi rõ ràng nếu dán link không đúng định dạng YouTube.
  - [ ] Lưu lại bài hát gần nhất người dùng đã phát.

#### F5. Danh sách việc cần làm (Daily Todo List)
* **Mô tả:** Công cụ quản lý các đầu việc cần hoàn thành trong ngày, nằm ở góc trái trên.
* **Hành vi:**
  * Nhập việc cần làm vào ô trống và nhấn Enter (hoặc click nút `+`) để thêm vào danh sách.
  * Mỗi task có ô chọn (checkbox) hình tròn. Click để hoàn thành (chữ gạch ngang và mờ đi).
  * Hiển thị thanh tiến trình (progress bar) và bộ đếm (ví dụ: `2/5 công việc`) ở đầu widget.
  * Khi hover vào task, hiển thị nút xóa (icon ✕).
  * Có nút "Dọn việc xong" để xóa nhanh toàn bộ các việc đã hoàn thành.
* **Tiêu chí chấp nhận (AC):**
  - [ ] Thêm, sửa trạng thái, và xóa task hoạt động mượt mà không lỗi.
  - [ ] Thanh tiến trình cập nhật chính xác tỷ lệ hoàn thành theo thời gian thực.
  - [ ] Toàn bộ danh sách công việc được lưu lại ở localStorage.

#### F6. Header & Trạng thái cộng đồng (Header)
* **Mô tả:** Thanh điều hướng mỏng ở trên cùng màn hình.
* **Hành vi:**
  * Hiển thị logo VibeSpace bên trái và bộ đếm số người online tượng trưng (ví dụ: `● 38 người đang tập trung`) bên phải.
  * Con số người online tự động biến động nhẹ sau mỗi vài phút để tạo cảm giác chân thực.
* **Tiêu chí chấp nhận (AC):**
  - [ ] Nằm cố định ở trên cùng màn hình, nền mờ nhẹ để không che background.
  - [ ] Dấu chấm trạng thái nhấp nháy xanh nhẹ nhàng (pulse animation).

---

### 🚫 Phạm vi KHÔNG làm trong v1.0 (Out of Scope)
* Không làm hệ thống đăng ký/đăng nhập thành viên (tất cả lưu ở trình duyệt người dùng).
* Không đồng bộ dữ liệu lên máy chủ (Cloud Sync).
* Không làm tính năng tự tải ảnh nền từ máy tính lên (chỉ dùng 4 cảnh mặc định).
* Không hỗ trợ hoàn toàn giao diện trên điện thoại di động (chỉ tối ưu hóa cho Desktop và Laptop màn hình rộng từ 1024px trở lên).

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
