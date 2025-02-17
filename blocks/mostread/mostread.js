/*export default async function decorate(block) {
    const url = "https://pokeapi.co/api/v2/pokemon/1";
    alert("hola")
    block.append(url);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
    
        const json = await response.json();
        console.log(json);
        block.append(json);
    } catch (error) {
        console.error(error.message);
    }
      
}*/


export default  function decorate(block) {
    alert("Hola 1")
}