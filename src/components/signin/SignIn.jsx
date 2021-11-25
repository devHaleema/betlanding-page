import React from 'react'
import "./signin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
    username: '',
    password: '',
  };

  const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };

  const validationSchema = yup.object({
    username: yup.string().required('Username is required'),  
    password: yup.string().required('Password is required')
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),
 
  });

function SignIn() {
    return (
      <div className="container formWrapper row">
       <div className="register-form col-6">
           <h5>Login Form</h5>
         <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
           <Form className="form-field align-items-center">

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

                 
              <div className="form-group">
                <button type="submit" className="btn btn-primary buton">
                  Login
                </button>
              </div>
            </Form>
        </Formik>
      </div>   
      </div>    
    )
}

export default SignIn