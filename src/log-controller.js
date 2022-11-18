var LogController = pc.createScript('logController');
LogController.attributes.add('entryTemplateAsset', {type: 'asset', assetType: 'template'});

LogController.prototype.initialize = function() {
    this._content = this.entity.scrollview.contentEntity;

    // There's a bug with this property so this is a temporary workaround until it is fixed
    if (typeof(this._content) === 'string') {
        this._content = this.app.getEntityFromIndex(this._content);
    }

    this.app.on('log:add', this._addLog, this);
};

LogController.prototype._addLog = function(entry) {
    let instance = this.entryTemplateAsset.resource.instantiate();
    instance.reparent(this._content);
    instance.script.get("logEntry").addEntry(entry);
};