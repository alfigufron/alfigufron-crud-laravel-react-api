import React, { useState } from "react";
import { Button, Form, FormControl, FormGroup, FormLabel, Modal } from "react-bootstrap";
import PropTypes from "prop-types";

import { getDetail, updateData } from "../../service/Student";

const EditStudentModal = (props) => {
  const [ toggle, setToggle ] = useState(false),
    showToggle = () => setToggle(true),
    closeToggle = () => setToggle(false);

  const [ data, setData ] = useState({});

  const getData = async id => {
    const res = await getDetail(id);

    if (res.status !== 200)
      return alert("Get Data Failed");

    setData(res.data);
    showToggle();
  };
    
  const changeData = (e) => {
    const val = e.target.value;

    (e.target.name === "name")
      ? setData(prevState => ({ ...prevState, name: val }))
      : setData(prevState => ({ ...prevState, class: val }));
  };
    
  const onSubmit = async () => {
    const res = await updateData(data);
    if (res.status !== 200)
      return alert("Update Data Failed");
      
    props.refreshData();
    closeToggle();
  };


  return (
    <>
      <Button variant="dark" onClick={ () => getData(props.dataId) }>Edit</Button>

      <Modal show={toggle} onHide={ closeToggle } animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormControl as="input" name="name" value={ data.name } onChange={ changeData } />
            </FormGroup>
            <FormGroup>
              <FormLabel>Class</FormLabel>
              <FormControl as="select" name="class" value={ data.class } onChange={ changeData } >
                <option>Select Option</option>
                <option value="10">X</option>
                <option value="11">XI</option>
                <option value="12">XII</option>
              </FormControl>
            </FormGroup>
          </Form>

          <Button variant="dark" block onClick={ onSubmit } className="mt-3">
            Update
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

EditStudentModal.propTypes = {
  dataId: PropTypes.number,
  refreshData: PropTypes.func
}

export default EditStudentModal;