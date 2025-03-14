import DataService from "./services/data-service.js";

const root = document.getElementById('root')
const dataService = new DataService()

function getCardsData() {
  dataService.fetchAllCards()
  .then(data => console.log(data))
  console.log('here')
}

getCardsData()