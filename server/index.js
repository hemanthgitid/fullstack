const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./models/student');
const Course = require('./models/course.js'); 
require('dotenv').config();

// mongoose.connect(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.use(cors());
app.use(express.json());


app.get('/courses', async (req, res) => {
  try {
    console.log("Enter");
    const courses = await Course.find();
    console.log(courses);
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses', error: error.message });
  }
});

app.post('/register', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json({ message: 'Student Registered Successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering student', error: err.message });
  }
});

app.post('/check-email', async (req, res) => {
  try {
    const { email } = req.body;
    const student = await Student.findOne({ email });

    if (student) {
      return res.json({ exists: true });
    } else {
      return res.json({ exists: false });
    }
  } catch (error) {
    console.error('Error checking email', error);
    return res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
