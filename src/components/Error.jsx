import React from "react";

const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-800 text-white uppercase p-2 mb-3 font-bold text-center rounded-md">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
