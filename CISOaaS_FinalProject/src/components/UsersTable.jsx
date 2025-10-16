import { useState, useEffect } from "react";
import { Table, Container, Spinner } from "react-bootstrap";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://localhost:7084/api/User")
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
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Loading users...</p>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h3 className="text-center mb-4">User List</h3>
      <Table striped bordered hover responsive variant="light">
        <thead className="table-primary">
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Commands</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <div className="d-flex gap-2 align-items-center justify-content-center">
                    <a className="btn btn-success" href="#" title="Approve">
                      <i class="fa-solid fa-thumbs-up"></i>
                    </a>
                    <a className="btn btn-danger" href="#" title="Disapprove">
                      <i class="fa-solid fa-thumbs-down"></i>
                    </a>
                    <a
                      className="btn btn-secondary"
                      href="#"
                      title="For Consideration"
                    >
                      <i class="fa-solid fa-business-time"></i>
                    </a>
                  </div>
                </td>
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
    </Container>
  );
};

export default UsersTable;
