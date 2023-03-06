const app = Vue.createApp({
    data() {
        return {
            imageUrl: "./img/regpic.png",
            altImage: "The regpic",
        };
    },
    methods: {
        validateForm() {
            const form = document.querySelector(".form-page");
            const firstname = form["firstname"],
                lastname = form["lastname"],
                phone = form["phone"],
                emailid = form["email"],
                password = form["password"];

            const nameCheck = /^([a-z]+)$/i;
            const phoneCheck = /(^[a-z\_\.\=\&\@]+)/;
            const emailCheck = /^([\w]+)@([a-z]{5}).([a-z]{3})$/;

            if (!firstname.value) {
                setError(
                    firstname.parentElement,
                    "error",
                    "this input field is required"
                );
            } else if (!nameCheck.test(firstname.value)) {
                setError(
                    firstname.parentElement,
                    "error",
                    "Please this input form is to be filled with letters only"
                );
            } else {
                setSuccess(firstname.parentElement, "success", "error");
            }

            if (!lastname.value) {
                setError(
                    lastname.parentElement,
                    "error",
                    "this input field is required"
                );
            } else if (!nameCheck.test(lastname.value)) {
                setError(
                    lastname.parentElement,
                    "error",
                    "Please this input form is to be filled with letters only"
                );
            } else {
                setSuccess(lastname.parentElement, "success", "error");
            }

            if (!emailid.value) {
                setError(
                    emailid.parentElement,
                    "error",
                    "this input field is required"
                );
            } else if (!emailCheck.test(emailid.value)) {
                setError(
                    emailid.parentElement,
                    "error",
                    "Please enter your correct email address"
                );
            } else {
                setSuccess(emailid.parentElement, "success", "error");
            }

            if (!phone.value) {
                setError(
                    phone.parentElement,
                    "error",
                    "this input field is required"
                );
            } else if (phoneCheck.test(phone.value)) {
                setError(
                    phone.parentElement,
                    "error",
                    "Please enter a valid phone number"
                );
            } else if (phone.value.length <= 10) {
                setError(
                    phone.parentElement,
                    "error",
                    "Phone number not complete, check digits"
                );
            } else {
                setSuccess(phone.parentElement, "success", "error");
            }

            if (!password.value) {
                setError(
                    password.parentElement,
                    "error",
                    "this input field is required"
                );
            } else if (password.value.length < 8) {
                setError(
                    password.parentElement,
                    "error",
                    "Password must be at least 8 characters"
                );
            } else {
                setSuccess(password.parentElement, "success", "error");
            }

            if (
                nameCheck.test(firstname.value) &&
                nameCheck.test(lastname.value) &&
                emailCheck.test(emailid.value) &&
                password.value.length >= 8
            ) {
                document
                    .querySelector(".alert-msg")
                    .classList.add("show-alert");
                setTimeout(() => {
                    document
                        .querySelector(".alert-msg")
                        .classList.remove("show-alert");
                    setBacktoDefault();
                }, 1600);
            }
        },
    },
});

app.mount("#app");

function setError(element, value, message, initial = "success") {
    element.classList.remove(initial);
    element.classList.add(`${value}`);
    element.nextElementSibling.innerHTML = message;
}

function setSuccess(element, value, initial) {
    element.classList.remove(initial);
    element.classList.add(`${value}`);
    element.nextElementSibling.innerHTML = "";
}

function setBacktoDefault() {
    document.querySelectorAll("input").forEach((input) => {
        input.value = "";
        input.parentElement.classList.remove("success");
    });
}
