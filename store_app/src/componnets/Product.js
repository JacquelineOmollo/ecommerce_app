import React from 'react'
import { Card, CardImg } from 'react-bootstrap';

const Product = ({product}) => {
    return (
        
        <Card className="my-3 p-3 reound">
            <a href={`/product/${product._id}`}>
                <CardImg src={product.image} variant="top" />
            </a>
        </Card>
      
    )
}

export default Product

