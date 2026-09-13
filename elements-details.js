/* =========================================
   ELEMENT DETAILS
   ========================================= */

/*
    Element data is loaded from:
    PeriodicTableOfElements.org

    The API provides data for all 118 elements.
*/


let detailedElements = {};


/* =========================================
   CATEGORY NAMES
========================================= */

const categoryNames = {

    "alkali-metal":
        "Alkali Metal",

    "alkaline-earth-metal":
        "Alkaline Earth Metal",

    "transition-metal":
        "Transition Metal",

    "post-transition-metal":
        "Post-transition Metal",

    "metalloid":
        "Metalloid",

    "nonmetal":
        "Nonmetal",

    "halogen":
        "Halogen",

    "noble-gas":
        "Noble Gas",

    "lanthanide":
        "Lanthanide",

    "actinide":
        "Actinide",

    "alkali_metal":
        "Alkali Metal",

    "alkaline_earth_metal":
        "Alkaline Earth Metal",

    "transition_metal":
        "Transition Metal",

    "post_transition_metal":
        "Post-transition Metal",

    "noble_gas":
        "Noble Gas"

};


/* =========================================
   MODAL ELEMENTS
========================================= */

const elementModal =
    document.getElementById("element-modal");

const elementModalClose =
    document.getElementById(
        "element-modal-close"
    );

const elementModalBackdrop =
    document.querySelector(
        ".element-modal-backdrop"
    );

/* =========================================
   FORMAT SHELLS
========================================= */

function formatShells(shells) {

    if (!shells) {
        return "—";
    }

    if (Array.isArray(shells)) {
        return shells.join(", ");
    }

    return shells;
}


/* =========================================
   FORMAT NUMBERS
========================================= */

function formatValue(
    value,
    unit = ""
) {

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {
        return "—";
    }

    return `${value}${unit}`;
}


/* =========================================
   FORMAT TEMPERATURE
========================================= */

function kelvinToCelsius(
    kelvin
) {

    if (
        kelvin === null ||
        kelvin === undefined
    ) {
        return "—";
    }

    const celsius =
        kelvin - 273.15;

    return `${celsius.toFixed(2)} °C`;
}


/* =========================================
   FORMAT DISCOVERY YEAR
========================================= */

function formatDiscoveryYear(
    year
) {

    if (
        year === null ||
        year === undefined
    ) {
        return "—";
    }

    if (year < 0) {
        return `${Math.abs(year)} BCE`;
    }

    return year;
}


/* =========================================
   GET COMMON IONS
========================================= */

