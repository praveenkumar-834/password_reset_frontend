import { Link } from "react-router-dom"

function Navbar(){

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

<div className="container">

<Link className="navbar-brand" to="/">
Password Reset Flow
</Link>

<div className="ms-auto">

<Link className="btn btn-outline-light me-2" to="/login">
Login
</Link>

<Link className="btn btn-warning" to="/register">
Sign Up
</Link>

</div>

</div>

</nav>

)

}

export default Navbar