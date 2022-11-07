let password_show_checkbox = document.querySelector("#checkbox-show-pass");
let fname_field = document.querySelector(".f-name");
let lname_field = document.querySelector(".l-name");
let mail_field = document.querySelector(".mail");
let password_field = document.querySelector(".password");
let confirm_password_field = document.querySelector(".confirm-password");
let error_message = document.querySelectorAll(".empty-field-alart");
let all_inputs = document.querySelectorAll("input");
let error = 0;
let data = "";
let sliderCnt = 1;
let Signin_Signup_Cnt = 1;

document.querySelector(".welcome").classList.add("hidden");

function submitButton(e) {
    // e.preventDefault();
    if (sliderCnt == 1) {
        return validation();
    }
    else if (sliderCnt == 2) {
        return emailAuth();

    }

    else if (sliderCnt == 3) {
        return passAuth();
    }

}

// Signup Validation 
function validation() {
    error_message.forEach(e => {
        e.classList.add("hidden");
    })
    all_inputs.forEach(e => {
        e.classList.remove("border-red");
    })
    document.querySelector(".create-successful").classList.add("hidden");
    document.querySelector(".sub").classList.add("hidden");
    error = 0;

    // name field validation

    if (fname_field.value == "" && lname_field.value == "") {
        fname_field.classList.add("border-red");
        lname_field.classList.add("border-red");
        document.querySelector(".empty-field-alart-name-both-empty").classList.remove("hidden");
        error = 1;
    } else if (fname_field.value == "") {
        fname_field.classList.add("border-red");
        document.querySelector(".empty-field-alert-firstname-empty").classList.remove("hidden");
        error = 1;
    } else if (lname_field.value == "") {
        lname_field.classList.add("border-red");
        document.querySelector(".field-alert-lastname-empty").classList.remove("hidden");
        error = 1;
    }


    // mail validation
    if (mail_field.value == "") {
        mail_field.classList.add("border-red");
        document.querySelector(".field-alert-mail-empty").classList.remove("hidden");
        document.querySelector(".mail-rule").classList.add("hidden");
        error = 1;
    }
    else if (mail_field.value.endsWith("@gmail.com") == false) {
        mail_field.classList.add("border-red");
        document.querySelector(".field-alert-mail-invalidFormat").classList.remove("hidden");
        error = 1;
    }
    else {
        let check = localStorage.getItem(mail_field.value);

        if (check) {
            error = 1;
            document.querySelector(".field-alert-mail-empty").classList.add("hidden");
            document.querySelector(".field-alert-mail-taken").classList.remove("hidden");
        }
    }

    // Password validation

    if (password_field.value == "") {
        password_field.classList.add("border-red");
        document.querySelector(".field-alert-pass-empty").classList.remove("hidden");
        document.querySelector(".password-rule").classList.add("hidden");
        error = 1;
    }

    else if (password_field.value.length < 8) {             //password minimum legnth check
        password_field.classList.add("border-red");
        document.querySelector(".field-alert-pass-lesser").classList.remove("hidden");
        document.querySelector(".password-rule").classList.add("hidden");
        error = 1;
    }

    else {
        if (confirm_password_field.value == "") {
            confirm_password_field.classList.add("border-red");
            document.querySelector(".field-alert-confirmPass-empty").classList.remove("hidden");
            document.querySelector(".password-rule").classList.add("hidden");
            error = 1;
        }
        else {
            if (password_field.value.localeCompare(confirm_password_field.value) != 0) {               //passowrd match
                error = 1;
                document.querySelector(".field-alert-confirmPass-notMatch").classList.remove("hidden");
                document.querySelector(".password-rule").classList.add("hidden");
            }
        }
    }

    if (error == 1) {
        return false;
    } else {
        data = password_field.value.length + "pass:" + password_field.value + "fname:" + fname_field.value + "lname:" + lname_field.value + "||";
        localStorage.setItem(mail_field.value, data);

        document.querySelector(".frame-box").classList.add("scale-small");
        document.querySelector(".frame").classList.add("scale-smallY");
        document.querySelector(".section-wrapper").classList.add("transition-left-first");
        document.querySelector(".button-wrapper").classList.add("button-wrapper-fix");
        document.querySelector(".frame-above").classList.add("button-wrapper-fix");
        document.querySelector(".google-logo-image img").classList.add("transition-google-logo");
        document.querySelector(".title-signin-email").classList.add("transition-google-logo");
        document.querySelector(".title-signup").classList.add("hidden");
        document.querySelector(".title-signin-email").classList.remove("hidden");
        document.querySelector(".sub").classList.remove("hidden");
        document.querySelector(".tag-signin-instead").classList.add("hidden");
        document.querySelector(".tag-create-account").classList.remove("hidden");
        document.querySelector(".create-successful").classList.remove("hidden");
        document.querySelector(".button-wrapper").classList.remove("padding-top-zero");

        Signin_Signup_Cnt = 2;
        sliderCnt++;
    }

}

// Mail check

