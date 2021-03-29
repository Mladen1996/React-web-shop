import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: 'center'
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  list: {
    width: 250,
  },
  linkBlackText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    marginRight: '10px',
  },
  grow: {
    flexGrow: 1,
  },
  button:{
      display:'flex',
      marginRight:'20px'
  }
}));