
/**
 * Gets the leaderboard with the given name. Access the leaderboard API via the Leaderboard returned here.
 * @example
 * wortal.leaderboard.getLeaderboardAsync('global')
 *  .then(leaderboard => console.log(leaderboard.name());
 * @param {string} name Name of the leaderboard.
 * @returns Promise<Leaderboard>
 */
function wortalLeaderboardGetLeaderboardAsync(name) {
    return window.Wortal.leaderboard.getLeaderboardAsync(name);
}

/**
 * Sends an entry to be added to the leaderboard, or updated if already existing. Will only update if the score
 * is a higher than the player's previous entry.
 * @example
 * wortal.leaderboard.sendEntryAsync('global', 100);
 * @param {string} name Name of the leaderboard.
 * @param {number} score Score for the entry.
 * @param {string} details Optional additional details about the entry.
 * @returns {Promise<LeaderboardEntry>} The new entry if one was created, updated entry if the score is higher, or the old entry if no new
 * high score was achieved.
 */
function wortalLeaderboardSendEntryAsync(name, score, details = "") {
    return window.Wortal.leaderboard.sendEntryAsync(name, score, details);
}

/**
 * Gets a list of leaderboard entries in the leaderboard.
 * @example
 * wortal.leaderboard.getEntriesAsync('global', 10)
 *  .then(entries => console.log(entries);
 * @param {string} name Name of the leaderboard.
 * @param {number} count Number of entries to get.
 * @param {number} offset Offset from the first entry (top rank) to start the count from. Default is 0.
 * @returns {Promise<LeaderboardEntry[]>} Array of LeaderboardEntry.
 */
function wortalLeaderboardGetEntriesAsync(name, count, offset = 0) {
    return window.Wortal.leaderboard.getEntriesAsync(name, count, offset);
}

/**
 * Gets the player's entry in the leaderboard.
 * @example
 * wortal.leaderboard.getPlayerEntryAsync('global')
 *  .then(entry => console.log(entry.rank());
 * @param {string} name Name of the leaderboard.
 * @returns {Promise<LeaderboardEntry>} LeaderboardEntry for the player.
 */
function wortalLeaderboardGetPlayerEntryAsync(name) {
    return window.Wortal.leaderboard.getPlayerEntryAsync(name);
}

/**
 * Gets the total number of entries in the leaderboard.
 * @example
 * wortal.leaderboard.getEntryCountAsync('global')
 *  .then(entries => console.log(entries);
 * @param {string} name Name of the leaderboard.
 * @returns {Promise<number>} Number of entries.
 */
function wortalLeaderboardGetEntryCountAsync(name) {
    return window.Wortal.leaderboard.getEntryCountAsync(name);
}

/**
 * Gets a list of leaderboard entries of connected players in the leaderboard.
 * wortal.leaderboard.getConnectedPlayersEntriesAsync('global')
 *  .then(entries => console.log(entries);
 * @param {string} name Name of the leaderboard.
 * @param {number} count Number of entries to get.
 * @param {number} offset Offset from the first entry (top rank) to start the count from. Default is 0.
 * @returns {Promise<LeaderboardEntry[]>} Array of LeaderboardEntry.
 */
function wortalLeaderboardGetConnectedPlayersEntriesAsync(name, count, offset) {
    return window.Wortal.leaderboard.getConnectedPlayersEntriesAsync(name, count, offset);
}

/**
 * @typedef Leaderboard
 * @property {string} name Leaderboard's name.
 * @property {string} contextId Context ID of the leaderboard, if one exists.
 */

/**
 * @typedef LeaderboardEntry
 * @property {wortalPlayer} player Player who made this entry.
 * @property {number} rank Where this entry ranks in the leaderboard.
 * @property {string} formattedScore Formatted representation of the score;
 * @property {number} timestamp When this entry was made.
 * @property {string} details Optional details about this entry.
 */
