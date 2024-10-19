import React from 'react'

function AddTask(props) {
    const taskList = props.taskList;
    const SetTasklist = props.SetTasklist;
    const Task = props.Task;
    const SetTask = props.SetTask;
    

    const handleSubmit= (e)=>{
        e.preventDefault();

        if(Task.id) {
            const date = new Date();
            const updatedtaskList = taskList.map((task) =>
                task.id === Task.id
                ? { id: Task.id, name: Task.name, time: `${date.toLocaleTimeString()}` }
                : task
            );
            SetTasklist(updatedtaskList);
            SetTask({});
        }

        else{
        const date = new Date();
        const newTask = {
        id:date.getTime(),
        name:e.target.task.value,
        time: `${date.toLocaleTimeString()}`
        }

        SetTasklist([...taskList,newTask]);
        SetTask({});
        }




    }
    return (
       <section className='addTask'>
        <form onSubmit={handleSubmit}>
            <input type='text' name='task' value={Task.name|| " "} placeholder='addtaask' autoComplete='off' maxLength={25} onChange={e=>SetTask({
                ...Task,name:e.target.value
            })}></input>
            <button type='submit'>{Task.id ? ("update"):("add")}</button>
        </form>
       </section>
    )
}

export default AddTask;
