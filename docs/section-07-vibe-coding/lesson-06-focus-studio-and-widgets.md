# 📘 Bài 6: Tạo UI Màn hình Focus Studio & các Widget

> **Section 7** · Vibe Coding Dự Án Thực Tế  
> **Thời lượng:** ~50 phút  
> **Yêu cầu:** Đã hoàn thành Bài 5

---

## 🎯 Mục tiêu bài học

Sau bài này, bạn sẽ:
- ✅ Thiết kế được bố cục Dashboard 3 cột phức tạp cho không gian làm việc chính `/space`.
- ✅ Dựng mockup giao diện cho toàn bộ các widget cốt lõi: Pomodoro Timer, Ambient Mixer, YouTube Player, Daily Todo, và Background Scene Selector.
- ✅ Áp dụng skill `stitch-loop` để tinh chỉnh và cập nhật giao diện đa thiết bị.

---

## 1. Phân tích bố cục 3 cột của Focus Studio

Không gian tập trung chính `/space` được thiết kế dạng Dashboard tối giản, hiển thị tràn viền (fullscreen) với các khối được bố trí cân đối:

```
┌──────────────────────────────────────────────────────────┐
│ Logo & Stats             HEADER                          │
├───────────────┬──────────────────────────┬───────────────┤
│               │                          │               │
│               │                          │  YouTube      │
│  Daily Todo   │    POMODORO TIMER        │  Music        │
│               │    (Vòng tròn SVG)       │               │
│               │                          ├───────────────┤
│               │                          │               │
│  Background   │    Input task            │  Ambient      │
│  Scenes       │                          │  Mixer        │
│               │                          │               │
└───────────────┴──────────────────────────┴───────────────┘
```

- **Cột Trái (Left Panel)**: Quản lý mục tiêu hàng ngày (Todo) và thay đổi bối cảnh xung quanh (Scene Selector).
- **Cột Giữa (Center Area)**: Tâm điểm là đồng hồ Pomodoro dạng vòng tròn và nút bấm điều khiển, cùng input nhập công việc hiện tại.
- **Cột Phải (Right Panel)**: Nguồn âm thanh bao gồm Trình phát YouTube Lo-fi và Bộ trộn tiếng thiên nhiên đa kênh (Mixer).

---

## 2. Dựng thiết kế chi tiết bằng Stitch

Chúng ta sẽ dùng prompt nâng cao phối hợp với `enhance-prompt` để điều hướng Agent tạo layout hoàn chỉnh này trên Stitch.

#### 💬 Prompt mẫu tạo màn hình Space UI:
> *"Hãy sử dụng công cụ Stitch (kết hợp stitch-loop nếu cần) để dựng mockup thiết kế cho màn hình Space (Space.md). 
> Cấu trúc giao diện:
> 1. Toàn bộ màn hình có một lớp overlay đen mờ nhẹ phủ trên ảnh nền (default là rừng thông).
> 2. Header: Đặt góc trên trái, có Logo headset, chữ VibeSpace và tag nhỏ 'v1.0'. Bên phải Header hiển thị số người online.
> 3. Cột trái: Gồm 2 widget dạng Glass card xếp dọc:
>    - Todo Widget: Tiêu đề 'Todo hôm nay', có ô input thêm task, nút bấm, và danh sách các checkbox.
>    - Scene Widget: Tiêu đề 'Cảnh nền', chứa lưới ảnh thu nhỏ của 4 scene (Rừng thông, Bãi biển, Quán cafe, Vũ trụ).
> 4. Cột giữa: Đồng hồ đếm ngược đặt chính giữa màn hình:
>    - Có một vòng tròn tiến trình (SVG progress ring) màu Indigo.
>    - Bên trong vòng tròn hiển thị số dạng điện tử '25:00'.
>    - Phía trên vòng tròn là 3 tab mode: Tập trung, Nghỉ ngắn, Nghỉ dài.
>    - Phía dưới vòng tròn là thanh Input 'Bạn đang làm gì?' và 2 nút bấm điều khiển Play/Pause, Reset.
> 5. Cột phải: Gồm 2 widget dạng Glass card xếp dọc:
>    - YouTube Music Widget: Chứa ô input dán link YouTube, khu vực hiển thị player và thanh slider điều chỉnh âm lượng.
>    - Ambient Mixer Widget: Tiêu đề 'Âm thanh môi trường', chứa 4 thanh trượt slider tương ứng với: Tiếng mưa, Lửa trại, Tiếng gió, Rừng thông. Mỗi slider hiển thị phần trăm âm lượng (0% - 100%)."*

---

## 🛠️ Thực hành bài học

1. Gửi prompt trên cho AI Agent của bạn.
2. AI Agent sẽ gọi Stitch MCP để tạo bản thiết kế UI Mockup cho màn hình `/space`.
3. Kiểm tra xem các widget được phân bổ đúng vị trí cột trái, giữa, phải chưa.
4. Yêu cầu AI Agent tinh chỉnh thiết kế nếu cảm thấy khoảng cách (spacing) hoặc font size chưa cân đối (Ví dụ: *"Hãy cho các glass card có bo góc tròn mượt hơn, viền mỏng hơn và tăng blur nền lên"*).

---

## 🏁 Checkpoint hoàn thành

- [ ] Bản mockup thiết kế màn hình `/space` được lưu trong `.stitch/`.
- [ ] Tất cả 5 widget thành phần xuất hiện đầy đủ trên bản thiết kế thô.
- [ ] Layout đảm bảo độ thoáng đạt, chuẩn phong cách Zen và không có phần tử nào bị chèn ép.

---

<div align="center">

[← Bài 5: Tạo UI Màn hình Sảnh chờ](lesson-05-lobby-and-navigation.md) · [Mục lục Section 7](README.md) · [Bài 7: Convert Design → Code →](lesson-07-convert-design-to-react.md)

</div>
