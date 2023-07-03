
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
 * @throws {errorMessage} See error.message for details.
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
 * @throws {errorMessage} See error.message for details.
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
 * @throws {errorMessage} See error.message for details.
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
 * @throws {errorMessage} See error.message for details.
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
