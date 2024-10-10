document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    localStorage.setItem('isLoggedIn', 'true');

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    localStorage.setItem("username", username);

    window.location.href = "/Hacathon-Static/index.html";
});


