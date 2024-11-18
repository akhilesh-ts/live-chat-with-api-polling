import React, { useEffect, useState } from "react";
import Message from "./Message";
import { generateRandomName, newQuote } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/slice/chatSlice";

const Comment = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.chat.comment);
  const [comment, setComment] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addChat([
          {
            name: generateRandomName(),
            message: newQuote(),
          },
        ])
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  const handelSubmit = (e) => {
    setComment(e.target.value);
    if (e.key === "Enter") {
      dispatch(
        addChat([
          {
            name: "Akhilesh",
            message: comment,
          },
        ])
      );
      setComment("");
    }
  };
  return (
    <div className="border h-2/3 w-1/3 rounded-lg relative box-content">
      <div className="w-full  h-[530px] overflow-y-scroll p-2">
        <div className="w-full flex flex-col-reverse gap-2  ">
          {comments.map((chat, index) => (
            <Message key={index} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 w-full p-2">
        <input
          type="text"
          placeholder="enter comment"
          value={comment}
          className="border p-2 rounded-lg w-full"
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={handelSubmit}
        />
      </div>
    </div>
  );
};

export default Comment;
