import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import logo from "./logo.svg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { ButtonGroup } from "react-bootstrap";
import { useState } from "react";

function friendId() {
  return Math.floor(Math.random() * 100);
}

export function App() {
  const friends = [
    {
      id: friendId(),
      firstName: "John",
      lastName: "Smith",
      age: 32,
      city: "Kaunas",
    },
    {
      id: friendId(),
      firstName: "Maria",
      lastName: "Hudghes",
      age: 28,
      city: "Siauliai",
    },
    {
      id: friendId(),
      firstName: "Thomas",
      lastName: "Muiller",
      age: 33,
      city: "Vilnius",
    },
  ];

  const [firstName, SetFirstName] = useState('');
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="100"
              className="App-logo d-inline-block align-middle"
              alt="logo"
            />
            Friends List{" "}
            <Badge bg="primary" as="Button">
              React+Bootstrap
            </Badge>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header className="container">
        <Row xs={1} md={2} lg={2} className="g-4 m-3">
          <Form className="mw-50">
            <Form.Group controlId="firstName">
              <Form.Control className="my-1"
                type="text"
                placeholder="Name"
                value={friends.firstName}
                onChange={() => SetFirstName()}
              />
              <Form.Control className="my-1" type="text" placeholder="Second name" />
              <Form.Control className="my-1" type="number" placeholder="Age" />
              <Form.Control className="my-1" type="text" placeholder="City" />
            
            <Button className="w-100" variant="success" type="submit">
              + Add
            </Button></Form.Group>
          </Form>
          <Col className="d-flex align-items-center justify-content-center">
            <img src={logo} width="50%" className="App-logo" alt="logo" />
          </Col>
        </Row>
      </header>

      <main className="container">
        <Row xs={2} md={3} lg={4} className="g-4 m-3">
          {friends.map(({ id, firstName, lastName, age, city }) => (
            <Col>
              <Card className="h-100 d-flex">
                <Card.Body className="text-center">
                  <Badge bg="secondary">ID: {id}</Badge>
                  <Card.Title>
                    {firstName}
                    <br></br> {lastName}
                  </Card.Title>
                  <Card.Text>Age: {age}</Card.Text>
                  <Card.Text>City: {city}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <ButtonGroup>
                    <Button variant="danger btn-md" className="">
                      Delete
                    </Button>
                    <Button variant="primary btn-md" className="">
                      Edit
                    </Button>
                  </ButtonGroup>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </main>
    </>
  );
}
