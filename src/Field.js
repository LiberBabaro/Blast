var Field = cc.Node.extend({
    ctor: function () {
        this._super();
        this.WIDTH = 9;
        this.HEIGHT = 10;
        this.MAP = [[], [], [], [], [], [], [], [], [], []];
        var sbg = cc.Sprite.create(res.FieldBg);
        sbg.setAnchorPoint( cc.p( 0, 0 ) );
        this.addChild( sbg );
        for (var row = 0; row < this.HEIGHT; row++) {
            for (var col = 0; col < this.WIDTH; col++) {
                var s = new Tile(col * 171 / 2, (row) * 170 / 2);
                this.MAP[row][col] = s.tileColor;
                //s = cc.Sprite.create(res.tile.blue);
                s.setAnchorPoint( cc.p( 0, 0 ) );
                s.setPosition( cc.p( col * 171 / 2 + 50, (row) * 170 / 2 + 50) );
                s.setTag(row + ' ' + col);
                this.addChild( s, row );
            }
        }
        this.setAnchorPoint( cc.p( 0, 0 ) );
        cc.log(this.MAP);
        var c = this.MAP[1][8];
        cc.log(c);
        this.collapseTiles(1, 8, c);
    },

    removeTile: function( tileX, tileY ) {
        var r = tileX;
        var c = tileY;
        this.MAP[tileX][tileY] = "";
        this.removeChildByTag(r + ' ' + c);
    },

    collapseTiles: function( tileX, tileY, color ) {
        this.removeTile(tileX, tileY);
        if (tileX > 0) {
            if ( this.MAP[tileX - 1][tileY] === color ) {
                this.collapseTiles(tileX - 1, tileY, color);
            }
        }
        if ( tileX < this.HEIGHT - 1 ) {
            if ( this.MAP[tileX + 1][tileY] === color ) {
                this.collapseTiles(tileX + 1, tileY, color);
            }
        }
        if ( tileY > 0 ) {
            if ( this.MAP[tileX][tileY - 1] === color ) {
                this.collapseTiles(tileX, tileY - 1, color);
            }
        }
        if ( tileY < this.WIDTH - 1 ) {
            if ( this.MAP[tileX][tileY + 1] === color ) {
                this.collapseTiles(tileX, tileY + 1, color);
            }
        }

    }
});