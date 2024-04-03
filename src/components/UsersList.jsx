import { useEffect, useState } from "react"
import { User } from "./User"

export function UsersList(){
const [users,setUsers] = useState([])
    
   useEffect(()=>{
    async function getUsers(){
        const response = await fetch('https://randomuser.me/api/?nat=br&results=10')
        const usersData = await response.json()
        setUsers(usersData.results)
    }
    getUsers()
   },[])
  
    return(
        <section>
            {users.map(user=><User userData={user} />)}
        </section>
    )
}