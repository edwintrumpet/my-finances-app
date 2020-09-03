import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  container: {
    position: 'absolute',
    margin: 'auto',
    overflow: 'hidden',
    padding: 16,
    minHeight: '100%',
    width: '100%',
    '@media (min-width: 600px)': {
      position: 'relative',
      marginTop: 16,
      width: 600,
      minHeight: 'auto',
    },
    '@media (max-width: 600px)': {
      borderRadius: 0,
    },
  },
  centerText: {
    textAlign: 'center',
  },
  progress: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    width: '100%',
    marginTop: 16,
    gap: '8px',
  },
  nameField: {
    gridColumn: '1/-1',
  },
  balanceField: {
    gridColumn: '2/-1',
  },
  submit: {
    gridColumnEnd: '-1',
  },
}));
