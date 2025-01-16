import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInputAu from '../formInputAu/FormInputAu';


const SignUp = ({ toggleForm }) => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
      email: "",
      password: "",
    });
  
    const inputs = [
      {
        id: 1,
        name: "email",
        type: "email",
        placeholder: "Email",
        label: "Email",
        errorMessage: "Please enter a valid email address",
        required: true,
      },
      {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        label: "Password",
        errorMessage: "Password is required",
        required: true,
      },
    ];
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const isFormFilled = Object.values(values).every(
        (value) => value.trim() !== ""
      );
      if (!isFormFilled) {
        alert("Please fill in all fields");
        return;
      }
  
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.email === values.email && u.password === values.password
      );
  
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        // Force a page reload to update the header
        window.location.href = '/homePage';
      } else {
        alert("Invalid email or password");
      }
    };
  
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
    return (
      <div className="container">
        <h2 className="title">Log in to Exclusive</h2>
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
            Login
          </button>
        </form>
        <p className="loginText">
          Don't have an account?{" "}
          <a href="#" className="link" onClick={toggleForm}>
            Register here
          </a>
        </p>
      </div>
    );
  };
  
  export default SignUp;