
/**
 * Checks whether IAP is enabled in this session.
 * @returns {boolean} True if IAP is available to the user. False if IAP is not supported on the current platform,
 * the player's device, or the IAP service failed to load properly.
 */
function wortalIAPIsEnabled() {
    return window.Wortal.iap.isEnabled();
}

/**
 * Gets the catalog of available products the player can purchase.
 * @example
 * wortal.iap.getCatalogAsync()
 *  .then(products => console.log(products));
 * @returns {Promise<product[]>} Array of products available to the player. Returns an empty list if there are no
 * products available for the player to purchase.
 */
function wortalIAPGetCatalogAsync() {
    return window.Wortal.iap.getCatalogAsync();
}

/**
 * Gets the purchases the player has made that have not yet been consumed. Purchase signature should be
 * validated on the game developer's server or transaction database before provisioning the purchase to the player.
 * @example
 * wortal.iap.getPurchasesAsync()
 *  .then(purchases => console.log(purchases));
 * @returns {Promise<purchase[]>} Array of purchases.
 */
function wortalIAPGetPurchasesAsync() {
    return window.Wortal.iap.getPurchasesAsync();
}

/**
 * Attempts to make a purchase of the given product. Will launch the native IAP screen and return the result.
 * @example
 * wortal.iap.makePurchaseAsync({
 *     productID: 'my_product_123',
 * }).then(purchase => console.log(purchase));
 * @param {purchaseConfig} purchase Object defining the product ID and purchase information.
 * @returns {Promise<purchase>} Information about the purchase.
 */
function wortalIAPMakePurchaseAsync(purchase) {
    return window.Wortal.iap.makePurchaseAsync(purchase);
}

/**
 * Consumes the given purchase. This will remove the purchase from the player's available purchases inventory and
 * reset its availability in the catalog.
 * @example
 * wortal.iap.consumePurchaseAsync('abc123');
 * @param {string} token String representing the purchaseToken of the item to consume.
 * @returns {Promise<void>}
 */
function wortalIAPConsumePurchaseAsync(token) {
    return window.Wortal.iap.consumePurchaseAsync(token);
}

/**
 * @typedef product
 * @property {string} title Title of the product
 * @property {string} productID ID of the product
 * @property {string | undefined} description Text description of the product
 * @property {string | undefined} imageURI A URL to the product's image
 * @property {string} price A localized string representing the product's price in the local currency, e.g. "$1"
 * @property {string} priceCurrencyCode A string representing which currency is the price calculated in, following [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
 */

/**
 * @typedef purchase
 * @property {string | undefined} developerPayload Optional payload assigned by game developer, which will be also attached in the signed purchase request
 * @property {string} paymentID ID of the payment (e.g. Google Play Order)
 * @property {string} productID ID of the product
 * @property {string} purchaseTime Timestamp of the payment
 * @property {string} purchaseToken Token for purchase consumption
 * @property {signature} signedRequest Signature of the purchase info for server side verification
 */

/**
 * @typedef purchaseConfig
 * @property {string} productID ID of the product
 * @property {string | undefined} developerPayload Optional payload assigned by game developer, which will be also attached in the signed purchase request
 */

/**
 * @typedef {string} signature
 * A signature that can be verified on game's backend server.
 * Server side validation can be done by following these steps:
 *
 * 1. Split the signature into two parts delimited by the `.` character.
 * 2. Decode the first part with base64url encoding, which should be a hash.
 * 3. Decode the second part with base64url encoding, which should be a string representation of an JSON object.
 * 4. Hash the second part string using HMAC SHA-256 and the app secret, check if it is identical to the hash from step 2.
 * 5. Optionally, developer can also validate the timestamp to see if the request is made recently.
 */
