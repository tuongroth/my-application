# 🍅 TOMATO - Food Ordering Website

TOMATO is a dynamic and user-friendly food ordering platform built with the **MERN Stack**. It offers seamless online food ordering for users and a robust management system for administrators.

## 🚀 Live Demo
- **User Panel:** [Click Here]
- **Admin Panel:** [Click Here]

---

## ✨ Features

### 🛍️ **User Panel**
- Login/Signup (JWT Authentication)
- Secure Password Hashing (Bcrypt)
- Add to Cart & Place Orders
- Stripe Payment Integration
- Order Management
- Filter Food Products
- Beautiful UI with Alerts

### 🛠️ **Admin Panel**
- Secure Authentication & Role-Based Access
- Manage Orders & Food Products
- REST APIs for Smooth Operation

---

## 📸 Screenshots
_(Add relevant screenshots here for better user engagement)_

---

## 🛠️ Installation & Setup

### 🔹 Clone the Repository
```bash
git clone https://github.com/Mshandev/Food-Delivery
cd Food-Delivery
```

### 🔹 Install Dependencies

#### **Frontend**
```bash
cd frontend
npm install
```

#### **Admin Panel**
```bash
cd ../admin
npm install
```

#### **Backend**
```bash
cd ../backend
npm install
```

### 🔹 Environment Variables
Create a `.env` file in the `backend` directory and configure:
```
JWT_SECRET=YOUR_SECRET_TEXT  
SALT=YOUR_SALT_VALUE  
MONGO_URL=YOUR_DATABASE_URL  
STRIPE_SECRET_KEY=YOUR_KEY  
```

### 🔹 Set Frontend & Backend URLs

- **Admin Panel:** Edit `App.jsx`
  ```js
  const url = "YOUR_BACKEND_URL";
  ```  
- **Frontend:** Edit `StoreContext.js`
  ```js
  const url = "YOUR_BACKEND_URL";
  ```  
- **Backend:** Edit `orderController.js`
  ```js
  const frontend_url = "YOUR_FRONTEND_URL";
  ```  

---

## ▶️ Running the Application

#### **Start Backend Server**
```bash
cd backend
nodemon server.js
```

#### **Start Frontend Server**
```bash
cd frontend
npm start
```

#### **Start Admin Panel**
```bash
cd admin
npm start
```

---

## 💻 Tech Stack
- **Frontend:** React  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT, Bcrypt  
- **Payments:** Stripe  
- **File Uploads:** Multer  

---

## 🚀 Deployment
The application is deployed on **Render**.

---

## 🤝 Contributing
Contributions are welcome! If you’d like to contribute, please **raise an issue** first for discussion.

---

## 📢 Feedback
If you have any feedback, feel free to reach out!

🔗 **GitHub:** [Your Repository](https://github.com/Mshandev/Food-Delivery)

