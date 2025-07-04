# 🎓 BucketStudy - Course Registration & Listing Platform

This is a **MERN stack application** (MongoDB, Express.js, React.js, Node.js) for displaying courses and registering students through a dynamic form.

---

## 🚀 Features

- View list of available courses with live timestamps (e.g., "2 hours ago")
- Register as a student with form validation
- Responsive UI with React
- Backend with Express.js & MongoDB Atlas

---

## 📁 Folder Structure


---

## ⚙️ Requirements

- Node.js (v18+ recommended)
- MongoDB Atlas account (or local MongoDB server)
- npm or yarn

---

## 🧱 Tech Stack

- **Frontend**: React.js, CSS Modules, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas (Cloud)

---

## 🔄 How to Run on Localhost

### 1️⃣ Clone the repository



git clone
cd 

### 2️⃣ Set up Backend

cd server
npm install

Create a .env file in server/:

PORT=1234
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/eduportal?retryWrites=true&w=majority

🔐 Replace <username> and <password> with your actual MongoDB Atlas credentials.

Then run the server:

nodemon index.js
# OR
npm start


If successful, you'll see:

Server running on port 1234
Connected to MongoDB


### 3️⃣ Set up Frontend

cd ../client
npm install
npm start

This will run the frontend at:

🔗 http://localhost:3000


### 4️⃣ Database SetUp

🌐 MongoDB Atlas Setup

1. Go to https://cloud.mongodb.com

2. Create a new Cluster

3. Go to Database > Connect > Drivers

4. Copy the connection URI (like):

mongodb+srv://<user>:<pass>@cluster0.mongodb.net/eduportal?retryWrites=true&w=majority

5. Paste it into .env as shown earlier.


🙋‍♂️ Author
Hemanth Kumar R
[GitHub](https://github.com/hemanthgitid) | [LinkedIn](https://www.linkedin.com/in/hemanth-kumar-r-b87a7324a/)

