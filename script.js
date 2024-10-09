document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

function countdown() {
    // Set the target date to midnight on Halloween, US Central Time
    const halloweenMidnight = new Date('November 1, 2024 00:00:00 GMT-0500').getTime();
    const now = new Date().getTime();
    const distance = halloweenMidnight - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        document.getElementById('timer').innerHTML = "Get to bed!";
    }
}

setInterval(countdown, 1000);
