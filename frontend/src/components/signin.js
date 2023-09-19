function Signin (){
    return(
        <div className='signin-container'>
            <div className="form-container">
                <h2 className="title">Sign In</h2>
                <form className="signin-form">
                    <div>
                        <label>Email</label><input type="email" className="input-field" />
                    </div>
                    <div>
                        <label>Password</label><input type="password" className="password-feild" />
                    </div>
                    <div>
                        <button type="submit" className="siggnin-button">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signin;