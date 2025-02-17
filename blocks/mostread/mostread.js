export default async function decorate(block) {
    var result = await fetchData();
    buildCards(block, result);
    console.log(result);
}

async function fetchData() {
    //TODO: Return from fetch/XHR
    var result = {
        "cards": [
            {
                "logo" : "",
                "image": "https://soluciones.acciona-energia.com/content/dam…gares/home/ACCIONAEnergi%CC%81a_Home_placas_2.png",
                "title": "title 1",
                "excerpt": "excerpt",
                "link": "https://google.es/1"
            },
            {
                "logo" : "",
                "image": "https://soluciones.acciona-energia.com/content/acc…age-1.coreimg.png/1725526119929/luz-renovable.png",
                "title": "title 2",
                "excerpt": "excerpt",
                "link": "https://google.es/2"
            },
            {
                "logo" : "",
                "image": "https://soluciones.acciona-energia.com/content/dam…gares/home/ACCIONAEnergi%CC%81a_Home_placas_2.png",
                "title": "title 3",
                "excerpt": "excerpt",
                "link": "https://google.es/3"
            },
            {
                "logo" : "",
                "image": "https://soluciones.acciona-energia.com/content/acc…age-1.coreimg.png/1725526119929/luz-renovable.png",
                "title": "title 4",
                "excerpt": "excerpt",
                "link": "https://google.es/4"
            }
        ]
    }

    return result;
}

function buildCards(block, result) {
    var container = document.createElement("div");
    container.classList.add("mostread-cardlist")
    for(var i = 0; i < result.length; i++) {
        buildCard(container, result[i]);
    }
    block.appendChild(container);
}
function buildCard(container, card) {
    var cardContainer = document.createElement("div");
    cardContainer.classList.add("card");

    var cardImage = document.createElement("img");
    cardImage.setAttribute("src", card.image);

    var cardTitle = document.createElement("h2");
    cardTitle.innerText = card.title;

    var cardExcerpt = document.createElement("p");
    cardExcerpt.innerText = card.excerpt;

    var button = document.createElement("a");
    button.setAttribute("href", card.link);

    cardContainer.appendChild(cardImage).appendChild(cardTitle).appendChild(cardExcerpt).appendChild(button);
    container.appendChild(cardContainer)
}