import React from "react";

const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <center>
      <h1>There are no posts</h1>
      <button
        type="button"
        onClick={onGetPostClick}
        className="btn btn-primary"
      >
        Get Posts from server
      </button>
    </center>
  );
};

export default WelcomeMessage;
