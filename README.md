# Wortal SDK for PlayCanvas

## Installation
1. Add `Wortal` scripts to the game:
    1. Folder included in the [Wortal SDK demo project](https://playcanvas.com/project/984829)
    2. Package available on [GitHub](https://github.com/Digital-Will-Inc/wortal-sdk-playcanvas/releases)
2. Set [Loading Type](https://developer.playcanvas.com/en/user-manual/scripting/loading-order/) to [After Engine](https://developer.playcanvas.com/en/user-manual/scripting/application-lifecyle/) for `wortal.js`

![Loading Type Settings](/docs/img/playcanvas-loading-type.png)

## How to Use

### Ads

[API Reference](https://sdk.html5gameportal.com/api/ads/)

Interstitial ads can be shown at various points in the game such as a level end, restart or a timed
interval in games with longer levels.

```javascript
// Player reached the next level.
wortalAdsShowInterstitial('next', 'NextLevel', pauseGame, resumeGame);

// Player paused the game.
wortalAdsShowInterstitial('pause', 'PausedGame', pauseGame, resumeGame);

// Player opened the IAP shop.
wortalAdsShowInterstitial('browse', 'BrowseShop', pauseAudio, resumeAudio);
```

Rewarded ads can be shown too. These are longer, optional ads that the player can earn a reward for watching. The player
must be notified of the ad and give permission to show before it can be shown.

```javascript
// This example shows the game flow independent of the outcome of the ad.
// Ex: Player gets bonus coins for watching the ad, but the game continues regardless of the outcome.
wortalAdsShowRewarded('BonusCoins', pauseGame, resumeGame, skipBonus, addBonusCoins);

// This example shows the game flow depending on the outcome of the ad.
// Ex: Player dies and can revive by watching an ad, but if they skip the ad they lose the level.
wortalAdsShowRewarded('ReviveAndContinue', pauseAudio, resumeAudio, endGame, continueGame);
```

**NOTE**: Players should only be rewarded in the `adViewed` callback.

### Analytics

[API Reference](https://sdk.html5gameportal.com/api/analytics/)

The Analytics API can be used to track game events that can help better understand how players are interacting with
the game. This data will be available for viewing in the Wortal dashboard.

```javascript
// Logs the start of the level.
wortalAnalyticsLogLevelStart('Level 3');

// Logs the end of the level. Will track the time spent playing the level if the name matches
// the name of the last logLevelStart() call.
wortalAnalyticsLogLevelEnd('Level 3', '100', true);

// Logs a choice the player made in the game. This can be useful for balancing the game
// and seeing what content your players interact with the most.
wortalAnalyticsLogGameChoice('Character', 'Blue');
```

### Context

[API Reference](https://sdk.html5gameportal.com/api/context/)

The Context API is used to connect players and allow them to interact in the game session, share their content
and send messages to each other.

```javascript
// Invite a friend to play the game.
wortalContextInviteAsync({
    image: 'data:base64Image',
    text: 'Invite text',
    cta: 'Play',
    data: { exampleData: 'yourData' },
}).then(() => console.log("Invite sent!"));

// Share your game activity with friends.
wortalContextShareAsync({
    image: 'data:base64image',
    text: 'Share text',
    cta: 'Play',
    data: { exampleData: 'yourData' },
}).then(result => console.log(result));
```

### In-App Purchases

[API Reference](https://sdk.html5gameportal.com/api/iap/)

The In-App Purchases (IAP) API is used to provide an interface for in-game transactions on the platforms.
This process will differ based on what platform the game is being played on, but the API remains the same.

```javascript
// Get the catalog of products the player can purchase.
wortalIAPGetCatalogAsync()
    .then(products => console.log(products));

// Purchase a product.
wortalIAPMakePurchaseAsync({
    productID: 'my_product_123',
}).then(purchase => console.log(purchase));
```

### Leaderboards

[API Reference](https://sdk.html5gameportal.com/api/leaderboard/)

The Leaderboard API gives the game access to the platform's leaderboard functionality. This is where
you can track player's scores and compare them to other players.

```javascript
// Get the top 10 entries on the global leaderboard.
wortalLeaderboardGetEntriesAsync('global', 10)
    .then(entries => console.log(entries));

// Add the player's score to the leaderboard.
wortalLeaderboardSendEntryAsync('global', 100);
```

### Player

[API Reference](https://sdk.html5gameportal.com/api/player/)

You can find details about the current player via the Player API.

```javascript
// Get the player's name.
wortalPlayerGetName();

// Get a list of the player's friends who have also played this game.
wortalPlayerGetConnectedPlayersAsync({
    filter: 'ALL',
    size: 20,
    hoursSinceInvitation: 4,
}).then(players => console.log(players.length));
```

### Session

[API Reference](https://sdk.html5gameportal.com/api/session/)

Details about the current session can be accessed in the Session API.

```javascript
// Get the entry point of where the game started from.
wortalSessionGetEntryPointAsync()
 .then(entryPoint => console.log(entryPoint));

// Get the entry point data from a social invite or share.
// This is useful for tracking where players are coming from or
// providing a reward for players who were invited to play.
const data = wortalSessionGetEntryPointData();
console.log(data);
```
