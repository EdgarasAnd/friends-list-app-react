import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

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

export default function App() {
  return (
    <main className="container">
      <Row xs={2} md={3} lg={4} className="g-4 m-3">
        {friends.map(({ id, firstName, lastName, age, city }) => (
          <Col>
            <Card>
              <Card.Body className="text-center">
                <Badge bg="success">ID: {id}</Badge>
                <Card.Title>
                  {firstName} {lastName}
                </Card.Title>
                <Card.Text>Age: {age}</Card.Text>
                <Card.Text>City: {city}</Card.Text>
                <Button variant="danger" className="w-100">
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </main>
  );
}
