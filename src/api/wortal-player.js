
/**
 * Gets the player's ID from the platform.
 * @returns {string} The player's ID.
 */
function wortalPlayerGetID() {
    return window.Wortal.player.getID();
}

/**
 * Gets the player's name on the platform.
 * @returns {string} The player's name.
 */
function wortalPlayerGetName() {
    return window.Wortal.player.getName();
}

/**
 * Gets the player's photo from the platform.
 * @returns {string} URL of base64 image for the player's photo.
 */
function wortalPlayerGetPhoto() {
    return window.Wortal.player.getPhoto();
}

/**
 * Checks whether this is the first time the player has played this game.
 * @returns {boolean} True if it is the first play. Some platforms always return true.
 */
function wortalPlayerIsFirstPlay() {
    return window.Wortal.player.isFirstPlay();
}

/**
 * Gets the game data with the specific keys from the platform's storage.
 * @example
 * wortal.player.getDataAsync(['items', 'lives'])
 *  .then(data => {
 *      console.log(data['items]);
 *      console.log(data['lives']);
 *  });
 * @param {string[]} keys Array of keys for the data to get.
 * @returns {Promise<any>}
 */
function wortalPlayerGetDataAsync(keys) {
    return window.Wortal.player.getDataAsync(keys);
}

/**
 * Uploads game data to the platform's storage. Max size is 1MB.
 * @example
 * wortal.player.setDataAsync({
 *     items: {
 *         coins: 100,
 *         boosters: 2
 *     },
 *     lives: 3,
 * });
 * @param {Record<string, unknown>} data Key-value pairs of the data to upload. Nullable values will remove the data.
 * @returns {Promise<void>}
 */
function wortalPlayerSetDataAsync(data) {
    return window.Wortal.player.setDataAsync(data);
}

/**
 * Gets the friends of the player who have also played this game before.
 * @example
 * wortal.player.getConnectedPlayersAsync({
 *     filter: 'ALL',
 *     size: 20,
 *     hoursSinceInvitation: 4,
 * }).then(players => console.log(players.length);
 * @param {connectedPlayerPayload} payload Options for the friends to get.
 * @returns {Promise<wortalPlayer>} Array of connected players.
 */
function wortalPlayerGetConnectedPlayersAsync(payload) {
    return window.Wortal.player.getConnectedPlayersAsync(payload);
}

/**
 * Gets a signed player object that includes the player ID and signature for validation. This can be used to
 * send something to a backend server for validation, such as game or purchase data.
 * @example
 * wortal.player.getSignedPlayerInfoAsync()
 *  .then(info => {
 *      myServer.validate(
 *          info.id,
 *          info.signature,
 *          gameDataToValidate,
 *      )
 *  });
 *  @returns {Promise<Object>} Object with player ID and signature.
 */
function wortalPlayerGetSignedPlayerInfoAsync() {
    return window.Wortal.player.getSignedPlayerInfoAsync();
}

/**
 * @typedef wortalPlayer
 * @property {string} id Player's ID
 * @property {string} name Player's name
 * @property {string} photo URL to player's photo
 */

/**
 * @typedef connectedPlayerPayload
 * @property {number | undefined} cursor
 * @property {connectedPlayerFilter | undefined} filter
 * @property {number | undefined} hoursSinceInvitation
 * @property {number | undefined} size
 */

/**
 * @typedef connectedPlayerFilter
 * 'ALL' | 'INCLUDE_PLAYERS' | 'INCLUDE_NON_PLAYERS' | 'NEW_INVITATIONS_ONLY'
 */
