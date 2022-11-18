var LogEntry = pc.createScript('logEntry');
LogEntry.attributes.add('textEntity', {type: 'entity'});

LogEntry.prototype.addEntry = function(entry) {
    this.textEntity.element.text = entry;
};