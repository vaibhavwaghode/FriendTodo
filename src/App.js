import {useState} from 'react';

import './App.css';

function App() {
  const [friendlist,setFriendlist] = useState([]);
  const [newfriend,setNewfriend]=useState("");
  const [Newage,setNewage] = useState("");

  //now todolist become array of object
  const handleFriend = (event) =>
  {
    setNewfriend(event.target.value);
  }

  const handleAge = (event) => {
    setNewage(event.target.value)
  }

  const AddFriend = ()=>{
    if (newfriend === "" || Newage === " ") return;
    const previousId = friendlist.length === 0 ? 1 : (friendlist[friendlist.length-1].id + 1)
    const friend = {
      id: previousId  ,
      friendName: newfriend,
      age:Newage
    }
    setFriendlist([...friendlist,friend])
    setNewfriend("")
    setNewage("")
  }

  const deleteFriend = (id) =>
  {
    setFriendlist(friendlist.filter((friend)=>friend.id !== id));
  }

  const EditFriend = (id) =>{
    const Newage = prompt("enter the new age")
    if(Newage ===  "" || Newage.trim() === "") return;
    setFriendlist(friendlist.map((friend)=>{
      return friend.id === id ? {...friend,age:Newage} : friend;
    }))
  }
  return (
    <div className="App">
      <div className='top-container'>
            <div className="Input-task">
              <input onChange={handleFriend} value={newfriend} className='input-box input-aln' placeholder='Enter friend here...'/>
              <input onChange={handleAge} value={Newage} className='input-box input-aln' placeholder='Enter age here...'/>

              <button onClick={AddFriend} className='task-btn input-aln'>Add Friend</button>
            </div>
            <div className="list">
            {friendlist.map((friend)=>{
                return(
                      <div className='todo-name'>
                        <h1>Name:{friend.friendName}</h1>
                        <h1>age:{friend.age}</h1>

                        <button onClick={()=>EditFriend(friend.id)} className='task-edit'>Edit Friend</button>
                        <button onClick={()=>deleteFriend(friend.id)} className='task-edit task-delete-btn' >X</button>
                      </div>
                      )
                })}
            </div>

      </div>

    </div>
  );
}

export default App;
