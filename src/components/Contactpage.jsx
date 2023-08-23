import { Container } from "react-bootstrap";
import "../pages/style.css";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2>Say Hello!</h2>
        <div className="input-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your mail"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="input-group">
          <textarea
            className="form-control"
            placeholder="Message"
            aria-label="With textarea"
            defaultValue={""}
          />
        </div>
        <div className="mt-3">
          <button
            type="button"
            className="btn btn-success w-100"
          >
            Send
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Contactpage;
