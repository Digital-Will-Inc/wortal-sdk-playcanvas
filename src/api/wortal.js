const wortal = document.createElement('script');
wortal.src = 'https://storage.googleapis.com/html5gameportal.com/wortal-sdk/wortal-core-1.5.0.js';
wortal.type = 'text/javascript';
wortal.onload = () => checkForBody();
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

function checkForBody() {
    if (document.readyState === "loading") {
        document.addEventListener('DOMContentLoaded', addLoader);
    } else {
        addLoader();
    }
}

function addLoader() {
    document.body.appendChild(wortalLoader);
}

/**
 * Registers a callback for when the game is paused via platform SDK.
 * @param callback
 */
function onPause(callback) {
    window.Wortal.onPause(() => {
        callback();
    });
}
