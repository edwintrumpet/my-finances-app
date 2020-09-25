import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  logo: {
    width: 80,
    height: 80,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    margin: '16px 0',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
}));
