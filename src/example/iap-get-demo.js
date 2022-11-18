var IapGetDemo = pc.createScript('iapGetDemo');

IapGetDemo.prototype.initialize = function () {
    this.entity.button.on('click', function (event) {
        const app = this.app;
        wortalIAPGetPurchasesAsync().then(purchases => {
            var log = "Purchases owned: " + purchases.length;
            console.log(log);
            app.fire("log:add", log);
        });
    }, this);
};
