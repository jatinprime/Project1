import React, { useState } from 'react'
import UserContext from './UserContext';

const UserContextProvider = ({children}) => {
    const [auth , setAuth] = useState(false) ;
  return (
    <div>
      <UserContext.Provider value={{auth , setAuth}} >
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UserContextProvider ;
