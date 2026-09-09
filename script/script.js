window.addEventListener("load", start, false);

function start() {
    //button about company
    var buttonNavigateAboutCompanySection = document.getElementById("id-div-onclick-about");
    buttonNavigateAboutCompanySection.addEventListener("click", FnButtonNavigateAboutCompanySection, false);
    //button products
    var buttonNavigateProductsSection = document.getElementById("id-div-onclick-products");
    buttonNavigateProductsSection.addEventListener("click", FnButtonNavigateProductsSection, false);
    //button services
    var buttonNavigateServicesSection = document.getElementById("id-div-onclick-services");
    buttonNavigateServicesSection.addEventListener("click", FnButtonNavigateServicesSection, false);
    //button contact us
    var buttonNavigateContactUsSection = document.getElementById("id-div-onclick-contact-us");
    buttonNavigateContactUsSection.addEventListener("click", FnButtonNavigateContactUsSection, false);
}

//function button about company
function FnButtonNavigateAboutCompanySection() {
    const target = document.getElementById("id-section-about-company");
    const offset = 130;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

//function button products
function FnButtonNavigateProductsSection() {
    const target = document.getElementById("id-section-products");
    const offset = 130;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

//function button services
function FnButtonNavigateServicesSection() {
    const target = document.getElementById("id-section-services");
    const offset = 130;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

//function buton contact us
function FnButtonNavigateContactUsSection() {
    const target = document.getElementById("id-section-contact-us");
    const offset = 130;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}