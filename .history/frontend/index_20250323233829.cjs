// Hàm xuất dữ liệu (export)
export function sayHello(name) {
    return `👋 Xin chào, ${name}!`;
}

// Import lại chính file này và gọi hàm
import { sayHello } from "./index.js";

console.log(sayHello("Người dùng"));
