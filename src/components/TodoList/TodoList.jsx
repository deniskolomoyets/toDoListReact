import TodoRow from '../TodoRow/TodoRow';
import './TodoList.css';

export default function TodoList({todos, onChangeStatus, onRemove}){
    return <ul className='TodoList'>
        {todos.map((e,i) => <TodoRow
            key={i}
            index={i}
            title={e.title}
            isDone={e.done}
            onChangeStatus={onChangeStatus}
            onRemove={onRemove}
        />)}
    </ul>
}