function onSubmit(event){
    event.preventDefault()
    const emailInput = event.target.elements["email"]
    const passwordInput = event.target.elements["password"]
    const isEmailValid = validateEmail(emailInput.value)
    const isPasswordValid = checkPassword(passwordInput.value)
    if(!isEmailValid){
        emailInput.classList.add("error")
    }
    else{
        emailInput.classList.remove("error")
    }
    if(!isPasswordValid){
        passwordInput.classList.add("error")
    }
        else{
            passwordInput.classList.remove("error")
        }
    }

const form = document.querySelector("form")
form.addEventListener('submit', onSubmit)


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function checkPassword(str) {
    if(str.length < 5 || str.length >10){
        return false
    }
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}

