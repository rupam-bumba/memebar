import React , {createContext,useState} from 'react';



// contex creater funtion
export const UserDataContex =  createContext();

/// contex provider funtion
export const UserDataContexProveder = (props) =>{
    const [UserData, setUserData] = useState({
        token : '',
        login : false,
        userID : ''

    })

    return(
        <UserDataContex.Provider value = { [UserData, setUserData] }>
                {props.children}
        </UserDataContex.Provider>
    )
}
