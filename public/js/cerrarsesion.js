window.addEventListener("load", function(){
    let logoutButton = document.querySelector('.cerrarSesion');

    logoutButton.addEventListener("click",function(){
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var igualPos = cookie.indexOf("=");
        var nombre = igualPos > -1 ? cookie.substr(0, igualPos) : cookie;
        document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
        
    })   
}) 
    

// 