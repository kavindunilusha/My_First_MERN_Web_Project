import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function User() {
  const [User, setUser] = useState([
    {
      Name: "Kavindu",
      Email: "kn@gmail.com",
      Age: "21",
      JobRole: "Admin",
      Mobile: "078451212",
      Address: "12/4,Gampaha",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((result) => setUser(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w=50 bg=white rounded p=3">
        <Link to="/create" className="btn btn-success">
          Add+
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>JobRole</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {User.map((User) => {
              return (
                <tr>
                  <td>{User.name}</td>
                  <td>{User.email}</td>
                  <td>{User.age}</td>
                  <td>{User.jobrole}</td>
                  <td>{User.mobile}</td>
                  <td>{User.address}</td>
                  <td>
                    <Link
                      to={`/update/${User._id}`}
                      // to="/update"
                      className="btn btn-success"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(User._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
