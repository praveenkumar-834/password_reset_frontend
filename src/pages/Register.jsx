import { useState } from "react"
import axios from "axios"

function Register(){

const [form,setForm] = useState({
username:"",
email:"",
password:""
})

const [message,setMessage] = useState("")

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = async(e)=>{
e.preventDefault()

try{

const res = await axios.post(
"https://password-reset-backend-lac.vercel.app/api/auth/register",
form
)

setMessage(res.data.message)

}catch(err){

setMessage(err.response.data.message)

}

}

return(

<div className="container vh-100 d-flex justify-content-center align-items-center">

<div className="card shadow p-4" style={{width:"400px"}}>

<h3 className="text-center mb-4">Register</h3>

<form onSubmit={handleSubmit}>

<div className="mb-3">
<label className="form-label">Username</label>
<input
type="text"
name="username"
className="form-control"
onChange={handleChange}
required
/>
</div>

<div className="mb-3">
<label className="form-label">Email</label>
<input
type="email"
name="email"
className="form-control"
onChange={handleChange}
required
/>
</div>

<div className="mb-3">
<label className="form-label">Password</label>
<input
type="password"
name="password"
className="form-control"
onChange={handleChange}
required
/>
</div>

<button className="btn btn-primary w-100">
Register
</button>

</form>

{message && (
<div className="alert alert-info mt-3 text-center">
{message}
</div>
)}

</div>

</div>

)

}

export default Register