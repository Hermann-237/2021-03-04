

function Register() {
    return (
        <div>
            <div className="container">
            <form action="" className="container mt-5">
                    <div className ="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name"/>
                    </div>
                    <div className ="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className ="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password"/>
                    </div>
                    <button className="btn btn-info">Register</button>
                </form>
        </div>
        </div>
    )
}

export default Register