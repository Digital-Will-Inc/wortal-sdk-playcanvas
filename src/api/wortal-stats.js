
/**
 * Gets a player's stats.
 * @param level The name of the level to get stats for.
 * @param payload Payload with additional details about the stats.
 * @example
 * wortalStatsGetStatsAsync("Level 1")
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
function wortalStatsGetStatsAsync(level, payload) {
    return window.Wortal.stats.getStatsAsync(level, payload);
}

/**
 * Posts a player's stats.
 * @param level The name of the level the stats are for.
 * @param value The value of the stat.
 * @param payload Payload with additional details about the stats.
 * @example
 * wortalStatsPostStatsAsync("Level 1", "100")
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
function wortalStatsPostStatsAsync(level, value, payload) {
    return window.Wortal.stats.postStatsAsync(level, value, payload);
}
