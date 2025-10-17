import { useState, useEffect } from "react";
import { Table, Container, Spinner, Modal, Button } from "react-bootstrap";
import Lottie from "lottie-react";
import animationData from "../assets/hero-animation.json";
import { data } from "react-router-dom";

const ViewModal = ({ showModal, setShowModal, selectedUser }) => {
  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      centered
      backdrop={true}
    >
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedUser ? (
          <div>
            <p>
              <strong>Name:</strong> {selectedUser.name}
            </p>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p>
              <strong>Contact Number:</strong> {selectedUser.contactNumber}
            </p>
            <p>
              <strong>Description:</strong> {selectedUser.description}
            </p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex gap-2 align-items-center justify-content-center">
            <a className="btn btn-success" href="#" title="Approve">
              <i className="fa-solid fa-thumbs-up"></i>
            </a>
            <a className="btn btn-danger" href="#" title="Disapprove">
              <i className="fa-solid fa-thumbs-down"></i>
            </a>
            <a className="btn btn-secondary" href="#" title="For Consideration">
              <i className="fa-solid fa-business-time"></i>
            </a>
          </div>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewModal;
