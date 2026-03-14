import {useParams} from "react-router-dom"
import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function ResetPassword(){
const navigate = useNavigate()
const {token} = useParams()

const [password,setPassword] = useState("")
const [message,setMessage] = useState("")

const handleSubmit = async(e)=>{
e.preventDefault()

try{

const res = await axios.post(
`https://password-reset-backend-lac.vercel.app/api/auth/reset-password/${token}`,
{password}
)

setMessage(res.data.message)

}catch(err){
setMessage(err.response.data.message)
}

}

return(

<div className="container vh-100 d-flex justify-content-center align-items-center">

<div className="card shadow p-4" style={{width:"400px"}}>

<h3 className="text-center mb-4">Reset Password</h3>

<form onSubmit={handleSubmit}>

<div className="mb-3">

<label className="form-label">New Password</label>

<input
type="password"
className="form-control"
onChange={(e)=>setPassword(e.target.value)}
required
/>

</div>

<button className="btn btn-success w-100">
Update Password
</button>

</form>

{message && (
<div className="alert alert-success mt-3 text-center">
{message}
</div>
)}

<button
className="btn btn-success mt-3"
onClick={()=>navigate("/login")}
>
Go to Login
</button>

</div>

</div>

)

}

export default ResetPassword