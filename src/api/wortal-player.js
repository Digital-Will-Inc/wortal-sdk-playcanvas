
/**
 * Gets the player's ID from the platform.
 * @example
 * wortalPlayerGetID(); // 'Player123ABC'
 * @returns {string | null} The player's ID.
 */
function wortalPlayerGetID() {
    return window.Wortal.player.getID();
}

/**
 * Gets the player's name on the platform.
 * @example
 * wortalPlayerGetName(); // 'Ragnar Lothbrok'
 * @returns {string | null} The player's name.
 */
function wortalPlayerGetName() {
    return window.Wortal.player.getName();
}

/**
 * Gets the player's photo from the platform.
 * @example
 * wortalPlayerGetPhoto(); // 'data:image/png;base64,iVBORw0KGgoAAAANSUh..' (base64 encoded image)
 * @returns {string | null} URL of base64 image for the player's photo.
 */
function wortalPlayerGetPhoto() {
    return window.Wortal.player.getPhoto();
}

/**
 * Checks whether this is the first time the player has played this game.
 * @example
 * if (wortalPlayerIsFirstPlay()) {
 *    // Show tutorial
 *    wortalPlayerSetDataAsync({ tutorialShown: true });
 * }
 * @returns {boolean} True if it is the first play. Some platforms always return true.
 */
function wortalPlayerIsFirstPlay() {
    return window.Wortal.player.isFirstPlay();
}

/**
 * Retrieve data from the designated cloud storage of the current player. Please note that JSON objects stored as
 * string values would be returned back as JSON objects.
 * @example
 * wortalPlayerGetDataAsync(['items', 'lives'])
 *  .then(data => {
 *      console.log(data['items]);
 *      console.log(data['lives']);
 *  });
 * @param {string[]} keys Array of keys for the data to get.
 * @returns {Promise<any>} A promise that resolves with an object which contains the current key-value pairs for each
 * key specified in the input array, if they exist.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAM</li>
 * <li>NETWORK_FAILURE</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * </ul>
 */
function wortalPlayerGetDataAsync(keys) {
    return window.Wortal.player.getDataAsync(keys);
}

/**
 * Set data to be saved to the designated cloud storage of the current player. The game can store up to 1MB of data
 * for each unique player.
 * @example
 * wortalPlayerSetDataAsync({
 *     items: {
 *         coins: 100,
 *         boosters: 2
 *     },
 *     lives: 3,
 * });
 * @param {Record<string, unknown>} data An object containing a set of key-value pairs that should be persisted to
 * cloud storage. The object must contain only serializable values - any non-serializable values will cause the
 * entire modification to be rejected.
 * @returns {Promise<void>} A promise that resolves when the input values are set. NOTE: The promise resolving does not
 * necessarily mean that the input has already been persisted. Rather, it means that the data was valid and has been
 * scheduled to be saved. It also guarantees that all values that were set are now available in player.getDataAsync.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAM</li>
 * <li>NETWORK_FAILURE</li>
 * <li>PENDING_REQUEST</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * </ul>
 */
function wortalPlayerSetDataAsync(data) {
    return window.Wortal.player.setDataAsync(data);
}

/**
 * Flushes any unsaved data to the platform's storage. This function is expensive, and should primarily be used for
 * critical changes where persistence needs to be immediate and known by the game. Non-critical changes should rely on
 * the platform to persist them in the background.
 * NOTE: Calls to player.setDataAsync will be rejected while this function's result is pending.
 * @example
 * wortalPlayerFlushDataAsync()
 *  .then(() => console.log("Data flushed."));
 * @returns {Promise<void>} A promise that resolves when changes have been persisted successfully, and rejects if the save fails.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAM</li>
 * <li>NETWORK_FAILURE</li>
 * <li>PENDING_REQUEST</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * </ul>
 */
function wortalPlayerFlushDataAsync() {
    return window.Wortal.player.flushDataAsync();
}

