
$(document).ready(function () {

    $("#usercheck").hide();
    let usernameError = true;
    $("#usernames").keyup(function () {
        validateUsername();
    });

    function validateUsername() {
        let usernameValue = $("#usernames").val();
        let regex = /^[A-Za-z0-9]+$/;
        if (usernameValue.length == "") {
            $("#usercheck").show();
            usernameError = false;
            return false;
        } else if (usernameValue.length < 6 || usernameValue.length > 10) {
            $("#usercheck").show();
            $("#usercheck").html("Length of username must be between 6 and 10");
            usernameError = false;
            return false;
        } else if (!regex.test(usernameValue)) {
            $("#usercheck").show();
            $("#usercheck").html("Special characters are not allowed");
            usernameError = false;
            return false;
        } else {
            $("#usercheck").hide();
            usernameError = true;
        }
    }

    $("#emailcheck").hide();
    let emailError = true;
    $("#emails").keyup(function () {
        validateEmail();
    });

    function validateEmail() {
        let emailValue = $("#emails").val();
        let regex2 = /^([\w\.]+)@northeastern.edu$/;
        if (emailValue.length == "") {
            $("#emailcheck").show();
            emailError = false;
            return false;
        } else if (!regex2.test(emailValue)) {
            $("#emailcheck").show();
            $("#emailcheck").html("Please provide valid northeastern email id");
            usernameError = false;
            return false;
        } else if (emailValue.length < 19) {
            $("#emailcheck").show();
            $("#emailcheck").html("Please input atleast be 2 characters before '@'");
            emailError = false;
            return false;
        } else {
            $("#emailcheck").hide();
            emailError = true;
        }
    }


    $("#passcheck").hide();
    let passwordError = true;
    let regex3 = new RegExp("^(?=.*[a-z])");
    let regex4 = new RegExp("^(?=.*[A-Z])");
    let regex5 = new RegExp("^(?=.*[0-9])");
    $("#password").keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwordValue = $("#password").val();
        if (passwordValue.length == "") {
            $("#passcheck").show();
            passwordError = false;
            return false;
        }
        else if (passwordValue.length < 6) {
            $("#passcheck").show();
            $("#passcheck").html(
                "length of your password must be atleast 6"
            );
            $("#passcheck").css("color", "red");
            passwordError = false;
            return false;
        } else if (!regex3.test(passwordValue)) {
            $("#passcheck").show();
            $("#passcheck").html("Password must contain at least 1 lowercase alphabetical character");
            passwordError = false;
            return false;
        } else if (!regex4.test(passwordValue)) {
            $("#passcheck").show();
            $("#passcheck").html("Password must contain at least 1 uppercase alphabetical character");
            passwordError = false;
            return false;
        } else if (!regex5.test(passwordValue)) {
            $("#passcheck").show();
            $("#passcheck").html("Password must contain at least 1 numeric character");
            passwordError = false;
            return false;
        } else {
            $("#passcheck").hide();
            passwordError = true;
        }
    }

    // Submit button
    $("#submitbtn").click(function () {
        validateUsername();
        validateEmail();
        validatePassword();
        if (
            usernameError == true &&
            passwordError == true &&
            emailError == true
        ) {

            console.log($("#usernames").val())
            if (($("#usernames").val() == "nairabhi96" && $("#emails").val() == "nair.abhi@northeastern.edu" && $("#password").val() == "Nairabhi96")) {
                localStorage.setItem("username", $("#usernames").val());
                return true;
            }
            else {
                alert("User doesn't exist");
                return false;
            }
        } else {
            alert("Form is not submitted properly");
            return false;
        }
    });
});