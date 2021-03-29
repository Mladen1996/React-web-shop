import React from 'react';
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";

import useStyles from "./styles";



const Product=({product,onAddToCart})=>{
    const classes=useStyles();
  /*  console.log(product.categories[0]);*/

    return(
        <Card className={classes.root}>
           
            <CardContent className={classes.cardBox}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
                <div className={classes.cardContent}>
                    <Typography variant="h6" gutterBottom>
                        {product.name}
                    </Typography>
                    
                   
                </div>
                <div className={classes.cardContent}>
                    <Typography variant="h5">
                        {product.price.formatted_with_code}
                    </Typography>
                   
                </div>
                <div className={classes.cardContent}>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Аdd to Cart" onClick={()=> onAddToCart(product.id,1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
   
}
export default Product;