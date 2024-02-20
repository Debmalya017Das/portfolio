document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of the link
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode);

        // Toggle the logo when dark mode is toggled
        const logo = document.querySelector('.logo');
        if (isDarkMode) {
            // Change to sun icon when in dark mode
            logo.classList.add('fa-sun');
            logo.classList.remove('fa-moon');
        } else {
            // Change back to moon icon when not in dark mode
            logo.classList.add('fa-moon');
            logo.classList.remove('fa-sun');
        }
    });

    // Check if dark mode was previously set
    const isDarkModeStored = localStorage.getItem('dark-mode') === 'true';
    if (isDarkModeStored) {
        body.classList.add('dark-mode');
        // Change the logo if dark mode was previously set
        const logo = document.querySelector('.logo');
        logo.classList.add('fa-sun');
        logo.classList.remove('fa-moon');
    }
});


document.getElementById('name').addEventListener('submit',send);

function send(e){
    e.preventDefault();

    console.log(123);
}