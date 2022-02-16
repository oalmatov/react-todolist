import { useReducer, useState } from 'react';
import Todo from './Todo';
import { useTheme, useThemeUpdate } from './ThemeContext';

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE: 'toggle-todo',
    DELETE: 'delete-todo',
};

const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.todo)];
        case ACTIONS.TOGGLE:
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        case ACTIONS.DELETE:
            return todos.filter((todo) => todo.id !== action.payload.id);
        default:
            return todos;
    }
};

const newTodo = (todo) => {
    return { id: Date.now(), todo: todo, completed: false };
};

export default function TodoList() {
    const blueTheme = useTheme();
    const themeUpdate = useThemeUpdate();

    const theme = {
        border: blueTheme ? 'border-blue-200' : 'border-red-200',
        text: blueTheme ? 'text-blue-300' : 'text-red-300',
        placeholder: blueTheme ? 'placeholder-blue-300' : 'placeholder-red-300',
    };

    const [todos, dispatch] = useReducer(reducer, []);
    const [todo, setTodo] = useState('');

    const handleChange = (event) => {
        setTodo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todo !== '') {
            dispatch({ type: ACTIONS.ADD_TODO, payload: { todo: todo } });
            setTodo('');
        }
    };

    console.log(theme.border);

    return (
        <div className="flex justify-center items-center text-center min-h-screen">
            <div>
                <div
                    className={`p-10 border-2 ${theme.border} ${theme.text} w-[500px] text-blue-300`}
                >
                    <p className="italic mb-4 text-lg">Your tasks...</p>
                    <ul>
                        {todos.map((todo) => {
                            return <Todo todo={todo} dispatch={dispatch} />;
                        })}
                    </ul>
                    <form
                        className="flex justify-center"
                        onSubmit={handleSubmit}
                    >
                        <input
                            className={`${theme.placeholder} outline-0 my-3 p-3 border-2 ${theme.border} w-full`}
                            value={todo}
                            type="text"
                            placeholder="Add todo..."
                            onChange={handleChange}
                        />
                    </form>
                </div>
                <div
                    className={`flex justify-end my-3 ${theme.text} underline outline-0`}
                >
                    <button onClick={themeUpdate}>Switch theme</button>
                </div>
            </div>
        </div>
    );
}
