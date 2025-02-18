export default async function decorate(block) {
    //var result = await fetchData();
    //buildCards(block, result.cards);
    block.append(`<div class="acc-benefits aem-GridColumn aem-GridColumn--default--12">
    




<div class="bg-grey">
    <div class="container">
        <div class="block-text-sup">
            <div class="acc-subtitle ac-typeTagS">
        
        <p><b>EMPRESA LÍDER EN EFICIENCIA ENERGÉTICA</b></p>

       



    
</div>
            <div class="ac-title"><h2 class="ac-headline-h2">¿Por qué con ACCIONA Energía?</h2>


    
</div>
            <div class="acc-description">
        
        <p>Somos expertos en optimizar la gestión energética de empresas. </p>

       



    
</div>
        </div>
        
            <div class="block-generic">
                <div class="block-single">
                    <div class="block-info analyticBenefitsCta1">
                    
                        <div class="block-img">
                            <img src="https://soluciones.acciona-energia.com/content/dam/accionaenergia/empresas/eficiencia-energetica/ACCIONA%20ENERGÍA_EXTREMADURA%20I-II-II%20(45)%20copia%20(3).jpg">
                        </div>
                        
                        
                        <div class="ac-typeTagL">
        
        <p><b>Más de 30 años de experiencia</b></p>

       



    
</div>
                        
                        <div class="ac-typeBodyM">
        
        <p>Gracias a nuestra amplia experiencia, somos el mejor aliado para tu empresa.</p>

       



    
</div>
                    </div>
                    
                </div>

            
                <div class="block-single">
                    <div class="block-info analyticBenefitsCta1">
                    
                        <div class="block-img">
                            <img src="https://soluciones.acciona-energia.com/content/dam/accionaenergia/empresas/eficiencia-energetica/2021-10-28%20Acciona-Schneider%20%20013.jpg">
                        </div>
                        
                        
                        <div class="ac-typeTagL">
        
        <p><b>Ahorros asegurados</b></p>

       



    
</div>
                        
                        <div class="ac-typeBodyM">
        
        <p>Garantizamos el ahorro energético desarrollando el proyecto integral de eficiencia energética.</p>

       



    
</div>
                    </div>
                    
                </div>

            
                <div class="block-single">
                    <div class="block-info analyticBenefitsCta1">
                    
                        <div class="block-img">
                            <img src="https://soluciones.acciona-energia.com/content/dam/accionaenergia/empresas/eficiencia-energetica/InstalacionesHospital%20032.jpg">
                        </div>
                        
                        
                        <div class="ac-typeTagL">
        
        <p><b>Gran equipo de expertos en eficiencia energética</b></p>

       



    
</div>
                        
                        <div class="ac-typeBodyM">
        
        <p>Elaboramos un análisis de la situación y nos comprometemos, por contrato, a alcanzar los objetivos de ahorro energético fijados.</p>

       



    
</div>
                    </div>
                    
                </div>

            </div>
        
    </div>
</div></div>`);
}

async function fetchData() {
    //TODO: Return from fetch/XHR
    var result = {
        "cards": [
            {
                "logo" : "",
                "image": "https://soluciones.acciona-energia.com/content/accionaenergia/master/es/hogares/_jcr_content/root/container/acc_products_copy/image-1.coreimg.png/1725526119929/luz-renovable.png",
                "title": "title 1",
                "excerpt": "excerpt",
                "link": "https://google.es/1"
            },
            {
                "logo" : "",
                "image": "https://soluciones.acciona-energia.com/content/accionaenergia/master/es/hogares/_jcr_content/root/container/acc_products_copy/image-2.coreimg.png/1725526113829/termostato.png",
                "title": "title 2",
                "excerpt": "excerpt",
                "link": "https://google.es/2"
            },
            {
                "logo" : "",
                "image": "https://soluciones.acciona-energia.com/content/accionaenergia/master/es/hogares/_jcr_content/root/container/acc_products_copy/image-1.coreimg.png/1725526119929/luz-renovable.png",
                "title": "title 3",
                "excerpt": "excerpt",
                "link": "https://google.es/3"
            },
            {
                "logo" : "",
                "image": "https://soluciones.acciona-energia.com/content/accionaenergia/master/es/hogares/_jcr_content/root/container/acc_products_copy/image-2.coreimg.png/1725526113829/termostato.png",
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