export default class Card {
  constructor(id, name, type, desc, race, archetype, sets, imgCover) {
    this.id = id
    this.name = name
    this.type = type
    this.desc = desc
    this.race = race
    this.archetype = archetype
    this.sets = sets
    this.imgCover = imgCover    
  }

  compareByName(otherCard) {
    return this.name.localeCompare(otherCard.name)
  }



}