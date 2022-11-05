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
let lock = document.getElementById("lock")
let unlock = document.getElementById("unlock")
lock.style.opacity = 100;
lock.addEventListener("click", () => {
    if (pass.type == "password") {
        pass.setAttribute("type", "text");
        lock.style.opacity = 0;
        unlock.style.opacity = 100;

    }
    else {
        pass.setAttribute("type", "password");
        lock.style.opacity = 100;
        unlock.style.opacity = 0;
    }
})