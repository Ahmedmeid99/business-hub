const PUBLIC_KEY = "ThijL73HGDMaw4i7L";
const SERVICE = "service_gynfgdb";
const TEMPLATE = "template_1usngjq";

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
