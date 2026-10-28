
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
        Career: "Carrière"
    },
    en: {
        Welcome: "Welcome",
        Mobility: "International Mobility",
        Engineering: "Engineering Course",
        Engagement: "Civic Engagement",
        Activities: "Other Activities",
        Painting: "Painting / Drawing:",
        e_portfolio: "My e-portfolio",
        Career: "Career Development"
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