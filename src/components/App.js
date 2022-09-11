import {useDispatch, useSelector} from "react-redux";
import {getChats} from "../redux/chatReducer/selectors";
import {useState} from "react";

function App() {
    const chats = useSelector(getChats);
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch({type:'delete', payload: id, /*meta: {
            delay: 2000
            }*/})
    }
    const [name, setName] = useState('');
    const handleAdd = () => {
        const obj = {
            id: Math.random(),
            name: name
        }
        dispatch({type:'add', payload: obj})
    }
  return (
      <div>
          <input value={name} onChange={(event) => setName(event.target.value)}/>
          <button onClick={handleAdd}>Add</button>
          {
              chats.map((chat) => {
                  return (
                      <div key={chat.id}>
                          {chat.name}
                          <button onClick={() => handleDelete(chat.id)}>
                              x
                          </button>
                      </div>
                  )
              })
          }
      </div>
  );
}

export default App;
