import MyTaskCard from '../MyTaskCard/MyTaskCard'

const TaskList = ({ taskList }) => {

    return (
        <>
            {
                taskList.map(elm => <MyTaskCard key={elm._id} {...elm} />)
            }
        </>
    )
}

export default TaskList