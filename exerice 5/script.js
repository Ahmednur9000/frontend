document.addEventListener("DOMContentLoaded" , function() {
    document.getElementById("contactForm").addEventListener("submit" , function(event) {
        event.preventDefault();

        //get input values
        let fullname = getElementById("fullname").value.trim();
        let email = document.getElementById("email").value.trim();
        let age = document.getElementById("age").value.trim();
        let password = document.getElementById("password").value.trim();

    })
})