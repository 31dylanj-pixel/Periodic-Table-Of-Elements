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
   FORMAT ELECTRON CONFIGURATION
========================================= */

function formatElectronConfiguration(
    configuration
) {

    if (!configuration) {
        return "—";
    }

    return configuration
        .replace(/(\d)([spdf])(\d+)/g, "$1$2$3");
}


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

function getCommonIons(
    element
) {

    /*
       Some elements have particularly
       recognizable common ions.

       For transition metals and other
       variable-valence elements, the API's
       oxidation states are used as a
       reasonable representation.
    */

    const commonIons = {

        H: "H⁺",

        Li: "Li⁺",
        Be: "Be²⁺",

        Na: "Na⁺",
        Mg: "Mg²⁺",

        Al: "Al³⁺",

        K: "K⁺",
        Ca: "Ca²⁺",

        Sc: "Sc³⁺",
        Ti: "Ti²⁺, Ti³⁺, Ti⁴⁺",
        V: "V²⁺, V³⁺, V⁴⁺, V⁵⁺",
        Cr: "Cr²⁺, Cr³⁺",
        Mn: "Mn²⁺, Mn⁴⁺, Mn⁷⁺",
        Fe: "Fe²⁺, Fe³⁺",
        Co: "Co²⁺, Co³⁺",
        Ni: "Ni²⁺, Ni³⁺",
        Cu: "Cu⁺, Cu²⁺",
        Zn: "Zn²⁺",

        Ga: "Ga³⁺",
        Ge: "Ge²⁺, Ge⁴⁺",
        As: "As³⁻, As³⁺, As⁵⁺",
        Se: "Se²⁻, Se⁴⁺, Se⁶⁺",

        Rb: "Rb⁺",
        Sr: "Sr²⁺",
        Y: "Y³⁺",
        Zr: "Zr⁴⁺",
        Nb: "Nb³⁺, Nb⁵⁺",
        Mo: "Mo³⁺, Mo⁶⁺",
        Tc: "Tc⁴⁺, Tc⁷⁺",
        Ru: "Ru³⁺, Ru⁴⁺",
        Rh: "Rh³⁺",
        Pd: "Pd²⁺, Pd⁴⁺",
        Ag: "Ag⁺",
        Cd: "Cd²⁺",

        In: "In⁺, In³⁺",
        Sn: "Sn²⁺, Sn⁴⁺",
        Sb: "Sb³⁺, Sb⁵⁺",
        Te: "Te²⁻, Te⁴⁺, Te⁶⁺",

        Cs: "Cs⁺",
        Ba: "Ba²⁺",

        La: "La³⁺",
        Ce: "Ce³⁺, Ce⁴⁺",
        Pr: "Pr³⁺, Pr⁴⁺",
        Nd: "Nd³⁺",
        Pm: "Pm³⁺",
        Sm: "Sm²⁺, Sm³⁺",
        Eu: "Eu²⁺, Eu³⁺",
        Gd: "Gd³⁺",
        Tb: "Tb³⁺, Tb⁴⁺",
        Dy: "Dy³⁺",
        Ho: "Ho³⁺",
        Er: "Er³⁺",
        Tm: "Tm²⁺, Tm³⁺",
        Yb: "Yb²⁺, Yb³⁺",
        Lu: "Lu³⁺",

        Hf: "Hf⁴⁺",
        Ta: "Ta⁵⁺",
        W: "W⁴⁺, W⁶⁺",
        Re: "Re⁴⁺, Re⁶⁺, Re⁷⁺",
        Os: "Os⁴⁺, Os⁸⁺",
        Ir: "Ir³⁺, Ir⁴⁺",
        Pt: "Pt²⁺, Pt⁴⁺",
        Au: "Au⁺, Au³⁺",
        Hg: "Hg₂²⁺, Hg²⁺",

        Tl: "Tl⁺, Tl³⁺",
        Pb: "Pb²⁺, Pb⁴⁺",
        Bi: "Bi³⁺, Bi⁵⁺",

        Po: "Po²⁺, Po⁴⁺",
        At: "At⁻",

        Fr: "Fr⁺",
        Ra: "Ra²⁺",

        Ac: "Ac³⁺",
        Th: "Th⁴⁺",
        Pa: "Pa⁴⁺, Pa⁵⁺",
        U: "U³⁺, U⁴⁺, U⁵⁺, U⁶⁺",
        Np: "Np³⁺, Np⁴⁺, Np⁵⁺, Np⁶⁺",
        Pu: "Pu³⁺, Pu⁴⁺, Pu⁵⁺, Pu⁶⁺",
        Am: "Am³⁺",
        Cm: "Cm³⁺",
        Bk: "Bk³⁺, Bk⁴⁺",
        Cf: "Cf³⁺",
        Es: "Es³⁺",
        Fm: "Fm³⁺",
        Md: "Md²⁺, Md³⁺",
        No: "No²⁺, No³⁺",
        Lr: "Lr³⁺",

        Rf: "Rf⁴⁺",
        Db: "Db⁵⁺",
        Sg: "Sg⁶⁺",
        Bh: "Bh⁷⁺",
        Hs: "Hs⁸⁺",
        Mt: "Mt³⁺",
        Ds: "Ds²⁺, Ds⁴⁺",
        Rg: "Rg⁺, Rg³⁺",
        Cn: "Cn²⁺",
        Nh: "Nh⁺, Nh³⁺",
        Fl: "Fl²⁺, Fl⁴⁺",
        Mc: "Mc⁺, Mc³⁺",
        Lv: "Lv²⁺, Lv⁴⁺",
        Ts: "Ts⁻",
        Og: "None"

    };

    return commonIons[element.symbol]
        || "None";
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
       "detail-electron-configuration"
   ).textContent =
       formatElectronConfiguration(
           details.electron_configuration
       );
   
   
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
        "detail-discovered-by"
    ).textContent =
        details.discovered_by
        || "Unknown";


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
