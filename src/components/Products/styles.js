import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: 'red',
    padding: theme.spacing(5),
  },
  root: {
    flexGrow: 1,
  },
}));