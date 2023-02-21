import { Link } from "react-router-dom"

export const Button = () => {
  return (
    <div>Buttons</div>
  )
}

export const ButtonLink = ({ path, value }) => {
  return (
    <Link to={path}>{value}</Link>
  )
}