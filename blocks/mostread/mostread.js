export default function decorate(block) {
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            myFunction(myArr);
        }
    };
    xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/1", true);
    xmlhttp.send();
}
