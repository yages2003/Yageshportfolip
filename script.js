// Tab functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Mobile menu functionality
var sidemeu = document.getElementById("sidemenu");

function openmenu() {
    sidemeu.style.right = "0";
}

function closemenu() {
    sidemeu.style.right = "-200px";
}

// Google Sheet form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbyRexP1hyCkTZWbUzcxDfn_KGeRU_b3utUQviWdEKE2F2Xuy3MEVQQnlnQx8_ddGUe7Fg/exec' // add your own app script link here
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function() {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = themeToggle.querySelector('.fa-sun');
const moonIcon = themeToggle.querySelector('.fa-moon');

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'light') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    } else {
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
    }
}

// Function to toggle between light and dark mode
function toggleMode(mode) {
    const body = document.body;
    if (mode === 'light') {
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
    }
}

// Optional: Set default mode based on user preference (e.g., system settings)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    toggleMode('light');
}


// Toggle between light and dark mode
function toggleMode(mode) {
    const body = document.body;
    if (mode === 'light') {
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
    }
}

// Tab switching for About section
function opentab(tabname) {
    const tabLinks = document.getElementsByClassName('tab-links');
    const tabContents = document.getElementsByClassName('tab-contents');
    for (let tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// Mobile menu functions (if not already present)
function openmenu() {
    document.getElementById('sidemenu').style.right = '0';
}

function closemenu() {
    document.getElementById('sidemenu').style.right = '-200px';
}


// Toggle between light and dark mode
function toggleMode(mode) {
    const body = document.body;
    if (mode === 'light') {
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
    }
}

// Mobile menu functions
function openmenu() {
    document.getElementById('sidemenu').style.right = '0';
}

function closemenu() {
    document.getElementById('sidemenu').style.right = '-200px';
}

// Tab switching for About section
function opentab(tabname) {
    const tabLinks = document.getElementsByClassName('tab-links');
    const tabContents = document.getElementsByClassName('tab-contents');
    for (let tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}