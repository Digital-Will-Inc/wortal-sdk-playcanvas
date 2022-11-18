
/**
 * Gets the data bound to the entry point.
 * @example
 * let data = wortal.session.getEntryPointData();
 * console.log(data.property);
 * @returns {Record<string, unknown>} Data about the entry point or an empty object if none exists.
 */
function wortalSessionGetEntryPointData() {
    return window.Wortal.session.getEntryPointData();
}

/**
 * Gets the entry point of where the game started from.
 * @example
 * wortal.session.getEntryPointAsync()
 *  .then(entryPoint => console.log(entryPoint);
 * @returns {Promise<string>} Details about where the game started from.
 */
function wortalSessionGetEntryPointAsync() {
    return window.Wortal.session.getEntryPointAsync();
}

/**
 * Sets the data for this session. This is not persistent and is only used to populate webhook events.
 * @example
 * wortal.session.setSessionData({
 *     'high-score': 100,
 *     'current-level': 2,
 * });
 * @param {Record<string, unknown>} data Data to set.
 */
function wortalSessionSetSessionData(data) {
    return window.Wortal.session.setSessionData(data);
}

/**
 * Gets the locale the player is using.
 * @example
 * let lang = wortal.session.getLocale();
 * @returns {string} Locale in [BCP47](http://www.ietf.org/rfc/bcp/bcp47.txt) format.
 */
function wortalSessionGetLocale() {
    return window.Wortal.session.getLocale();
}

/**
 * Gets the traffic source info for the game.
 * @example
 * let source = wortal.session.getTrafficSource();
 * console.log(source['r_entrypoint']);
 * console.log(source['utm_source']);
 * @returns {trafficSource} URL parameters attached to the game.
 */
function wortalSessionGetTrafficSource() {
    window.Wortal.session.getTrafficSource();
}

/**
 * @typedef trafficSource
 * @property {string | undefined} ['utm_source']
 * @property {string | undefined} ['r_entrypoint']
 */
