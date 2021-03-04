

function Contact() {
    return (
        <div>
            <div className="container">
            <form action="" className="container mt-5">
                <div className ="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className ="form-group">
                        <label htmlFor="text">Text contact</label>
                        <textarea class="form-control " id="text" rows="10" placeholder="Your need"  required></textarea>
                    </div>
                    <button className="btn btn-info">Conctact me !</button>
                </form>
        </div>
        </div>
    )
}

export default Contact
