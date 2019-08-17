import React from 'react';
import { FormikErrors, FormikTouched } from 'formik';
import { TextField, Button } from '@material-ui/core';

interface Values {
  username: string;
  password: string;
}

interface Props {
  classes: {
    [key: string]: string;
  };

  values: Values;

  touched: FormikTouched<Values>;
  isValid: boolean;
  errors: FormikErrors<Values>;
  handleChange(e: React.ChangeEvent<any>): void;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  setFieldTouched(
    field: keyof Values & string,
    isTouched?: boolean,
    shouldValidate?: boolean
  ): void;
}

const Form = ({
  handleChange,
  setFieldTouched,
  handleSubmit,
  touched,
  errors,
  isValid,
  values,
  classes,
}: Props) => {
  const { username, password } = values;

  const change = (name: keyof Values & string, e: React.ChangeEvent<any>) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return (
    <form className={classes.root} noValidate onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
        helperText={touched.username ? errors.username : ''}
        error={touched.username && Boolean(errors.username)}
        value={username}
        onChange={change.bind(null, 'username')}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        helperText={touched.password ? errors.password : ''}
        error={touched.password && Boolean(errors.password)}
        value={password}
        onChange={change.bind(null, 'password')}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={!isValid}
      >
        Sign In
      </Button>
    </form>
  );
};

export default Form;
