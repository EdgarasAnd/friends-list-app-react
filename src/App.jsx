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
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState } from "react";


const friendList = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    age: 32,
    city: "Kaunas",
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Hudghes",
    age: 28,
    city: "Siauliai",
  },
  {
    id: 3,
    firstName: "Thomas",
    lastName: "Muiller",
    age: 33,
    city: "Vilnius",
  },
];

const initialFormData = {id: "", firstName: "", lastName: "", age: "", city: "" };


export function App() {
  const [friends, setFriends] = useState(friendList);

  const [formState, setFormState] = useState(initialFormData);

  const deleteFriend = (friendId) => {
    const filteredFriends = friends.filter((friend) => friend.id !== friendId);
    setFriends(filteredFriends);
  };

  const onChange = (e) => {
    const fieldID = e.target.id;
    const fieldValue = e.target.value;

    setFormState({ ...formState, [fieldID]: fieldValue });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newFriend = {
      firstName: formState.firstName,
      lastName: formState.lastName,
      age: formState.age,
      city: formState.city,
      id: String(friends.length)
    };

    setFriends([...friends, newFriend]);
    setFormState(initialFormData);
    
  };
  console.log(formState)
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
            <Badge bg="primary" as="button">
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
        <Row xs={1} md={2} lg={4} className="g-4 m-3">
          <Form onSubmit={onSubmit} className="mw-50">
            
              <Form.Control
                className="my-1"
                type="text"
                placeholder="Name"
                id="firstName"
                value={formState.firstName}
                onChange={onChange}
              />
              <Form.Control
                className="my-1"
                type="text"
                placeholder="Last name"
                id="lastName"
                value={formState.lastName}
                onChange={onChange}
              />
              <Form.Control
                className="my-1"
                type="number"
                placeholder="Age"
                id="age"
                value={formState.age}
                onChange={onChange}
              />
              <Form.Control
                className="my-1"
                type="text"
                placeholder="City"
                id="city"
                value={formState.city}
                onChange={onChange}
              />

              <Button                
                className="w-100"
                variant="success"
                type="submit">
                + Add
              </Button>
            
          </Form>
          <Col className="d-flex align-items-center justify-content-center">
            <img src={logo} width="50%" className="App-logo" alt="logo" />
          </Col>
        </Row>
      </header>

      <main className="container">
        {friends.length ? (
          <Row xs={1} md={2} lg={5} className="g-4 m-3">
            {friends.map((friend) => (
              <Col>
                <Card className="h-100 d-flex" key={friend.id}>
                  <Card.Body className="text-center">
                    <Badge bg="secondary">ID: {friend.id}</Badge>
                    <Card.Title>
                      {friend.firstName}
                      <br></br> {friend.lastName}
                    </Card.Title>
                    <Card.Text>
                      <strong>Age:</strong> {friend.age}
                    </Card.Text>
                    <Card.Text>
                      <strong>City:</strong> {friend.city}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <ButtonGroup>
                      <Button
                        variant="danger btn-md"
                        onClick={() => deleteFriend(friend.id)}>
                        Delete
                      </Button>
                      <Button variant="primary btn-md" >
                        Edit
                      </Button>
                    </ButtonGroup>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <h3 style={{ textAlign: "center" }}>
            You have no friends
          </h3>
        )}
      </main>
    </>
  );
}
