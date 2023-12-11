document.addEventListener("DOMContentLoaded", () => {
    const formularioNewProd = document.getElementById("formularioNewProd");

    formularioNewProd.addEventListener("submit", async (submitEvent) => {
        submitEvent.preventDefault();

        let errors = [];

        const nombreProd = document.getElementById("NombreProd").value;
        const descripcionProd = document.getElementById("DescripcionProd").value;
        const precioProd = document.getElementById("PrecioProd").value;
        const imagenProd = document.getElementById("ImagenProd").value;

        // --- Validación del nombre del producto ---
        if (nombreProd.trim() === "") {
            errors.push("El nombre del producto es obligatorio");
        }

        // --- Validación de la descripción del producto ---
        if (descripcionProd.trim() === "") {
            errors.push("La descripción del producto es obligatoria");
        }

        // --- Validación del precio del producto ---
        if (isNaN(precioProd) || precioProd <= 0) {
            errors.push("Ingrese un precio válido para el producto");
        }

        // --- Validación de la imagen del producto ---
        if (imagenProd.trim() === "") {
            errors.push("Seleccione una imagen para el producto");
        }

        // Mostrar errores
        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            // Envía el formulario si no hay errores
            formularioNewProd.submit();
        }
    });
});
