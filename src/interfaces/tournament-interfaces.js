/**
 * @typedef {object} CreateTournamentPayload
 * Represents settings used for tournament.createAsync.
 * @property {number} initialScore An integer value representing the player's score which will be the first score in the tournament.
 * @property {CreateTournamentConfig} config An object holding optional configurations for the tournament.
 * @property {object | undefined} data A blob of data to attach to the update. All game sessions launched from the update will be able to access this
 * blob from the payload on the tournament. Must be less than or equal to 1000 characters when stringified.
 */

/**
 * @typedef {object} CreateTournamentConfig
 * Represents the configurations used in creating a tournament.
 * @property {string | undefined} title Optional text title for the tournament.
 * @property {string | undefined} image Optional base64 encoded image that will be associated with the tournament and included in posts sharing the tournament.
 * @property {sortOrder | undefined} sortOrder Optional input for the ordering of which score is best in the tournament. The options are 'HIGHER_IS_BETTER'
 * or 'LOWER_IS_BETTER'. If not specified, the default is 'HIGHER_IS_BETTER'.
 * @property {scoreFormat | undefined} scoreFormat Optional input for the formatting of the scores in the tournament leaderboard. The options are 'NUMERIC'
 * or 'TIME'. If not specified, the default is 'NUMERIC'.
 * @property {number | undefined} endTime Optional input for setting a custom end time for the tournament. The number passed in represents a
 * unix timestamp. If not specified, the tournament will end one week after creation.
 */

/**
 * @typedef {object} ShareTournamentPayload
 * Represents content used to share a tournament.
 * @property {number} score An integer value representing the player's latest score.
 * @property {object | undefined} data A blob of data to attach to the update. Must be less than or equal to 1000 characters when stringified.
 */
