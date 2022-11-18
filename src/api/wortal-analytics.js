
/**
 * Logs the start of a level.
 * @example
 * wortal.analytics.logLevelStart('Level 3');
 * @param {string} level Name of the level.
 */
function wortalAnalyticsLogLevelStart(level) {
    window.Wortal.analytics.logLevelStart(level);
}

/**
 * Logs the end of a level.
 * To ensure the level timer is recorded the level name must match the name passed into the
 * previous logLevelStart call. If it does not match then the timer will be logged at 0.
 * @example
 * wortal.analytics.logLevelEnd('Level 3', '100', true);
 * @param {string} level Name of the level.
 * @param {string} score Score the player achieved.
 * @param {boolean} wasCompleted Was the level completed or not.
 */
function wortalAnalyticsLogLevelEnd(level, score, wasCompleted) {
    window.Wortal.analytics.logLevelEnd(level, score, wasCompleted);
}

/**
 * Logs the player achieving a new level.
 * @example
 * wortal.analytics.logLevelUp('Level 7');
 * @param {string} level Level the player achieved.
 */
function wortalAnalyticsLogLevelUp(level) {
    window.Wortal.analytics.logLevelUp(level);
}

/**
 * Logs the player's score.
 * @example
 * wortal.analytics.logScore('100');
 * @param {string} score Score the player achieved.
 */
function wortalAnalyticsLogScore(score) {
    window.Wortal.analytics.logScore(score);
}

/**
 * Logs the start of a tutorial.
 * @example
 * wortal.analytics.logTutorialStart('First Play');
 * @param {string} tutorial Name of the tutorial.
 */
function wortalAnalyticsLogTutorialStart(tutorial) {
    window.Wortal.analytics.logTutorialStart(tutorial);
}

/**
 * Logs the end of a tutorial.
 * To ensure the level timer is recorded the tutorial name must match the name passed into the
 * previous logTutorialStart call. If it does not match then the timer will be logged at 0.
 * @example
 * wortal.analytics.logTutorialEnd('First Play', true);
 * @param {string} tutorial Name of the tutorial.
 * @param {boolean} wasCompleted Was the tutorial completed.
 */
function wortalAnalyticsLogTutorialEnd(tutorial, wasCompleted) {
    window.Wortal.analytics.logTutorialEnd(tutorial, wasCompleted);
}

/**
 * Logs a choice the player made in the game. This can be a powerful tool for balancing the game and understanding
 * what content the players are interacting with the most.
 * @example
 * wortal.analytics.logGameChoice('Character', 'Blue');
 * @param {string} decision Decision the player was faced with.
 * @param {string} choice Choice the player made.
 */
function wortalAnalyticsLogGameChoice(decision, choice) {
    window.Wortal.analytics.logGameChoice(decision, choice);
}
