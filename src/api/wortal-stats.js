
/**
 * Gets a player's stats.
 * @param level The name of the level to get stats for.
 * @param payload Payload with additional details about the stats.
 * @example
 * Wortal.stats.getStatsAsync("Level 1")
 *    .then((stats) => {
 *      console.log(stats);
 *    });
 * @returns {Promise<stats[]>} Promise that resolves to an array of stats.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAMS</li>
 * </ul>
 */
function getStatsAsync(level, payload) {
    return window.Wortal.stats.getStatsAsync(level, payload);
}

/**
 * Posts a player's stats.
 * @param level The name of the level the stats are for.
 * @param value The value of the stat.
 * @param payload Payload with additional details about the stats.
 * @example
 * Wortal.stats.postStatsAsync("Level 1", "100")
 *   .then(() => {
 *      console.log("Stats posted successfully");
 *   });
 * @returns {Promise<void>} Promise that resolves when the stats have been posted.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAMS</li>
 * </ul>
 */
function postStatsAsync(level, value, payload) {
    return window.Wortal.stats.postStatsAsync(level, value, payload);
}