function emailAuth() {
    document.querySelector(".field-alert-acc-notFound").classList.add("hidden");
    let mail_field2 = document.querySelector('.mail-check').value;
    let check = localStorage.getItem(mail_field2);


    if (mail_field2 == '') {
        document.querySelector(".field-alert-mailField-empty").classList.remove("hidden");
        document.querySelector(".mail-check").classList.add("border-red");
        return false;
    }

    if (check) {
        document.querySelector(".section-wrapper").classList.add("transition-left-second");
        document.querySelector(".title-signin-email").classList.add("hidden");
        document.querySelector(".title-signin-pass").classList.remove("hidden");
        document.querySelector(".title-signin-pass").classList.add("horizontel-center");
        document.querySelector(".main-title").classList.add("min-height");
        document.querySelector(".tag-forgot-password").classList.remove("hidden");
        document.querySelector(".tag-create-account").classList.add("hidden");
        document.querySelector(".tag-create-account").classList.add("horizontel-center");

        let position_start = check.search("fname:");
        let position_end = check.search("lname:");
        let username = check.slice(position_start + 6, position_end);
        document.querySelector(".user-name").textContent = username.toUpperCase();
        document.querySelector(".user-name").classList.remove("hidden");
        document.querySelector(".subtitle").classList.add("min-height");
        document.querySelector(".sub").classList.add("hidden");
        sliderCnt++;
    } else {
        document.querySelector(".field-alert-acc-notFound").classList.remove("hidden");
        document.querySelector(".field-alert-mailField-empty").classList.add("hidden");
        return false;
    }
}


function checkfuntion(e) {
    if (e.value != "") {
        e.nextElementSibling.classList.add('input-filled');
    }
    else {
        e.nextElementSibling.classList.remove('input-filled');
    }
}

// Password check
function passAuth() {
    let password = document.querySelector(".pass-check");
    document.querySelector(".field-alert-wrongPass").classList.add("hidden");
    document.querySelector(".field-alert-passCheck-empty").classList.add("hidden");
    let find = document.querySelector('.mail-check').value;

    if (password.value == '') {
        document.querySelector(".field-alert-passCheck-empty").classList.remove("hidden");
        document.querySelector(".pass-check").classList.add("border-red");
        return false;
    }
    if (find) {
        let str = localStorage.getItem(find);
        let position_start = str.search("pass:");
        let position_end = str.search("fname:");
        let pass = str.slice(position_start + 5, position_end);
        if (pass.localeCompare(password.value) == 0) {                //  password match
            document.querySelector(".for-center").classList.add("hidden");
            document.querySelector(".welcome").classList.remove("hidden");
        }
        else {
            document.querySelector(".field-alert-wrongPass").classList.remove("hidden");
            document.querySelector(".pass-check").classList.add("border-red");
            return false;
        }
    }
    else {
        window.alert("Error occured");
        return false;
    }

}

// signIn signUp page switch
function signin_signup() {
    document.querySelector(".create-successful").classList.add("hidden");
    if (Signin_Signup_Cnt == 1) {
        document.querySelector(".frame-box").classList.add("scale-small");
        document.querySelector(".section-wrapper").classList.add("transition-left-first");
        document.querySelector(".button-wrapper").classList.add("button-wrapper-fix");
        document.querySelector(".frame-above").classList.add("button-wrapper-fix");
        document.querySelector(".google-logo-image img").classList.add("transition-google-logo");
        document.querySelector(".title-signin-email").classList.add("transition-google-logo");
        document.querySelector(".title-signup").classList.add("hidden");
        document.querySelector(".title-signin-email").classList.remove("hidden");
        document.querySelector(".sub").classList.remove("hidden");
        document.querySelector(".tag-signin-instead").classList.add("hidden");
        document.querySelector(".tag-create-account").classList.remove("hidden");
        document.querySelector(".button-wrapper").classList.add("padding-top-zero");
        Signin_Signup_Cnt = 2;
        sliderCnt = 2;
    }

    else if (Signin_Signup_Cnt == 2) {
        Signin_Signup_Cnt--;
        document.querySelector(".frame-box").classList.remove("scale-small");
        document.querySelector(".section-wrapper").classList.remove("transition-left-first");
        document.querySelector(".button-wrapper").classList.remove("button-wrapper-fix");
        document.querySelector(".frame-above").classList.remove("button-wrapper-fix");
        document.querySelector(".google-logo-image img").classList.remove("transition-google-logo");
        document.querySelector(".title-signin-email").classList.remove("transition-google-logo");
        document.querySelector(".title-signup").classList.remove("hidden");
        document.querySelector(".title-signin-email").classList.add("hidden");
        document.querySelector(".sub").classList.add("hidden");
        document.querySelector(".tag-signin-instead").classList.remove("hidden");
        document.querySelector(".tag-create-account").classList.add("hidden");
        document.querySelector(".button-wrapper").classList.remove("padding-top-zero");
        sliderCnt = 1;
    }
}

// show password with checkbox
function password_visibility(e) {
    if (e.checked == true) {
        password_field.type = "text";
        document.querySelector(".pass-check").type = "text";
        e.parentElement.classList.add("check-box-hover-color");
    } else {
        password_field.type = "password";
        document.querySelector(".pass-check").type = "password";
        e.parentElement.classList.remove("check-box-hover-color");
    }
}