// JavaScript to handle theme switching

const themes = [
    'hogwarts-dark',
    'hogwarts-light',
    'gryffindor',
    'hufflepuff',
    'ravenclaw',
    'slytherin'
];

const themeLogos = {
    'hogwarts-dark': '/type/assets/hogwarts-dark-logo.png',
    'hogwarts-light': '/type/assets/hogwarts-light-logo.png',
    'gryffindor': '/type/assets/gryffindor-logo.png',
    'hufflepuff': '/type/assets/hufflepuff-logo.png',
    'ravenclaw': '/type/assets/ravenclaw-logo.png',
    'slytherin': '/type/assets/slytherin-logo.png'
};

let currentThemeIndex = 0; // Start with the first theme (Hogwarts Dark)

const body = document.body;
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Function to switch theme
function switchTheme() {
    // Remove the current theme
    body.classList.remove(themes[currentThemeIndex]);

    // Update the theme index
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;

    // Apply the new theme
    const newTheme = themes[currentThemeIndex];
    body.classList.add(newTheme);

    // Update the theme icon
    themeIcon.src = themeLogos[newTheme];
}

// Event listener for the theme toggle button
themeToggleButton.addEventListener('click', switchTheme);
