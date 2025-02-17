export default async function decorate(block) {
    var result = await fetchData();
    console.log(result);
    
}

async function fetchData() {
    //TODO: Return from fetch/XHR
    var result = {
        "cards": [
            {
                "logo" : "",
                "image": "https://soluciones.acciona-energia.com/content/dam…gares/home/ACCIONAEnergi%CC%81a_Home_placas_2.png",
                "title": "title",
                "excerpt": "excerpt",
                "link": "https://google.es/1"
            },
            {
                "logo" : "",
                "image": "https://soluciones.acciona-energia.com/content/acc…age-1.coreimg.png/1725526119929/luz-renovable.png",
                "title": "title",
                "excerpt": "excerpt",
                "link": "https://google.es/2"
            },
            {
                "logo" : "",
                "image": "https://soluciones.acciona-energia.com/content/dam…gares/home/ACCIONAEnergi%CC%81a_Home_placas_2.png",
                "title": "title",
                "excerpt": "excerpt",
                "link": "https://google.es/3"
            },
            {
                "logo" : "",
                "image": "https://soluciones.acciona-energia.com/content/acc…age-1.coreimg.png/1725526119929/luz-renovable.png",
                "title": "title",
                "excerpt": "excerpt",
                "link": "https://google.es/4"
            }
        ]
    }

    return result;
}