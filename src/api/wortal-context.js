
/**
 * Gets the ID of the current context.
 * @example
 * let id = wortal.context.getId();
 * console.log(id);
 * @returns {string} ID of the current context if one exists. Null if the player is playing solo. Empty string if the
 * game is being played on a platform that does not currently support context.
 */
function wortalContextGetId() {
    return window.Wortal.context.getId();
}

/**
 * Opens the platform UI to select friends to invite and play with.
 * @example
 * wortal.context.chooseAsync('Invite text', 'https://link.to.img', {
 *     caption: 'Play',
 *     data: { exampleData: 'yourData' },
 * })
 * @param {string} text Message body of the share. This is required for the share to succeed.
 * @param {string} image URL to the base64 image to include with this share. This is required for the share to succeed.
 * @param {contextPayload} payload Object defining the options for the context choice.
 * @returns {Promise<void>}
 */
function wortalContextChooseAsync(text, image, payload) {
    return window.Wortal.context.chooseAsync(text, image, payload);
}

/**
 * Creates a context with the given player ID.
 * @example
 * wortal.context.createAsync('player123');
 * @param {string} playerId ID of player to create a context with.
 * @returns {Promise<void>}
 */
function wortalContextCreateAsync(playerId) {
    return window.Wortal.context.createAsync(playerId);
}

/**
 * Switches the current context to the context with the given ID.
 * @example
 * wortal.context.switchAsync('abc123');
 * @param {string} contextId ID of the context to switch to.
 * @returns {Promise<void>}
 */
function wortalContextSwitchAsync(contextId) {
    return window.Wortal.context.switchAsync(contextId);
}

/**
 * Shares a message to the player's friends. Will trigger a UI for the player to choose which friends to share with.
 * @example
 * wortal.context.shareAsync('Share text', 'https://link.to.img', {
 *     caption: 'Play',
 *     data: { exampleData: 'yourData' },
 * }).then(result => console.log(result); // Contains shareCount with number of friends the share was sent to.
 * @param {string} text Message body of the share.
 * @param {string} image URL to the base64 image to include with this share.
 * @param {contextPayload} payload Object defining the share message.
 * @returns {Promise<number>} Number of friends the message was shared with.
 */
function wortalContextShareAsync(text, image, payload) {
    return window.Wortal.context.shareAsync(text, image, payload);
}

/**
 * Posts an update to the current context. Will send a message to the chat thread of the current context.
 * @example
 * wortal.context.updateAsync('Update text', 'https://link.to.img', {
 *     caption: 'Play',
 *     data: { exampleData: 'yourData' },
 * });
 * @param {string} text Message body of the update.
 * @param {string} image URL to the base64 image to include with this update.
 * @param {contextPayload} payload Object defining the update message.
 * @returns {Promise<void>}
 */
function wortalContextUpdateAsync(text, image, payload) {
    return window.Wortal.context.updateAsync(text, image, payload);
}

/**
 * @typedef contextPayload
 * @property {string | undefined} image URL of base64 encoded image to be displayed. This is required for the payload to be sent.
 * @property {string | localizableContent | undefined} text Message body. This is required for the payload to be sent.
 * @property {string | localizableContent | undefined} caption Text of the call-to-action button.
 * @property {string | localizableContent | undefined} cta Text of the call-to-action button.
 * @property {Record<string, unknown> | undefined} data Object passed to any session launched from this context message.
 * Its size must be <=1000 chars when stringified.
 * It can be accessed from `wortal.context.getEntryPointData()`
 * @property {[contextFilter] | undefined} filters An array of filters to be applied to the friend list. Only the first filter is currently used.
 * @property {number | undefined} maxSize Context maximum size.
 * @property {number | undefined} minSize Context minimum size.
 * @property {number | undefined} hoursSinceInvitation Specify how long a friend should be filtered out after the current player sends them a message.
 * This parameter only applies when `NEW_INVITATIONS_ONLY` filter is used.
 * When not specified, it will filter out any friend who has been sent a message.
 * @property {string | localizableContent | undefined} description Optional customizable text field in the share UI.
 * This can be used to describe the incentive a user can get from sharing.
 * @property {intent | undefined} intent Message format to be used. There's no visible difference among the available options.
 * @property {ui | undefined} ui Optional property to switch share UI mode.
 * DEFAULT: Serial contact card with share and skip button.
 * MULTIPLE: Selectable contact list.
 * @property {number | undefined} minShare Defines the minimum number of players to be selected to start sharing.
 * @property {strategy | undefined} strategy Defines how the update message should be delivered.
 * IMMEDIATE: will be sent immediately.
 * LAST: when the game session ends, the latest payload will be sent.
 * IMMEDIATE_CLEAR: will be sent immediately, and also discard any pending `LAST` payloads in the same session.
 * @property {notifications | undefined} notifications Specifies if the message should trigger push notification.
 */

/**
 * @typedef localizableContent
 * @property {string} default Text will be used if not finding matching locale
 * @property {Record<string, string>} localizations Key value pairs of localized strings
 */

/**
 * @typedef {string} contextFilter
 * 'NEW_CONTEXT_ONLY'
 * | 'INCLUDE_EXISTING_CHALLENGES'
 * | 'NEW_PLAYERS_ONLY'
 * | 'NEW_INVITATIONS_ONLY';
 */

/**
 * @typedef {string} intent
 * 'INVITE' | 'REQUEST' | 'CHALLENGE' | 'SHARE'
 */

/**
 * @typedef {string} ui
 * 'DEFAULT' | 'MULTIPLE'
 */

/**
 * @typedef {string} strategy
 * 'IMMEDIATE' | 'LAST' | 'IMMEDIATE_CLEAR'
 */

/**
 * @typedef {string} notifications
 * 'NO_PUSH' | 'PUSH'
 */
