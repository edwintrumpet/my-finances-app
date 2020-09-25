import React from 'react';
import { shape } from 'prop-types';
import { Transition } from 'react-transition-group';

import useStyles from './styles';
import { Typography } from '../../atoms';
import { defaultStyle, transitionStyles } from './animations';

export default function ShowErrorsForm({
  errors,
  initialValues,
  touched,
  values,
}) {
  const classes = useStyles();

  const showTransition = (element) => (
    <Transition
      key={element}
      in={(element !== 'confirmPassword' && errors[element] && touched[element])}
      timeout={300}
    >
      {(state) => (
        <Typography
          style={{ ...defaultStyle, ...transitionStyles[state] }}
          key={element}
          customization={classes.itemError}
          variant="caption"
        >
          {errors[element]}
        </Typography>
      )}
    </Transition>
  );

  const iterateErrors = () => Object.keys(initialValues).map((element) => showTransition(element));

  return (
    <div className={classes.errors}>
      {iterateErrors()}
      <Transition
        in={touched.confirmPassword && values.password !== values.confirmPassword}
        timeout={300}
      >
        {(state) => (
          <Typography
            style={{ ...defaultStyle, ...transitionStyles[state] }}
            customization={classes.itemError}
            variant="caption"
          >
            Las contraseñas no coinciden
          </Typography>
        )}
      </Transition>
    </div>
  );
}

ShowErrorsForm.propTypes = {
  errors: shape(),
  initialValues: shape(),
  touched: shape(),
  values: shape(),
};

ShowErrorsForm.defaultProps = {
  errors: {},
  initialValues: {},
  touched: {},
  values: {},
};
