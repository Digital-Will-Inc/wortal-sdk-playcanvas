var ContextShareDemo = pc.createScript('contextShareDemo');

ContextShareDemo.prototype.initialize = function () {
    this.entity.button.on('click', function (event) {
        const app = this.app;
        wortalContextShareAsync({
            image: createImg(1200, 1200),
            text: 'Share',
            intent: "REQUEST",
            caption: "Play",
        }).then(res => {
            var log = "Share count: " + res;
            console.log(log);
            app.fire("log:add", log);
        });
    }, this);
};
