export default async function decorate(block) {
    var result = await fetchData();
    buildCards(block, result.cards);
}

async function fetchData() {
    //TODO: Return from fetch/XHR
    var result = {
        "cards": [
            {
                "icon" : "",
                "image": "https://soluciones.acciona-energia.com/content/accionaenergia/master/es/hogares/_jcr_content/root/container/acc_products_copy/image-1.coreimg.png/1725526119929/luz-renovable.png",
                "title": "title 1",
                "excerpt": "excerpt",
                "link": "https://google.es/1"
            },
            {
                "icon" : "",
                "image": "https://soluciones.acciona-energia.com/content/accionaenergia/master/es/hogares/_jcr_content/root/container/acc_products_copy/image-2.coreimg.png/1725526113829/termostato.png",
                "title": "title 2",
                "excerpt": "excerpt",
                "link": "https://google.es/2"
            },
            {
                "icon" : "",
                "image": "https://soluciones.acciona-energia.com/content/accionaenergia/master/es/hogares/_jcr_content/root/container/acc_products_copy/image-1.coreimg.png/1725526119929/luz-renovable.png",
                "title": "title 3",
                "excerpt": "excerpt",
                "link": "https://google.es/3"
            },
            {
                "icon" : "",
                "image": "https://soluciones.acciona-energia.com/content/accionaenergia/master/es/hogares/_jcr_content/root/container/acc_products_copy/image-2.coreimg.png/1725526113829/termostato.png",
                "title": "title 4",
                "excerpt": "excerpt",
                "link": "https://google.es/4"
            },
            {
                "icon" : "",
                "image": "https://soluciones.acciona-energia.com/content/accionaenergia/master/es/hogares/_jcr_content/root/container/acc_products_copy/image-2.coreimg.png/1725526113829/termostato.png",
                "title": "title 5",
                "excerpt": "excerpt",
                "link": "https://google.es/5"
            }
        ]
    }

    return result;
}

function buildCards(block, result) {
    var container = document.createElement("div");
    container.classList.add("mostread-cardlist")
    for(var i = 0; i < result.length; i++) {
        container.appendChild(buildCard(result[i]));
    }
    block.appendChild(container);
}
function buildCard(card) {
    console.log(`Processing ${card.title}`)
    var cardContainer = document.createElement("div");
    cardContainer.classList.add("card");

    var cardImage = document.createElement("img");
    cardImage.setAttribute("src", card.image);
    cardImage.setAttribute("alt", card.title);

    var cardTitle = document.createElement("h2");
    cardTitle.innerText = card.title;

    var cardExcerpt = document.createElement("p");
    cardExcerpt.innerText = card.excerpt;

    var button = document.createElement("a");
    button.setAttribute("href", card.link);
    button.innerText = "Seguir leyendo";

    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardExcerpt);
    cardContainer.appendChild(button);
    return cardContainer;
}