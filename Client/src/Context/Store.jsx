import React, { useState } from 'react'
import UserContext from './UserContext';
import MovieData from '../Movies/MovieData';

const UserContextProvider = ({children}) => {
    const [auth , setAuth] = useState(false) ;
    const [moviename , setMoviename] = useState('') ;
  return (
    <div>
      <UserContext.Provider value={{auth , setAuth , moviename , setMoviename}} >
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UserContextProvider ;
