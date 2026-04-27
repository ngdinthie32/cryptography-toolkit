# 🔐 Bộ Công Cụ Mật Mã Học

Ứng dụng web toàn diện để học tập và áp dụng các thuật toán mật mã bao gồm **Mã Hóa Đối Xứng**, **Mã Hóa Bất Đối Xứng**, và **Hàm Băm**.

## 📋 Mục Lục

- [Tổng Quan Dự Án](#tổng-quan-dự-án)
- [Tính Năng](#tính-năng)
- [Công Nghệ Sử Dụng](#công-nghệ-sử-dụng)
- [Yêu Cầu Trước](#yêu-cầu-trước)
- [Cài Đặt](#cài-đặt)
- [Chạy Dự Án](#chạy-dự-án)
- [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
- [Hướng Dẫn Sử Dụng](#hướng-dẫn-sử-dụng)
- [Khắc Phục Sự Cố](#khắc-phục-sự-cố)

---

## 🎯 Tổng Quan Dự Án

**Bộ Công Cụ Mật Mã Học** là ứng dụng web giáo dục xây dựng với **React (Frontend)** và **Node.js/Express (Backend)** để trình diễn các triển khai thực tế của các thuật toán mật mã. Dự án hỗ trợ ba hoạt động mật mã chính với xử lý lỗi phù hợp và giao diện thân thiện với người dùng.

### Mục Tiêu Chính:
- Áp dụng kiến thức mật mã học lý thuyết vào lập trình thực tế
- Hiểu mã hóa đối xứng, mã hóa bất đối xứng và hàm băm
- Học cách tích hợp thư viện bảo mật tiêu chuẩn (CryptoJS, Node.js Crypto)
- Triển khai xử lý lỗi mạnh mẽ cho các đầu vào không hợp lệ

---

## ✨ Tính Năng

### 1. **Mã Hóa Đối Xứng** 🔒
- **Thuật Toán Hỗ Trợ**: AES, DES, 3DES (TripleDES)
- **Hoạt Động**:
  - Mã hóa plaintext bằng khóa → Nhận ciphertext
  - Giải mã ciphertext bằng khóa → Nhận plaintext
  - Sinh khóa tự động dựa trên yêu cầu thuật toán:
    - **AES**: 16 byte (32 ký tự hex)
    - **DES**: 8 byte (16 ký tự hex)
    - **3DES**: 24 byte (48 ký tự hex)
- **Xử Lý Lỗi**: 
  - Xác thực kích thước khóa
  - Ngăn thực thi với độ dài khóa không hợp lệ
  - Hiển thị thông báo lỗi thân thiện

### 2. **Mã Hóa Bất Đối Xứng (RSA)** 🔑
- **Thuật Toán**: RSA
- **Hoạt Động**:
  - Sinh cặp khóa RSA ngẫu nhiên (Public + Private)
  - Mã hóa plaintext bằng Public Key
  - Giải mã ciphertext bằng Private Key
- **Xử Lý Lỗi**:
  - Xác thực đầu vào không rỗng
  - Xử lý định dạng khóa không hợp lệ
  - Hiển thị thông báo lỗi giải mã

### 3. **Hàm Băm** #️⃣
- **Thuật Toán Hỗ Trợ**: MD5, SHA-256
- **Hoạt Động**:
  - Băm bất kỳ đầu vào văn bản nào
  - Hiển thị hash dưới dạng hex
- **Kích Thước Đầu Ra**:
  - **MD5**: 32 ký tự
  - **SHA-256**: 64 ký tự

---

## 🛠 Công Nghệ Sử Dụng

### Frontend
- **React 18+**: Framework giao diện người dùng
- **Vite 8.0**: Công cụ build nhanh & máy chủ phát triển
- **Axios**: HTTP client
- **CSS3**: Định kiểu

### Backend
- **Node.js**: Môi trường thực thi
- **Express.js 5.x**: Framework web
- **CryptoJS 4.x**: Thư viện mật mã JavaScript
- **CORS**: Middleware chia sẻ tài nguyên giữa các nguồn

### Công Cụ Phát Triển
- **Git**: Kiểm soát phiên bản
- **npm**: Quản lý gói

---

## 📦 Yêu Cầu Trước

Trước khi bắt đầu, hãy đảm bảo bạn đã cài đặt:

### Bắt Buộc:
- **Node.js** (phiên bản 14.0 trở lên)
  - Tải từ: https://nodejs.org/
  - Xác minh cài đặt: `node --version`
  
- **npm** (đi kèm Node.js, phiên bản 6.0 trở lên)
  - Xác minh cài đặt: `npm --version`


## 📥 Cài Đặt

Thực hiện các bước sau để thiết lập dự án trên máy tính địa phương của bạn:

### Bước 1: Clone Repository

```bash
git clone https://github.com/ngdinthie32/cryptography-toolkit.git
cd cryptography-toolkit
```

### Bước 2: Cài Đặt Các Gói Backend

Mở **Terminal 1** và điều hướng đến thư mục backend:

```bash
cd backend
npm install
```

**Điều này làm:**
- Tải xuống tất cả các gói npm cần thiết từ `package.json`
- Tạo thư mục `node_modules/` với tất cả các phụ thuộc
- Cài đặt: `express`, `cors`, `crypto-js`, v.v.

**Đầu ra dự kiến:**
```
added 69 packages, and audited 69 packages in 2s
```

### Bước 3: Cài Đặt Các Gói Frontend

Mở **Terminal 2** và điều hướng đến thư mục frontend:

```bash
cd frontend
npm install
```

**Điều này làm:**
- Tải xuống tất cả các phụ thuộc React và Vite
- Tạo thư mục `node_modules/`
- Cài đặt: `react`, `axios`, `vite`, v.v.

**Đầu ra dự kiến:**
```
added 180+ packages in [time]
```

---

## ▶️ Chạy Dự Án

### Quan Trọng: Bạn PHẢI chạy cả Backend và Frontend đồng thời!

### Terminal 1 - Khởi Động Server Backend

```bash
# Từ gốc dự án
cd backend

# Khởi động server
npm run dev
```

HOẶC thủ công:
```bash
node server.js
```

**Đầu ra dự kiến:**
```
Server đang chạy tại http://localhost:5000
```

**Port**: Backend chạy tại **http://localhost:5000**

### Terminal 2 - Khởi Động Server Frontend

```bash
# Từ gốc dự án
cd frontend

# Khởi động máy chủ phát triển Vite
npm run dev
```

**Đầu ra dự kiến:**
```
VITE v8.0.8 ready in 294 ms

➜  Local:   http://localhost:5173/
```

**Port**: Frontend chạy tại **http://localhost:5173** (hoặc 5174 nếu 5173 đang dùng)

### Bước 3: Mở trong Trình Duyệt

Mở trình duyệt của bạn và truy cập:
```
http://localhost:5173
```

Bạn sẽ thấy giao diện Bộ Công Cụ Mật Mã Học với ba tab: **Symmetric**, **Asymmetric**, **Hash**

---

## 📁 Cấu Trúc Dự Án

```
cryptography-toolkit/
│
├── backend/                          # Node.js/Express Backend
│   ├── controllers/
│   │   ├── cryptoController.js      # Xử lý Symmetric & Hash APIs
│   │   └── rsaController.js         # Xử lý RSA/Asymmetric APIs
│   ├── services/
│   │   └── cryptoService.js         # Logic mã hóa & xác thực
│   ├── server.js                     # Cài đặt server Express
│   └── package.json                  # Các phụ thuộc backend
│
├── frontend/                         # React + Vite Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── SymmetricForm.jsx    # Giao diện AES/DES/3DES
│   │   │   ├── AsymmetricForm.jsx   # Giao diện RSA
│   │   │   ├── HashForm.jsx         # Giao diện MD5/SHA-256
│   │   │   ├── Header.jsx           # Tab điều hướng
│   │   │   └── ResultBox.jsx        # Hiển thị kết quả
│   │   ├── App.jsx                  # Thành phần ứng dụng chính
│   │   ├── main.jsx                 # Điểm vào
│   │   └── App.css                  # Định kiểu
│   ├── package.json                 # Các phụ thuộc frontend
│   ├── vite.config.js              # Cơ chế định cấu hình Vite
│   └── index.html                   # Mẫu HTML
│
├── README.md                         # Tệp này
└── package.json                      # Root package.json (nếu có)
```

---

## 💡 Hướng Dẫn Sử Dụng

### 1. Mã Hóa Đối Xứng (AES)

**Các bước:**
1. Vào tab **"Symmetric"**
2. Nhập văn bản vào trường **"Nội dung"** (ví dụ: `hello`)
3. Chọn thuật toán: **AES**
4. Nhấp **"Auto-gen Key"** → sinh 32 ký tự hex
5. Nhấp **"Mã hóa"** (Encrypt) → nhận ciphertext
6. Sao chép ciphertext → dán lại vào trường text
7. Nhấp **"Giải mã"** (Decrypt) → sẽ nhận lại `hello`

**Xử Lý Lỗi:**
- Nếu kích thước khóa sai (ví dụ: 3 ký tự thay vì 16):
  - ❌ Thông báo lỗi: `"Invalid key size for AES! Must be 16, 24 or 32 characters..."`
  - App KHÔNG bị crash

### 2. RSA (Mã Hóa Bất Đối Xứng)

**Các bước:**
1. Vào tab **"Asymmetric"**
2. Nhấp **"Generate Key Pair"** → sinh Public & Private keys
3. Nhập plaintext: `test123`
4. Nhấp **"Encrypt"** (sử dụng Public Key) → nhận ciphertext
5. Sao chép ciphertext → xóa trường text → dán
6. Nhấp **"Decrypt"** (sử dụng Private Key) → nhận lại `test123`

**Xử Lý Lỗi:**
- Nếu trường text trống:
  - ❌ Thông báo lỗi: `"Lỗi: Vui lòng nhập đầy đủ Nội dung và Public Key!"`
  - App KHÔNG bị crash

### 3. Hàm Băm

**Các bước:**
1. Vào tab **"Hash"**
2. Chọn thuật toán: **MD5** hoặc **SHA-256**
3. Nhập văn bản: `password123`
4. Nhấp nút → hiển thị hash (32 ký tự cho MD5, 64 cho SHA-256)
5. Cùng đầu vào = Cùng đầu ra

**Lưu Ý:** Hash là một chiều - không thể giải mã lại thành gốc


## 🐛 Khắc Phục Sự Cố

### Vấn Đề: `npm install` thất bại

**Giải pháp:**
```bash
# Xóa cache npm
npm cache clean --force

# Xóa node_modules và package-lock.json
rm -rf node_modules package-lock.json

# Cài đặt lại
npm install
```

---

### Vấn đề: Port đã được sử dụng (Backend)

**Lỗi:** `Error: listen EADDRINUSE: address already in use :::5000`

**Giải pháp:**
```bash
# Dừng process trên port 5000
# Trên Windows (PowerShell):
Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess | Stop-Process -Force

# Trên Mac/Linux:
lsof -i :5000 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

---

### Vấn Đề: Frontend không kết nối được Backend

**Nguyên Nhân Phổ Biến:**
1. ❌ Backend không chạy
2. ❌ Backend chạy trên port sai (phải là 5000)
3. ❌ CORS không được cấu hình đúng

**Giải pháp:**
```bash
# Terminal 1: Kiểm tra backend có chạy không
curl http://localhost:5000/api/test
# Sẽ trả về: {"message": "Backend NodeJS đã kết nối thành công!"}

# Terminal 2: Kiểm tra URL frontend
# Phải truy cập http://localhost:5173
```

---

### Vấn đề: Trang hiển thị `Cannot GET /`

**Giải pháp:**
- Chắc chắn bạn đang truy cập **http://localhost:5173** (hoặc 5174)
- KHÔNG phải http://localhost:5000
- Frontend và Backend trên các PORT KHÁC NHAU

---

### Vấn đề: Mã hóa/Giải mã không hoạt động

**Danh sách kiểm tra:**
- ✅ Đã chọn thuật toán?
- ✅ Kích thước khóa đúng?
- ✅ Văn bản không rỗng?
- ✅ Backend có chạy?
- ✅ Không có lỗi console? (Kiểm tra Công Cụ Nhà Phát Triển: F12)

---

## 📝 Ghi Chú Phát Triển

### Thêm Tính Năng Mới

1. Tạo thành phần frontend mới trong `frontend/src/components/`
2. Thêm endpoint backend tương ứng trong `backend/controllers/`
3. Kiểm tra cảnh báo trước khi commit
4. Push đến nhánh feature: `git checkout -b feature/name`
5. Tạo Pull Request vào nhánh `dev`

### Kiểu Code
- Sử dụng tên biến có ý nghĩa
- Thêm xử lý lỗi cho tất cả các lệnh gọi API
- Xác thực đầu vào người dùng trên cả frontend VÀ backend
- Nhận xét logic phức tạp

## 📚 Tài Nguyên

- [Tài Liệu Express.js](https://expressjs.com/)
- [Tài Liệu React](https://react.dev/)
- [Tài Liệu CryptoJS](https://cryptojs.gitbook.io/docs/)
- [Tài Liệu Vite](https://vitejs.dev/)
- [Module Crypto Node.js](https://nodejs.org/api/crypto.html)

---

## 📄 Giấy Phép

Dự án này có mục đích giáo dục như một phần của khóa học Mật Mã Học PTIT.

---

## ✅ Tham Chiếu Nhanh

### Khởi Động Dự Án
```bash
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && npm run dev

# Trình duyệt
http://localhost:5173
```

### Dừng Dự Án
```bash
# Nhấn Ctrl+C trong cả hai terminal
```

### Cài Đặt
```bash
# Backend
cd backend && rm -rf node_modules package-lock.json && npm install

# Frontend
cd frontend && rm -rf node_modules package-lock.json && npm install
```
---

