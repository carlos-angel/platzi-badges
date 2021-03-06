import React from "react";
import { Link } from "react-router-dom";

import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

import "./styles/BadgeDetails.css";
import confLogo from "../assets/images/platziconf-logo.svg";
export default function BadgeDetails({
  badge,
  onCloseModal,
  onOpenModal,
  onDeleteBadge,
  modalIsOpen
}) {
  return (
    <>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                {" "}
                <Link className="btn btn-primary mb-4" to={`${badge.id}/edit`}>
                  Edit
                </Link>{" "}
              </div>
            </div>
            <div>
              <button onClick={onOpenModal} className="btn btn-danger">
                Delete
              </button>
              <DeleteBadgeModal
                isOpen={modalIsOpen}
                onClose={onCloseModal}
                onDeleteBadge={onDeleteBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
