import React from 'react'

const CardList = ({users}) => {
    console.log(users);
    return (
        <div className='card-list'>
                 {users.map((user) => (
                <p key={user.id}>{user.name}</p>
            ))}
     </div> 
    )
}

export default CardList
