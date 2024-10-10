const username = localStorage.getItem("username");

if (username) {
    document.getElementById("homepage").innerText = `Halo, ${username}!`;
}

window.onload = function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const authButton = document.getElementById('authButton');
    const mAuthButton = document.getElementById('mAuthButton');

    if (isLoggedIn) {
        authButton.innerText = 'Keluar';
        authButton.href = '#'; 
        authButton.onclick = function() {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            location.reload(); 
        };

        mAuthButton.innerText = 'Keluar';
        mAuthButton.href = '#';
        mAuthButton.onclick = function() {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            location.reload(); 
        };
    } else {
        authButton.innerText = 'Masuk';
        authButton.href = '/Hackathon-Static/pages/Login.html';

        mAuthButton.innerText = 'Masuk';
        mAuthButton.href = '/Hackathon-Static/pages/Login.html';
    }
};