import "./style.css";
export let registerPage = /*html*/ `<div class="container1">
        <div class="logo2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png" alt="">
        </div>
        <div class="rest1">Create new account</div>
        <div class="error" id="server-error-message" style="color: green"></div>
        <form class= "form1" id="form-1">
            <div class="wrapper1">
                <p>First Name</p>
                <input type="text" placeholder="Please enter your first name" name ="firstName">
                <div id="firstName1" style="color: red"></div>
            </div>
            <div class="wrapper1">
                <p>Last Name</p>
                <input type="text" placeholder="Please enter your last name" name ="lastName">
                <div id="lastName1" style="color: red"> </div>
            </div>
            <div class="wrapper1">
                <p>Email address</p>
                <input type="text" placeholder="Please enter your email" name ="email">
                <div id="email-error-message2" style="color: red"> </div>
            </div>
            <div class="wrapper1">
                <p>Password</p>
                <input type="text" placeholder="Please enter your passworld" name = "passWord">
                <div id="password-error-message2" style="color: red"> </div>
            </div>
            <div class="wrapper1">
                <p>Confirm Password</p>
                <input type="text" placeholder="Confirm your passworld" name = "confirmPassword">
                <div id="confirmPassword1" style="color: red"> </div>
            </div>
            <button>Register</button>
            <div class="titi1" id="titi1">
               Already have an account?Login here
            </div>
        </form>
    </div>`;
