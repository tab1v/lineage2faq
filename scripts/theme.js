// Function to toggle the theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');

    // Save theme preference to localStorage
    const isDarkMode = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme-preference', isDarkMode ? 'dark' : 'light');
}

// Initialize theme and create theme toggle button on page load
document.addEventListener('DOMContentLoaded', () => {
    // Get saved theme or system preference
    const savedTheme = localStorage.getItem('theme-preference');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply the correct theme based on saved preference or system default
    if (savedTheme === 'dark' || (savedTheme === null && prefersDarkMode)) {
        document.body.classList.add('dark-theme');
    }

    // Make the body visible after theme is applied
    document.body.classList.add('theme-loaded');

    // Create the theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.innerHTML = '🌓'; // Moon and sun emoji
    themeToggle.setAttribute('aria-label', 'Toggle dark/light mode');
    themeToggle.addEventListener('click', toggleTheme);

    // Add the button to the page
    document.body.appendChild(themeToggle);
});



