/**
 * @typedef {Object} CardSet
 * @property {string} set_name
 * @property {string} set_code
 * @property {string} set_rarity
 * @property {string} set_rarity_code
 * @property {string} set_price
 */

/**
 * @typedef {Object} CardImage
 * @property {number} id
 * @property {string} image_url
 * @property {string} image_url_small
 * @property {string} image_url_cropped
 */

/**
 * @typedef {Object} CardPrice
 * @property {string} cardmarket_price
 * @property {string} tcgplayer_price
 * @property {string} ebay_price
 * @property {string} amazon_price
 * @property {string} coolstuffinc_price
 */

/**
 * @typedef {Object} YuGiOhCard
 * @property {number} id
 * @property {string} name
 * @property {string} type
 * @property {string} humanReadableCardType
 * @property {string} frameType
 * @property {string} desc
 * @property {string} race
 * @property {string} [archetype]
 * @property {string} ygoprodeck_url
 * @property {CardSet[]} card_sets
 * @property {CardImage[]} card_images
 * @property {CardPrice[]} card_prices
 */

// This file doesn't need to export anything
