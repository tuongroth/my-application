// index.js

// Giả sử private key lưu trữ từ năm 2018 (bị ba mẹ giữ khóa)
const storedPrivateKey = "superSecretPrivateKey";

// Private key mà người dùng cung cấp hiện tại
const currentPrivateKey = "superSecretPrivateKey";  // Bạn có thể thay đổi giá trị này để thử các tình huống

// Hàm kiểm tra xem private key có đúng không
function checkPrivateKey(key) {
    if (key === storedPrivateKey) {
        return "Bạn là chủ sở hữu của private key. Bạn có quyền truy cập tài nguyên!";
    } else {
        return "Private key không hợp lệ. Bạn không có quyền truy cập tài nguyên!";
    }
}

// Hàm mô phỏng sự trì hoãn (block) trong một khoảng thời gian dài
async function simulateBlockAndCheckKey() {
    console.log("Đang kiểm tra quyền truy cập tài nguyên...");
    
    // Mô phỏng sự trì hoãn (block) từ năm 2018, bây giờ mới kiểm tra
    await new Promise(resolve => setTimeout(resolve, 2000)); // Chờ 2 giây (giả lập block)

    const result = checkPrivateKey(currentPrivateKey);
    console.log(result); // In kết quả kiểm tra
}

// Gọi hàm simulateBlockAndCheckKey để bắt đầu quá trình kiểm tra
simulateBlockAndCheckKey();
