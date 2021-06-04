import { useState } from "react";
import { FaCalendarAlt, FaPen, FaBell } from "react-icons/fa";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();

    if (!text || !date) {
      alert("Please fill the fields in order to create a new task.");
      return;
    }
    console.log({ text, date, reminder });

    onAdd({ text, date, reminder });

    setText("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <div className="title">
          <FaPen />
          <label>Task</label>
        </div>
        <input
          type="text"
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <div className="title">
          <FaCalendarAlt />
          <label>When</label>
        </div>
        <input
          type="text"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <div className="title">
          <FaBell />
          <label>Reminder</label>
        </div>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
