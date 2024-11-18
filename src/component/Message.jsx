import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const Message = ({name,message}) => {
  return (
    <div className="w-full p-2 bg-slate-100 rounded-lg flex items-center gap-4">
      <div >
        <FaCircleUser className="text-2xl" />
      </div>
      <div>
        <h2 >{name}</h2>
        <p>
          {message}
        </p>
      </div>
    </div>
  );
};

export default Message;
