import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    pagination:{
        listStyleType:'none',
        display:'flex',
        justifyContent:'center'
    },
    pageItem:{
        margin:'10px'
    },
    pageLink:{
        textDecoration:'none',
        cursor:'pointer'
    }
}));