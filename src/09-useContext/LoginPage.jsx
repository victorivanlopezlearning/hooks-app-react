import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  const { user } = useContext(UserContext);

  const { name } = user;

  return (
    <>
      <h2>Login</h2>
      <h3>Bienvenido, <span className="fw-bold">{name}</span></h3>
    </>
  )
}