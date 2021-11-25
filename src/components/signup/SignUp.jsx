import React from 'react'
import "./signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };

  const validationSchema = yup.object({
    fullname: yup.string().required('Fullname is required'),
    username: yup.string().required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: yup.string().required('Email is required').email('Email is invalid'),
    password: yup.string().required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup.string().required('Confirm Password is required')
      .oneOf([yup.ref('password'), null], 'Confirm Password does not match'),
 
  });

function SignUp() {
    return (
      <div className="formWrapper row">
       <div className="register-form col-6">
           <h5>SignUp Form</h5>
         <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
           <Form className="form-field align-items-center">
              <div className="form-group mb-3 col-6">
                <label>Full Name</label>
                <Field name="fullname" type="text" className="form-control" />
                <ErrorMessage
                  name="fullname"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="form-group mb-3 col-6">
                <label htmlFor="username"> Username </label>
                <Field name="username" type="text" className="form-control" />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="form-group mb-3 col-6">
                <label htmlFor="email"> Email </label>
                <Field name="email" type="email" className="form-control" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="form-group mb-3 col-6">
                <label htmlFor="password"> Password </label>
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="form-group mb-3 col-6">
                <label htmlFor="confirmPassword"> Confirm Password </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className="form-control"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-danger"
                />
              </div>
                 
              <div className="form-group ">
                <button type="submit" className="btn btn-primary col-auto buton">
                  SignUp
                </button>
              </div>
            </Form>
        </Formik>
      </div>   
      </div>    
    )
}

export default SignUp
