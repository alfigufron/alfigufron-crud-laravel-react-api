import { http } from "../config/http";

const getData = () => {
  return http.get("student/data");
}

const createData = data => {
  return http.post("student/create", data);
}

const getDetail = id => {
  return http.get(`student/edit/${id}`);
}

const updateData = data => {
  return http.put(`student/update/${data.id}`, data);
}

const deleteData = id => {
  return http.delete(`student/delete/${id}`);
}

export {
  getData,
  createData,
  getDetail,
  updateData,
  deleteData
}