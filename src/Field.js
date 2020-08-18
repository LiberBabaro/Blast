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
        //this.addChild(this.MAP);
        cc.log(this.COLORS_MAP);
        var c = this.COLORS_MAP[1][8];
        cc.log(c);
        this.addHandlers();
    },

    removeTile: function( row, col ) {
        var r = row;
        var c = col;
        this.removeChild(this.MAP[row][col], true);
        this.MAP[row][col] = null;
        this.COLORS_MAP[row][col] = "";
        cc.log(this.MAP[row][col]);
    },

    collapseTiles: function( row, col, color ) {
        this.removeTile(row, col);
        if (row > 0) {
            if ( this.COLORS_MAP[row - 1][col] === color ) {
                this.collapseTiles(row - 1, col, color);
            }
        }
        if ( row < this.HEIGHT - 1 ) {
            if ( this.COLORS_MAP[row + 1][col] === color ) {
                this.collapseTiles(row + 1, col, color);
            }
        }
        if ( col > 0 ) {
            if ( this.COLORS_MAP[row][col - 1] === color ) {
                this.collapseTiles(row, col - 1, color);
            }
        }
        if ( col < this.WIDTH - 1 ) {
            if ( this.COLORS_MAP[row][col + 1] === color ) {
                this.collapseTiles(row, col + 1, color);
            }
        }
    },

    isCollapasable: function( row, col ) {
        if (row > 0) {
            if ( this.COLORS_MAP[row - 1][col] === this.COLORS_MAP[row][col] ) {
                return true;
            }
        }
        if ( row < this.HEIGHT - 1 ) {
            if ( this.COLORS_MAP[row + 1][col] === this.COLORS_MAP[row][col] ) {
                return true;
            }
        }
        if ( col > 0 ) {
            if ( this.COLORS_MAP[row][col - 1] === this.COLORS_MAP[row][col] ) {
                return true;
            }
        }
        if ( col < this.WIDTH - 1 ) {
            if ( this.COLORS_MAP[row][col + 1] === this.COLORS_MAP[row][col] ) {
                return true;
            }
        }
        return false;
    },

    addHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown : function( touch, event ) {
                self.onMouseDown( touch, event );
            },
            onMouseMove: function( touch, event ) {
                self.onMouseMove( touch, event );
            },
            onMouseScroll: function( touch, event ) {
                self.onMouseScroll( touch, event );
            },
            onMouseUp: function( touch, event ) {
                self.onMouseUp( touch, event );
            }
        }, this);
    },

    onMouseDown:function (touch, event) {
        cc.log(event);
        cc.log(touch);

        return true;
    },

    onMouseMove:function (touch, event) {
    },
    onMouseScroll:function (touch, event) {
    },

    onMouseUp:function (touch, event) {
        cc.log(event);
        cc.log(touch);
        var getPoint = touch.getLocation();
        cc.log(getPoint);
        var lx = getPoint.x -  this.getPositionX();
        var ly = getPoint.y -  this.getPositionY();
        cc.log(lx);
        cc.log(ly);
        var col = Math.trunc((lx - 50) / 171);
        var row = Math.trunc((ly - 50) / 170);
        cc.log(row);
        cc.log(col);
        var c = this.COLORS_MAP[row][col];
        if (row >= 0 && row < this.HEIGHT && col >= 0 && col < this.WIDTH && c) {
            cc.log('+');
            cc.log(c);
            if (this.isCollapasable(row, col)) {
                this.collapseTiles(row, col, c);
            }
            return true;
        } else {
            cc.log('-');
            return false;
        }
        return true;
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