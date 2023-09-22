import React from "react";

const Loading = () => {
  return (
    <div className="mt-3">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading please...</span>
      </div>
      <span>Loading please wait ...</span>
    </div>
  );
};

export default Loading;
