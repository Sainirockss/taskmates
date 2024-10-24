
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import { useState ,useEffect} from 'react';


function App() {
  const[taskList,SetTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) ||  []);
  const[Task,SetTask] = useState({});

  useEffect(() => {
    if(taskList){
      localStorage.setItem("tasklist",JSON.stringify(taskList));
    }
 
  }, [taskList]);

  return (
    
    <div className="App">
      <Header/>
      <AddTask taskList={taskList} SetTasklist={SetTasklist}  Task={Task}  SetTask={SetTask}/>
      <ShowTask taskList={taskList} SetTasklist={SetTasklist} Task={Task}  SetTask={SetTask}/>
    </div>
  );
}

export default App;
