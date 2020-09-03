import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  errors: {
    gridColumn: '1/-1',
    textAlign: 'center',
    color: theme.palette.error.main,
    textTransform: 'uppercase',
  },
  itemError: {
    display: 'block',
  },
}));
