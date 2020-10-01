import React from "react";
// import {Container, Row, Col} from "react-bootstrap";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./componnets/Header";
import Footer from "./componnets/Footer";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";
import { Container } from "react-bootstrap";


function App() {
  return (
    <Router>
      <Header/>
      <main className="py-3">
      <Container>
        <Route exact path="/" component={HomeScreen}/>
        <Route  path="/product/:id" component={ProductScreen}/>
      </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
