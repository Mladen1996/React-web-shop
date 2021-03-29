import {makeStyles} from "@material-ui/core/styles";


export default makeStyles(()=>({
    root:{
        maxWidth:"100%",
        marginTop:"30px",
        
    },

    media:{
        height:"243px",
        marginBottom:"5px"
    },

    cardActions:{
        display:'flex',
        justifyContent:'flex-end'
    },

    cardContent:{
        display:'flex',
        justifyContent:'space-between',
        padding:"10px"
    },

    cardBox:{
        padding:"0px"
    }
}))