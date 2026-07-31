// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.


/**********************************************************************
 * Google Analytics 4
 **********************************************************************/


document.addEventListener("DOMContentLoaded", () => {


// Menu - Entre em Contato

const contactLink = document.querySelector(".menu-lista-contato");

if (contactLink) {
    contactLink.addEventListener("click", () => {
        gtag("event", "click", {
            page_location: window.location.href,
            element_name: "entre_em_contato",
            element_group: "menu"
        });
    });
}


// Menu - Download PDF

const downloadLink = document.querySelector(".menu-lista-download");

if (downloadLink) {
    downloadLink.addEventListener("click", () => {
        gtag("event", "file_download", {
            page_location: window.location.href,
            element_name: "download_pdf",
            element_group: "menu"
        });
    });
}


// Analysis Page - Cards

const analysisCards = document.querySelectorAll(".card-montadoras");

analysisCards.forEach((card) => {
    card.addEventListener("click", () => {
        gtag("event", "click", {
            page_location: window.location.href,
            element_name: card.dataset.name.toLowerCase(),
            element_group: "ver_mais"
        });
    });
});



// About Page - Contact Form

const contactForm = document.querySelector(".contato");

if (contactForm) {

    let formStarted = false;

    // Form Start
    
    contactForm.addEventListener("input", () => {

        if (!formStarted) {

            formStarted = true;

            gtag("event", "form_start", {
                page_location: window.location.href,
                form_id: contactForm.id,
                form_name: contactForm.name,
                form_destination: contactForm.action
            });

        }

    });


    // Form Submit

    const submitButton = contactForm.querySelector('button[type="submit"]');

    contactForm.addEventListener("submit", () => {

        gtag("event", "form_submit", {
            page_location: window.location.href,
            form_id: contactForm.id,
            form_name: contactForm.name,
            form_destination: contactForm.action,
            form_submit_text: submitButton.textContent.trim()
        });

    });


    // View Form Success

    const observer = new MutationObserver(() => {

        if (document.body.classList.contains("lightbox-open")) {

            gtag("event", "view_form_success", {
                page_location: window.location.href,
                form_id: contactForm.id,
                form_name: contactForm.name
            });

        }

    });

    observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["class"]
    });

}





});