function getCommonIons(element) {
    const commonIons = {

        // =========================
        // PERIOD 1
        // =========================

        H: "+1, −1",
        He: "None",


        // =========================
        // PERIOD 2
        // =========================

        Li: "+1",
        Be: "+2",
        B: "None",
        C: "−4",
        N: "−3",
        O: "−2",
        F: "−1",
        Ne: "None",


        // =========================
        // PERIOD 3
        // =========================

        Na: "+1",
        Mg: "+2",
        Al: "+3",
        Si: "None",
        P: "−3",
        S: "−2",
        Cl: "−1",
        Ar: "None",


        // =========================
        // PERIOD 4
        // =========================

        K: "+1",
        Ca: "+2",

        Sc: "+3",
        Ti: "+2, +3, +4",
        V: "+2, +3, +4, +5",
        Cr: "+2, +3",
        Mn: "+2, +3, +4",
        Fe: "+2, +3",
        Co: "+2, +3",
        Ni: "+2, +3",
        Cu: "+1, +2",
        Zn: "+2",

        Ga: "+3",
        Ge: "None",
        As: "−3",
        Se: "−2",
        Br: "−1",
        Kr: "None",


        // =========================
        // PERIOD 5
        // =========================

        Rb: "+1",
        Sr: "+2",

        Y: "+3",
        Zr: "+4",
        Nb: "+3, +5",
        Mo: "+3, +6",
        Tc: "+4, +7",
        Ru: "+2, +3",
        Rh: "+3",
        Pd: "+2, +4",
        Ag: "+1",
        Cd: "+2",

        In: "+1, +3",
        Sn: "+2, +4",
        Sb: "−3",
        Te: "−2",
        I: "−1",
        Xe: "None",


        // =========================
        // PERIOD 6
        // =========================

        Cs: "+1",
        Ba: "+2",

        // Lanthanides
        La: "+3",
        Ce: "+3, +4",
        Pr: "+3",
        Nd: "+3",
        Pm: "+3",
        Sm: "+2, +3",
        Eu: "+2, +3",
        Gd: "+3",
        Tb: "+3, +4",
        Dy: "+3",
        Ho: "+3",
        Er: "+3",
        Tm: "+3",
        Yb: "+2, +3",
        Lu: "+3",

        // Transition metals
        Hf: "+4",
        Ta: "+5",
        W: "+4, +6",
        Re: "+4, +6, +7",
        Os: "+2, +3, +4",
        Ir: "+3, +4",
        Pt: "+2, +4",
        Au: "+1, +3",
        Hg: "+1, +2",

        // Post-transition / p-block
        Tl: "+1, +3",
        Pb: "+2, +4",
        Bi: "+3, +5",
        Po: "+2, +4",
        At: "−1",
        Rn: "None",


        // =========================
        // PERIOD 7
        // =========================

        Fr: "+1",
        Ra: "+2",

        // Actinides
        Ac: "+3",
        Th: "+4",
        Pa: "+4, +5",
        U: "+3, +4, +5, +6",
        Np: "+3, +4, +5, +6",
        Pu: "+3, +4, +5, +6",
        Am: "+3, +4, +5, +6",
        Cm: "+3, +4",
        Bk: "+3, +4",
        Cf: "+3",
        Es: "+3",
        Fm: "+3",
        Md: "+2, +3",
        No: "+2, +3",
        Lr: "+3",

        // Superheavy elements
        Rf: "+4",
        Db: "+5",
        Sg: "+6",
        Bh: "+7",
        Hs: "+8",
        Mt: "None",
        Ds: "None",
        Rg: "None",
        Cn: "+2",
        Nh: "+1, +3",
        Fl: "+2, +4",
        Mc: "None",
        Lv: "+2",
        Ts: "−1",
        Og: "None"
    };

    return commonIons[element.symbol] || "None";
}


/* =========================================
   GET VALENCE ELECTRONS
========================================= */

function getValenceElectrons(
    element
) {

    if (
        element.electrons_per_shell &&
        Array.isArray(
            element.electrons_per_shell
        )
    ) {

        return element.electrons_per_shell[
            element.electrons_per_shell.length - 1
        ];

    }

    return "—";
}


/* =========================================
   LOAD ALL 118 ELEMENTS
========================================= */

async function loadElementData() {

    try {

        const response =
            await fetch(
                "https://api.periodictableofelements.org/elements/"
            );


        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );

        }


        const data =
            await response.json();


        data.forEach(element => {

            detailedElements[
                element.symbol
            ] = element;

        });


        console.log(
            `Loaded ${data.length} elements`
        );


    } catch (error) {

        console.error(
            "Could not load element data:",
            error
        );

    }

}


/* =========================================
   OPEN DETAIL VIEW
========================================= */

