const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Test cơ bản
app.get('/api/test', (req, res) => {
    res.json({ message: "Backend NodeJS đã kết nối thành công!" });
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
