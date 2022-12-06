
/**
 * Shows an interstitial ad. These can be shown at various points in the game such as a level end, restart or a timed
 * interval in games with longer levels.
 * @example
 * // Player reached the next level.
 * wortal.ads.showInterstitial('next', 'NextLevel', pauseGame, resumeGame);
 *
 * // Player paused the game.
 * wortal.ads.showInterstitial('pause', 'PausedGame', pauseGame, resumeGame);
 *
 * // Player opened the IAP shop.
 * wortal.ads.showInterstitial('browse', 'BrowseShop', pauseAudio, resumeAudio);
 * @param {placement} placement Placement type for the ad.
 * @param {string} description Description of the placement.
 * @param {function} beforeAd Callback for before the ad is shown. Pause the game here.
 * @param {function} afterAd Callback for after the ad is shown. Resume the game here.
 */
function wortalAdsShowInterstitial(placement, description, beforeAd, afterAd) {
    window.Wortal.ads.showInterstitial(placement, description, beforeAd, afterAd);
}

/**
 * Shows a rewarded ad. These are longer, optional ads that the player can earn a reward for watching. The player
 * must be notified of the ad and give permission to show before it can be shown.
 * @example
 * // This example shows the game flow independent of the outcome of the ad.
 * wortal.ads.showRewarded('BonusCoins', pauseGame, resumeGame, skipBonus, addBonusCoins);
 *
 * // This example shows the game flow depending on the outcome of the ad.
 * wortal.ads.showRewarded('ReviveAndContinue', pauseAudio, resumeAudio, endGame, continueGame);
 * @param {string} description Description of the placement.
 * @param {function} beforeAd Callback for before the ad is shown. Pause the game here.
 * @param {function} afterAd Callback for after the ad is shown. Resume the game here.
 * @param {function} adDismissed Callback for when the player dismissed the ad. Do not reward the player.
 * @param {function} adViewed Callback for when the player has successfully watched the ad. Reward the player here.
 */
function wortalAdsShowRewarded(description, beforeAd, afterAd, adDismissed, adViewed) {
    window.Wortal.ads.showRewarded(description, beforeAd, afterAd, adDismissed, adViewed);
}

/**
 * @typedef {string} placement
 * 'next' | 'pause' | 'browse' | 'start'
 */
