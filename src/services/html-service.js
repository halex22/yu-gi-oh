import { BaseCard, DetailedCard } from "../models/card.js"
import Set from "../models/set.js"

export default class HtmlConstructor {
  constructor() {}

  /**
   * 
   * @param {BaseCard} cardInstance 
   */
  static createBaseCard(cardInstance){

    const cardContainer = HtmlConstructor.#crateElement('a', 'card-container')
    cardContainer.href = `/detail.html?id=${cardInstance.id}`

    const coverContainer = HtmlConstructor.#crateElement('div', 'cover-container')

    const imgTag = document.createElement('img')
    imgTag.classList.add('book-img')
    imgTag.src = cardInstance.img
    imgTag.loading = 'lazy'
    coverContainer.appendChild(imgTag)

    const infoContainer = HtmlConstructor.#crateElement('div', 'card-info')

    const cardName = HtmlConstructor.#crateElement('h2', 'card-title', cardInstance.name)
    infoContainer.appendChild(cardName)

    // bookInstance.authors.forEach(author => infoContainer.appendChild(HtmlConstructor.#createAuthor( author)))
    
    // infoContainer.appendChild(HtmlConstructor.#crateElement('summary','book-summary', bookInstance.summary))
    // infoContainer.appendChild(HtmlConstructor.#createList(bookInstance.subjects))

    cardContainer.append(coverContainer, infoContainer)
    
    return cardContainer

  }

  /**
   * 
   * @param {string[]} subjects 
   */
  static #createList(subjects) {
    const list = HtmlConstructor.#crateElement('ul', 'subject-list')
    subjects.forEach(subj => list.appendChild(HtmlConstructor.#crateElement('li', 'subject-item', subj)))
    return list
  }

  /**
   * 
   * @param {Set} setData 
   */
  static #createSet(setData) {
    const container = HtmlConstructor.#crateElement('div', 'set-container')
    const name = HtmlConstructor.#crateElement('h3', 'set-name', setData.name)
    const specContainer = HtmlConstructor.#crateElement('div', 'set-data')
    const code = HtmlConstructor.#crateElement('span', 'set-spec', setData.code)
    const rarity = HtmlConstructor.#crateElement('span', 'set-spec', setData.rarity)
    const rarityCode = HtmlConstructor.#crateElement('span', 'set-spec', setData.rarityCode)

    const cardPrice = HtmlConstructor.#crateElement('p', 'price', `Card Price:  ${setData.price}`)
    specContainer.append(code, rarity, rarityCode, cardPrice)

    container.append(name, specContainer)
    return container
  }


  /**
   * @param {keyof HTMLElementTagNameMap} tagType 
   * @param {string} text
   * @param {string} cssClass 
   */
  static #crateElement(tagType,cssClass, text) {
    const tag = document.createElement(tagType)
    tag.classList.add(cssClass)
    if (text) {
      const txtNode = document.createTextNode(text)
      tag.appendChild(txtNode)
    }
    return tag
  }


  /**
   * 
   * @param {DetailedCard} cardInstance 
   */
  static createDetailCard(cardInstance){

    const cardContainer = HtmlConstructor.#crateElement('div', 'card-detail-container')

    const coverContainer = HtmlConstructor.#crateElement('div', 'cover-container')

    const imgTag = document.createElement('img')
    imgTag.classList.add('card-big-img')
    imgTag.src = cardInstance.img
    imgTag.loading = 'lazy'
    coverContainer.appendChild(imgTag)

    const infoContainer = HtmlConstructor.#crateElement('div', 'card-info')

    const cardName = HtmlConstructor.#crateElement('h2', 'card-title', cardInstance.name)

    const cardDes = HtmlConstructor.#crateElement('p', 'card-desc', cardInstance.desc)

    const specificInfoContainer = HtmlConstructor.#crateElement('div', 'spec')

    const cardRace = HtmlConstructor.#crateElement('span', 'card-race', `Race:  ${cardInstance.race}`)
    const cardArch = HtmlConstructor.#crateElement('span', 'card-arch', `Archetype: ${cardInstance.archetype}`)

    specificInfoContainer.append(cardRace, cardArch)

    const setHeader = HtmlConstructor.#crateElement('h5', 'setName', 'Sets')

    const setList = HtmlConstructor.#crateElement('div', 'set-list')


    cardInstance.sets.forEach(set => setList.appendChild(HtmlConstructor.#createSet(set)))

    infoContainer.append(cardName, cardDes, specificInfoContainer,setHeader, setList)

    const backToHome = HtmlConstructor.#crateElement('a', 'back-home', 'Click to go back')
    backToHome.href = '/'
    cardContainer.append(coverContainer, infoContainer, backToHome)


    // bookInstance.authors.forEach(author => infoContainer.appendChild(HtmlConstructor.#createAuthor( author)))
    
    // infoContainer.appendChild(HtmlConstructor.#crateElement('summary','book-summary', bookInstance.summary))
    // infoContainer.appendChild(HtmlConstructor.#createList(bookInstance.subjects))

    // cardContainer.append(coverContainer, infoContainer)
    
    
    return cardContainer

  }
}