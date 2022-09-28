var ScrollVerticalAreaFitter = pc.createScript('scrollVerticalAreaFitter');

ScrollVerticalAreaFitter.prototype._onContentChanged = function() {
    var layoutGroup = this.entity.layoutgroup;
    if (layoutGroup) {
        // Get all the children that are a layout element and resize the content element
        // and work out the height needed

        // Get the padding for the top and bottom
        var height = layoutGroup.padding.y + layoutGroup.padding.w;
        var layoutChildCount = 0;
        var children = this.entity.children;
        for (var i = 0; i < children.length; ++i) {
            var child = children[i];

            // Add the height of layout child to the new height of the content element
            if (child.layoutchild) {
                layoutChildCount += 1;
                height += child.element.height;
            }
        }

        // Add the spacing
        height += Math.max(0, layoutChildCount - 1) * layoutGroup.spacing.y;

        this.entity.element.height = height;
    }
};

ScrollVerticalAreaFitter.prototype.initialize = function() {
    this.entity.on('contentchanged', this._onContentChanged, this);

    this._onContentChanged();
};