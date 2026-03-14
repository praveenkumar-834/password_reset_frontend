import {useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import Navbar from "../components/Navbar"

function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [message,setMessage] = useState("")

const handleSubmit = async(e)=>{
e.preventDefault()

try{

const res = await axios.post(
"https://password-reset-backend-lac.vercel.app/api/auth/login",
{email,password}
)

setMessage(res.data.message)

}catch(err){

setMessage(
err.response?.data?.message || "Login failed"
)

}

}

return(

<div>

<Navbar/>

<div className="container vh-100 d-flex justify-content-center align-items-center">

<div className="card shadow p-4" style={{width:"400px"}}>

<h3 className="text-center mb-4">Login</h3>

<form onSubmit={handleSubmit}>

<div className="mb-3">

<label>Email</label>

<input
type="email"
className="form-control"
onChange={(e)=>setEmail(e.target.value)}
required
/>

</div>

<div className="mb-3">

<label>Password</label>

<input
type="password"
className="form-control"
onChange={(e)=>setPassword(e.target.value)}
required
/>

</div>

<button className="btn btn-primary w-100">
Login
</button>

</form>

<div className="text-center mt-3">

<Link to="/forgot-password">
Forgot Password?
</Link>

</div>

{message && (

<div className="alert alert-info mt-3 text-center">

{message}

</div>

)}

</div>

</div>

</div>

)

}

export default Login