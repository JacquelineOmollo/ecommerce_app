import React, {useEffect} from 'react'
import { Col, Row } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProduct } from "../actions/productAction";


const HomeScreen = () => {
    const dispatch = useDispatch() 

    useEffect(() =>{
        dispatch(listProduct())
    }, [dispatch])

    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList

   return (
        <div>
            <h1>Featured Products</h1>
   {loading ? <Loader/> : error ? <Message>{error}</Message> : <Row>
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
                
            </Row>  }
        </div>
    )
}

export default HomeScreen

