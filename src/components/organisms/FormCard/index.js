import React from 'react';
import { bool, node, shape } from 'prop-types';

import { LinearProgress, Paper } from '../../atoms';
import { ShowErrorsForm } from '../../molecules';
import useStyles from './styles';

export default function FormCard({
  children,
  issubmitting,
  errors,
  initialValues,
  style,
  touched,
  values,
}) {
  const classes = useStyles();

  return (
    <Paper customization={classes.container} style={style}>
      {issubmitting && <LinearProgress customization={classes.progress} />}
      {children}
      <ShowErrorsForm
        errors={errors}
        initialValues={initialValues}
        touched={touched}
        values={values}
      />
    </Paper>
  );
}

FormCard.propTypes = {
  children: node,
  issubmitting: bool,
  errors: shape(),
  initialValues: shape(),
  style: shape(),
  touched: shape(),
  values: shape(),
};

FormCard.defaultProps = {
  children: null,
  issubmitting: false,
  errors: {},
  initialValues: {},
  style: null,
  touched: {},
  values: {},
};
