import HtmlConstructor from "./services/html-service.js";
import DataService from "./services/data-service.js";


const service = new DataService()
const urlParams = new URLSearchParams(window.location.search);
const root = document.getElementById('root')



function getCard() {
  const targetCardId = parseInt(urlParams.get('id'))
  service.fetchCardById(targetCardId)
  .then(cardInfo => render(cardInfo))
}


function render(dataToRender) {
  console.log(dataToRender)
  console.log(HtmlConstructor.createDetailCard(dataToRender))
  root.appendChild(HtmlConstructor.createDetailCard(dataToRender))
}

getCard()
