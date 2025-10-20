import { useState, useEffect, act, use } from "react";
import { Table, Container, Spinner, Modal } from "react-bootstrap";
import Lottie from "lottie-react";
import animationData from "../assets/hero-animation.json";
import ViewModal from "./ViewModal";
import NavBar from "./NavbarMain";
import NewTable from "./NewTable";
import { data } from "react-router-dom";

const UsersTable = () => {
  const [newUsers, setNewUsers] = useState([]);
  const [approvedUsers, setApprovedUsers] = useState([]);
  const [forConsiderationUsers, setForConsiderationUsers] = useState([]);
  const [rejectedUsers, setRejectedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("New");

  useEffect(() => {
    fetch("https://localhost:7084/api/User/GetUsers")
      .then((res) => res.json())
      .then((data) => {
        setNewUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://localhost:7084/api/User/GetApprovedUsers")
      .then((res) => res.json())
      .then((data) => {
        setApprovedUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data :", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://localhost:7084/api/User/GetForConsiderationUsers")
      .then((res) => res.json())
      .then((data) => {
        setForConsiderationUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data :", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://localhost:7084/api/User/GetRejectedUsers")
      .then((res) => res.json())
      .then((data) => {
        setRejectedUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data :", err);
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

  return (
    <Container className="mt-5 text-light">
      <h3 className="mb-2">User List - {activeTab}</h3>
      <div className="tabstrips d-flex">
        <button
          className={`btn btn-primary ${
            activeTab == "New" ? " active-tab" : ""
          }`}
          onClick={() => setActiveTab("New")}
        >
          New
        </button>
        <button
          className={`btn btn-success ${
            activeTab == "Approved" ? " active-tab" : ""
          }`}
          onClick={() => setActiveTab("Approved")}
        >
          Approved
        </button>
        <button
          className={`btn btn-secondary${
            activeTab == "For Consideration" ? " active-tab" : ""
          }`}
          onClick={() => setActiveTab("For Consideration")}
        >
          For Consideration
        </button>
        <button
          className={`btn btn-danger${
            activeTab == "Rejected" ? " active-tab" : ""
          }`}
          onClick={() => setActiveTab("Rejected")}
        >
          Rejected
        </button>
      </div>
      {activeTab === "New" ? (
        <NewTable activeTab={activeTab} content={newUsers} />
      ) : activeTab === "Approved" ? (
        <NewTable activeTab={activeTab} content={approvedUsers} />
      ) : activeTab === "For Consideration" ? (
        <NewTable activeTab={activeTab} content={forConsiderationUsers} />
      ) : activeTab === "Rejected" ? (
        <NewTable activeTab={activeTab} content={rejectedUsers} />
      ) : (
        <></>
      )}
    </Container>
  );
};

export default UsersTable;
