import logo from "./logo.svg";
import "./App.css";
import { Container, Navbar, Nav, Form, Row , Col} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Vote Now!</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#features">Events</Nav.Link>
            <Nav.Link href="#pricing" style={{color:'orange'}}><big>Contribute</big></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Form.Select aria-label="Default select example">
  <option>Nominees for tonight are</option>
  <option value="1">Abu One</option>
  <option value="2">Miss Two</option>
  <option value="3">$4D Three</option>
</Form.Select>
      <Container>
        <Row>
          <Col>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="email"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInputCustom">Email address</label>
        </Form.Floating>
        </Col>
        <Col>
        <Form.Floating>
          <Form.Control
            id="floatingPasswordCustom"
            type="password"
            placeholder="Password"
          />
          <label htmlFor="floatingPasswordCustom">Password</label>
        </Form.Floating>
        <Form.Floating>
          <Form.Control
            id="floatingPasswordCustom"
            type="password"
            placeholder="F***Password"
          />
          <label htmlFor="floatingPasswordCustom"><small><b>fake</b></small>Password</label>
        </Form.Floating>
        </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
