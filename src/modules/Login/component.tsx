import React from 'react';
import { Redirect } from 'react-router-dom';
import { Container, CssBaseline, Avatar, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik } from 'formik';
import * as yup from 'yup';

import Form from './Form';

interface Props {
  onSubmit: () => void;
  isLoggedIn: boolean;
  classes: {
    [key: string]: string;
  };
}

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object({
  username: yup.string().required('Username is required !'),
  password: yup.string().required('Enter your password'),
});

const Login = ({ onSubmit, isLoggedIn, classes }: Props) => {
  return isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          render={formikProps => <Form {...formikProps} />}
        />
      </div>
    </Container>
  );
};

export default Login;
