import {
  Button,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { Link,} from "react-router-dom";
import React from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
// import image from "./tea.jpg"
import { FcUnlock } from "react-icons/fc";




function Home() {
  const navigate = useNavigate();
  var paperStyle = {
    padding: 10,
    height: "78vh",
    width: 288,
    margin: "20px auto",
  };
  var btnstyle = { margin: "8px 0" };
  var initialValues = {
    email: "",
    password: "",
  };
  var validationSchema = Yup.object().shape({
    email: Yup.string().email("Please Enter Valid E-mail"),
    password: Yup.string().required("Password Required"),
  });
  
  var onSubmit = (values, props) => {
    console.log(values);
    props.resetForm();
    console.log(props);
      navigate('/New');
      };
      
  



  return (
    // <div style={{ backgroundImage:`url(${image})`,backgroundPosition: 'center',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // marginTop: '-20px',
    // width: 'auto',
    // height: '110vh' }}>
  
    <Grid  id="signinLayout" >
    <div >
      <Paper id="paper" elevation={10} style={paperStyle}  >
        <h2> iSense </h2> <br />
       <div id="lock"><FcUnlock/></div> 
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          
        >
          {(props) => (
            <Form>
              <br /> <br />
              <Field
                as={TextField}
                label="E-Mail"
                name="email"
                placeholder="Enter your E-Mail"
                fullWidth
              />{" "}
              <br /> <br />
              <Field
                as={TextField}
                label="Password"
                name="password"
                placeholder="Enter password"
                type={"password"}
                fullWidth
              />{" "}
              <br />
              <Button
                type="Submit"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                Sign In
              </Button>{" "}
            </Form>
          )}
        </Formik>
        <br />
        <Link to="#">Forgot password ?</Link>
        <br />
        <br />
        <div>
          Don't you have an account ?<Link to="/form">SignUp</Link>
          <br />
        </div>
      </Paper></div>
    </Grid>
    // </div>
  );
}
export default Home;






