window.addEventListener("load", () => {
    let form = document.querySelector("form");

    form.addEventListener("submit", async (submitEvent) => {
        submitEvent.preventDefault();

        let errors = [];

        let email = document.querySelector("#email");
        let password = document.querySelector("#passwordUsuario");

        // --- EMAIL ---
        let regEmail = /\S+@\S+\.\S+/;
        if (!regEmail.test(email.value)) {
            errors.push("Debe ingresar un email válido");
            email.classList.add("is-invalid");
        } else {
            email.classList.remove("is-invalid");
        }

        // --- PASSWORD ---
        if (password.value.length === 0) {
            errors.push("La contraseña es obligatoria");
            password.classList.add("is-invalid");
        } else {
            password.classList.remove("is-invalid");
        }

        // // Verificar credenciales en el backend (debes implementar este paso)
        // if (errors.length === 0) {
        //     try {
        //         const response = await fetch("/api/login", {
        //             method: "POST",
        //             headers: {
        //                 "Content-Type": "application/json",
        //             },
        //             body: JSON.stringify({
        //                 email: email.value,
        //                 password: password.value,
        //             }),
        //         });

        //         if (!response.ok) {
        //             throw new Error("Error en la autenticación");
        //         }

        //         const data = await response.json();

        //         if (data.success) {
        //             alert("Inicio de sesión exitoso");
        //             // Redireccionar o realizar alguna acción después de un inicio de sesión exitoso
        //         } else {
        //             errors.push("Credenciales incorrectas");
        //         }
        //     } catch (error) {
        //         console.error(error);
        //         errors.push("Error en la autenticación");
        //     }
        // }

        // Mostrar errores
        if (errors.length > 0) {
            let ulErrors = document.querySelector(".errores");
            ulErrors.classList.add("alert-warning");
            ulErrors.innerHTML = "";
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
            }
        }
    });
});
