
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
 * @returns {Promise<string>} The name of the entry point from which the user started the game
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
