import {useState} from "react"
import {useHistory} from "react-router-dom"
/* function Login(props) {
    return (
        <div>
                <form action="" className="container mt-5">
                <div className ="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className ="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password"/>
                    </div>
                    <button className="btn btn-info" onClick={()=>props.setLoginValue(!props.LoginValue)}>Login</button>
                </form>
        </div>
    )
}

export default Login */

function Login({LoginValue,setLoginValue}){

    const history = useHistory()

const [email, setemail] = useState("")
const [password, setpassword] = useState("")

const emailChanged = (event)=>{
setemail(event.target.value)
}

const passwordChanged =(event)=>{
    setpassword(event.target.value)
}

const submitForm =(event)=>{
    event.preventDefault()
    console.log(email , password)
    setLoginValue(!LoginValue)
    history.push("/products")
}
 return(
     <div className="mt-5">
         <form action="" onSubmit={submitForm}>
         <label htmlFor="email">Email address</label>
         <input type="email" className="form-control my-5" id="email" value={email} onChange={emailChanged}/>
         <label htmlFor="password">Password</label>
         <input type="password" className="form-control" id="password"value={password} onChange={passwordChanged}/>
          <input type="submit" value="Log in" />
     </form>
     <p>email:{email}</p>
     <p>password:{password}</p>
     </div>
 )
}

export default Login