let password_show_checkbox = document.querySelector("#checkbox-show-pass");
let fname_field = document.querySelector(".f-name");
let lname_field = document.querySelector(".l-name");
let mail_field = document.querySelector(".mail");
let password_field = document.querySelector(".password");
let confirm_password_field = document.querySelector(".confirm-password");
let error = 0;
let data = "";
let buttonCnt = 0;
let mail_field2 = '';

function checkfuntion(e) {
    if (e.value != "") {
        e.nextElementSibling.classList.add('input-filled');
    }
    else {
        e.nextElementSibling.classList.remove('input-filled');
    }
}

function password_visibility(e) {
    if (e.checked == true) {
        password_field.type = "text";
        e.parentElement.classList.add("check-box-hover-color");
    } else {
        password_field.type = "password";
        e.parentElement.classList.remove("check-box-hover-color");
    }
}
function password_visibility2(e) {
    if (e.checked == true) {
        document.querySelector(".pass-check").type = "text";
        e.parentElement.classList.add("check-box-hover-color");
    } else {
        document.querySelector(".pass-check").type = "password";
        e.parentElement.classList.remove("check-box-hover-color");
    }
}

// validation
function validation() {
    console.log("ok boss");
    console.log(buttonCnt);
    
    if (buttonCnt == 0) {
        // document.querySelectorAll(".empty-field-alart").classList.add("hidden");
        document.querySelector(".empty-field-alart-1").classList.add("hidden");
        document.querySelector(".empty-field-alart-2").classList.add("hidden");
        document.querySelector(".empty-field-alart-3").classList.add("hidden");
        document.querySelector(".empty-field-alart-4").classList.add("hidden");
        document.querySelector(".empty-field-alart-5").classList.add("hidden");
        document.querySelector(".empty-field-alart-6").classList.add("hidden");
        document.querySelector(".empty-field-alart-7").classList.add("hidden");
        document.querySelector(".empty-field-alart-8").classList.add("hidden");
        document.querySelector(".empty-field-alart-9").classList.add("hidden");
        fname_field.classList.remove("border-red");
        lname_field.classList.remove("border-red");
        mail_field.classList.remove("border-red");
        password_field.classList.remove("border-red");
        error = 0;

        if (fname_field.value == "" && lname_field.value == "") {
            fname_field.classList.add("border-red");
            lname_field.classList.add("border-red");
            document.querySelector(".empty-field-alart-1").classList.remove("hidden");
            error = 1;
        } else if (fname_field.value == "") {
            fname_field.classList.add("border-red");
            document.querySelector(".empty-field-alart-2").classList.remove("hidden");
            error = 1;
        } else if (lname_field.value == "") {
            lname_field.classList.add("border-red");
            document.querySelector(".empty-field-alart-3").classList.remove("hidden");
            error = 1;
        }

        if (mail_field.value == "") {
            mail_field.classList.add("border-red");
            document.querySelector(".empty-field-alart-4").classList.remove("hidden");
            document.querySelector(".mail-rule").classList.add("hidden");
            error = 1;
        }
        else {
            let check = localStorage.getItem(mail_field.value);

            if (check) {
                sessionStorage.setItem("mailaddress", mail_field);
                error = 1;
                document.querySelector(".empty-field-alart-4").classList.add("hidden");
                document.querySelector(".empty-field-alart-5").classList.remove("hidden");
            }
        }

        if (password_field.value == "") {
            password_field.classList.add("border-red");
            document.querySelector(".empty-field-alart-6").classList.remove("hidden");
            document.querySelector(".empty-field-alart-8").classList.add("hidden");
            document.querySelector(".empty-field-alart-7").classList.add("hidden");
            document.querySelector(".password-rule").classList.add("hidden");
            error = 1;
        }

        else if (password_field.value.length < 7) {
            password_field.classList.add("border-red");
            document.querySelector(".empty-field-alart-7").classList.remove("hidden");
            document.querySelector(".empty-field-alart-8").classList.add("hidden");
            document.querySelector(".password-rule").classList.add("hidden");
            error = 1;
        }
        else {
            if (confirm_password_field.value == "") {
                confirm_password_field.classList.add("border-red");
                document.querySelector(".empty-field-alart-8").classList.remove("hidden");
                document.querySelector(".empty-field-alart-7").classList.add("hidden");
                document.querySelector(".password-rule").classList.add("hidden");
                error = 1;
            }
            else {
                if (password_field.value.localeCompare(confirm_password_field.value) != 0) {               //passowrd match
                    error = 1;
                    document.querySelector(".empty-field-alart-9").classList.remove("hidden");
                    document.querySelector(".password-rule").classList.add("hidden");
                }
            }
        }

        if (error == 1) {
            return false;
        } else {
            data = password_field.value.length + "pass:" + password_field.value + "fname:" + fname_field.value + "lname:" + lname_field.value + "||";
            localStorage.setItem(mail_field.value, data);
            window.alert("Account created!");
        }
    }

    else if (buttonCnt == 1) {

        document.querySelector(".empty-field-alart-20").classList.add("hidden");
        mail_field2 = document.querySelector('.mail-check').value;
        let check = localStorage.getItem(mail_field2);
        let position_start = check.search("fname:");
        let position_end = check.search("lname:");
        let username = check.slice(position_start + 6, position_end);
        document.querySelector(".subtitle p").innerText = username.toUpperCase();

        if (mail_field2 == '') {
            document.querySelector(".empty-field-alart-21").classList.remove("hidden");
            return false;
        }

        if (check) {
            document.querySelector(".wrapper-all").classList.add("scale-static-2");
            document.querySelector(".main-title p").innerText = 'Welcome';
            document.querySelector(".main-title p").classList.remove("center-trasition-2");
            document.querySelector(".main-title p").classList.remove("scale-static-3");
            document.querySelector(".main-title p").classList.add("center-stick");
            // document.querySelector(".subtitle p").classList.remove("center-trasition-2");
            document.querySelector(".subtitle p").classList.remove("scale-static-5");
            document.querySelector(".subtitle p").classList.add("center-stick");

        } else {
            document.querySelector(".empty-field-alart-20").classList.remove("hidden");
            document.querySelector(".empty-field-alart-21").classList.add("hidden");
            return false;
        }
    }
    
    else if (buttonCnt == 2) {
        let password = document.querySelector(".pass-check");
        document.querySelector(".empty-field-alart-30").classList.add("hidden");
        document.querySelector(".empty-field-alart-31").classList.add("hidden");
        let find = mail_field2;

        if (password.value == '') {
            document.querySelector(".empty-field-alart-31").classList.remove("hidden");
            return false;
        }
        if (find) {
            console.log("sera");
            let str = localStorage.getItem(find);
            let position_start = str.search("pass:");
            let position_end = str.search("fname:");
            let pass = str.slice(position_start + 5, position_end);
            console.log(password.value);
            if (pass.localeCompare(password.value) == 0) {
                console.log("ok");
                document.querySelector(".main-frame").classList.add("hidden");
                document.querySelector(".welcome").classList.remove("hidden");
                return false;
            }
            else {
                document.querySelector(".empty-field-alart-30").classList.remove("hidden");
                return false;
            }
        }
        else {
            window.alert("Error occured");
            return false;
        }
    }
    console.log("X:", buttonCnt);
    buttonCnt++;
    return false;

}


