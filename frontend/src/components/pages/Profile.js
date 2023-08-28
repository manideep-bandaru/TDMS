import React from "react";
import Navbar from "../inc/Navbar";

function Profile() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div class="card mt-5">
          <div class="card-body ">
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Full Name</h6>
              </div>
              <div class="col-sm-9 text-secondary">Mr. Chitranjan Hota</div>
            </div>
            <hr></hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Email</h6>
              </div>
              <div class="col-sm-9 text-secondary">
                CSIS@hyderabad.bits-pilani.ac.in
              </div>
            </div>
            <hr></hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Phone</h6>
              </div>
              <div class="col-sm-9 text-secondary">(239) 816-9029</div>
            </div>
            <hr></hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Mobile</h6>
              </div>
              <div class="col-sm-9 text-secondary">(123)-456789</div>
            </div>
            <hr></hr>
            <div class="row">
              <div class="col-sm-3">
                <h6 class="mb-0">Address</h6>
              </div>
              <div class="col-sm-9 text-secondary">H-128</div>
            </div>
            <hr></hr>
            <div class="row">
              <div class="col-sm-12">
                <a
                  class="btn btn-info "
                  target="__blank"
                  href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                >
                  Edit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
