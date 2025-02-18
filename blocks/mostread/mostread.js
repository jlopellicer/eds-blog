export default async function decorate(block) {
    //var result = await fetchData();
    //buildCards(block, result.cards);
    block.innerHTML = `<div class="block-carousel">
    
    <!-- Slider main container -->
    <div class="swiper swiper-cifras swiper-initialized swiper-horizontal swiper-backface-hidden" style="padding: 0px 709px;">
        <div class="swiper-wrapper" id="swiper-wrapper-9a2c6b16e4a62cdb" aria-live="off" style="transition-duration: 0ms; transform: translate3d(-2238px, 0px, 0px); transition-delay: 0ms;">
            <div class="swiper-slide analyticSliderCifrasTitle" role="group" aria-label="1 / 4" style="width: 1119px;">
                <div class="block-text">
                    <div class="big-text">
                        <span class="">170.000</span>
                    </div>
                    <div class="medium-text">
                        <span>MWh</span>
                    </div>
                </div>
                <div class="information-block">
                    
                    <div class="ac-title ac-typeTagL">


    
</div>
                    
                    <div class="ac-description ac-typeBodyM">
        
        <p>en ahorros energéticos</p>

       



    
</div>
                </div>
            </div>
            
        
            <div class="swiper-slide analyticSliderCifrasTitle swiper-slide-prev" role="group" aria-label="2 / 4" style="width: 1119px;">
                <div class="block-text">
                    <div class="big-text">
                        <span class="">5.500</span>
                    </div>
                    <div class="medium-text">
                        <span></span>
                    </div>
                </div>
                <div class="information-block">
                    
                    <div class="ac-title ac-typeTagL">


    
</div>
                    
                    <div class="ac-description ac-typeBodyM">
        
        <p>Instalaciones en todo el mundo en las que realizamos la gestión energética</p>

       



    
</div>
                </div>
            </div>
            
        
            <div class="swiper-slide analyticSliderCifrasTitle swiper-slide-active" role="group" aria-label="3 / 4" style="width: 1119px;">
                <div class="block-text">
                    <div class="big-text">
                        <span class="">50.000</span>
                    </div>
                    <div class="medium-text">
                        <span></span>
                    </div>
                </div>
                <div class="information-block">
                    
                    <div class="ac-title ac-typeTagL">


    
</div>
                    
                    <div class="ac-description ac-typeBodyM">
        
        <p>puntos de iluminación de Ayuntamientos y plantas industriales.</p>

       



    
</div>
                </div>
            </div>
            
        
            <div class="swiper-slide analyticSliderCifrasTitle swiper-slide-next" role="group" aria-label="4 / 4" style="width: 1119px;">
                <div class="block-text">
                    <div class="big-text">
                        <span class="">17.000</span>
                    </div>
                    <div class="medium-text">
                        <span></span>
                    </div>
                </div>
                <div class="information-block">
                    
                    <div class="ac-title ac-typeTagL">


    
</div>
                    
                    <div class="ac-description ac-typeBodyM">
        
        <p>toneladas de CO2 evitadas gracias a soluciones de eficiencia energética</p>

       



    
</div>
                </div>
            </div>
            
        </div>
         <!-- If we need pagination -->
        <div class="swiper-pagination swiper-pagination-cifras"></div>  
    
            <!-- If we need scrollbar -->
        <div class="container">
            <div class="swiper-scrollbar swiper-scrollbar-cifras swiper-scrollbar-horizontal"><div class="swiper-scrollbar-drag" style="transform: translate3d(447.5px, 0px, 0px); transition-duration: 0ms; width: 223.75px;"></div></div>
            <div class="buttons-swipper analyticSliderCifras">
                <div class="swiper-button-prev swiper-button-prev-cifras" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-9a2c6b16e4a62cdb" aria-disabled="false">
                    <span class="icon-ac-arrow-left icon-ac"></span>
                </div>
                <div class="swiper-button-next swiper-button-next-cifras" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-9a2c6b16e4a62cdb" aria-disabled="false">
                    <span class="icon-ac-arrow-right icon-ac"></span>
                </div>
            </div>
            
        </div>
    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
   
</div>`
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