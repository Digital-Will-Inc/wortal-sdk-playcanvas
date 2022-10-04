var RewardedDemo = pc.createScript('rewarded-demo');

RewardedDemo.prototype.initialize = function() {
    this.entity.button.on('click', function(event) {
        const app = this.app;
        showRewarded('ReviveAndContinue', {
            beforeAd: function () {
                console.log("[Wortal] BeforeAd");
                app.fire("log:add", "Game is paused from beforeAd");
                // Pause the game and audio here.
            },
            afterAd: function () {
                console.log("[Wortal] AfterAd");
                app.fire("log:add", "Game is resumed from afterAd.");
                // Resume the game and audio here.
            },
            adDismissed: function () {
                console.log("[Wortal] AdDismissed");
                app.fire("log:add", "Not rewarding player.");
                // Do not reward the player, they did not watch the entire ad.
            },
            adViewed: function () {
                console.log("[Wortal] AdViewed");
                app.fire("log:add", "Rewarding player.");
                // Reward the player here, they watched the entire ad.
            }
        });
    }, this);
};
