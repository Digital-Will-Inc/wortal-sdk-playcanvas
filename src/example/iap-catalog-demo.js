var IapCatalogDemo = pc.createScript('iapCatalogDemo');

IapCatalogDemo.prototype.initialize = function() {
    this.entity.button.on('click', function (event) {
        const app = this.app;
        wortalIAPGetCatalogAsync().then(products => {
            var log1 = "Product count: " + products.length;
            var log2 = "Product 1 ID: " + products[0].productID;
            console.log(log1);
            console.log(log2);
            app.fire("log:add", log1);
            app.fire("log:add", log2);
        });
    }, this);
};
