
/**
 * Gets the leaderboard with the given name. Access the leaderboard API via the Leaderboard returned here.
 * @example
 * wortalLeaderboardGetLeaderboardAsync('global')
 *  .then(leaderboard => console.log(leaderboard.name());
 * @param {string} name Name of the leaderboard.
 * @returns {Promise<leaderboard>} A promise that resolves with the matching leaderboard, rejecting if one is not found.
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
 * @param {string} name Name of the leaderboard.
 * @param {number} score Score for the entry.
 * @param {string} details Optional additional details about the entry.
 * @returns {Promise<leaderboardEntry>} Resolves with the current leaderboard entry for the player after the update.
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
 * @param {string} name Name of the leaderboard.
 * @param {number} count Number of entries to get.
 * @param {number} offset Offset from the first entry (top rank) to start the count from. Default is 0.
 * @returns {Promise<leaderboardEntry[]>} Resolves with the leaderboard entries that match the query.
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
 * @param {string} name Name of the leaderboard.
 * @returns {Promise<leaderboardEntry>} Resolves with the current leaderboard entry for the player.
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
 * @param {string} name Name of the leaderboard.
 * @returns {Promise<number>} Number of entries.
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
 * @param {string} name Name of the leaderboard.
 * @param {number} count Number of entries to get.
 * @param {number} offset Offset from the first entry (top rank) to start the count from. Default is 0.
 * @returns {Promise<leaderboardEntry[]>} Resolves with the leaderboard entries that match the query.
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
