import React from 'react'

function ShowTask(props) {
    const taskList = props.taskList;
    const SetTasklist = props.SetTasklist;
    const Task = props.Task;
    const SetTask = props.SetTask;

    
    const handleEdit = (id)=>{
        const selectedtask = taskList.find(task=>task.id === id);
        SetTask(selectedtask);

        
    }


    const handleDelete = (id)=>{
        const updatedList = taskList.filter(task=>task.id !== id);
        SetTasklist(updatedList);
        SetTask({}); 
    }



    return (
        <section className='showTask'>
            <div className='head'>
                <div>
                    <span className='title'>todo</span>
                    <span className='count'>{taskList.length}</span>
                </div>
                <button className='clearAll' onClick={()=>{SetTasklist([])}}>clear all</button>

            </div>
            <ul>
            {taskList.map((task)=>(
                
                <li>
                    <p>
                        <span className='name'>{task.name}</span>
                        <span className='time'>{task.time}</span>
                    </p>
                    <i className='bi bi-pencil-square' onClick={()=>handleEdit(task.id)}></i>
                    <i className='bi bi-trash' onClick={()=>handleDelete(task.id)}></i>
                </li>      
                
            ))}
                
            </ul>
        </section>
    )
}

export default ShowTask
