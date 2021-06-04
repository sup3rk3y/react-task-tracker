import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Pet cats",
      date: "Every day",
      reminder: true,
    },
    {
      id: 2,
      text: "Cook food",
      date: "Tomorrow",
      reminder: false,
    },
    {
      id: 3,
      text: "Cut the grass",
      date: "Next century",
      reminder: true,
    },
  ]);

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks available"
      )}
    </div>
  );
}

export default App;
