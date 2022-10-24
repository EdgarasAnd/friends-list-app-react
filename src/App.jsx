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

function friendId() {
  return Math.floor(Math.random() * 100);
}

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

export function App() {
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
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="secondName">
              <Form.Label>Second Name</Form.Label>
              <Form.Control type="text" placeholder="Second name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Age" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" />
            </Form.Group>
            <Button className="w-100" variant="primary" type="submit">
              Submit
            </Button>
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
                  <Badge bg="success">ID: {id}</Badge>
                  <Card.Title>
                    {firstName}
                    <br></br> {lastName}
                  </Card.Title>
                  <Card.Text>Age: {age}</Card.Text>
                  <Card.Text>City: {city}</Card.Text>
                  <Button variant="danger" className="w-100 ">
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </main>
    </>
  );
}
