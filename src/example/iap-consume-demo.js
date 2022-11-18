var IapConsumeDemo = pc.createScript('iapConsumeDemo');

IapConsumeDemo.prototype.initialize = function() {
    this.entity.button.on('click', function (event) {
        const app = this.app;
        wortalIAPConsumePurchaseAsync(purchaseToken).then(() => {
            var log = "Purchase consumed";
            console.log(log);
            app.fire("log:add", log);
        });
    }, this);
};
