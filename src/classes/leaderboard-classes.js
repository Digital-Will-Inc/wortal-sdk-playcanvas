
/**
 * @typedef {object} leaderboard
 * Represents a single leaderboard.
 * @property {string} name Leaderboard's name.
 * @property {string} contextId Context ID of the leaderboard, if one exists.
 */

/**
 * @typedef {object} leaderboardEntry
 * Represents a single entry in a leaderboard.
 * @property {wortalPlayer} player Player who made this entry.
 * @property {number} rank Where this entry ranks in the leaderboard.
 * @property {number} score Score of this entry.
 * @property {string} formattedScore Formatted representation of the score;
 * @property {number} timestamp When this entry was made.
 * @property {string} details Optional details about this entry.
 */
