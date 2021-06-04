import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [toggleAddTask, setToggleAddTask] = useState(false);
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
    setToggleAddTask(false);
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
    <Router>
      <div className="container">
        <Header
          toggleAdd={() => setToggleAddTask(!toggleAddTask)}
          toggleAddActive={toggleAddTask}
        />
        <Route
          path="/"
          exact
          render={() => (
            <>
              {toggleAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No tasks available"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
