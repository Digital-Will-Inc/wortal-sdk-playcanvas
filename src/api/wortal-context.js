
/**
 * Gets the ID of the current context.
 * @example
 * let id = wortalContextGetId();
 * console.log(id);
 * @returns {string | null} String ID of the current context if one exists. Null if the player is playing solo or
 * if the game is being played on a platform that does not currently support context.
 */
function wortalContextGetId() {
    return window.Wortal.context.getId();
}

/**
 * Gets the type of the current context.
 * @example
 * let type = wortalContextGetType();
 * console.log(type);
 * @returns {contextType} The type of the current context. Possible values:
 * <ul>
 * <li>SOLO - Default</li>
 * <li>THREAD</li>
 * <li>GROUP - Facebook only</li>
 * <li>POST - Facebook only</li>
 * </ul>
 */
function wortalContextGetType() {
    return window.Wortal.context.getType();
}

/**
 * Gets an array of WortalPlayer objects containing information about active players in the current context
 * (people who played the game in the current context in the last 90 days). This may include the current player.
 * @example
 * wortalContextGetPlayersAsync()
 *  .then(players => {
 *    console.log(players.length);
 *    console.log(players[0].id);
 *    console.log(players[0].name);
 *    });
 * @returns {Promise<wortalPlayer[]>} Array of players in the current context.
 * @throws {ErrorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>NETWORK_FAILURE</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * <li>INVALID_OPERATION</li>
 * </ul>
 */
function wortalContextGetPlayersAsync() {
    return window.Wortal.context.getPlayersAsync();
}

/**
 * Opens a context selection dialog for the player. If the player selects an available context, the client will attempt
 * to switch into that context, and resolve if successful. Otherwise, if the player exits the menu or the client fails
 * to switch into the new context, this function will reject.
 * @example
 * wortalContextChooseAsync({
 *     image: 'data:base64Image',
 *     text: 'Invite text',
 *     caption: 'Play',
 *     data: { exampleData: 'yourData' },
 * })
 * @param {contextPayload} payload Object defining the options for the context choice.
 * @returns {Promise<void>} A promise that resolves with an array of player IDs of the players that were invited.
 * @throws {ErrorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAM</li>
 * <li>SAME_CONTEXT</li>
 * <li>NETWORK_FAILURE</li>
 * <li>USER_INPUT</li>
 * <li>PENDING_REQUEST</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * </ul>
 */
function wortalContextChooseAsync(payload) {
    return window.Wortal.context.chooseAsync(payload);
}

/**
 * <p>Attempts to create a context between the current player and a specified player or a list of players. This API
 * supports 3 use cases: 1) When the input is a single playerID, it attempts to create or switch into a context between
 * a specified player and the current player 2) When the input is a list of connected playerIDs, it attempts to create
 * a context containing all the players 3) When there's no input, a friend picker will be loaded to ask the player to
 * create a context with friends to play with.</p>
 * <p>For each of these cases, the returned promise will reject if any of the players listed are not Connected Players
 * of the current player, or if the player denies the request to enter the new context. Otherwise, the promise will
 * resolve when the game has switched into the new context.</p>
 * @example
 * wortalContextCreateAsync('player123');
 * @param {string} playerId ID of player to create a context with.
 * @returns {Promise<void>} A promise that resolves when the game has switched into the new context, or rejects otherwise.
 * @throws {ErrorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAM</li>
 * <li>SAME_CONTEXT</li>
 * <li>NETWORK_FAILURE</li>
 * <li>USER_INPUT</li>
 * <li>PENDING_REQUEST</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * </ul>
 */
function wortalContextCreateAsync(playerId) {
    return window.Wortal.context.createAsync(playerId);
}

/**
 * Request a switch into a specific context. If the player does not have permission to enter that context, or if the
 * player does not provide permission for the game to enter that context, this will reject. Otherwise, the promise will
 * resolve when the game has switched into the specified context.
 * @example
 * wortalContextSwitchAsync('abc123');
 * @param {string} contextId ID of the context to switch to.
 * @returns {Promise<void>} A promise that resolves when the game has switched into the specified context, or rejects otherwise.
 * @throws {ErrorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAM</li>
 * <li>SAME_CONTEXT</li>
 * <li>NETWORK_FAILURE</li>
 * <li>USER_INPUT</li>
 * <li>PENDING_REQUEST</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * </ul>
 */
