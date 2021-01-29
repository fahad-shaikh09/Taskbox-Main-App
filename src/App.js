import './App.css';
import React, {useState} from "react"
import AddTask from '@bit/fahad-shaikh09.taskbox.add-task';

function App() {
  const [tasks,SetTasks] = useState([])


  return (
    <div className="App">
     <AddTask tasks={tasks} SetTasks={SetTasks} />
    </div>
  );
}

export default App;
