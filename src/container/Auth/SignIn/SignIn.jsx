import React, {useState} from 'react';
import './SignIn.css'
import FormInputAu from '../formInputAu/FormInputAu.jsx'
import 'boxicons'

//Regex
const PATTERNS = {
    NAME: "^[a-zA-Z ]{2,}$",
    EMAIL: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
    PHONE: "^[0-9]{3}-[0-9]{3}-[0-9]{4}$",
    PASSWORD: "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$",
};

const Register = ({ toggleForm }) => {
    // State to manage form input values
    const [values, setValues] = useState({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
    // Configuration for form input fields
    const inputs = [
      {
        id: 1,
        name: "name",
        type: "text",
        placeholder: "Name",
        errorMessage:
          "Name should not be empty and should not contain special characters!",
        required: true,
        pattern: PATTERNS.NAME,
      },
      {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "It should be a valid email address",
        required: true,
        pattern: PATTERNS.EMAIL,
      },
      {
        id: 3,
        name: "phone",
        type: "tel",
        placeholder: "Phone number",
        errorMessage: "Phone should be in format: 123-456-7890",
        required: true,
        pattern: PATTERNS.PHONE,
      },
      {
        id: 4,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage:
          "Password should be 8-20 characters and contain at least 1 number, 1 letter and 1 special character",
        required: true,
        pattern: PATTERNS.PASSWORD,
      },
      {
        id: 5,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm password",
        errorMessage: "Passwords do not match",
        required: true,
      },
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Ensure all fields are filled
      const isFormFilled = Object.values(values).every(
        (value) => value.trim() !== ""
      );
      if (!isFormFilled) {
        alert("Please fill in all fields");
        return;
      }
      // Ensure passwords match
      if (values.password !== values.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
  
      // Validate fields with regex patterns
      const emailRegex = new RegExp(PATTERNS.EMAIL);
      const phoneRegex = new RegExp(PATTERNS.PHONE);
      const passwordRegex = new RegExp(PATTERNS.PASSWORD);
  
      if (!emailRegex.test(values.email)) {
        alert("Please enter a valid email address");
        return;
      }
  
      if (!phoneRegex.test(values.phone)) {
        alert("Please enter a valid phone number");
        return;
      }
  
      if (!passwordRegex.test(values.password)) {
        alert("Password does not meet requirements");
        return;
      }
  
      // Retrieve existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  
      // Check if email is already registered
      if (existingUsers.some((user) => user.email === values.email)) {
        alert("This email is already registered");
        return;
      }
  
      // Create a new user object
      const newUser = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
      };
  
      // Add new user to the array
      existingUsers.push(newUser);
  
      // Save updated user list to localStorage
      localStorage.setItem("users", JSON.stringify(existingUsers));
  
      alert("Registration successful! Please login.");
      toggleForm(); // Switch to login form
    };
    // Update state when input fields change
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    return (
      <div className="container">
        <h2 className="title">Create an account</h2>
        <form onSubmit={handleSubmit} className="formAu">
          {inputs.map((input) => (
            <FormInputAu
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
  
          <button type="submit" className="button">
            Create Account
          </button>
          <button style={{backgroundColor:'#e45656'}} type="submit" className="button">
            Sign up with google
          </button>
        </form>
  
        <p className="loginText">
          Already have an account?{" "}
          <a href="#" className="link" onClick={toggleForm}>
            Login here
          </a>
        </p>
      </div>
    );
  };
  
  export default Register;