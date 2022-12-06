const wortal = document.createElement('script');
wortal.src = 'https://cdn.html5gameportal.com/wortal-sdk/wortal-core-1.2.0.js';
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
