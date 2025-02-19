// add delayed functionality here
var accHeader = {
    init: function() {
        accHeader.event();
    },
    event: function() {
        accHeader.loadLanguagePaths();
        var titlePage = document.querySelector(".acc-navigation .sr-only");
        let navClickMob = document.querySelector(".acc-navigation .header-s .first-desple");
        let titleNavClickMov = navClickMob.querySelector(".title");
        if (titlePage != null) {
            var linkParent = document.querySelectorAll(".acc-navigation .first-list li a");
            let linkHomes = navClickMob.nextElementSibling.querySelectorAll(".ac-typeTagS");
            if (linkHomes.length >= 1) {
                if (titlePage.innerHTML == "home" || titlePage.innerHTML == "homes") {
                    linkParent[0].parentElement.classList.add("active");
                    titleNavClickMov.innerHTML = linkHomes[0].innerHTML;
                } else if (linkHomes.length === 2) {
                    if (titlePage.innerHTML == "company" || titlePage.innerHTML == "business") {
                        linkParent[1].parentElement.classList.add("active");
                        titleNavClickMov.innerHTML = linkHomes[1].innerHTML;
                    }
                } else if (linkHomes.length === 1) {
                    if (titlePage.innerHTML == "company" || titlePage.innerHTML == "business") {
                        linkParent[0].parentElement.classList.add("active");
                        titleNavClickMov.innerHTML = linkHomes[0].innerHTML;
                    }
                } else {
                    titleNavClickMov.innerHTML = linkHomes[0].innerHTML;
                }
            } else {
                linkParent[0].parentElement.classList.add("active");
                titleNavClickMov.innerHTML = linkHomes[0].innerHTML;
            }

        }
        let lenguageClick = document.querySelectorAll(".acc-navigation .lenguage-block");
        for (var x = 0; x < lenguageClick.length; x++) {
            lenguageClick[x].addEventListener("click", function() {
                accHeader.slickDownLengu(this);
            });
        }

        navClickMob.addEventListener("click", function() {
            accHeader.slickDownNavMob(this);
        });
        var blockUlOut = document.querySelectorAll(".datosSegundoHTML ul li ul");
        for (var x = 0; x < blockUlOut.length; x++) {
            let heightLeng = 0;
            for (var y = 0; y < blockUlOut[x].children.length; y++) {
                heightLeng += blockUlOut[x].children[y].clientHeight;
            }
            if (window.matchMedia("(min-width: 1024px)").matches) {
                blockUlOut[x].style.height = heightLeng + "px";
            }
            blockUlOut[x].parentElement.classList.add('nextUl')
        }

        let analyticsDatosSegundoHtml = document.querySelectorAll(".analyticAllHeaderSecund");
        if (analyticsDatosSegundoHtml.length > 0) {
            analyticsDatosSegundoHtml.forEach(element => {
                element.addEventListener("click", (event) => {
                    let $element = $(event.currentTarget);
                    let option = "menu";
                    let linkText = $element.context.textContent.trim();
                    let linkUrl = $element.context.href;
                    let contentType = "LINK";
                    accAnalytic.functionClickAllHeader(linkText, contentType, linkUrl, option);
                });
            });
        }

        let clickUl = document.querySelectorAll(".acc-navigation .header-s .nextUl .icon-ac");
        for (var x = 0; x < clickUl.length; x++) {

            clickUl[x].addEventListener("click", function(event) {
                event.preventDefault();
                event.stopPropagation();
                accHeader.slickDownLinkMob(this);
            });
        }
        let clickMenu = document.querySelector(".acc-navigation .header-s .icon-openMenu")
        clickMenu.addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            accHeader.openMenuMob(this);
        });

    },
    loadLanguagePaths: function() {
        const currentUrl = window.location.href;
        const currentHost = window.location.hostname;

        const links = {
            local: ["http://localhost:4503/content/accionaenergia/master/es/hogares.html", "http://localhost:4503/content/accionaenergia/master/en/hogares.html", "http://localhost:4503/content/accionaenergia/master/pt/empresas.html"],
            aemdev: ["https://aem-dev.soluciones.acciona-energia.com/", "https://aem-dev.solutions.acciona-energia.com/", "https://aem-dev.solucoes.acciona-energia.com/"],
            aemuat: ["https://aem-uat.soluciones.acciona-energia.com/", "https://aem-uat.solutions.acciona-energia.com/", "https://aem-uat.solucoes.acciona-energia.com/"],
            aempre: ["https://aem-pre.soluciones.acciona-energia.com/", "https://aem-pre.solutions.acciona-energia.com/", "https://aem-pre.solucoes.acciona-energia.com/"],
            aempro: ["https://aem-pro.soluciones.acciona-energia.com/", "https://aem-pro.solutions.acciona-energia.com/", "https://aem-pro.solucoes.acciona-energia.com/"],
            pre: ["https://pre.soluciones.acciona-energia.com/", "https://pre.solutions.acciona-energia.com/", "https://pre.solucoes.acciona-energia.com/"],
            pro: ["https://soluciones.acciona-energia.com/", "https://solutions.acciona-energia.com/", "https://solucoes.acciona-energia.com/"]
        };

        let environment;
        if (currentUrl.includes("localhost")) {
            environment = "local";
        } else if (currentHost.startsWith("aem-dev.")) {
            environment = "aemdev";
        } else if (currentHost.startsWith("aem-uat.")) {
            environment = "aemuat";
        } else if (currentHost.startsWith("aem-pre.")) {
            environment = "aempre";
        } else if (currentHost.startsWith("pre.")) {
            environment = "pre";
        } else if (currentHost.startsWith("aem.pro.")) {
            environment = "aempro";
        } else if (currentHost.startsWith("pro.")) {
            environment = "pro";
        } else {
            environment = "pro"; // Default a 'pro' si no se detecta otro entorno
        }

        let navLanguageDesktop = document.querySelector(".acc-navigation .header-l .secondary-block .lenguage-block .lenguage-list").querySelectorAll('li');
        accHeader.navLangFactory(links, environment, navLanguageDesktop);
        let navLanguageMobile = document.querySelector(".acc-navigation .header-s .menu-fixed .secondary-block .lenguage-block .lenguage-list").querySelectorAll('li');
        accHeader.navLangFactory(links, environment, navLanguageMobile);
    },
    navLangFactory: function(links, environment, navLangSelector) {
        navLangSelector.forEach(item => {
            let link = item.querySelector('a');
            if (link != null) {
                switch (link.dataset.navlanguage) {
                    case "es":
                        link.href = links[environment][0];
                        break;
                    case "en":
                        link.href = links[environment][1];
                        break;
                    case "pt":
                        link.href = links[environment][2];
                        break;
                    default:
                        console.warn("Idioma no soportado:", link.dataset.navlanguage);
                }
            }
        });
    },
    openMenuMob: function(button) {
        let parentButton = button.closest(".bg-white");
        if (parentButton.classList[1] == "active") {
            parentButton.classList.remove("active");
        } else {
            parentButton.classList.add("active");
        }
    },
    slickDownLengu: function(button) {
        let classActive = button.classList[1];
        let blockLeng = button.querySelector(".lenguage-list");
        if (classActive != undefined && classActive == "active") {
            button.classList.remove("active")
            blockLeng.style.height = 0 + "px";
        } else {
            button.classList.add("active");
            let listLeng = button.querySelectorAll("li");
            let heightLeng = 0;
            for (var x = 0; x < listLeng.length; x++) {
                heightLeng += listLeng[x].clientHeight;
            }
            blockLeng.style.height = heightLeng + "px";
        }
    },
    slickDownNavMob: function(button) {
        let classActive = button.classList[2];
        let blockLeng = document.querySelector(".acc-navigation .header-s .first-block-header-s");
        if (classActive != undefined && classActive == "active") {
            button.classList.remove("active")
            button.nextElementSibling.style.height = 0 + "px";
        } else {
            button.classList.add("active");
            let listLeng = document.querySelectorAll(".header-s .first-block-header-s li");
            let heightLeng = 0;
            for (var x = 0; x < listLeng.length; x++) {
                heightLeng += listLeng[x].clientHeight;
            }
            button.nextElementSibling.style.height = heightLeng + "px";
        }
    },
    slickDownLinkMob: function(button) {
        let classActive = button.parentElement.classList[2];
        let blockLink = button.parentElement.nextElementSibling;

        if (classActive != undefined && classActive == "active") {
            button.parentElement.classList.remove("active")
            blockLink.style.height = 0 + "px";
        } else {
            button.parentElement.classList.add("active");
            let listLeng = button.parentElement.nextElementSibling.children;
            let heightLeng = 0;
            for (var x = 0; x < listLeng.length; x++) {
                heightLeng += listLeng[x].clientHeight;
            }
            blockLink.style.height = heightLeng + "px";
            return false;

        }
    }
}

