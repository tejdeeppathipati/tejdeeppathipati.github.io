// Initialize typing effect on page load
function emailSend(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tejdeepp0909@gmail.com",
        Password : "777475F131BFB39026A1CAC7CD8EE3F3AF04",
        To : 'tpathipa@gmu.edu',
        From : document.getElementById("email").value,
        Subject : "Get in Touch",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
document.addEventListener("DOMContentLoaded", changeRole);


// cbd69086-6f34-40c3-843b-d3fb1b87e87e
// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Sending email using smtpjs
        Email.send({
            SecureToken: "cbd69086-6f34-40c3-843b-d3fb1b87e87e", // Replace with your SMTP.js token
            To: 'tejdeeppathipati@gmail.com', // Replace with your email
            From: email, // Senders email from the form
            Subject: `New Contact Form Submission from ${name}`,
            Body: `
                Name: ${name} <br>
                Email: ${email} <br>
                Phone: ${phone} <br>
                Message: ${message} <br>
            `
        }).then(
            message => {
                alert("Mail sent successfully");
                document.getElementById('submitSuccessMessage').classList.remove('d-none');
                form.reset();
            }
        ).catch(
            error => {
                alert("Failed to send mail. Please try again later.");
                document.getElementById('submitErrorMessage').classList.remove('d-none');
            }
        );
    });
});


