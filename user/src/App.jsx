
import './App.css'
import { useState } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import UserList from './components/userList/userList'
import NewUsersForm from './components/newUser/newUsersForm'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([])
//delete users
const deleteUsers = (id) =>{
  setUsers((prev)=>{
    return prev.filter((user)=>{
      return user.id!== id;
    })
   
  })
}

//close modal
const closeModal = (e) => {
  if(e.target.className === "overlay") setShowModal(false); 
  if(e.key === "Escape") setShowModal(false);
}

// add user
  const addUser = (user) => {
    setUsers((prev)=>{
      return [...prev, user];
    })
    setShowModal(false);
  }
  return (
    <>
     <div onClick={closeModal} onKeyDown={closeModal} className='App'>
     <Header usersLenght={users.length}/>
     <main>
       <div className='no-users'>
         {users.length === 0 && <h2>No Users </h2>}
       </div>
       <UserList  users={users} deleteUsers={deleteUsers}/>
     </main>
     {showModal && <NewUsersForm  addUser={addUser}/>}
     <button onClick={()=>{setShowModal(true)}} className='create-user'>Create User</button>
     <Footer />
     </div>
    </>
  )
}

export default App

