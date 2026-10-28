
window.onscroll = function() {scrollFunction()};



function scrollFunction() {
    var Full_header =  document.getElementById("Full_header")
    var Title_header =  document.getElementById("Title_header")
    var Sub_header = document.getElementById("Sub_header");
    var sticky = Sub_header.offsetTop;

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        Full_header.style.display = "flex";
        Title_header.style.fontSize = "20px";
        Title_header.style.height = "80px";
        Title_header.style.lineHeight = "35px";
        Title_header.style.borderRadius = "10px";
        Title_header.style.width = "200px";
    } else {
        Full_header.style.display = "block";
        Title_header.style.fontSize = "55px";
        Title_header.style.height = "150px";
        Title_header.style.lineHeight = "150px";
        Title_header.style.borderRadius = "0";
        Title_header.style.width = "96%";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    chargerArticles();
});

async function chargerArticles(langue) {
    const blocks_art = document.getElementsByClassName("art_block");

    console.log("Langue reçue par la fonction :", langue);

    if (typeof langue === "undefined"){
       langue = "en"
    } 

    for (const block_art of blocks_art) {
        const id = block_art.id;

        try {
            const urlTxt = `Exemples_art/${id}/${id}_${langue}.txt`;
            const response = await fetch(urlTxt);
            const text = await response.text();

            block_art.innerHTML = `<img class="art_exemple_img" src="Exemples_art/${id}/${id}.jpeg" alt="${id}"><p class="art_exemple_text">${text}</p>`;

        } catch (error) {
            block_art.innerHTML = `<p style="color: red;">Erreur de chargement pour ${id}</p>`;
        }
    }
}

const traductions = {
    fr: {
        Welcome: "Bienvenue",
        Mobility: "Mobilités Internationales",
        Engineering: "Ingénieurie",
        Engagement: "Engagement Civique",
        Activities: "Autres Activités",
        Painting: "Peintures / Dessins:",
        e_portfolio: "Mon e-portfolio",
        Career: "Carrière",
        PastMobility: "Mes mobilités internationales passées :",
        FutureMobility: "Mes mobilités internationales futures et projets de mobilités :",
        LiMob1: "Été 2025: Japon: Tokyo, Kyoto and Okinawa",
        LiMob2: "Printemps 2025: Grèce: Athènes",
        LiMob3: "Été 2024: ÉTats-Unis: Côte ouest",
        LiMob4: "Janvier 2024: États-Unis: J'ai participé à un échange à Phoenix, Arizona",
        LiMob5: "2023: Italie: Rome",
        LiMob6: "2022: Portugal: Lisbonne",
        LiMob7: "2016: Royaume-Unis: Londre",
        LiMob_1: "Été 2027: je souhaite participer au stage de 7 semaines au Japon proposé en LV2",
        LiEng1: "Septembre 2026 à aujourd'hui: filière SN de l'école d'ingénieur ENSEEIHT à Toulouse, France",
        LiEng2: "Septembre 2024 à Juin 2026: Classes préparatoires aux grandes écoles, PCSI-PSI au Lycée Montaigne, Bordeaux, France"
    },
    en: {
        Welcome: "Welcome",
        Mobility: "International Mobility",
        Engineering: "Engineering Course",
        Engagement: "Civic Engagement",
        Activities: "Other Activities",
        Painting: "Painting / Drawing:",
        e_portfolio: "My e-portfolio",
        Career: "Career Development",
        PastMobility: "My past international mobilities :",
        FutureMobility: "My future or projects of international mobilities :",
        LiMob1: "Summer 2025: Japan: visited Tokyo, Kyoto and Okinawa",
        LiMob2: "Spring 2025: Greece: visited Athens",
        LiMob3: "Summer 2024: USA: visited the west coast",
        LiMob4: "January 2024: USA: participated in an exchange in Phoenix Arizona",
        LiMob5: "2023: Italie: visited Rome",
        LiMob6: "2022: Portugal: visited Lisboa",
        LiMob7: "2016: UK: visited London",
        LiMob_1: "Summer 2027: want to participate in the 7 weeks stage in Japan",
        LiEng1: "September 2026 to now: Computer Science at ENSEEIHT engineering school in Toulouse, France",
        LiEng2: "September 2024 to June 2026: Preparation classes to Engineering Schools, PCSI-PSI at Lycée Montaigne, Bordeaux, France"
    }
};

function changerLangueDynamique(langue) {

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(element => {
        const cle = element.getAttribute("data-i18n");
        if (traductions[langue] && traductions[langue][cle]) {
            element.textContent = traductions[langue][cle];
        }
    });
}
