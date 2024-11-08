import React from 'react'

const User = ({ id, name, email, dob }) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
      <p>Date of Birth: {dob || "N/A"}</p> 
    </div>
  );
};

export default User