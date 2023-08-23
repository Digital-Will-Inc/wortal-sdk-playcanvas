
/**
 * Returns any data object associated with the entry point that the game was launched from.
 *
 * The contents of the object are developer-defined, and can occur from entry points on different platforms.
 * This will return null for older mobile clients, as well as when there is no data associated with the particular entry point.
 * @example
 * const data = wortalSessionGetEntryPointData();
 * console.log(data.property);
 * @returns {Record<string, unknown>} Data about the entry point or an empty object if none exists.
 */
function wortalSessionGetEntryPointData() {
    return window.Wortal.session.getEntryPointData();
}

/**
 * Returns the entry point that the game was launched from.
 * @example
 * wortalSessionGetEntryPointAsync()
 *  .then(entryPoint => console.log(entryPoint));
 * @returns {Promise<string>} Promise resolving with the name of the entry point from which the user started the game.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>RETHROW_FROM_PLATFORM</li>
 * </ul>
 */
function wortalSessionGetEntryPointAsync() {
    return window.Wortal.session.getEntryPointAsync();
}

/**
 * Sets the data associated with the individual gameplay session for the current context.
 *
 * This function should be called whenever the game would like to update the current session data.
 * This session data may be used to populate a variety of payloads, such as game play webhooks.
 * @example
 * wortalSessionSetSessionData({
 *     'high-score': 100,
 *     'current-level': 2,
 * });
 * @param {Record<string, unknown>} data Data to set.
 */
function wortalSessionSetSessionData(data) {
    return window.Wortal.session.setSessionData(data);
}

/**
 * Gets the locale the player is using. This is useful for localizing your game.
 * @example
 * const lang = wortalSessionGetLocale();
 * @returns {string} Locale in [BCP47](http://www.ietf.org/rfc/bcp/bcp47.txt) format.
 */
function wortalSessionGetLocale() {
    return window.Wortal.session.getLocale();
}

/**
 * Gets the traffic source info for the game. This is useful for tracking where players are coming from.
 * For example, if you want to track where players are coming from for a specific campaign.
 * @example
 * const source = wortalSessionGetTrafficSource();
 * console.log(source['r_entrypoint']);
 * console.log(source['utm_source']);
 * @returns {trafficSource} URL parameters attached to the game.
 */
function wortalSessionGetTrafficSource() {
    window.Wortal.session.getTrafficSource();
}

/**
 * Gets the platform the game is running on. This is useful for platform specific code.
 * For example, if you want to show a different social share asset on Facebook than on Link.
 * @example
 * const platform = wortalSessionGetPlatform();
 * console.log(platform);
 * @returns {platform} Platform the game is running on.
 */
function wortalSessionGetPlatform() {
    return window.Wortal.session.getPlatform();
}

/**
 * Gets the device the player is using. This is useful for device specific code.
 * @example
 * const device = wortalSessionGetDevice();
 * console.log(device);
 * @returns {device} Device the player is using.
 */
function wortalSessionGetDevice() {
    return window.Wortal.session.getDevice();
}

/**
 * Gets the orientation of the device the player is using. This is useful for determining how to display the game.
 * @example
 * const orientation = wortalSessionGetOrientation();
 * if (orientation === 'portrait') {
 *    // Render portrait mode.
 * }
 * @returns {orientation} Orientation of the device the player is using.
 */
function wortalSessionGetOrientation() {
    return window.Wortal.session.getOrientation();
}

/**
 * Assigns a callback to be invoked when the orientation of the device changes.
 * @example
 * wortalSessionOnOrientationChange(orientation => {
 *    if (orientation === 'portrait') {
 *      // Render portrait mode
 *    }
 * });
 * @param callback Callback to be invoked when the orientation of the device changes.
 */
function wortalSessionOnOrientationChange(callback) {
    window.Wortal.session.onOrientationChange(orientation => {
        callback(orientation);
    });
}

/**
 * Request to switch to another game. The API will reject if the switch fails - else, the client will load the new game.
 * @example
 * wortalSessionSwitchGameAsync(
 *   '12345678',
 *   { referrer: 'game_switch', reward_coins: 30 });
 * @param gameID ID of the game to switch to. The application must be a Wortal game.
 * @param data An optional data payload. This will be set as the entrypoint data for the game being switched to. Must be less than or equal to 1000 characters when stringified.
 * @returns {Promise<void>} Promise that resolves when the game has switched. If the game fails to switch, the promise will reject.
 * @throws {ErrorMessage} See error.message for details.
 * <ul>
 * <li>INVALID_PARAMS</li>
 * <li>USER_INPUT</li>
 * <li>PENDING_REQUEST</li>
 * <li>CLIENT_REQUIRES_UPDATE</li>
 * <li>NOT_SUPPORTED</li>
 * </ul>
 */
function wortalSessionSwitchGameAsync(gameID, data) {
    return window.Wortal.session.switchGameAsync(gameID, data);
}
