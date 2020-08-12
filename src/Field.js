var Field = cc.Node.extend({
    ctor: function () {
        this._super();
        this.WIDTH = 9;
        this.HEIGHT = 10;
        var sbg = cc.Sprite.create(res.FieldBg);
        sbg.setAnchorPoint( cc.p( 0, 0 ) );
        this.addChild( sbg );
        for (var row = 0; row < this.HEIGHT; row++) {
            for (var col = 0; col < this.WIDTH; col++) {
                var s = new Tile(col * 171 / 2, (this.HEIGHT - row - 1) * 170 / 2);
                //s = cc.Sprite.create(res.tile.blue);
                s.setAnchorPoint( cc.p( 0, 0 ) );
                s.setPosition( cc.p( col * 171 / 2 + 50, (this.HEIGHT - row - 1) * 170 / 2 + 50) );
                this.addChild( s, this.HEIGHT - row - 1 );
            }
        }
        this.setAnchorPoint( cc.p( 0, 0 ) );
    }
});