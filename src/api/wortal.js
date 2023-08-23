const wortal = document.createElement('script');
wortal.src = 'https://storage.googleapis.com/html5gameportal.com/wortal-sdk/wortal-core-1.6.js';
wortal.type = 'text/javascript';
wortal.onload = () => _checkForBody();
document.head.appendChild(wortal);

const wortalLoader = document.createElement('script');
wortalLoader.type = 'text/javascript';
wortalLoader.text =
    `var app = pc.Application.getApplication();
    app.on('preload:progress', setProgress);
    function setProgress(value) {
        if (window.Wortal) {
            window.Wortal.setLoadingProgress(value * 100);
        }
    }`;

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

function _checkForBody() {
    if (document.readyState === "loading") {
        document.addEventListener('DOMContentLoaded', _addLoader);
    } else {
        _addLoader();
    }
}

function _addLoader() {
    document.body.appendChild(wortalLoader);
}
