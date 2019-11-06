import React, { useState } from "react";

function Member(props) {
  console.log(props.memberList);
  return (
    <div className="list_container">
      {props.memberList.map(cv => {
        return (
          <div className="member_plate" key={cv.name}>
            <h3>Name:<br/><span className="name">{cv.name}</span></h3>
            <p>Email:<br/><span className="email">{cv.email}</span></p>
          </div>
        );
      })}
    </div>
  );
}
export default Member;
