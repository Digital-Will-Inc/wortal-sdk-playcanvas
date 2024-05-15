const wortal = document.createElement('script');
wortal.src = 'https://storage.googleapis.com/cdn-wortal-ai/v2/wortal-core.js';
wortal.type = 'text/javascript';
document.head.appendChild(wortal);

/**
 * Returns true if the SDK Core has been initialized.
 */
function wortalIsInitialized() {
    return window.Wortal.isInitialized;
}

/**
 * Initializes the SDK. This should be called before any other SDK functions. It is recommended to call this
 * as soon as the script has been loaded to shorten the initialization time.
 *
 * NOTE: This is only available if the manual initialization option is set to true. Otherwise, the SDK will initialize automatically.
 *
 * PLATFORM NOTE: Only supported on Viber, Link and Facebook.
 * @example
 * wortalInitializeAsync().then(() => {
 *    // SDK is ready to use, wait for game to finish loading.
 *    wortalSetLoadingProgress(100);
 *    wortalStartGameAsync();
 * });
 * @returns {Promise<void>} Promise that resolves when the SDK initialized successfully.
 * @throws {ErrorMessage} See error.message for details.
 * <ul>
 * <li>INITIALIZATION_ERROR</li>
 * <li>NOT_SUPPORTED</li>
 * </ul>
 */
async function wortalInitializeAsync() {
    return window.Wortal.initializeAsync();
}

/**
 * This indicates that the game has finished initial loading and is ready to start. Context information will be
 * up-to-date when the returned promise resolves. The loading screen will be removed after this is called along with
 * the following conditions:
 * <ul>
 * <li>initializeAsync has been called and resolved</li>
 * <li>setLoadingProgress has been called with a value of 100</li>
 * </ul>
 *
 * NOTE: This is only available if the manual initialization option is set to true. Otherwise, the game will start automatically.
 *
 * PLATFORM NOTE: Only supported on Viber, Link and Facebook.
 * @example
 * wortalStartGameAsync().then(() => {
 *    // Game is rendered to player.
 * });
 * @returns {Promise<void>} Promise that resolves when the game has started successfully.
 * @throws {ErrorMessage} See error.message for details.
 * <ul>
 * <li>INITIALIZATION_ERROR</li>
 * <li>NOT_SUPPORTED</li>
 * </ul>
 */
async function wortalStartGameAsync() {
    return window.Wortal.startGameAsync();
}

/**
 * Sets the loading progress value for the game. This is required for the game to start. Failure to call this with 100
 * once the game is fully loaded will prevent the game from starting.
 * @example
 * onGameLoadProgress(percent) {
 *     wortalSetLoadingProgress(percent);
 * }
 *
 * onGameLoaded() {
 *     wortalSetLoadingProgress(100);
 * }
 * @param value Percentage of loading complete. Range is 0 to 100.
 */
function wortalSetLoadingProgress(value) {
    window.Wortal.setLoadingProgress(value);
}

/**
 * Sets a callback which will be invoked when the app is brought to the background.
 * @param callback Callback to invoke.
 */
function wortalOnPause(callback) {
    window.Wortal.onPause(() => {
        callback();
    });
}

/**
 * Requests and performs haptic feedback on supported devices.
 * @returns {Promise<void>} Haptic feedback requested successfully
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>CLIENT_UNSUPPORTED_OPERATION</li>
 * <li>INVALID_OPERATION</li>
 * </ul>
 */
function wortalPerformHapticFeedbackAsync() {
    return window.Wortal.performHapticFeedbackAsync();
}

/**
 * Gets the supported APIs for the current platform.
 * @example
 * const wortalGetSupportedAPIs = wortal.getSupportedAPIs();
 * if (supportedAPIs.includes("context.shareAsync")) {
 *    shareWithFriendsDialog.show();
 * }
 * @returns {string[]} Array of supported APIs.
 */
function wortalGetSupportedAPIs() {
    return window.Wortal.getSupportedAPIs();
}
