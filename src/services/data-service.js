import Card from "../models/card.js"
import Set from "../models/set.js"



export default class DataService {

  #url = '/assets/data.json'


  #fetchRawData() {
    return fetch(this.#url)
    .then(res => res.json())
    .then(data => data)
  }

  fetchAllCards(){
    return this.#fetchRawData().then(data => data.map(card => this.#handleCardCreation(card)))
  }

  fetchCardById(id){
    return this.#fetchRawData()
    .then(data => {
      const cardData = data.find(card => card.id === id)
      this.#handleCardCreation(cardData)
    })
  }


  #handleCardCreation(data) {
    const setInstances = data.card_sets ? data.card_sets.map(rawSetInfo => this.#createSetInstance(rawSetInfo)) : []
    return this.#createCardInstance(data, setInstances)
  }

  #createCardInstance(dataEntry, setsArray){
    return new Card(
      dataEntry.id, dataEntry.name, dataEntry.type,
      dataEntry.desc, dataEntry.race, dataEntry.archetype,
      setsArray, dataEntry.card_images.image_url_small
    )
  }

  #createSetInstance(dataEntry) {
    return new Set(
      dataEntry.set_name, dataEntry.set_code, dataEntry.set_rarity,
      dataEntry.set_rarity_code, dataEntry.set_price
    )
  }
}