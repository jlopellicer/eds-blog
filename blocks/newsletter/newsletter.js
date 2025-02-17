import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
    async function getData() {
        const url = "https://pokeapi.co/api/v2/pokemon/1";
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
      
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.error(error.message);
        }
      }
      
}
