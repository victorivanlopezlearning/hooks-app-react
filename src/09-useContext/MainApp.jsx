import { Outlet } from "react-router-dom"

export const MainApp = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold">MainApp</h1>

      <Outlet />
    </div>
  )
}
