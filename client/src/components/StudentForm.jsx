import React, { useState } from 'react';
import styles from '../css/StudentFormcss.module.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);

      const checkRes = await axios.post('http://localhost:1234/check-email', {
        email: formData.email,
      });

      if (checkRes.data.exists) {
        toast.error('Email already exists!');
        return;
      }

      const res = await axios.post('http://localhost:1234/register', formData);
      toast.success(res.data.message || 'Registered Successfully!');

      setFormData({
        fname: '',
        lname: '',
        dob: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
      });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration Failed');
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Student Registration</h2>

        <div className={styles.row}>
          <label className={styles.label}>First Name*</label>
          <input
            className={styles.input}
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.rowAlt}>
          <label className={styles.label}>Last Name*</label>
          <input
            className={styles.input}
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.row}>
          <label className={styles.label}>Date of Birth*</label>
          <input
            className={styles.input}
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.rowAlt}>
          <label className={styles.label}>Gender*</label>
          <div className={styles.group}>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                required
              />{' '}
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              />{' '}
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === 'Other'}
                onChange={handleChange}
              />{' '}
              Other
            </label>
          </div>
        </div>

        <div className={styles.row}>
          <label className={styles.label}>Email*</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.rowAlt}>
          <label className={styles.label}>Phone Number*</label>
          <input
            className={styles.input}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            placeholder="0000000000"
            required
          />
        </div>

        <div className={styles.row}>
          <label className={styles.label}>Address*</label>
          <textarea
            className={styles.textarea}
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
