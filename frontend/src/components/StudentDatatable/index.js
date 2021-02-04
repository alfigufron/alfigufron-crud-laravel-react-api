import React from "react";
import { Table, Button } from "react-bootstrap";
import PropTypes from "prop-types";

import { EditStudentModal } from "../index";
import { deleteData } from "../../service/Student";

const StudentDatatable = (props) => {
  
  const onDelete = async id => {
    const res = await deleteData(id);
    if (res.status !== 200)
      return alert("Delete Data Failed");

    props.refreshData();
  }
  
  return (
    <Table striped className="text-center">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Class</th>
          <th>Opsi</th>
        </tr>
      </thead>
      <tbody>
        {props.students.map((data, index) => {
          return (
            <tr key={ index }>
              <td>{ index + 1 }</td>
              <td>{ data.name }</td>
              <td>{ data.class }</td>
              <td>
                <EditStudentModal className="ml-2" dataId={ data.id } refreshData={ props.refreshData } />
                <Button variant="danger" className="ml-2" onClick={ () => onDelete(data.id) }>Hapus</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

StudentDatatable.propTypes = {
  students: PropTypes.array,
  refreshData: PropTypes.func
}

export default StudentDatatable;