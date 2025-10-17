import { useState, useEffect } from "react";
import { Table, Container, Spinner, Modal } from "react-bootstrap";
import Lottie from "lottie-react";
import animationData from "../assets/hero-animation.json";
import { data } from "react-router-dom";
import ViewModal from "./ViewModal";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://localhost:7084/api/User/GetUsers")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        {/* <Spinner animation="border" variant="primary" />
         */}
        <Lottie animationData={animationData} loop={true} />
        <p className="mt-3 text-light">Loading users...</p>
      </Container>
    );
  }

  const handleView = async (id) => {
    try {
      const response = await fetch(
        `https://localhost:7084/api/User/ViewUser/${id}`
      );
      const data = await response.json();
      console.log(data);
      setSelectedUser(data);
      setShowModal(true);
    } catch (error) {
      console.log("View User Error : ", error);
    }
  };

  return (
    <Container className="mt-5 text-light">
      <h3 className="text-center mb-4">User List</h3>
      <Table striped bordered hover responsive variant="light">
        <thead className="table-primary">
          <tr className="text-center">
            <th>View</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>
                  <button
                    className="btn btn-warning"
                    title="View"
                    onClick={() => handleView(user.id)}
                  >
                    <i className="fa-solid fa-eye"></i>
                  </button>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <ViewModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedUser={selectedUser}
      />
    </Container>
  );
};

export default UsersTable;
