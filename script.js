function openForm() {
    const form = document.getElementById("createAccountForm");
    form.style.display = "block";
    setTimeout(() => {
        form.classList.add("show-popup");
    }, 10); // Short delay to trigger transition
}

function closeForm() {
    const form = document.getElementById("createAccountForm");
    form.classList.remove("show-popup");
    setTimeout(() => {
        form.style.display = "none";
    }, 300); // Duration of the transition
}

function openLoginForm() {
    const form = document.getElementById("loginForm");
    form.style.display = "block";
    setTimeout(() => {
        form.classList.add("show-popup");
    }, 10); // Short delay to trigger transition
}

function closeLoginForm() {
    const form = document.getElementById("loginForm");
    form.classList.remove("show-popup");
    setTimeout(() => {
        form.style.display = "none";
    }, 300); // Duration of the transition
}

function acknowledgeEmail(inputId) {
    const emailInput = document.getElementById(inputId);
    if (emailInput.value) {
        alert(`Email entered: ${emailInput.value}`);
    }
}

function checkEnter(event, inputId) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the form from submitting if inside a form
        acknowledgeEmail(inputId);
    }
}

document.querySelector(".login").addEventListener("click", openLoginForm);




