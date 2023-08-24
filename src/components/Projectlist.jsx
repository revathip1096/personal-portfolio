import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import todolist from "../Assets/images/todolist.jpg";
import expensestracker from "../Assets/images/expensestracker.jpg";
import calculator from "../Assets/images/calculator.jpg";

import "../pages/style.css";


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            


            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://todo-using-chakra-seven.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={expensestracker}
                isBlog={false}
                title="Expenses Tracker"
                description="The Basic Expenses Tracker is a website that helps you keep track of your money. It's like having a simple diary for your expenses."
                ghLink="https://expenses-tracker-wine.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={calculator}
                isBlog={false}
                title="Calculator"
                description=" The Calculator Web Application is a user-friendly, responsive, and feature-rich calculator that I designed and developed as part of my journey into web development. This project reflects my commitment to creating practical and intuitive solutions for everyday tasks."
                ghLink="https://calculator-jade-phi.vercel.app/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;