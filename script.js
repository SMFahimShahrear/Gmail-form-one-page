let sliderCnt = 1;
let Signin_Signup_Cnt = 1;

function submitButton(e){
    if(sliderCnt == 1){
    document.querySelector(".frame-box").classList.add("scale-small");
    document.querySelector(".section-wrapper").classList.add("transition-left-first");
    document.querySelector(".button-wrapper").classList.add("button-wrapper-fix");
    document.querySelector(".frame-above").classList.add("button-wrapper-fix");
    document.querySelector(".google-logo-image img").classList.add("transition-google-logo");
    document.querySelector(".title-signin-email").classList.add("transition-google-logo");
    document.querySelector(".title-signup").classList.add("hidden");
    document.querySelector(".title-signin-email").classList.remove("hidden");
    document.querySelector(".subtitle").classList.add("hidden");
    sliderCnt++;
    }
    else if(sliderCnt == 2){
        document.querySelector(".section-wrapper").classList.add("transition-left-second");
    }
    
}


function checkfuntion(e){

}

function signin_signup(){
    console.log(Signin_Signup_Cnt);
    if(Signin_Signup_Cnt == 1){
        document.querySelector(".frame-box").classList.add("scale-small");
        document.querySelector(".section-wrapper").classList.add("transition-left-first");
        document.querySelector(".button-wrapper").classList.add("button-wrapper-fix");
        document.querySelector(".frame-above").classList.add("button-wrapper-fix");
        document.querySelector(".google-logo-image img").classList.add("transition-google-logo");
        document.querySelector(".title-signin-email").classList.add("transition-google-logo");
        document.querySelector(".title-signup").classList.add("hidden");
        document.querySelector(".title-signin-email").classList.remove("hidden");
        document.querySelector(".subtitle").classList.add("hidden");
        Signin_Signup_Cnt++;
    } 
       
    else if(Signin_Signup_Cnt == 2){
        Signin_Signup_Cnt--;
        document.querySelector(".frame-box").classList.remove("scale-small");
        document.querySelector(".section-wrapper").classList.remove("transition-left-first");
        document.querySelector(".button-wrapper").classList.remove("button-wrapper-fix");

        document.querySelector(".frame-above").classList.remove("button-wrapper-fix");
        document.querySelector(".google-logo-image img").classList.remove("transition-google-logo");
        document.querySelector(".title-signin-email").classList.remove("transition-google-logo");
        document.querySelector(".title-signup").classList.remove("hidden");
        document.querySelector(".title-signin-email").classList.add("hidden");
        document.querySelector(".subtitle").classList.remove("hidden");
        signin_signup
    }
}