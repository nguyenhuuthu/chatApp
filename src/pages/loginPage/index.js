import "./style.css";

export let loginPage = /*html*/ `<div class="container">
        <div class="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png" alt="">
        </div>
        <div class="rest">Sign in to Rikkei Chat</div>
        <form class="form" id ="form" >
            <div class="wrapper">
                <p style="background-color: white;">Email address</p>
                <input type="text" placeholder="Please enter your email" name="email">
                <div id = "email-error-message" style="color: red"></div>
            </div>
            <div class="wrapper">
                <p style="background-color: white;">Password</p>
                <input type="text" placeholder="Please enter your passworld" name = password>
            <div id="password-error-message" style="color: red">
            </div>
            <button id ="btn-login">Login</button>
            <div class="titi" id = "create">
                New to Rikkei Chat? Create an account
            </div>
            <div class="tito">
                Forget your password?Click here
            </div>
        </form>
    </div>`;
