
/**
 * @typedef {object} product
 * A product that the player can purchase.
 * @property {string} title Title of the product
 * @property {string} productID ID of the product
 * @property {string | undefined} description Text description of the product
 * @property {string | undefined} imageURI A URL to the product's image
 * @property {string} price A localized string representing the product's price in the local currency, e.g. "$1"
 * @property {string} priceCurrencyCode A string representing which currency is the price calculated in, following [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
 */

/**
 * @typedef {object} purchase
 * A purchase transaction.
 * @property {string | undefined} developerPayload Optional payload assigned by game developer, which will be also attached in the signed purchase request
 * @property {string} paymentID ID of the payment (e.g. Google Play Order)
 * @property {string} productID ID of the product
 * @property {string} purchaseTime Timestamp of the payment
 * @property {string} purchaseToken Token for purchase consumption
 * @property {signature} signedRequest Signature of the purchase info for server side verification
 */

/**
 * @typedef {object} purchaseConfig
 * Configuration for a purchase.
 * @property {string} productID ID of the product
 * @property {string | undefined} developerPayload Optional payload assigned by game developer, which will be also attached in the signed purchase request
 */
