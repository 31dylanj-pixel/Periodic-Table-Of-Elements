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

function openElementDetails(element) {

    const details = elementDetails[element.symbol];

    if (!details) {
        console.warn(
            `No detailed information available for ${element.name}`
        );
        return;
    }

    console.log(
        `Opening details for ${element.name}`
    );

}


/* =========================================
   ELEMENT CLICK HANDLER
========================================= */

document.addEventListener("click", event => {

    const elementCard =
        event.target.closest(".element");

    if (!elementCard) return;

    const symbol =
        elementCard.querySelector(".symbol")?.textContent;

    if (!symbol) return;

    const element =
        elements.find(item =>
            item.symbol === symbol
        );

    if (!element) {

        const fBlockElement =
            [...lanthanides, ...actinides]
                .find(item =>
                    item.symbol === symbol
                );

        if (fBlockElement) {
            openElementDetails(fBlockElement);
        }

        return;
    }

    openElementDetails(element);

});
