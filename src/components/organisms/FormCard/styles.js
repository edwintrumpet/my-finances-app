import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  container: {
    position: 'absolute',
    margin: 'auto',
    overflow: 'hidden',
    textAlign: 'center',
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
  progress: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
}));
