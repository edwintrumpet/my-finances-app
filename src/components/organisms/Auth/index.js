import React, { useState } from 'react';
import { bool, func, shape } from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { Logo, Visibility, VisibilityOff } from '../../../assets/icons';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '../../atoms';
import FormCard from '../FormCard';
import useStyles from './styles';

let initialValues = {
  email: '',
  password: '',
};

let validationObject = {
  email: Yup.string().required('El email es obligatorio').email('El formato del email es inválido'),
  password: Yup.string().required('La contraseña es obligatoria')
    .min(8, 'Contraseña de mínimo 8 caracteres')
    .matches(/(.)*(\d)+(.)*/, 'Al menos un número en la contraseña')
    .matches(/(.)*[A-Z]+(.)*/, 'Al menos una mayúscula en contraseña')
    .matches(/(.)*[a-z]+(.)*/, 'Al menos una minúscula en contraseña'),
};

export default function Auth({ islogin, style, toggleauth }) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  if (!islogin) {
    initialValues = {
      name: '',
      confirmPassword: '',
      ...initialValues,
    };
    validationObject = {
      name: Yup.string().required('El nombre es obligatorio').min(4, 'Nombre de mínimo 4 caracteres'),
      confirmPassword: Yup.string().required('Debes confirmar tu contraseña'),
      ...validationObject,
    };
  } else if (validationObject.name) {
    delete initialValues.name;
    delete initialValues.confirmPassword;
    delete validationObject.name;
    delete validationObject.confirmPassword;
  }

  const validationSchema = Yup.object().shape(validationObject);

  const action = islogin ? 'Iniciar sesión' : 'Crear cuenta';
  const redirection = islogin ? 'Crear cuenta' : 'Iniciar sesión';

  const handleSend = (values, { setSubmitting }) => {
    if (islogin || values.password === values.confirmPassword) {
      setTimeout(() => {
        console.log(values);
        setSubmitting(false);
      }, 3000);
    } else {
      setSubmitting(false);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const passwordIcon = (!showPassword ? <Visibility /> : <VisibilityOff />);
  const passwordType = showPassword ? 'text' : 'password';

  const buttonIsDisabled = (isSubmitting, touched, values) => ((touched.confirmPassword
    && values.password !== values.confirmPassword) || isSubmitting);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSend}
      validationSchema={validationSchema}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldTouched,
        touched,
        values,
      }) => (
        <FormCard
          errors={errors}
          initialValues={initialValues}
          issubmitting={isSubmitting}
          touched={touched}
          style={style}
          values={values}
        >
          <Logo color="primary" customization={classes.logo} />
          <Typography variant="h5">{action}</Typography>
          <form onSubmit={handleSubmit} className={classes.form}>
            {!islogin && (
            <TextField
              disabled={isSubmitting}
              handleChange={handleChange}
              handleBlur={handleBlur}
              label="Nombre"
              name="name"
              type="name"
              value={values.name}
              variant="outlined"
            />
            )}
            <TextField
              disabled={isSubmitting}
              handleChange={handleChange}
              handleBlur={handleBlur}
              label="Email"
              name="email"
              type="email"
              value={values.email}
              variant="outlined"
            />
            <FormControl variant="outlined">
              <InputLabel htmlfor="password">Contraseña</InputLabel>
              <OutlinedInput
                disabled={isSubmitting}
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      aria="toggle password visibility"
                      edge="end"
                      handleClick={handleShowPassword}
                    >
                      {passwordIcon}
                    </IconButton>
                  </InputAdornment>
                )}
                handleBlur={handleBlur}
                handleChange={handleChange}
                id="password"
                labelWidth={85}
                name="password"
                type={passwordType}
                value={values.password}
              />
            </FormControl>
            {!islogin && (
            <FormControl variant="outlined">
              <InputLabel htmlfor="confirmPassword">Confirmar contraseña</InputLabel>
              <OutlinedInput
                disabled={isSubmitting}
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      aria="toggle password visibility"
                      edge="end"
                      handleClick={handleShowPassword}
                    >
                      {passwordIcon}
                    </IconButton>
                  </InputAdornment>
                )}
                handleBlur={() => setFieldTouched('confirmPassword', true)}
                handleChange={handleChange}
                id="confirmPassword"
                labelWidth={160}
                name="confirmPassword"
                type={passwordType}
                value={values.confirmPassword}
              />
            </FormControl>
            )}
            <div className={classes.actions}>
              <Button
                color="secondary"
                disabled={isSubmitting}
                handleClick={toggleauth}
                type="button"
                variant="outlined"
              >
                {redirection}
              </Button>
              <Button
                color="secondary"
                disabled={buttonIsDisabled(isSubmitting, touched, values)}
                type="submit"
                variant="contained"
              >
                {action}
              </Button>
            </div>
          </form>
        </FormCard>
      )}
    </Formik>
  );
}

Auth.propTypes = {
  islogin: bool,
  toggleauth: func.isRequired,
  style: shape(),
};

Auth.defaultProps = {
  islogin: false,
  style: null,
};
