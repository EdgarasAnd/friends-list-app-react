import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./logo.svg";
export default function InputForm() {
  return (
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
        <Col className="d-flex align-items-center justify-content-center"><img
            src={logo}
            width="50%"
            className="App-logo"
            alt="logo"
          />
          </Col>
      </Row>
    </header>
  );
}
