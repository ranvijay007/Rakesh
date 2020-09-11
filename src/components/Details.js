import React, { useState } from "react";
import Modals from "./Modals";

const Details = ({ users }) => {
  return (
    <>
      <div class="card m-2">
        <div
          class="card-body"
          data-toggle="modal"
          data-target={"#myModal" + users.id}
        >
          <h4 class="card-title">{users.real_name}</h4>
          <p class="card-text">Location: {users.tz}</p>
        </div>
      </div>
      <Modals users={users} />
    </>
  );
};

export default Details;
