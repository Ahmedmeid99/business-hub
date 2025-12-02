const PUBLIC_KEY = "oT7J803f0HsN0V0HN";
const SERVICE = "service_y4zpux3";
const TEMPLATE = "template_p0fmc2r";

//----------------------------------------
// EmailJS functionality
//----------------------------------------
if (typeof emailjs !== "undefined") {
    emailjs.init(PUBLIC_KEY);

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            emailjs.sendForm(SERVICE, TEMPLATE, this)
                .then(() => {
                    alert("Message sent successfully!");
                    contactForm.reset();
                })
                .catch(err => alert("Error: " + JSON.stringify(err)));
        });
    }
}
