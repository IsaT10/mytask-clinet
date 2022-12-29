import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar";

const Addtask = () => {
  const [createImageURL, setCreateImageURL] = React.useState(null);
  const [task, setTask] = useState("");
  const [image, setImage] = React.useState('');
  const navigate = useNavigate()
  const imageHostKey = process.env.REACT_APP_IMGBB_KEY;

  const uploadToClient = (e) => {
    const [file] = e.target.files;

    if (file) {
      setImage(file);
      setCreateImageURL(URL.createObjectURL(file));
    }
  };

  const handleTask = (e) => {
    e.preventDefault();
    console.log(task, image);
    const form = new FormData();

    form.append("image", image);

    const uri = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(uri, {
      method: "POST",
      body: form,
    })
      .then((res) => res.json())
      .then((imageData) => {
        return fetch("http://localhost:5000/addtask", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            task,
            completed: false,
            image: imageData.data.url,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            navigate('/mytask')
          });
      })
      .finally(() => {
        setTask("");
        setImage('');
        setCreateImageURL(null);
      })

  };

  return (
    <section className="">
      <Navbar />
      <h2 className="text-3xl py-8">Add task</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24" onSubmit={handleTask}>
        {createImageURL ? (
          <img
            src={createImageURL}
            alt="task"
            className="h-52 w-full object-cover overflow-hidden"
          />
        ) : (
          <span className="h-52 w-full bg-gray-200" />
        )}

        <div className="flex flex-col gap-8">
          <input
            className="py-2 px-4 border-[1.5px] w-full border-blue focus:outline-none"
            type="text"
            placeholder="add task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            className="text-lg tracking-tighter"
            type="file"
            accept="image/*"
            id="image"
            name="image"
            onChange={uploadToClient}
          />
          <button
            type="submit"
            className="self-start py-2 px-4 border-2 border-blue bg-blue text-white"
          >
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};

export default Addtask;
