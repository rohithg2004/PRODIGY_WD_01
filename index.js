// index.js
function openNavbar() {
    document.getElementById("sideNavigationBar").style.width = "250px";
}

function closeNavbar() {
    document.getElementById("sideNavigationBar").style.width = "0";
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function openNavbar() {
    document.getElementById("sideNavigationBar").style.width = "250px";
}

function closeNavbar() {
    document.getElementById("sideNavigationBar").style.width = "0";
}
