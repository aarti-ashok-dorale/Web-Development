document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const pageId = this.getAttribute('href').substring(1); // Remove the '#'
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log("Name:", name, "Email:", email, "Message:", message);

    document.getElementById('messageDisplay').innerText = "Message Sent!";
    document.getElementById('messageDisplay').style.color = "green";

    this.reset();
});