var accCifras={
    init:function(){
        accCifras.event(); 
        
    },
    event:function(){
        let marginContainer=document.querySelector(".acc-cifras .container");
        let padding=document.querySelector(".acc-cifras .swiper");
        padding.style.padding = "0 " + marginContainer.offsetLeft + "px";
        let numberLi=document.querySelectorAll(".acc-cifras .swiper-wrapper .swiper-slide").length;
        let authorIs = document.querySelectorAll(".isAuthor");     
        if(authorIs.length==0){
            if(numberLi>1){
                accCifras.swiper(); 
            }
            else{
                document.querySelector(".acc-cifras .container").classList.add("d-none");
            }
        }
        else{
            document.querySelector(".acc-cifras .container").classList.add("d-none");
        }
        
    },
    swiper: function(){
        const swiper = new Swiper('.swiper-cifras', {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 0,
            direction: 'horizontal',
            //loop: true,
          
            autoplay: {
                delay: 5000,
            },
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next-cifras',
              prevEl: '.swiper-button-prev-cifras',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar-cifras',
            },
        });
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    accCifras.init();
 });


 var accHero={
    init:function(){
      accHero.event(); 
      let authorIs = document.querySelectorAll(".isAuthor");     
      if(authorIs.length==0){
        accHero.swiper(); 
      }
      
    },
    event:function(){
        let carousel = document.querySelector(".hero-carousel");
        carousel.style.left = "-" + (window.innerWidth * 0) + "px";
        // Insert dots into the DOM
       let buttonClick=document.querySelector(".acc-hero .videoClick");
       if(buttonClick!=undefined){
        buttonClick.addEventListener("click",function(){
          let video=document.querySelector(".acc-hero .block-video video");
          video.play();
          this.style.display = "none";
          video.addEventListener("ended", function(){
            buttonClick.style.display = "block";
          });
       });
       
      }
       
    },
    swiper: function(){
      
      const swiper = new Swiper('.swiper-hero', {
        // Optional parameters
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 0,
        direction: 'horizontal',
        //loop: true,
      
        autoplay: {
            delay: 5000,
        },
        initialSlide:0,

      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination-hero',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">'+"</span>";
          },
        },
    });
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
    accHero.init();
 });
