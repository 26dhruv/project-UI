let conflock = document.getElementById("lock_conf")
let confunlock = document.getElementById("unlock_conf")
conflock.style.opacity = 100;
conflock.addEventListener("click", () => {
    if (conf_pass.type == "password") {
        conf_pass.setAttribute("type", "text");
        conflock.style.opacity = 0;
        confunlock.style.opacity = 100;
    }
    else {
        conf_pass.setAttribute("type", "password");
        conflock.style.opacity = 100;
        confunlock.style.opacity = 0;
    }
})
let passlock = document.getElementById("lock_pass")
let passunlock = document.getElementById("unlock_pass")
passlock.style.opacity = 100;
passlock.addEventListener("click", () => {
    if (pass.type == "password") {
        pass.setAttribute("type", "text");
        passlock.style.opacity = 0;
        passunlock.style.opacity = 100;

    }
    else {
        pass.setAttribute("type", "password");
        passlock.style.opacity = 100;
        passunlock.style.opacity = 0;
    }
})