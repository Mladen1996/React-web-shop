import React from 'react';
import {Grid,Container} from '@material-ui/core';
import Product from "./Product/Product";

import useStyles from "./styles";

/*const products=[
    {
        id:1,
        name:'Shoes',
        description:'Running shoes.',
        price:'$5'

    },
    {
        id:2,
        name:'Macbook',
        description:'Apple macbook.',
        price:'$10'
        
    }
];*/

const Products=({products,onAddToCart})=>{
    const classes=useStyles();
    return(
        <main classes={classes.content}>
            <Container maxWidth="lg">
        <Grid container justify="center" spacing={2}>
            {
                products.map((product)=>{
                    return(
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                        <Product product={product} onAddToCart={onAddToCart} />
                         </Grid>
                    )
                    
                })
            }
        </Grid>
        </Container>
    </main>
    )
    
}

export default Products;