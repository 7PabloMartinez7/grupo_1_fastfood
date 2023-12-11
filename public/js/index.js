window.addEventListener("load", () =>{

    let form = document.querySelector(".form");
    form.name.focus();

    form.addEventListener("submit",(submitEvent)=> {

        /*creacion de array de erroes vacio.
        si se detectan errores se iran agregando aqui*/
        let errors = [];

        let name = document.querySelector("#nombre");
        let email = document.querySelector("#email");
        let password = document.querySelector("contrasenia");
        let country = document.querySelector("#country");
        let avatar = document.querySelector("input[name='avatar']");

        //---NAME---
        if (name.value == "") {
            errors.push("El campo debe tener al menos 2 caracteres");
            name.classList.remove("is-valid");
            name.classList.add("is-invalid");
        } else {
            name.classList.add("is-valid");
            name.classList.remove("is-invalid");
            form.email.focus();
        };

        //---EMAIL (regex)---
        let regEmail = /\S+@\S+\.\S+/;
        if (!regEmail.test(email.value)) {
            errors.push("Debe ingresar un email válido");
            email.classList.add("is-invalid");
            email.classList.remove("is-valid");
        } else {
            email.classList.add("is-valid");
            email.classList.remove("is-invalid");
            form.contrasenia.focus();
        }

        //---PASSWORD---
        if (password.value.length < 8) {
            errors.push("La contraseña debe tener al menos 8 caracteres");
            password.classList.remove("is-valid");
            password.classList.add("is-invalid");
        } else {
            password.classList.add("is-valid");
            password.classList.remove("is-invalid");
        }

        //---AVATAR---
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
        const fileName = avatar.value.toLowerCase();
        const fileExtension = fileName.split('.').pop();
        if (!allowedExtensions.includes(fileExtension)) {
            errors.push("Formato de imagen no válido. Solo se permiten archivos JPG, JPEG, PNG o GIF.");
            avatar.classList.add("is-invalid");
        } else {
            avatar.classList.add("is-valid");
        }

        //Controlamos si hay errores
        console.log(errors);
        if (errors.length > 0) {
            submitEvent.preventDefault();
            let ulErrors = document.querySelector(".errores");
            ulErrors.classList.add("alert-warning");
            ulErrors.innerHTML = "";
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
            }
        } else {
            alert("La validación fue exitosa");
            form.submit();
        }
    });
})