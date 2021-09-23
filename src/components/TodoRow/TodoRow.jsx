import './TodoRow.css';

export default function TodoRow({index, title, isDone, onChangeStatus, onRemove}){
    return <li className='TodoRow'>
        <input
        type="checkbox"
        checked={isDone}
        onChange={(e) => onChangeStatus(index, e.target.checked)} // not to bother with the calling context
        />
        <span className={isDone ? 'done':null}>{title}</span>
        <button className="btn"
        onClick={() => onRemove(index)}
        >Remove</button>

    </li>;
}