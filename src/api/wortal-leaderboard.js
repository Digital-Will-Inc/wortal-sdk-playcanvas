
/**
 * Fetch a specific leaderboard belonging to this game.
 * @example
 * wortalLeaderboardGetLeaderboardAsync('global')
 *  .then(leaderboard => console.log(leaderboard.name());
 * @param {string} name The name of the leaderboard. Each leaderboard for a game must have its own distinct name.
 * @returns {Promise<leaderboard>} Promise that resolves with the matching leaderboard, rejecting if one is not found.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>LEADERBOARD_NOT_FOUND</li>
 * <li>NETWORK_FAILURE</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * <li>INVALID_OPERATION</li>
 * <li>INVALID_PARAM</li>
 * </ul>
 */
function wortalLeaderboardGetLeaderboardAsync(name) {
    return window.Wortal.leaderboard.getLeaderboardAsync(name);
}

/**
 * Updates the player's score. If the player has an existing score, the old score will only be replaced if the new
 * score is better than it. NOTE: If the leaderboard is associated with a specific context, the game must be in that
 * context to set a score for the player.
 * @example
 * wortalLeaderboardSendEntryAsync('global', 100);
 * @param {string} name The name of the leaderboard.
 * @param {number} score Score for the entry. Must be a 64-bit integer number.
 * @param {string} details Optional metadata to associate with the stored score. Must be less than 2KB in size.
 * @returns {Promise<leaderboardEntry>} Promise that resolves with the current leaderboard entry for the player after the update.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>LEADERBOARD_WRONG_CONTEXT</li>
 * <li>NETWORK_FAILURE</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * <li>INVALID_PARAM</li>
 * <li>INVALID_OPERATION</li>
 * <li>RATE_LIMITED</li>
 * </ul>
 */
function wortalLeaderboardSendEntryAsync(name, score, details = "") {
    return window.Wortal.leaderboard.sendEntryAsync(name, score, details);
}

/**
 * Retrieves a set of leaderboard entries, ordered by score ranking in the leaderboard.
 * @example
 * wortalLeaderboardGetEntriesAsync('global', 10)
 *  .then(entries => console.log(entries));
 * @param {string} name The name of the leaderboard.
 * @param {number} count The number of entries to attempt to fetch from the leaderboard. Defaults to 10 if not specified.
 * Currently, up to a maximum of 100 entries may be fetched per query.
 * @param {number} offset The offset from the top of the leaderboard that entries will be fetched from. Default is 0.
 * @returns {Promise<leaderboardEntry[]>} Promise that resolves with the leaderboard entries that match the query.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAM</li>
 * <li>NETWORK_FAILURE</li>
 * <li>RATE_LIMITED</li>
 * </ul>
 */
function wortalLeaderboardGetEntriesAsync(name, count, offset = 0) {
    return window.Wortal.leaderboard.getEntriesAsync(name, count, offset);
}

/**
 * Retrieves the leaderboard's entry for the current player, or null if the player has not set one yet.
 * @example
 * wortalLeaderboardGetPlayerEntryAsync('global')
 *  .then(entry => console.log(entry.rank());
 * @param {string} name The name of the leaderboard.
 * @returns {Promise<leaderboardEntry>} Promise that resolves with the current leaderboard entry for the player.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAM</li>
 * <li>INVALID_OPERATION</li>
 * <li>NETWORK_FAILURE</li>
 * <li>RATE_LIMITED</li>
 * </ul>
 */
function wortalLeaderboardGetPlayerEntryAsync(name) {
    return window.Wortal.leaderboard.getPlayerEntryAsync(name);
}

/**
 * Gets the total number of entries in the leaderboard.
 * @example
 * wortalLeaderboardGetEntryCountAsync('global')
 *  .then(entries => console.log(entries));
 * @param {string} name The name of the leaderboard.
 * @returns {Promise<number>} Promise that resolves with the number of entries.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAM</li>
 * <li>NETWORK_FAILURE</li>
 * <li>RATE_LIMITED</li>
 * </ul>
 */
function wortalLeaderboardGetEntryCountAsync(name) {
    return window.Wortal.leaderboard.getEntryCountAsync(name);
}

/**
 * Retrieves the leaderboard score entries of the current player's connected players (including the current player),
 * ordered by local rank within the set of connected players.
 * @example
 * wortalLeaderboardGetConnectedPlayersEntriesAsync('global')
 *  .then(entries => console.log(entries));
 * @param {string} name The name of the leaderboard.
 * @param {number} count The number of entries to attempt to fetch from the leaderboard. Defaults to 10 if not specified.
 * Currently, up to a maximum of 100 entries may be fetched per query.
 * @param {number} offset The offset from the set of ordered connected player score entries to fetch from. Default is 0.
 * @returns {Promise<leaderboardEntry[]>} Promise that resolves with the leaderboard entries that match the query.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAM</li>
 * <li>NETWORK_FAILURE</li>
 * <li>RATE_LIMITED</li>
 * </ul>
 */
function wortalLeaderboardGetConnectedPlayersEntriesAsync(name, count, offset) {
    return window.Wortal.leaderboard.getConnectedPlayersEntriesAsync(name, count, offset);
}
