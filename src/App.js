import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Badge from "react-bootstrap/Badge";
import NavBar from "./navbar";

function App() {
  return (
    <div>      
      <header >
      <NavBar />
        <div >
          <h1 className="text-center my-3">
            Friends list{" "}
            <Badge bg="secondary" as="Button">
              App
            </Badge>
          </h1>
        </div>
      </header>
    </div>
  );
}

export default App;
