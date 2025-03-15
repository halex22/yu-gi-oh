import Set from "../models/set.js"
import { BaseCard, DetailedCard } from "../models/card.js"


export default class DataService {

  #url = '/assets/data.json'


  #fetchRawData() {
    return fetch(this.#url)
    .then(res => res.json())
    .then(data => data)
  }

  fetchAllCards(){
    return this.#fetchRawData().then(data => data.map(card => new BaseCard(card.id, card.name, card.card_images[0].image_url_small)))
  }

  /**
   * 
   * @param {number} id 
   * @returns {Promise<DetailedCard>}
   */
  fetchCardById(id){
    return this.#fetchRawData()
    .then(data => {
      const cardData = data.find(card => card.id === id)
      return this.#handleCardCreation(cardData)
    })
  }




  #handleCardCreation(data) {
    const setInstances = data.card_sets ? data.card_sets.map(rawSetInfo => this.#createSetInstance(rawSetInfo)) : []
    return this.#createCardInstance(data, setInstances)
  }

  #createCardInstance(dataEntry, setsArray){
    return new DetailedCard(
      dataEntry.id, dataEntry.name, dataEntry.card_images[0].image_url, dataEntry.type,
      dataEntry.desc, dataEntry.race, dataEntry.archetype,
      setsArray
    )
  }

  #createSetInstance(dataEntry) {
    return new Set(
      dataEntry.set_name, dataEntry.set_code, dataEntry.set_rarity,
      dataEntry.set_rarity_code, dataEntry.set_price
    )
  }
}