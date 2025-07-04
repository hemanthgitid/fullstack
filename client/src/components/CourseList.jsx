// CourseList.jsx
import React, { useEffect, useState } from 'react';
import styles from '../css/CourseList.module.css';
import axios from 'axios';
import Navbar from './Navbar';
import StudentForm from './StudentForm';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [showForm, setShowForm] = useState(false);

 const formatRelativeTime = (dateString) => {
  const now = new Date();
  const date = new Date(dateString);
  let diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 0) diffInSeconds = 0; 

  if (diffInSeconds < 60) return `${diffInSeconds} sec ago`;
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 31) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
};

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://localhost:1234/courses');
        setCourses(res.data);
        setLastUpdated(new Date());
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className={styles.courselistWrapper}>
      <Navbar onToggleForm={toggleForm} />
      
      {showForm && (
        <div className={styles.formOverlay} onClick={toggleForm}>
          <div className={styles.formContainer} onClick={(e) => e.stopPropagation()}>
            <StudentForm key={Date.now()} /> {/* force re-render on reopen */}
          </div>
        </div>
      )}

      <div className={styles.courselist}>
        <h2 className={styles.heading}>Available Courses</h2>
        <div className={styles.coursegrid}>
          {courses.length > 0 ? (
            courses.map((course) => (
              <div key={course._id} className={styles.coursecard}>
                <div className={styles.cardHeader}>
                  <h3>{course.title}</h3>
                  <span className={styles.cardTime}>
                    🕒 {formatRelativeTime(course.createdAt)}
                  </span>
                </div>
                <div className={styles.courseInfo}>
                  <p><strong>Description:</strong> {course.description}</p>
                  <p><strong>Duration:</strong> {course.duration}</p>
                  <p><strong>Instructor:</strong> {course.instructor}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No courses found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
