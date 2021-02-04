import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { getData } from "../../service/Student";
import { StudentDatatable, AddStudentModal } from "../../components";
import "./App.scss";

const App = () => {
  const [ studentData, setStudentData ] = useState([]);

  useEffect(() => {
    document.title = "Student Data";

    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getData();

    setStudentData(res.data);
  }

  return (
    <div className="app">
      <Container>
        <Row>
          <Col md="12" className="header">
            <h2>Data Siswa</h2>
          </Col>

          <Col md="12">
            <AddStudentModal refreshData={ fetchData } />
            <StudentDatatable students={ studentData } refreshData={ fetchData } />
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
