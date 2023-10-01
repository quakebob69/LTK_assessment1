import BasicForm from './../components/BasicForm'
import BasicTable from './../components/BasicTable'

export default function Todo() {
    return (
        <div className="todo">
            <h2>Todo List</h2>
                <BasicForm />
                <BasicTable />
        </div>
    )
}