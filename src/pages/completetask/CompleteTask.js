import { useState, useEffect } from "react";
import Navbar from "../Home/Navbar";

const CompleteTask = () => {
  const [alltask, setAlltask] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/completetask")
      .then((res) => res.json())
      .then((data) => {
        setAlltask(data.data);
      });
  }, [refresh]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setRefresh(!refresh);
      });
  };

  const handleIncomplete = (id) => {
    fetch(`http://localhost:5000/completetask/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        completed: false,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setRefresh(!refresh);
      });
  };

  return (
    <section className="">
      <Navbar />
      <h2 className="text-3xl py-8 mb-4">Completed Tasks</h2>

      {alltask.length
        ? (<table className="w-full">
          <thead>
            <tr className="grid grid-cols-3 mb-8">
              <th className="text-left">Task image</th>
              <th className="text-left">Description</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {alltask?.map((task) => (
              <tr key={task._id} className="grid grid-cols-3 gap-6 items-center mb-10">
                <td>
                  <img
                    src={task.image}
                    alt=""
                    className="h-24 md:h-32 w-24 md:w-32 object-cover rounded-xl"
                  />
                </td>
                <td className="tracking-tight">{task.task}</td>
                <td className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-4">
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="py-2 px-3 text-sm md:text-lg rounded-md border-2 bg-red-500"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleIncomplete(task._id)}
                    className="py-2 px-3 text-sm md:text-lg rounded-md border-2 bg-gray-200"
                  >
                    Incomplete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>) : <span>No completed task</span>}
    </section>
  );
};

export default CompleteTask;
