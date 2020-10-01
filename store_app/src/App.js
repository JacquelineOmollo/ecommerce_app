import React from "react";
// import {Container, Row, Col} from "react-bootstrap";
import './App.css';
import Header from "./componnets/Header";
import Footer from "./componnets/Footer";
import HomeScreen from "./pages/HomeScreen";
import { Container } from "react-bootstrap";


function App() {
  return (
    <>
      <Header/>
      <main className="py-3">
      <Container>
        <HomeScreen/>
      </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;
