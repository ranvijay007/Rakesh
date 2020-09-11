import React from "react";

const Modals = ({ users }) => {
  return (
    <div class="modal fade" id={"myModal" + users.id} role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-between align-items-center">
            <h4 class="modal-title">{users.real_name}</h4>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <div class="modal-body">
            {users.activity_periods.map((data) => (
              <p className="d-flex justify-content-between align-items-center">
                <div>
                  <div>Start : {data.start_time} </div>
                  <div>End : {data.end_time} </div>
                </div>
                <button className="btn btn-primary">View</button>
              </p>
            ))}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
