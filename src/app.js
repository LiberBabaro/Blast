
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var backgroundLayer = new cc.LayerColor.create(new cc.color(161, 161, 161));
        //backgroundLayer.setColor(cc.color(161, 161, 161));
        this.addChild(backgroundLayer);
        
        // add a "close" icon to exit the progress. it's an autorelease object
        var closeItem = new cc.MenuItemImage(
            res.CloseNormal_png,
            res.CloseSelected_png,
            function () {
                cc.log("Menu is clicked!");
            }, this);
        closeItem.attr({
            x: size.width - 20,
            y: 20,
            anchorX: 0.5,
            anchorY: 0.5
        });

        var menu = new cc.Menu(closeItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label


        // add "HelloWorld" splash screen
        this.field = new Field();
        //this.field.setPosition(cc.p( ((size.width - 1641) / 2), (size.height - 1827) / 2) );
        this.field.setPosition(cc.p( (132), (219)) );
        this.addChild( this.field );

        //this.field.runAction(
        //    cc.spawn(
        //        cc.moveTo(2.5, cc.p(0, 0))
        //    )
        //);

        this.score = new cc.Sprite(res.ScoreBg);
        this.score.attr({
            x: 2197 - 29 + this.score.width / 2,
            y: 922 - 45 + this.score.height / 2
        });
        this.addChild(this.score, 0);

        this.top = new cc.Sprite(res.TopBg);
        this.top.attr({
            x: 310 - 5,
            y: 2165 - 14
        });
        //this.top.setAnchorPoint( cc.p( - 623, - 314 ) );
        this.progress = new cc.Sprite(res.progress.back);
        this.top.setAnchorPoint( cc.p( 0, 0 ) );
        this.progress.attr({
            x: 625,
            y: 65
        });
        this.progress.setAnchorPoint( cc.p( 0, 0 ) );
        var progressLabel = new cc.LabelTTF("Прогресс", "Marvin", 64);
        // position the label on the center of the screen
        progressLabel.x = 507 + progressLabel.width / 2;
        progressLabel.y = 170 + progressLabel.height / 2;
        // add the label as a child to this layer
        this.progress.addChild(progressLabel, 5);
        this.top.addChild(this.progress, 3);
        this.addChild(this.top, 2);
        //this.sprite = new cc.Sprite(res.tile.red);
        //this.sprite.attr({
        //    x: size.width / 2,
        //    y: size.height / 2,
        //    scale: 2,
        //    rotation: 180
        //});
        //this.addChild(this.sprite, 0);

        //this.sprite.runAction(
        //    cc.sequence(
        //        cc.rotateTo(2, 0),
        //        cc.scaleTo(2, 1, 1)
        //    )
        //  );
        //helloLabel.runAction(
        //    cc.spawn(
        //        cc.moveBy(2.5, cc.p(0, size.height - 40)),
        //        cc.tintTo(2.5,255,125,0)
        //    )
        //);
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

