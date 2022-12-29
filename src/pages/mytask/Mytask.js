import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import Navbar from "../Home/Navbar";
import { getTasks } from "../../redux/taskSlice";

const Mytask = () => {
  const alltask = useSelector((state) => state.task.tasks)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    dispatch(getTasks())

  }, [dispatch, refresh]);

  const handleComplete = (id) => {
    fetch(`http://localhost:5000/completetask/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        completed: true,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/completedtask");
      });
  };

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
      <h2 className="text-3xl py-8 mb-4">My Tasks List</h2>

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
              <tr
                key={task._id}
                className="grid grid-cols-3 gap-6 items-center mb-10"
              >
                <td>
                  <img
                    src={task.image}
                    alt=""
                    className="h-24 md:h-32 w-24 md:w-32 object-cover rounded-xl"
                  />
                </td>
                <td className="tracking-tight">{task.task} {task.completed && <span className="p-1 text-sm rounded bg-green-200">completed</span>}</td>
                <td className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-4">
                  {!task.completed && <button className="py-2 px-3 text-sm md:text-lg rounded-md bg-yellow-500">
                    Update
                  </button>}
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="py-2 px-3 text-sm md:text-lg rounded-md border-2 bg-red-500"
                  >
                    Delete
                  </button>
                  {!task.completed ? (<button
                    onClick={() => handleComplete(task._id)}
                    className="py-2 px-3 text-sm md:text-lg rounded-md border-2 bg-green-500"
                  >
                    Complete
                  </button>) : (<button
                    onClick={() => handleIncomplete(task._id)}
                    className="py-2 px-3 text-sm md:text-lg rounded-md border-2 bg-gray-200"
                  >
                    Incomplete
                  </button>)}
                </td>
                {/* <td>1961</td> */}
              </tr>
            ))}
          </tbody>
        </table>) : <span>Task list empty</span>}
    </section>
  );
};

export default Mytask;