function slider1(){
    // document.querySelector(".google-logo-image img").classList.add("center-stick");
    document.querySelector(".google-logo-image img").classList.add("center-trasition");
    document.querySelector(".main-title p").classList.add("center-trasition-2");
    document.querySelector(".main-frame").classList.add("scale");
    document.querySelector(".wrapper-all").classList.add("scale-static");
    document.querySelector(".main-title p").classList.add("scale-static-3");
    document.querySelector(".subtitle p").classList.add("scale-static-5");
    document.querySelector(".google-logo-image img").classList.add("scale-static-3");
    document.querySelector(".submit-wrapper div").classList.add("scale-static-5");
    document.querySelector(".submit-wrapper button").classList.add("scale-static-4");
    buttonCnt = 1;
    document.querySelector(".main-title p").innerText = 'Sign in';
    document.querySelector(".subtitle p").innerText = 'Use your Google Account';
    console.log("greayt");
    console.log(buttonCnt);
}
function nameappear() {

    if (find) {
        let str = localStorage.getItem(mail_field2);
        let position_start = str.search("fname:");
        let position_end = str.search("lname:");
        let username = str.slice(position_start + 6, position_end);
        document.querySelector(".subtitle p").innerText = username.toUpperCase();
    }
}

function passAuth() {


}
