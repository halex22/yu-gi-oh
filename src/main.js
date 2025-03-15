import DataService from "./services/data-service.js";
import HtmlConstructor from "./services/html-service.js";


const root = document.getElementById('root')
const dataService = new DataService()

function getCardsData() {
  dataService.fetchAllCards()
  .then(data => data.forEach( card => render(card)))
}




function render(dataToRender) {
  root.appendChild(HtmlConstructor.createBaseCard(dataToRender))
}


getCardsData()