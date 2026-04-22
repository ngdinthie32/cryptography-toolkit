# 🔐 Cryptography Toolkit - Project Nhóm 5T

Dự án ứng dụng các kiến thức Mật mã học vào lập trình thực tế, hỗ trợ Mã hóa đối xứng, Mã hóa bất đối xứng và Hàm băm.

## Phân công nhiệm vụ (Yêu cầu bắt buộc: Mọi người đều phải có Commit!)

*Lưu ý: Giảng viên sẽ check lịch sử commit. Nếu ai không có commit, người đó 0 điểm.*

1. **[Nguyễn Đình Thiện] (Team Leader/DevOps):** Thiết lập Git, setup khung ReactJS & NodeJS, cấu hình kết nối API, duyệt code (Merge PR).
2. **[Trần Hưng Thịnh] (Frontend React):** Xây dựng giao diện (UI/UX), làm Form nhập liệu, gọi API và hiển thị kết quả.
3. **[Trương Đình Tấn Tài] (Backend Crypto 1):** Xử lý logic API cho Mật mã đối xứng (AES, DES, 3DES) và Hàm băm (MD5, SHA-256).
4. **[Nguyễn Minh Tâm] (Backend Crypto 2):** Xử lý logic API cho Mật mã RSA (Tạo Key Pair, Mã hóa, Giải mã).
5. **[Phạm Quốc Thắng] (QA & Error Handling):** Viết logic bắt lỗi (try...catch) trên cả Node và React để app không bị crash khi user nhập sai, viết báo cáo tổng kết.

Chuẩn luôn! Một thiếu sót cực kỳ nguy hiểm. Nếu không chỉ cho mọi người cách lấy code về (clone) ở bước đầu tiên, họ sẽ không biết bắt đầu từ đâu. 

Bạn hãy copy đoạn bổ sung này và chèn vào file `README.md` (ngay phía trên phần *Quy trình làm việc với Git* nhé):

## Hướng dẫn lấy code về máy 

**Bước 1: Clone dự án về máy tính (Chỉ làm lần đầu tiên)**
Mở terminal tại thư mục bạn muốn lưu dự án và chạy lệnh:
```bash
git clone <link_github_cua_du_an_thay_vao_day>
cd cryptography-toolkit
```

**Bước 2: Chuyển ngay sang nhánh `dev`**
Tuyệt đối không đứng ở nhánh `main`. Ngay sau khi clone về, bạn phải chuyển sang nhánh `dev` vì đây là nơi tập hợp code của cả nhóm:
```bash
git checkout dev
```

## Hướng dẫn cài đặt và chạy dự án

Dự án chia làm 2 thư mục hoàn toàn độc lập: `frontend` và `backend`. Mọi người cần mở 2 terminal để chạy song song.

### 1. Chạy Backend (NodeJS)
Mở terminal 1:
```bash
cd backend
npm install
npm run dev   # (hoặc node server.js tùy cấu hình)
```
*Backend sẽ chạy tại: http://localhost:5000*

### 2. Chạy Frontend (ReactJS)
Mở terminal 2:
```bash
cd frontend
npm install
npm run dev   # (nếu dùng Vite) hoặc npm start (nếu dùng Create React App)
```
*Frontend sẽ chạy tại: http://localhost:5173 (Vite) hoặc 3000 (CRA)*

## Quy trình làm việc với Git (CỰC KỲ QUAN TRỌNG)

Tuyệt đối KHÔNG push code thẳng lên nhánh `main` hoặc `dev`. Hãy làm theo các bước sau:

**Bước 1: Lấy code mới nhất về máy**
```bash
git checkout dev
git pull origin dev
```

**Bước 2: Tạo nhánh riêng để làm việc**
Ví dụ bạn làm chức năng RSA backend:
```bash
git checkout -b feature/backend-rsa
```

Ví dụ bạn được phân công làm Frontend UI:
```bash
git checkout -b feature/frontend-ui
```


**Bước 3: Code xong, lưu lại và đẩy lên GitHub**
Ví dụ:
```bash
git add .
git commit -m "feat: Add RSA encryption API"
git push origin feature/backend-rsa
```

**Bước 4: Lên GitHub tạo Pull Request**
Lên trang GitHub của dự án, bấm "Compare & pull request" để yêu cầu gộp code vào nhánh `dev`. 
Nhóm trưởng sẽ review code và merge!

## Nhắc lại lưu ý (CỰC KỲ QUAN TRỌNG)
Tuyệt đối KHÔNG push code thẳng lên nhánh `main` hoặc `dev`.
