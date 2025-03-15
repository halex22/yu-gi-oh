class Card {
  constructor(id, name, img) {
    this.id = id
    this.name = name
    this.img = img  
  }
}


export class BaseCard extends Card {
  constructor(id, name, img) {
    super(id, name, img)
  }

  compareByName(otherCard) {
    return this.name.localeCompare(otherCard.name)
  }
}


export class DetailedCard  extends Card {
  constructor(id, name, imgCover, type, desc, race, archetype, sets, ) {
    super(id, name, imgCover)
    this.type = type
    this.desc = desc
    this.race = race
    this.archetype = archetype
    this.sets = sets
  }
}