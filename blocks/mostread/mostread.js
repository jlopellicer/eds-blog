export default async function decorate(block) {
    //var result = await fetchData();
    //buildCards(block, result.cards);
    block.innerHTML = `<div class="acc-products aem-GridColumn aem-GridColumn--default--12">

     
    


 
 <div class="container">
     <div class="block-text-sup">
          <div class="ac-pretitle">
        
        <p><b>DESCUBRE NUESTRO BLOG</b></p>

       



    
</div>
          <div class="ac-title"><h2 class="ac-headline-h2">Lo más leído este mes</h2>


    
</div>
      </div>
      <div class="block-generic-card num-item- ">
          
               <div class="single-card">
                    <div class="info-card">
                         
                         <div class="bg-image">
<div data-cmp-is="image" data-cmp-src="https://soluciones.acciona-energia.com/content/accionaenergia/master/es/hogares/_jcr_content/root/container/acc_products_copy/image-1.coreimg{.width}.png/1725526119929/luz-renovable.png" data-asset-id="70d69c0a-1230-4eea-800d-30077d47462e" data-cmp-filereference="/content/dam/accionaenergia/home/Luz renovable.png" id="image-55c2bdf1f1" data-cmp-hook-image="imageV3" class="cmp-image" itemscope="" itemtype="http://schema.org/ImageObject">
    
        <img src="https://soluciones.acciona-energia.com/content/accionaenergia/master/es/hogares/_jcr_content/root/container/acc_products_copy/image-1.coreimg.png/1725526119929/luz-renovable.png" loading="lazy" class="cmp-image__image" itemprop="contentUrl" width="6720" height="7432" alt="Home Bussines">
    
    
    
</div>

    

</div>
                         <div class="icons-block">
                              <span class="icon-ac-lightbulb-ecology icon-ac "></span>
                         </div>
          
                         
                         <div class="ac-pretitle ac-typeTagS">


    
</div>
                         
                         <div class="ac-title"><h3 class="ac-headline-h3">Luz renovable a un precio competitivo</h3>


    
</div>
                         
                         <div class="ac-description ac-typeBodyM">
        
        <p>Te ofrecemos las mejores tarifas de luz personalizadas y sin permanencia.</p>

       



    
</div>
                         
                         <div class="ac-buttons">

     <a href="/hogares/luz" title="" target="_self" class="ac-btn ac-btn-red ac-border-red ac-color-white">
          <span>descubrir más</span>
          <span class="icon-ac-arrow-up icon-ac"></span>
     </a>




    
</div>
                    </div>
               </div>
          
          
         
      
          
               <div class="single-card">
                    <div class="info-card">
                         
                         <div class="bg-image">
<div data-cmp-is="image" data-cmp-src="https://soluciones.acciona-energia.com/content/accionaenergia/master/es/hogares/_jcr_content/root/container/acc_products_copy/image-2.coreimg{.width}.png/1725526113829/termostato.png" data-asset-id="814aeb6e-9004-40e9-a521-07c554592f91" data-cmp-filereference="/content/dam/accionaenergia/home/Termostato.png" id="image-86d71419f7" data-cmp-hook-image="imageV3" class="cmp-image" itemscope="" itemtype="http://schema.org/ImageObject">
    
        <img src="https://soluciones.acciona-energia.com/content/accionaenergia/master/es/hogares/_jcr_content/root/container/acc_products_copy/image-2.coreimg.png/1725526113829/termostato.png" loading="lazy" class="cmp-image__image" itemprop="contentUrl" width="1860" height="1211" alt="Home Aerotermia">
    
    
    
</div>

    

</div>
                         <div class="icons-block">
                              <span class="icon-ac-aerotermia icon-ac "></span>
                         </div>
          
                         
                         <div class="ac-pretitle ac-typeTagS">


    
</div>
                         
                         <div class="ac-title"><h3 class="ac-headline-h3">Aerotermia, la climatización más eficiente</h3>


    
</div>
                         
                         <div class="ac-description ac-typeBodyM">
        
        <p>Calefacción, agua caliente y refrigeración los 365 días del año.</p>

       



    
</div>
                         
                         <div class="ac-buttons">

     <a href="/hogares/aerotermia" title="" target="_self" class="ac-btn ac-btn-red ac-border-red ac-color-white">
          <span>DESCUBRIR MÁS</span>
          <span class="icon-ac-arrow-up icon-ac"></span>
     </a>




    
</div>
                    </div>
               </div>
          
          
         
      </div>
 </div>
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