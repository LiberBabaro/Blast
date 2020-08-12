var Tile = cc.Node.extend({
    ctor: function (x, y) {
        this._super();
        this.tileColor = this.randomColor();
        //cc.log(res.tile[this.color]);
        //cc.log(color);
        s = cc.Sprite.create(res.tile[this.tileColor]);
        s.setAnchorPoint( cc.p( 0, 0 ) );
        s.setPosition( cc.p( x, y ) );
        this.addChild( s );
    },

    randomColor: function() {
        var index = Math.floor(Math.random() * (4 + 1));
        cc.log(colors);
        cc.log(index);
        return colors[index];
    }
});

colors = ['blue', 'purple', 'red', 'yellow', 'green'];