/**
 * Gets the friends of the player who have also played this game before.
 * @example
 * wortalPlayerGetConnectedPlayersAsync({
 *     filter: 'ALL',
 *     size: 20,
 *     hoursSinceInvitation: 4,
 * }).then(players => console.log(players.length);
 * @param {connectedPlayerPayload} payload Options for the friends to get.
 * @returns {Promise<wortalPlayer[]>} A promise that resolves with a list of connected player objects.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>NETWORK_FAILURE</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * </ul>
 */
function wortalPlayerGetConnectedPlayersAsync(payload) {
    return window.Wortal.player.getConnectedPlayersAsync(payload);
}

/**
 * Gets a signed player object that includes the player ID and signature for validation. This can be used to
 * send something to a backend server for validation, such as game or purchase data.
 * @example
 * wortalPlayerGetSignedPlayerInfoAsync()
 *  .then(info => {
 *      myServer.validate(
 *          info.id,
 *          info.signature,
 *          gameDataToValidate,
 *      )
 *  });
 * @returns {Promise<signature>} A promise that resolves with an object containing the player ID and signature.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAM</li>
 * <li>NETWORK_FAILURE</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * </ul>
 */
function wortalPlayerGetSignedPlayerInfoAsync() {
    return window.Wortal.player.getSignedPlayerInfoAsync();
}

/**
 * A unique identifier for the player. This is the standard Facebook Application-Scoped ID which is used for all Graph
 * API calls. If your game shares an AppID with a native game this is the ID you will see in the native game too.
 * @example
 * wortalPlayerGetASIDAsync()
 * .then(asid => console.log("Player ASID: " + asid));
 * @returns {Promise<string>} A unique identifier for the player. String is nullable.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>RETHROW_FROM_PLATFORM</li>
 * </ul>
 */
function wortalPlayerGetASIDAsync() {
    return window.Wortal.player.getASIDAAsync();
}

/**
 * A unique identifier for the player. This is the standard Facebook Application-Scoped ID which is used for all Graph
 * API calls. If your game shares an AppID with a native game this is the ID you will see in the native game too.
 * @example
 * wortalPlayerGetSignedASIDAsync()
 *  .then(info => {
 *     myServer.validate(
 *     info.asid,
 *     info.signature,
 *     );
 *   });
 * @returns {Promise<signedASID>} Object with player ASID and signature.
 * @see SignedASID
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>RETHROW_FROM_PLATFORM</li>
 * </ul>
 */
function wortalPlayerGetSignedASIDAsync() {
    return window.Wortal.player.getSignedASIDAsync();
}

/**
 * Checks if the current user can subscribe to the game's bot.
 * @example
 * wortalPlayerCanSubscribeBotAsync()
 * .then(canSubscribe => console.log("Can subscribe to bot: " + canSubscribe));
 * @returns {Promise<boolean>} Whether a player can subscribe to the game bot or not. Developer can only call
 * subscribeBotAsync() after checking canSubscribeBotAsync(), and the game will only be able to show the player their
 * bot subscription dialog once per week.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>RATE_LIMITED</li>
 * <li>INVALID_OPERATION</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * </ul>
 */
function wortalPlayerCanSubscribeBotAsync() {
    return window.Wortal.player.canSubscribeBotAsync();
}

/**
 * Request that the player subscribe the bot associated to the game. The API will reject if the subscription fails -
 * else, the player will subscribe the game bot.
 * @example
 * wortalPlayerSubscribeBotAsync()
 * .then(() => console.log("Player subscribed to bot"));
 * @returns {Promise<void>} A promise that resolves if player successfully subscribed to the game bot, or rejects if
 * request failed or player chose to not subscribe.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAM</li>
 * <li>PENDING_REQUEST</li>
 * <li>CLIENT_REQUIRES_UPDATE</li>
 * </ul>
 */
function wortalPlayerSubscribeBotAsync() {
    return window.Wortal.player.subscribeBotAsync();
}
