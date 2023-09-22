import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
function Students() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  // data student from laravel
  useEffect(() => {
    axios.get(`http://localhost:8000/api/students`).then((res) => {
      setStudents(res.data);
      setLoading(false);
    });
  }, [students]);
  // time data come
  if (loading) {
    return <Loading />;
  }

  // display data student
  const studentDetails = students.map((st) => {
    return (
      <tr key={st.id}>
        <th scope="row">{st.id}</th>
        <td>{st.nom}</td>
        <td>{st.prenom}</td>
        <td>{st.age}</td>
        <td>{st.number}</td>
        <td>{st.email}</td>
        <td>
          {" "}
          <button className="btn btn-success">Edit</button>
        </td>
        <td>
          {" "}
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  });
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Students List
                <Link
                  to="/students/create"
                  className=" btn btn-primary float-end "
                >
                  {" "}
                  add student{" "}
                </Link>
              </h4>
              {/*Add new student  */}
            </div>

            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr className="table-primary">
                    <th scope="col">id</th>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Age</th>
                    <th scope="col">Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>{students.length > 0 ? studentDetails : null}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;
