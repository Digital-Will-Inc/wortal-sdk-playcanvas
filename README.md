# Wortal SDK for PlayCanvas

## Installation
1. Add `wortal.js` to the game
    1. Included in the [Wortal SDK demo project](https://playcanvas.com/project/984829)
    2. Available on [GitHub](https://github.com/Digital-Will-Inc/html5-games/blob/main/Utils/wortal.js)
2. Set `GAME_NAME` in `wortal.js` to the game’s name
3. Set [Loading Type](https://developer.playcanvas.com/en/user-manual/scripting/loading-order/) to [After Engine](https://developer.playcanvas.com/en/user-manual/scripting/application-lifecyle/) for `wortal.js`

![Loading Type Settings](/docs/img/loading-type.png)

4. Call for ads in the game code
    1. Demo scripts included in the [Wortal SDK demo project](https://playcanvas.com/project/984829)
    2. Example snippets in the How to Use section
5. Build the game
6. Add [intl-data.json](res/intl-data.json) to the root of the build directory
7. Modify the `index.html` to include required changes
8. Create a `.zip` archive of the game with the `index.html` at the root
9. Upload build to the Wortal dashboard

## Required Changes to index.html
The Wortal SDK requires a couple modifications to the game’s `body` section to work properly.

### Loading Cover
The game is required to delay rendering and playing audio until any possible pre-roll ad has finished playing.

The following div needs to be added to the `<body>`:
```html
<div class="loading-cover" id="loading-cover" style="background: #000; width: 100%; height: 100%; position: fixed; z-index: 100;"></div>
```

### Loading Progress
Some platforms require the game to use their splash screen and loading progress bar. To comply with this requirement the game must report its loading progress to the Wortal. Failure to do so will result in the game not starting on certain platforms.

The following script should be added immediately after the `__loading__.js` script:
```html
<script>
    var app = pc.Application.getApplication();
    app.on('preload:progress', setProgress);
    function setProgress(value) {
        if (window.wortalGame) {
            wortalGame.setLoadingProgress(value * 100);
        }
    }
</script>
```

### Example index.html
The following example shows what a modified `index.html` may look like, and the specific positions the above code should be added:

```html
<!doctype html>
<html>
<head>
    <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover' />
    <meta charset='utf-8'>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="manifest" href="manifest.json">
    <style></style>
    <title>Really Fun Game</title>
    <script src="playcanvas-stable.min.js"></script>
    <!-- This is added here during the build if it is marked ‘After Engine’ -->
    <script src="files/assets/102672447/1/wortal.js"></script>
    <script src="__settings__.js"></script>
</head>
<body>
<!-- This should be first in the body to cover anything else from rendering too early -->
<div class="loading-cover" id="loading-cover" style="background: #000; width: 100%; height: 100%; position: fixed; z-index: 100;"></div>
<script src="__modules__.js"></script>
<script src="__start__.js"></script>
<script src="__loading__.js"></script>
<!-- This should be added here to report the loading progress -->
<script>
    var app = pc.Application.getApplication();
    app.on('preload:progress', setProgress);
    function setProgress(value) {
        if(window.wortalGame) {
            wortalGame.setLoadingProgress(value * 100);
        }
    }
</script>
</body>
</html>
```

## How to Use
### Interstitial Ads
Interstitial ads are convenient to show to players at certain milestones throughout your game. Ex: Player finishes a level, player levels up, etc.
```javascript
showInterstitial(Placement.NEXT, 'NextLevel', {
    beforeAd: function () {
        console.log("[Wortal] BeforeAd");
        // Pause the game and audio here.
    },
    afterAd: function () {
        console.log("[Wortal] AfterAd");
        // Resume the game and audio here.
    },
});
```

### Rewarded Ads
Rewarded ads can be used to offer the player bonuses or other incentives during the game. These ads are longer and require the player to watch the ad in its entirety to receive the reward, but are optional.

```javascript
showRewarded('ReviveAndContinue', {
    beforeAd: function () {
        console.log("[Wortal] BeforeAd");
        // Pause the game and audio here.
    },
    afterAd: function () {
        console.log("[Wortal] AfterAd");
        // Resume the game and audio here.
    },
    adDismissed: function () {
        console.log("[Wortal] AdDismissed");
        // Do not reward the player, they did not watch the entire ad.
    },
    adViewed: function () {
        console.log("[Wortal] AdViewed");
        // Reward the player here, they watched the entire ad.
    }
});
```

### Analytics
The analytics API can be used to track in game events to get a better understanding of how players are interacting with the game.

```javascript
// Log an event at the beginning of the level.
logLevelStart(level);

// Log an event at the end of the level which will track how long it took the player to finish.
logLevelEnd(level, score, wasCompleted);

// Log the player's choice when offered different options.
// This can be useful for determining which characters are more popular, or paths are more commonly taken, etc.
// This can be a powerful tool for balancing the game and giving the players more of what they enjoy.
logGameChoice('Character', 'Blue');
```
