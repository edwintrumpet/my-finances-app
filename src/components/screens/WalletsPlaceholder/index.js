import React from 'react';
import { func } from 'prop-types';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { MenuItem } from '@material-ui/core';

import { createWallet } from '../../../redux/actions';
import currencies from '../../../utils/currencies.json';
import {
  Button,
  FormControl,
  InputLabel,
  LinearProgress,
  Paper,
  Select,
  TextField,
  Typography,
} from '../../atoms';
import { ShowErrorsForm } from '../../molecules';
import useStyles from './styles';

const initialValues = {
  balance: 0,
  currency: '',
  name: '',
};

const validationSchema = Yup.object().shape({
  balance: Yup.number().min(0, 'No puede tener valores negativos'),
  currency: Yup.string().required('El tipo de moneda es requerido'),
  name: Yup.string().required('El nombre es requerido'),
});

const username = 'Lorena';

function WalletsPlaceholder(props) {
  const classes = useStyles();

  const title = `¡Hola ${username}!`;
  const subtitle = 'Crea tu primera billetera';

  const handleSend = (values, { setSubmitting }) => {
    props.createWallet(values);
    setSubmitting(false);
  };

  const currencyOptions = () => Object.keys(currencies).map((element) => (
    <MenuItem value={element} key={element}>
      {currencies[element].name_plural}
    </MenuItem>
  ));

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSend}
      validationSchema={validationSchema}
    >
      {({
        errors,
        handleChange,
        handleSubmit,
        isSubmitting,
        handleBlur,
        touched,
        values,
      }) => (
        <Paper customization={classes.container} elevation={2}>
          {isSubmitting && <LinearProgress customization={classes.progress} />}

          <Typography variant="h5" customization={classes.centerText}>
            {title}
          </Typography>

          <Typography customization={classes.centerText}>{subtitle}</Typography>

          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              customization={classes.nameField}
              handleChange={handleChange}
              handleBlur={handleBlur}
              label="Nombre de la billetera"
              name="name"
              type="text"
              value={values.name}
              variant="outlined"
            />
            <FormControl variant="outlined">
              <InputLabel id="currency">Moneda</InputLabel>
              <Select
                handleChange={handleChange}
                handleBlur={handleBlur}
                labelId="currency"
                labelWidth={60}
                name="currency"
                value={values.currency}
              >
                <MenuItem value="">None</MenuItem>
                {currencyOptions()}
              </Select>
            </FormControl>
            <TextField
              customization={classes.balanceField}
              handleChange={handleChange}
              handleBlur={handleBlur}
              label="Saldo inicial"
              name="balance"
              type="number"
              value={values.balance}
              variant="outlined"
            />

            <Button
              color="secondary"
              customization={classes.submit}
              disabled={isSubmitting}
              type="submit"
              variant="contained"
            >
              Crear
            </Button>

            <ShowErrorsForm
              errors={errors}
              initialValues={initialValues}
              touched={touched}
            />
          </form>
        </Paper>
      )}
    </Formik>
  );
}

WalletsPlaceholder.propTypes = {
  createWallet: func.isRequired,
};

const mapDispatchToProps = {
  createWallet,
};

export default connect(null, mapDispatchToProps)(WalletsPlaceholder);
