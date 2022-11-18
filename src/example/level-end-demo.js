var LevelEndDemo = pc.createScript('level-end-demo');

LevelEndDemo.prototype.initialize = function() {
    this.entity.button.on('click', function(event) {
        const app = this.app;
        logLevelEnd("Demo", "100", true);
        console.log("[Wortal] LogLevelEnd");
        app.fire("log:add", "Logged Level End");
    }, this);
};