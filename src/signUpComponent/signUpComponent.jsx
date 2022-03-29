const SignUpComponent = () =>{
    return(
        <div id="new-user-form"> 
            <h1 className="page-title">Sign Up</h1>

            <section className="form-container">
                <form className="new-user-form-container" method="POST" enctype="multipart/form-data">

                    <div className="form-row-container">
                        <label for="displayName">Display Name:</label>
                        <input type="text" name="displayName" />
                    </div>

                    <div className="form-row-container">
                        <label for="username">Username:</label>
                        <input type="text" name="username" />
                    </div>

                    <div className="form-row-container">
                        <label for="password">Password:</label>
                        <input type="password" name="password" />
                    </div>

                    <div className="form-row-container">
                        <label for="img">Profile Photo:</label>
                        <input type="file" name="img" id="userpicupload" accept="image/png, image/jpeg"/>
                    </div>

                    <input className="button-treat-main form-button" type="submit" value="Register"/>

                </form>
            </section>
       

        </div>
    )
}

export default SignUpComponent