
/**
 * Gets the ID of the current context.
 * @example
 * const id = wortalContextGetId();
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
 * const type = wortalContextGetType();
 * console.log(type);
 * @returns {contextType} The type of the current context.
 */
function wortalContextGetType() {
    return window.Wortal.context.getType();
}

/**
 * Gets an array of WortalPlayer objects containing information about active players in the current context
 * (people who played the game in the current context in the last 90 days).
 * @example
 * wortalContextGetPlayersAsync()
 *  .then(players => {
 *    console.log(players.length);
 *    console.log(players[0].id);
 *    console.log(players[0].name);
 *    });
 * @returns {Promise<wortalPlayer[]>} Promise that contains an array of players in the current context. This may include the current player.
 * @throws {errorMessage} See error.message for details.
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
 * @param {choosePayload} payload Object defining the options for the context choice.
 * @returns {Promise<void>} Promise that resolves when the context is switched.
 * @throws {errorMessage} See error.message for details.
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
 * @param {string} playerId ID of player to create a context with, or a list of player IDs to create a context with.
 * If not specified, a friend picker will be loaded to ask the player to create a context with friends to play with.
 * Link and Viber will only accept a single, required player ID.
 * @returns {Promise<void>} Promise that resolves when the game has switched into the new context, or rejects otherwise.
 * @throws {errorMessage} See error.message for details.
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
 * @returns {Promise<void>} Promise that resolves when the game has switched into the specified context, or rejects otherwise.
 * @throws {errorMessage} See error.message for details.
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
 * This invokes a dialog to let the user invite one or more people to the game. A blob of data can be attached to the
 * invite which every game session launched from the invite will be able to access from Wortal.session.getEntryPointData().
 * This data must be less than or equal to 1000 characters when stringified. The user may choose to cancel the action
 * and close the dialog, and the returned promise will resolve when the dialog is closed regardless of whether the user
 * actually invited people or not. The sections included in the dialog can be customized by using the sections parameter.
 * This can specify which sections to include, how many results to include in each section, and what order the sections
 * should appear in. The last section will include as many results as possible. If no sections are specified, the
 * default section settings will be applied. The filters parameter allows for filtering the results. If no results are
 * returned when the filters are applied, the results will be generated without the filters.
 * @example
 * wortalContextInviteAsync({
 *    image: 'data:base64Image',
 *    text: 'Invite text',
 *    cta: 'Play',
 *    data: { exampleData: 'yourData' },
 * }).then(() => console.log("Invite sent!"))
 * @param {invitePayload} payload Specify what to share in the invite. See example for details.
 * @returns {Promise<number>} Promise that resolves when the platform's friend picker has closed.
 * Includes number of friends the invite was shared with. Facebook will always return 0.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAM</li>
 * <li>NETWORK_FAILURE</li>
 * <li>PENDING_REQUEST</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * <li>INVALID_OPERATION</li>
 * </ul>
 */
function wortalContextInviteAsync(payload) {
    return window.Wortal.context.inviteAsync(payload);
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
 *     cta: 'Play',
 *     data: { exampleData: 'yourData' },
 * }).then(result => console.log(result);
 * @param {sharePayload} payload Object defining the share message.
 * @returns {Promise<number>} Promise that resolves when the platform's friend picker has closed.
 * Includes number of friends the message was shared with. Facebook will always return 0.
 * @throws {errorMessage} See error.message for details.
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
 * @param {linkSharePayload} payload Object defining the payload for the custom link.
 * @returns {Promise<void>} Promise that resolves when the dialog is closed.
 * @throws {errorMessage} See error.message for details.
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
 * When players launch the game from this message, those game sessions will be able to access the specified blob of
 * data through Wortal.session.getEntryPointData().
 * @example
 * wortalContextUpdateAsync({
 *     image: 'data:base64image',
 *     text: 'Update text',
 *     cta: 'Play',
 *     data: { exampleData: 'yourData' },
 * });
 * @param {updatePayload} payload Object defining the update message.
 * @returns {Promise<void>} Promise that resolves when the update is sent.
 * @throws {errorMessage} See error.message for details.
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
 * This function determines whether the number of participants in the current game context is between a given minimum
 * and maximum, inclusive. If one of the bounds is null only the other bound will be checked against. It will always
 * return the original result for the first call made in a context in a given game play session. Subsequent calls,
 * regardless of arguments, will return the answer to the original query until a context change occurs and the query
 * result is reset.
 * @example
 * const result = wortalContextIsSizeBetween(2, 4);
 * console.log(result.answer);
 * @param min Minimum number of players in context.
 * @param max Maximum number of players in context.
 * @returns {contextSizeResponse} Object with the result of the check. Null if not supported.
 */
function wortalContextIsSizeBetween(min, max) {
    return window.Wortal.context.isSizeBetween(min, max);
}
