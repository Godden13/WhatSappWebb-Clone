"use client";
import React, { useState } from "react";
import styles from "../styles/RegistrationForm.module.css";
import { useForm } from "react-hook-form";
import Link from "next/link";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [pwd, setPwd] = useState<any>();
  const [showError, setShowError] = useState("");

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setPwd(formData.password);
    if (pwd !== formData.confirmPassword) {
      setShowError("password does not match ⚠️");
    }
    // Send form data to backend server or API
    console.log(formData);
  };

  const onSubmit = (data: any) => {
    // Send form data to backend server or API
    console.log(data);
  };

  return (
    <form className={styles.registrationForm} onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div className={styles.registration__innnercontainer}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="enter your name"
            /// <reference path="" />
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={styles.input}
            placeholder="enter you email"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className={styles.input}
            pattern="[a-z0-9]{1,15}"
            title="Password should be digits (0 to 9) or alphabets (a to z)."
            placeholder="enter your password"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Confirm Password:
          </label>
          {}
          <input
            className={styles.input}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            placeholder="confirm your Password here..."
          />
          <p className={styles.showError}>{showError}</p>
        </div>
        <p>Do you already have an account?,Signin </p>
        <div className={styles.bottom__container}>
          <button type="submit" className={styles.button}>
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
