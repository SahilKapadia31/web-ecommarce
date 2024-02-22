import React, { useState } from "react";
import "./login.css";
import Header from "../Header/Header";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("Users")) || []
    );
    const [display, setDisplay] = useState(true);

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const signUpSchema = Yup.object({
        username: Yup.string().min(3).max(10).required("Please Enter Your Name"),
        email: Yup.string().email("Invalid Email").required("Please Enter Your Email"),
        password: Yup.string().min(6).max(8).required("Please Enter Your Password"),
        confirmPassword: Yup.string().required("Please Enter Your Confirm Password").oneOf([Yup.ref("password"), null], "Password must Match"),
    });

    const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            setUsers([...users, values])
            localStorage.setItem('Users', JSON.stringify([...users, values]))
            action.resetForm();
        },
    });

    return (
        <div>
            <Header />
            <div className="container-fluid ps-md-0">
                <div className="row g-0">
                    <div className="d-none d-sm-flex flex-column align-items-center col-md-4 col-lg-6 bg-image p-4">
                        <h2 className="fw-bold mt-5" style={{ fontSize: "30px" }}>
                            Welcome to the world of Bewakoof
                            <span className="tradeMark">®</span>!
                        </h2>
                        <div className="mt-5">
                            <img
                                src="public/group.webp"
                                className=""
                                style={{ width: "560px", height: "360px" }}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-6">
                        {display && (
                            <div className="login d-flex align-items-center py-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 text-center mx-auto">
                                            <h4 className="login-heading fw-bold mb-4">
                                                Log in / Sign up
                                            </h4>
                                            <p
                                                className=" text-secondary text-opacity-75 fw-semibold"
                                                style={{ fontSize: "18px" }}
                                            >
                                                for Latest trends, exciting offers and everything
                                                Bewakoof
                                                <span className="tradeMark">®</span>!
                                            </p>
                                            <div className="col-7 mt-5 pt-4 mx-auto ">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-floating mb-3">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            className="form-control border-dark-subtle"
                                                            id="floatingInputlogin"
                                                            placeholder="name@example.com"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        <label
                                                            htmlFor="floatingInputlogin"
                                                            className="text-secondary fw-bold"
                                                        >
                                                            Enter Email address
                                                        </label>
                                                        {errors.email && touched.email ? (
                                                            <p className="text-danger text-start">
                                                                {errors.email}
                                                            </p>
                                                        ) : null}
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            className="form-control border-dark-subtle"
                                                            id="floatingLoginPassword"
                                                            placeholder="Password"
                                                            value={values.password}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        <label
                                                            htmlFor="floatingLoginPassword"
                                                            className="text-secondary fw-bold"
                                                        >
                                                            {" "}
                                                            Password
                                                        </label>
                                                        {errors.password && touched.password ? (
                                                            <p className="text-danger text-start">
                                                                {errors.password}
                                                            </p>
                                                        ) : null}
                                                    </div>
                                                    <div className="">
                                                        <button
                                                            className="btn d-flex align-items-center justify-content-center btn-login text-uppercase fw-medium"
                                                            type="submit"
                                                        >
                                                            Continue
                                                        </button>
                                                    </div>
                                                    <div className="mt-3 fw-medium">
                                                        Don't have an account?
                                                        <span
                                                            className="text-primary text-decoration-underline"
                                                            style={{ cursor: "pointer" }}
                                                            onClick={() => setDisplay(!display)}
                                                        >
                                                            Sign Up
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {!display && (
                            <div className="login d-flex align-items-center py-5">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 text-center mx-auto">
                                            <h4 className="login-heading fw-bold mb-4">Sign up</h4>
                                            <div className="col-7 mt-5 mx-auto ">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-floating mb-3">
                                                        <input
                                                            type="text"
                                                            name="username"
                                                            className="form-control border-dark-subtle"
                                                            id="floatingInputname"
                                                            placeholder="Username"
                                                            value={values.username}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        <label
                                                            htmlFor="floatingInputname"
                                                            className="text-secondary fw-bold"
                                                        >
                                                            Username
                                                        </label>
                                                        {errors.username && touched.username ? (
                                                            <p className="text-danger text-start">
                                                                {errors.username}
                                                            </p>
                                                        ) : null}
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            className="form-control border-dark-subtle"
                                                            id="floatingInputemail"
                                                            placeholder="name@example.com"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        <label
                                                            htmlFor="floatingInputemail"
                                                            className="text-secondary fw-bold"
                                                        >
                                                            Email address
                                                        </label>
                                                        {errors.email && touched.email ? (
                                                            <p className="text-danger text-start">
                                                                {errors.email}
                                                            </p>
                                                        ) : null}
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            className="form-control border-dark-subtle"
                                                            id="floatingPassword"
                                                            placeholder="Password"
                                                            value={values.password}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        <label
                                                            htmlFor="floatingPassword"
                                                            className="text-secondary fw-bold"
                                                        >
                                                            {" "}
                                                            Password
                                                        </label>
                                                        {errors.password && touched.password ? (
                                                            <p className="text-danger text-start">
                                                                {errors.password}
                                                            </p>
                                                        ) : null}
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input
                                                            type="password"
                                                            name="confirmPassword"
                                                            className="form-control border-dark-subtle"
                                                            id="floatingConfPassword"
                                                            placeholder="Confirm-password"
                                                            value={values.confirmPassword}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                        <label
                                                            htmlFor="floatingConfPassword"
                                                            className="text-secondary fw-bold"
                                                        >
                                                            Confirm Password
                                                        </label>
                                                        {errors.confirmPassword && touched.confirmPassword ? (
                                                            <p className="text-danger text-start">
                                                                {errors.confirmPassword}
                                                            </p>
                                                        ) : null}
                                                    </div>
                                                    <div className="">
                                                        <button
                                                            className="btn d-flex align-items-center justify-content-center btn-login text-uppercase fw-medium"
                                                            type="submit"
                                                        >
                                                            Sign Up
                                                        </button>
                                                    </div>
                                                    <div className="mt-3 fw-medium">
                                                        Already have an account?
                                                        <span
                                                            className="text-primary text-decoration-underline"
                                                            style={{ cursor: "pointer" }}
                                                            onClick={() => setDisplay(!display)}
                                                        >
                                                            Login
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
