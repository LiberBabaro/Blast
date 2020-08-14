var Field = cc.Node.extend({
    WIDTH: 9,
    HEIGHT: 10,
    MAP: [[], [], [], [], [], [], [], [], [], []],
    COLORS_MAP: [[], [], [], [], [], [], [], [], [], []],

    ctor: function () {
        this._super();
        var sbg = cc.Sprite.create(res.FieldBg);
        sbg.setAnchorPoint( cc.p( 0, 0 ) );
        this.addChild( sbg );
        for (var row = 0; row < this.HEIGHT; row++) {
            for (var col = 0; col < this.WIDTH; col++) {
                var s = new Tile(col * 171 / 2, (row) * 170 / 2);
                this.MAP[row][col] = s;
                this.COLORS_MAP[row][col] = s.tileColor;
                //s = cc.Sprite.create(res.tile.blue);
                s.setAnchorPoint( cc.p( 0, 0 ) );
                s.setPosition( cc.p( col * 171 / 2 + 50, (row) * 170 / 2 + 50) );
                s.setTag(row + ' ' + col);
                this.addChild( s, row );
            }
        }
        this.setAnchorPoint( cc.p( 0, 0 ) );
        cc.log(this.MAP);
        cc.log(this.COLORS_MAP);
        var c = this.COLORS_MAP[1][8];
        cc.log(c);
        this.addHandlers();
        if (this.isCollapasable(1, 8)) {
            this.collapseTiles(1, 8, c);
        }
    },

    removeTile: function( tileX, tileY ) {
        var r = tileX;
        var c = tileY;
        this.removeChild(this.MAP[tileX][tileY], true);
        this.MAP[tileX][tileY] = null;
        this.COLORS_MAP[tileX][tileY] = "";
        cc.log(this.MAP[tileX][tileY]);
    },

    collapseTiles: function( tileX, tileY, color ) {
        this.removeTile(tileX, tileY);
        if (tileX > 0) {
            if ( this.COLORS_MAP[tileX - 1][tileY] === color ) {
                this.collapseTiles(tileX - 1, tileY, color);
            }
        }
        if ( tileX < this.HEIGHT - 1 ) {
            if ( this.COLORS_MAP[tileX + 1][tileY] === color ) {
                this.collapseTiles(tileX + 1, tileY, color);
            }
        }
        if ( tileY > 0 ) {
            if ( this.COLORS_MAP[tileX][tileY - 1] === color ) {
                this.collapseTiles(tileX, tileY - 1, color);
            }
        }
        if ( tileY < this.WIDTH - 1 ) {
            if ( this.COLORS_MAP[tileX][tileY + 1] === color ) {
                this.collapseTiles(tileX, tileY + 1, color);
            }
        }
    },

    isCollapasable: function( tileX, tileY ) {
        if (tileX > 0) {
            if ( this.COLORS_MAP[tileX - 1][tileY] === this.COLORS_MAP[tileX][tileY] ) {
                return true;
            }
        }
        if ( tileX < this.HEIGHT - 1 ) {
            if ( this.COLORS_MAP[tileX + 1][tileY] === this.COLORS_MAP[tileX][tileY] ) {
                return true;
            }
        }
        if ( tileY > 0 ) {
            if ( this.COLORS_MAP[tileX][tileY - 1] === this.COLORS_MAP[tileX][tileY] ) {
                return true;
            }
        }
        if ( tileY < this.WIDTH - 1 ) {
            if ( this.COLORS_MAP[tileX][tileY + 1] === this.COLORS_MAP[tileX][tileY] ) {
                return true;
            }
        }
        return false;
    },
    addHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan : function( touch, event ) {
                self.onTouchBegan( touch, event );
            },
            onTouchMoved: function( touch, event ) {
                self.onTouchMoved( touch, event );
            },
            onTouchEnded: function( touch, event ) {
                self.onTouchEnded( touch, event );
            }
        }, this);
    },
    onTouchBegan:function (touch, event) {
        cc.log(event);
        cc.log(touch);
        var getPoint = touch.getLocation();
        cc.log(getPoint);
        var lx = getPoint.x -  this.getPositionX();
        var ly = getPoint.y -  this.getPositionY();
        cc.log(lx);
        cc.log(ly);
        return true;
    },
    onTouchMoved:function (touch, event) {
    },
    onTouchEnded:function (touch, event) {
        cc.log(event);
        cc.log(touch);
    },
    onEnter:function () {
        //cc.registerTargetedDelegate(1, true, this);
        this._super();
    },
    onExit:function () {
        //cc.unregisterTouchDelegate(this);
        this._super();
    }
});