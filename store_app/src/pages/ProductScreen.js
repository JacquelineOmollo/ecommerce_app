import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {Col, Row,Image, ListGroup, Card, Button, ListGroupItem, Form, Control} from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import {listProductDetails} from "../actions/productAction";


const ProductScreen = ({match}) => {
    const [qty, setQty] = useState(0)
    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product} = productDetails

    useEffect(() =>{
       dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    return (
        <>
            <Link className="btn btn-dark my-3" to="/">Go Back</Link>
    {loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> : ( <Row>
                <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
                </Col>
                <Col md={3}>
                <ListGroup variant="flauh">
                <ListGroupItem>
                    <h3>{product.name}</h3>
                </ListGroupItem>
                <ListGroupItem>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </ListGroupItem>
                <ListGroupItem>
                    Price: ${product.price}
                </ListGroupItem>
                <ListGroupItem>
                    Description: {product.description}
                </ListGroupItem>
                </ListGroup>
                </Col>
                <Col md={3}>
                  <Card>
                      <ListGroup variant="flush">
                          <ListGroupItem>
                              <Row>
                                  <Col>Price:</Col>
                                  <Col>
                                 <strong>{product.price}</strong>
                                  </Col>
                              </Row>
                          </ListGroupItem>
                      </ListGroup>
                      <ListGroup variant="flush">
                          <ListGroupItem>
                              <Row>
                                  <Col>Status:</Col>
                                  <Col>
                                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                  </Col>
                              </Row>
                          </ListGroupItem>
                          {product.countInStock > 0 && (
                              <ListGroupItem>
                                  <Row>
                                      <Col>Qty</Col>
                                      <Col>
                                        <Form.Control as="select" value={qty} 
                                        onChange={(e) => setQty(e.target.value)}>
                                            {[...Array(product.countInStock).keys()].map((k)=> (
                                                <option key={k + 1} value={k + 1}>
                                                    {k + 1}
                                                </option>
                                            ))}
                                        </Form.Control>
                                      </Col>
                                  </Row>
                              </ListGroupItem>
                          )}
                          <ListGroupItem>
                              <Button className="btn-block" type="button" disabled={product.countInStock === 0}>
                                  Add To Cart
                              </Button>
                          </ListGroupItem>
                      </ListGroup>
                  </Card>  
                </Col>
            </Row>) }
           
        </>
    )
}

export default ProductScreen
