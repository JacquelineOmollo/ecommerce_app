import React from "react";
// import {Container, Row, Col} from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";
import CartScreen from "./pages/CartScreen";
import { Container } from "react-bootstrap";


function App() {
  return (
    <Router>
      <Header/>
      <main className="py-3">
      <Container>
        <Route exact path="/" component={HomeScreen}/>
        <Route path="/product/:id" component={ProductScreen}/>
        <Route path="/cart/:id?" component={CartScreen}/>
      </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
