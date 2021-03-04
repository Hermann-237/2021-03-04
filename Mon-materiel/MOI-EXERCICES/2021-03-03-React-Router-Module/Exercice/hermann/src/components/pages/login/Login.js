

function Login() {
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
                    <button className="btn btn-info">Login</button>
                </form>
        </div>
    )
}

export default Login