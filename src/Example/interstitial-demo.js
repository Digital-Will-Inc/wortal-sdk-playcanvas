var InterstitialDemo = pc.createScript('interstitial-demo');

InterstitialDemo.prototype.initialize = function() {
    this.entity.button.on('click', function(event) {
        const app = this.app;
        showInterstitial(Placement.NEXT, 'NextLevel', {
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
            noShow: function () {
                console.log("[Wortal] NoShow");
                app.fire("log:add", "Game is resumed from noShow.");
                // Resume the game and audio here.
            }
        });
    }, this);
};