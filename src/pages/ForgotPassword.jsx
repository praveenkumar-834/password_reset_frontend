import {useState} from "react"
import axios from "axios"

function ForgotPassword(){

const [email,setEmail] = useState("")
const [message,setMessage] = useState("")

const handleSubmit = async(e)=>{
e.preventDefault()

try{

const res = await axios.post(
"https://password-reset-backend-lac.vercel.app/api/auth/forgot-password",
{email}
)

setMessage(res.data.message)

}catch(err){
setMessage(err.response.data.message)
}

}

return(

<div className="container vh-100 d-flex justify-content-center align-items-center">

<div className="card shadow p-4" style={{width:"400px"}}>

<h3 className="text-center mb-4">Forgot Password</h3>

<form onSubmit={handleSubmit}>

<div className="mb-3">

<label className="form-label">Email</label>

<input
type="email"
className="form-control"
placeholder="Enter email"
onChange={(e)=>setEmail(e.target.value)}
required
/>

</div>

<button className="btn btn-warning w-100">
Send Reset Link
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

export default ForgotPassword