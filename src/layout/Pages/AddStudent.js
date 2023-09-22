import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
const AddStudent = () => {
  //to return a Students table
  const navigate = useNavigate();
  const [inputErrorList, setInputErrorList] = useState({});
  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState({
    nom: "",
    prenom: "",
    age: "",
    email: "",
    password: "",
    number: "",
  });
  const handleInput = (e) => {
    e.persist();
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  //stop refresh with have data from form to send to laravel
  const saveStudent = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      nom: student.nom,
      prenom: student.prenom,
      age: student.age,
      email: student.email,
      password: student.password,
      number: student.number,
    };
    axios
      .post(`http://localhost:8000/api/students`, data)
      .then((res) => {
        alert(res.data.message);
        navigate("/students");
        setLoading(false);
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 422) {
            setInputErrorList(error.response.data.errors);
            setLoading(false);
          }
          if (error.response.status === 500) {
            alert(error.response.data);
            setLoading(false);
          }
        }
      });
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>
                Add student
                <Link to="/students" className=" btn btn-primary float-end">
                  Back
                </Link>
              </h4>
            </div>

            <div className="card-body">
              <form onSubmit={saveStudent}>
                <div className="mb-3">
                  <label>Nom</label>
                  <input
                    type="text"
                    name="nom"
                    className="form-control required"
                    onChange={handleInput}
                    value={student.nom}
                  />
                  <span className="text-danger">{inputErrorList.nom}</span>
                </div>
                <div className="mb-3">
                  <label>Prenom</label>
                  <input
                    type="text"
                    name="prenom"
                    className="form-control required"
                    onChange={handleInput}
                    value={student.prenom}
                  />
                  <span className="text-danger">{inputErrorList.prenom}</span>
                </div>
                <div className="mb-3">
                  <label>Age</label>
                  <input
                    type="number"
                    name="age"
                    className="form-control required"
                    onChange={handleInput}
                    value={student.age}
                  />
                  <span className="text-danger">{inputErrorList.age}</span>
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control required"
                    placeholder=" email example xxxxxx@xxxx.com"
                    onChange={handleInput}
                    value={student.email}
                  />
                  <span className="text-danger">{inputErrorList.email}</span>
                </div>

                <div className="mb-3">
                  <label>Number</label>
                  <input
                    type="text"
                    name="number"
                    className="form-control required"
                    placeholder=" phone number "
                    onChange={handleInput}
                    value={student.number}
                  />
                  <span className="text-danger">{inputErrorList.email}</span>
                </div>
                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control required"
                    placeholder="code complex with number and alphabet"
                    onChange={handleInput}
                    value={student.password}
                  />
                  <span className="text-danger">{inputErrorList.password}</span>
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary" type="submit">
                    Save Student
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
