import React, { useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

import { createData } from "../../service/Student";

const AddStudentModal = (props) => {
  const [ toggle, setToggle ] = useState(false),
    showToggle = () => setToggle(true),
    closeToggle = () => setToggle(false);

  const [ data, setData ] = useState({
    name: "",
    class: ""
  });
  
  const setValData = (e) => {
    const val = e.target.value;

    (e.target.name === "name")
      ? setData(prevState => ({ ...prevState, name: val }))
      : setData(prevState => ({ ...prevState, class: val }));
  };

  const submitData = async () => {
    if (data.name === "" || data.class === "")
      return alert("Empty Data");

    const res = await createData(data);
    if (res.status !== 200)
      alert("Add Data Failed");

    closeToggle()
    props.refreshData();
  };

  return (
    <>
      <Button variant="dark" block onClick={ showToggle }>Add Student</Button>

      <Modal show={toggle} onHide={ closeToggle } animation={ false } centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormControl as="input" name="name" onChange={ setValData } />
            </FormGroup>
            <FormGroup>
              <FormLabel>Class</FormLabel>
              <FormControl as="select" name="class" onChange={ setValData }>
                <option>Select Option</option>
                <option value="10">X</option>
                <option value="11">XI</option>
                <option value="12">XII</option>
              </FormControl>
            </FormGroup>
          </Form>

          <Button variant="dark" block onClick={ submitData } className="mt-3">
            Create
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

AddStudentModal.propTypes = {
  refreshData: PropTypes.func
}

export default AddStudentModal;