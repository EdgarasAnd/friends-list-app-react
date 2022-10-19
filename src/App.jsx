import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Badge from "react-bootstrap/Badge";
import Card from "./Card"

export default function App() {
  return (
    <div>
      <header>       
        <div>
          <h1 className="text-center my-3">
            Friends list{" "}
            <Badge bg="secondary" as="Bandge">
              App
            </Badge>
          </h1>
        </div>
      </header>
      <main className="container">
      <div className="row">
        <Card />
      </div>
      </main>
    </div>
  );
};
