var LevelStartDemo = pc.createScript('level-start-demo');

LevelStartDemo.prototype.initialize = function() {
    this.entity.button.on('click', function(event) {
        const app = this.app;
        logLevelStart("Demo");
        console.log("[Wortal] LogLevelStart");
        app.fire("log:add", "Logged Level Start");
    }, this);
};