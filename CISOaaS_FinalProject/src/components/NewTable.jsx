import React, { useState } from "react";
import { Table } from "react-bootstrap";
import ViewModal from "./ViewModal";

const NewTable = ({ activeTab, content }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

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
    <div>
      <Table striped bordered hover responsive variant="light">
        <thead
          className={`${
            activeTab == "New"
              ? "table-primary"
              : activeTab == "Rejected"
              ? "table-danger"
              : activeTab == "Approved"
              ? "table-success"
              : ""
          }`}
        >
          <tr className="text-center">
            <th>View</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {content.length > 0 ? (
            content.map((user) => (
              <tr key={user.id}>
                <td className="text-center">
                  <button
                    className="btn btn-success py-1"
                    title="View"
                    onClick={() => handleView(user.id)}
                  >
                    <i className="fa-regular fa-file-lines"></i>
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
    </div>
  );
};

export default NewTable;
