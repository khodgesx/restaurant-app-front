const LoginComponent = ()=>{
    return(
        <div id="login-form">
            <h1 class="page-title">Login</h1>
            <section class="form-container">
                <form class="login-form-container"  method="POST">
                    <div class="form-row-container">
                        <label for="username">Username:</label>
                        <input type="text" name="username" required/>
                    </div>

                    <div class="form-row-container">
                        <label for="password">Password:</label>
                        <input type="password" name="password" required/>
                    </div>

                    <input class="button-treat-main form-button" type="submit" value="Login"/>

                </form>
            </section>
        </div>
    )
}

export default LoginComponent