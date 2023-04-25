
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
 * wortalIAPGetCatalogAsync()
 *  .then(products => console.log(products));
 * @returns {Promise<product[]>} Array of products available to the player. Returns an empty list if there are no
 * products available for the player to purchase.
 * @throws {ErrorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * <li>PAYMENTS_NOT_INITIALIZED</li>
 * <li>NETWORK_FAILURE</li>
 * </ul>
 */
function wortalIAPGetCatalogAsync() {
    return window.Wortal.iap.getCatalogAsync();
}

/**
 * Gets the purchases the player has made that have not yet been consumed. Purchase signature should be
 * validated on the game developer's server or transaction database before provisioning the purchase to the player.
 * @example
 * wortalIAPGetPurchasesAsync()
 *  .then(purchases => console.log(purchases));
 * @returns {Promise<purchase[]>} Array of purchases.
 * @throws {ErrorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * <li>PAYMENTS_NOT_INITIALIZED</li>
 * <li>NETWORK_FAILURE</li>
 * </ul>
 */
function wortalIAPGetPurchasesAsync() {
    return window.Wortal.iap.getPurchasesAsync();
}

/**
 * Attempts to make a purchase of the given product. Will launch the native IAP screen and return the result.
 * @example
 * wortalIAPMakePurchaseAsync({
 *     productID: 'my_product_123',
 * }).then(purchase => console.log(purchase));
 * @param {purchaseConfig} purchase Object defining the product ID and purchase information.
 * @returns {Promise<purchase>} A Promise that resolves when the product is successfully purchased by the player. Otherwise, it rejects.
 * @throws {ErrorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * <li>PAYMENTS_NOT_INITIALIZED</li>
 * <li>INVALID_PARAM</li>
 * <li>NETWORK_FAILURE</li>
 * <li>INVALID_OPERATION</li>
 * <li>USER_INPUT</li>
 * </ul>
 */
function wortalIAPMakePurchaseAsync(purchase) {
    return window.Wortal.iap.makePurchaseAsync(purchase);
}

/**
 * Consumes a specific purchase belonging to the current player. Before provisioning a product's effects to the player,
 * the game should request the consumption of the purchased product. Once the purchase is successfully consumed,
 * the game should immediately provide the player with the effects of their purchase. This will remove the
 * purchase from the player's available purchases inventory and reset its availability in the catalog.
 * @example
 * wortalIAPConsumePurchaseAsync('abc123');
 * @param {string} token The purchase token of the purchase that should be consumed.
 * @returns {Promise<void>} A Promise that resolves when the purchase is successfully consumed. Otherwise, it rejects.
 * @throws {ErrorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * <li>PAYMENTS_NOT_INITIALIZED</li>
 * <li>INVALID_PARAM</li>
 * <li>NETWORK_FAILURE</li>
 * </ul>
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
