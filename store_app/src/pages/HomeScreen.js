import React, {useState, useEffect} from 'react'
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Product from "../componnets/Product";

const HomeScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        const getProducts = async () => {
            const {data} = await axios.get("/api/products")
            setProducts(data)
        }
        getProducts()
    }, [])

    return (
        <div>
            <h1>Featured Products</h1>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
                
            </Row>
        </div>
    )
}

export default HomeScreen

