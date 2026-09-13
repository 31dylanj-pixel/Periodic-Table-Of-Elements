/* =========================================
   ELEMENT DETAILS
========================================= */

const elementDetails = {

    H: {
        description:
            "Hydrogen is the lightest element and the most abundant element in the universe.",

        electronConfiguration: "1s¹",
        shells: "1",

        electronegativity: "2.20",
        ionizationEnergy: "1312 kJ/mol",
        electronAffinity: "72.8 kJ/mol",

        atomicRadius: "53 pm",
        density: "0.0899 g/L",

        meltingPoint: "−259.16 °C",
        boilingPoint: "−252.87 °C",

        state: "Gas",
        discoveredBy: "Henry Cavendish",
        discoveryYear: "1766"
    },

    He: {
        description:
            "Helium is a colorless, odorless noble gas and the second-lightest element.",

        electronConfiguration: "1s²",
        shells: "2",

        electronegativity: "—",
        ionizationEnergy: "2372 kJ/mol",
        electronAffinity: "—",

        atomicRadius: "31 pm",
        density: "0.1785 g/L",

        meltingPoint: "−272.20 °C",
        boilingPoint: "−268.93 °C",

        state: "Gas",
        discoveredBy: "Pierre Janssen / Norman Lockyer",
        discoveryYear: "1868"
    },

    C: {
        description:
            "Carbon is a versatile nonmetal that forms the basis of many compounds and is essential to life.",

        electronConfiguration: "1s² 2s² 2p²",
        shells: "2, 4",

        electronegativity: "2.55",
        ionizationEnergy: "1086.5 kJ/mol",
        electronAffinity: "121.8 kJ/mol",

        atomicRadius: "70 pm",
        density: "2.267 g/cm³",

        meltingPoint: "3550 °C",
        boilingPoint: "4027 °C",

        state: "Solid",
        discoveredBy: "Known since antiquity",
        discoveryYear: "Ancient"
    },

    Cl: {
        description:
            "Chlorine is a reactive halogen commonly found in compounds such as sodium chloride.",

        electronConfiguration: "1s² 2s² 2p⁶ 3s² 3p⁵",
        shells: "2, 8, 7",

        electronegativity: "3.16",
        ionizationEnergy: "1251.2 kJ/mol",
        electronAffinity: "349 kJ/mol",

        atomicRadius: "99 pm",
        density: "3.214 g/L",

        meltingPoint: "−101.5 °C",
        boilingPoint: "−34.04 °C",

        state: "Gas",
        discoveredBy: "Carl Wilhelm Scheele",
        discoveryYear: "1774"
    }

};


/* =========================================
   ELEMENT DETAIL VIEW
========================================= */

const elementModal =
    document.getElementById("element-modal");

const elementModalClose =
    document.getElementById("element-modal-close");

const elementModalBackdrop =
    document.querySelector(".element-modal-backdrop");


/* =========================================
   CATEGORY NAMES
========================================= */

const categoryNames = {

    "alkali-metal": "Alkali Metal",
    "alkaline-earth-metal": "Alkaline Earth Metal",
    "transition-metal": "Transition Metal",
    "post-transition-metal": "Post-transition Metal",
    "metalloid": "Metalloid",
    "nonmetal": "Nonmetal",
    "halogen": "Halogen",
    "noble-gas": "Noble Gas",
    "lanthanide": "Lanthanide",
    "actinide": "Actinide"

};


/* =========================================
   OPEN DETAIL VIEW
========================================= */

function openElementDetails(element) {

    const details =
        elementDetails[element.symbol];

    if (!details) {

        console.warn(
            `No detailed information available for ${element.name}`
        );

        return;
    }


    /* BASIC INFORMATION */

    document.getElementById(
        "detail-atomic-number"
    ).textContent = element.number;

    document.getElementById(
        "detail-symbol"
    ).textContent = element.symbol;

    document.getElementById(
        "detail-name"
    ).textContent = element.name;

    document.getElementById(
        "detail-category"
    ).textContent =
        categoryNames[element.category]
        || element.category;


    document.getElementById(
        "detail-description"
    ).textContent =
        details.description;


    /* QUICK STATS */

    document.getElementById(
        "detail-mass"
    ).textContent = element.mass;

    document.getElementById(
        "detail-state"
    ).textContent = details.state;

    document.getElementById(
        "detail-period"
    ).textContent =
        element.period ?? "—";

    document.getElementById(
        "detail-group"
    ).textContent =
        element.group ?? "—";


    /* ELECTRONIC STRUCTURE */

    document.getElementById(
        "detail-electron-configuration"
    ).textContent =
        details.electronConfiguration;

    document.getElementById(
        "detail-shells"
    ).textContent =
        details.shells;

    document.getElementById(
        "detail-electronegativity"
    ).textContent =
        details.electronegativity;


    /* ATOMIC PROPERTIES */

    document.getElementById(
        "detail-atomic-radius"
    ).textContent =
        details.atomicRadius;

    document.getElementById(
        "detail-ionization-energy"
    ).textContent =
        details.ionizationEnergy;

    document.getElementById(
        "detail-electron-affinity"
    ).textContent =
        details.electronAffinity;

    document.getElementById(
        "detail-density"
    ).textContent =
        details.density;


    /* PHYSICAL PROPERTIES */

    document.getElementById(
        "detail-melting-point"
    ).textContent =
        details.meltingPoint;

    document.getElementById(
        "detail-boiling-point"
    ).textContent =
        details.boilingPoint;


    /* DISCOVERY */

    document.getElementById(
        "detail-discovered-by"
    ).textContent =
        details.discoveredBy;

    document.getElementById(
        "detail-discovery-year"
    ).textContent =
        details.discoveryYear;


    /* OPEN MODAL */

    elementModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================================
   CLOSE DETAIL VIEW
========================================= */

function closeElementDetails() {

    elementModal.classList.remove("active");

    document.body.style.overflow = "";

}


/* =========================================
   ELEMENT CLICK HANDLER
========================================= */

document.addEventListener("click", event => {

    const elementCard =
        event.target.closest(".element");

    if (!elementCard) return;


    const symbol =
        elementCard
            .querySelector(".symbol")
            ?.textContent
            ?.trim();


    if (!symbol) return;


    /*
       Main-table elements
    */

    let element =
        elements.find(item =>
            item.symbol === symbol
        );


    /*
       F-block elements
    */

    if (!element) {

        element =
            [...lanthanides, ...actinides]
                .find(item =>
                    item.symbol === symbol
                );

    }


    if (!element) return;


    openElementDetails(element);

});


/* =========================================
   CLOSE BUTTON
========================================= */

elementModalClose.addEventListener(
    "click",
    closeElementDetails
);


/* =========================================
   BACKDROP CLICK
========================================= */

elementModalBackdrop.addEventListener(
    "click",
    closeElementDetails
);


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            elementModal.classList.contains("active")
        ) {

            closeElementDetails();

        }

    }
);
