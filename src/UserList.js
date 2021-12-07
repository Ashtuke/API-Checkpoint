import React from "react"




 const UserList = ({name,user,email,phone}) => {
    return(
            <div className={"lists-content"}>

               Name:
               <p> {name}</p>
                User Name: 
                <p>{user}</p> 
                Em@il: 
                <p>{email}</p>
                Phone Number: 
                 <p>{phone}</p>
            </div>
    )
}
export default UserList;