function openElementDetails(
    element
) {

    const details =
        detailedElements[
            element.symbol
        ];


    if (!details) {

        console.warn(
            `No detailed data found for ${element.name}`
        );

        return;
    }


    /* -------------------------------------
       BASIC INFORMATION
    ------------------------------------- */

    document.getElementById(
        "detail-atomic-number"
    ).textContent =
        element.number;


    document.getElementById(
        "detail-symbol"
    ).textContent =
        element.symbol;


    document.getElementById(
        "detail-name"
    ).textContent =
        element.name;


    const detailCategory =
       document.getElementById(
           "detail-category"
       );
   
   const category =
       element.category
       || details.category
       || "";
   
   detailCategory.textContent =
       categoryNames[category]
       || category
       || "Element";
   
   detailCategory.className =
       "detail-category";
   
   if (category) {
       detailCategory.classList.add(
           category
       );
   }

    document.getElementById(
       "detail-description"
   ).textContent =
       details.summary || "";

    /* -------------------------------------
       QUICK STATS
    ------------------------------------- */

    document.getElementById(
        "detail-mass"
    ).textContent =
        element.mass;


    document.getElementById(
        "detail-state"
    ).textContent =
        details.state_at_room_temp
        ? capitalize(
            details.state_at_room_temp
        )
        : element.state;


    document.getElementById(
        "detail-period"
    ).textContent =
        element.period
        ?? details.period
        ?? "—";


    document.getElementById(
        "detail-group"
    ).textContent =
        element.group
        ?? details.group_number
        ?? "—";


    /* -------------------------------------
      ELECTRON STRUCTURE
   ------------------------------------- */
   
   document.getElementById(
       "detail-noble-configuration"
   ).textContent =
       details.electron_configuration_semantic
       || "—";


    document.getElementById(
        "detail-shells"
    ).textContent =
        formatShells(
            details.electrons_per_shell
        );


    document.getElementById(
        "detail-valence-electrons"
    ).textContent =
        getValenceElectrons(
            details
        );


    document.getElementById(
        "detail-common-ions"
    ).textContent =
        getCommonIons(
            element
        );


    document.getElementById(
        "detail-electronegativity"
    ).textContent =
        formatValue(
            details.electronegativity,
            ""
        );


    /* -------------------------------------
       ATOMIC PROPERTIES
    ------------------------------------- */

    document.getElementById(
        "detail-atomic-radius"
    ).textContent =
        formatValue(
            details.atomic_radius,
            " pm"
        );


    document.getElementById(
        "detail-ionization-energy"
    ).textContent =
        formatValue(
            details.ionization_energy,
            " kJ/mol"
        );


    document.getElementById(
        "detail-electron-affinity"
    ).textContent =
        formatValue(
            details.electron_affinity,
            " kJ/mol"
        );


    document.getElementById(
        "detail-density"
    ).textContent =
        formatDensity(
            details.density
        );


    /* -------------------------------------
       PHYSICAL PROPERTIES
    ------------------------------------- */

    document.getElementById(
        "detail-melting-point"
    ).textContent =
        formatTemperature(
            details.melting_point
        );


    document.getElementById(
        "detail-boiling-point"
    ).textContent =
        formatTemperature(
            details.boiling_point
        );


    /* -------------------------------------
       DISCOVERY
    ------------------------------------- */

    document.getElementById(
        "detail-discovery-year"
    ).textContent =
        formatDiscoveryYear(
            details.discovery_year
        );


    /* -------------------------------------
       OPEN MODAL
    ------------------------------------- */

    elementModal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

}


/* =========================================
   TEMPERATURE FORMATTER
========================================= */

function formatTemperature(
    value
) {

    if (
        value === null ||
        value === undefined
    ) {

        return "—";

    }


    /*
       API temperatures are provided
       in °C in the element endpoint.
    */

    return `${value} °C`;
}


/* =========================================
   DENSITY FORMATTER
========================================= */

function formatDensity(
    value
) {

    if (
        value === null ||
        value === undefined
    ) {

        return "—";

    }


    /*
       The API uses g/cm³ for most
       solids/liquids and g/L for gases.
    */

    return `${value} g/cm³`;
}


/* =========================================
   CAPITALIZE
========================================= */

function capitalize(
    value
) {

    if (!value) {
        return "—";
    }

    return value.charAt(0).toUpperCase()
        + value.slice(1);

}


/* =========================================
   CLOSE DETAIL VIEW
========================================= */

function closeElementDetails() {

    elementModal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

}


/* =========================================
   ELEMENT CLICK HANDLER
========================================= */

document.addEventListener(
    "click",
    event => {

        const elementCard =
            event.target.closest(
                ".element"
            );


        if (!elementCard) {
            return;
        }


        const symbol =
            elementCard
                .querySelector(
                    ".symbol"
                )
                ?.textContent
                ?.trim();


        if (!symbol) {
            return;
        }


        /*
           Search the main table.
        */

        let element =
            elements.find(
                item =>
                    item.symbol === symbol
            );


        /*
           Search the f-block.
        */

        if (!element) {

            element =
                [
                    ...lanthanides,
                    ...actinides
                ].find(
                    item =>
                        item.symbol === symbol
                );

        }


        if (!element) {
            return;
        }


        openElementDetails(
            element
        );

    }
);


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
            event.key === "Escape"
            &&
            elementModal.classList.contains(
                "active"
            )
        ) {

            closeElementDetails();

        }

    }
);


/* =========================================
   START DATA LOADING
========================================= */

loadElementData();
