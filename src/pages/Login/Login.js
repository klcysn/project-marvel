import {login, logout} from "../../authentication/Authentication";
import { Formik } from "formik";
import * as yup from "yup";
import "./Login.scss";
import {useHistory} from "react-router-dom"


const Login = () => {
  const history = useHistory()
  let schema = yup.object().shape({
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Password must include min 6 character"),
    email: yup.string().email().required("Please enter your email")
  });
  return (
    <div className="login-body">
      <div className="login-form-container">
        <div className="login-form-background">
          {/* <img className="login-form-background-image" 
           src="https://p4.wallpaperbetter.com/wallpaper/442/315/805/marvel-comics-logo-captain-america-wallpaper-preview.jpg" 
           alt="" 
          /> */}
          <Formik
            initialValues={{ email: "", password: ""}}
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
              login(values.email.toLowerCase().trim(), values.password);
              setSubmitting(false);
              history.push("/")
            }}>

            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) =>
              (
                <form onSubmit={handleSubmit} className="login-form">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Please enter your email"
                    className="login-input" />
                  <span className="login-span">{errors.email && touched.email && errors.email}</span>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Please enter your password"
                    className="login-input" />
                  <span className="login-span">{errors.password && touched.password && errors.password}</span>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="login-button">Login</button>
                </form>
              )
            }
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
