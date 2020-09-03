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
}) {
  const classes = useStyles();

  const showTransition = (element) => (
    <Transition
      key={element}
      in={(errors[element] && touched[element])}
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
    </div>
  );
}

ShowErrorsForm.propTypes = {
  errors: shape(),
  initialValues: shape(),
  touched: shape(),
};

ShowErrorsForm.defaultProps = {
  errors: {},
  initialValues: {},
  touched: {},
};
