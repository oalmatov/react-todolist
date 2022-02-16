import { ACTIONS } from './TodoList';

export default function Todo({ todo, dispatch }) {
    const handleDelete = () => {
        return dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } });
    };

    const handleToggle = () => {
        return dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } });
    };

    return (
        <div className="container flex justify-between">
            <div className="my-1 mx-3">
                <li className="list-disc">
                    <span
                        className={
                            todo.completed ? 'line-through' : 'no-underline'
                        }
                    >
                        {todo.todo}
                    </span>
                </li>
            </div>
            <div className="space-x-3">
                <button className="underline" onClick={handleDelete}>
                    Delete
                </button>
                <button className="underline" onClick={handleToggle}>
                    Toggle
                </button>
            </div>
        </div>
    );
}
