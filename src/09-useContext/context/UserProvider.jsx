import { UserContext } from './UserContext';

const user = {
  id: 123,
  name: 'Víctor Iván López',
  email: 'vlopez@vilgweb.com'
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider
      value={{user}}
    >
      {children}
    </UserContext.Provider>
  )
}