function wortalContextSwitchAsync(contextId) {
    return window.Wortal.context.switchAsync(contextId);
}

/**
 * This invokes a dialog to let the user share specified content, as a post on the user's timeline, for example.
 * A blob of data can be attached to the share which every game session launched from the share will be able to access
 * from Wortal.session.getEntryPointData(). This data must be less than or equal to 1000 characters when stringified.
 * The user may choose to cancel the share action and close the dialog, and the returned promise will resolve when the
 * dialog is closed regardless if the user actually shared the content or not.
 * @example
 * wortalContextShareAsync({
 *     image: 'data:base64image',
 *     text: 'Share text',
 *     caption: 'Play',
 *     data: { exampleData: 'yourData' },
 * }).then(result => console.log(result); // Contains shareCount with number of friends the share was sent to.
 * @param {contextPayload} payload Object defining the share message.
 * @returns {Promise<number>} Number of friends the message was shared with. Facebook will return 0.
 * @throws {ErrorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAM</li>
 * <li>NETWORK_FAILURE</li>
 * <li>PENDING_REQUEST</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * <li>INVALID_OPERATION</li>
 * </ul>
 */
function wortalContextShareAsync(payload) {
    return window.Wortal.context.shareAsync(payload);
}

/**
 * This invokes a dialog that contains a custom game link that users can copy to their clipboard, or share.
 * A blob of data can be attached to the custom link - game sessions initiated from the link will be able to access the
 * data through Wortal.session.getEntryPointData(). This data should be less than or equal to 1000 characters when
 * stringified. The provided text and image will be used to generate the link preview, with the game name as the title
 * of the preview. The text is recommended to be less than 44 characters. The image is recommended to either be a square
 * or of the aspect ratio 1.91:1. The returned promise will resolve when the dialog is closed regardless if the user
 * actually shared the link or not.
 * @example
 * wortalContextShareLinkAsync({
 *    image: 'data:base64Image',
 *    text: 'Share text',
 *    data: { exampleData: 'yourData' },
 * })
 * .then(() => resumeGame);
 * @param payload Object defining the payload for the custom link.
 * @returns {Promise<void>} Promise that resolves when the dialog is closed.
 * @throws {ErrorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAM</li>
 * <li>NETWORK_FAILURE</li>
 * <li>PENDING_REQUEST</li>
 * <li>INVALID_OPERATION</li>
 * </ul>
 */
function wortalContextShareLinkAsync(payload) {
    return window.Wortal.context.shareLinkAsync(payload);
}

/**
 * Posts an update to the current context. Will send a message to the chat thread of the current context.
 * @example
 * wortalContextUpdateAsync({
 *     image: 'data:base64image',
 *     text: 'Update text',
 *     caption: 'Play',
 *     data: { exampleData: 'yourData' },
 * });
 * @param {contextPayload} payload Object defining the update message.
 * @returns {Promise<void>} Promise that resolves when the update is sent.
 * @throws {ErrorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAM</li>
 * <li>PENDING_REQUEST</li>
 * <li>INVALID_OPERATION</li>
 * </ul>
 */
function wortalContextUpdateAsync(payload) {
    return window.Wortal.context.updateAsync(payload);
}

/**
 * @typedef contextPayload
 * @property {string} image URL of base64 encoded image to be displayed. This is required for the payload to be sent.
 * @property {string | localizableContent} text Message body. This is required for the payload to be sent.
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
 * @property {shareDestination | undefined} shareDestination Specifies where the share should appear.
 * @property {boolean} switchContext Should the player switch context or not.
 * @property {action | undefined} action Not used
 * @property {string | undefined} template Not used
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
 * @typedef {string} contextType
 * 'SOLO' | 'THREAD' | 'GROUP' | 'POST'
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

/**
 * @typedef {string} shareDestination
 * 'NEWSFEED' | 'GROUP' | 'COPY_LINK' | 'MESSENGER'
 */

/**
 * @typedef {string} action
 * 'CUSTOM'
 */
