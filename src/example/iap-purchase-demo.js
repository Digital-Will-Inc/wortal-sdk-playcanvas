var IapPurchaseDemo = pc.createScript('iapPurchaseDemo');

IapPurchaseDemo.prototype.initialize = function() {
    this.entity.button.on('click', function (event) {
        const app = this.app;
        wortalIAPMakePurchaseAsync({productID: "test"})
            .then(purchase => {
                purchaseToken = purchase.purchaseToken;
                var log = "Purchased product: " + purchase.productID;
                console.log(log);
                app.fire("log:add", log);
            });
    }, this);
};
