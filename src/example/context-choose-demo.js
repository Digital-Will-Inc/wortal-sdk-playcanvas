var ContextChooseDemo = pc.createScript('contextChooseDemo');

ContextChooseDemo.prototype.initialize = function () {
    this.entity.button.on('click', function (event) {
        const app = this.app;
        wortalContextChooseAsync({
            image: createImg(256, 256),
            text: 'Invite to play',
            caption: "Invite to play",
        }).then(() => {
            var log = "New context: " + wortalContextGetId();
            console.log(log);
            app.fire("log:add", log);
        });
    }, this);
};

