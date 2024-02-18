document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of the link
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode);
    });

    // Check if dark mode was previously set
    const isDarkModeStored = localStorage.getItem('dark-mode') === 'true';
    if (isDarkModeStored) {
        body.classList.add('dark-mode');
    }
});
