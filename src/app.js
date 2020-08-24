
var GameLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;

        var backgroundLayer = new cc.LayerColor.create(new cc.color(161, 161, 161));
        this.addChild(backgroundLayer);

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

        this.field = new Field();
        this.field.setPosition(cc.p( (132), (219)) );
        this.addChild( this.field );

        this.scoreCount = 0;
        this.movesCount = 37;
        this.score = new cc.Sprite(res.ScoreBg);
        this.score.attr({
            x: 2197 - 29 + this.score.width / 2,
            y: 922 - 45 + this.score.height / 2
        });

        var timeLabel = new cc.LabelTTF("Время:", "Marvin", 65);
        timeLabel.x = this.score.width / 2;
        timeLabel.y = 1123;
        this.score.addChild(timeLabel, 5);

        var scoreLabel = new cc.LabelTTF("Очки:", "Marvin", 65);
        scoreLabel.x = this.score.width / 2;
        scoreLabel.y = 361;
        this.score.addChild(scoreLabel, 5);

        var scoreCountLabel = new cc.LabelTTF("0", "Marvin", 132);
        scoreCountLabel.x = this.score.width / 2;
        scoreCountLabel.y = 235;
        this.score.addChild(scoreCountLabel, 5);

        var movesCountLabel = new cc.LabelTTF("37", "Marvin", 230);
        movesCountLabel.x = this.score.width / 2;
        movesCountLabel.y = 712;
        this.score.addChild(movesCountLabel, 5);

        this.addChild(this.score, 0);

        this.pauseBtn = new cc.Sprite(res.button.pause);
        this.pauseBtn.attr({
            x: 3197 - 30,
            y: 2220 - 48
        });
        this.pauseBtn.setAnchorPoint( cc.p( 0, 0 ) );

        this.addChild(this.pauseBtn, 0);

        this.top = new cc.Sprite(res.TopBg);
        this.top.attr({
            x: 310 - 5,
            y: 2165 - 14
        });

        this.progress = new cc.Sprite(res.progress.back);
        this.top.setAnchorPoint( cc.p( 0, 0 ) );
        this.progress.attr({
            x: 625,
            y: 65
        });

        this.progress.setAnchorPoint( cc.p( 0, 0 ) );

        var progressLabel = new cc.LabelTTF("Прогресс", "Marvin", 64);
        progressLabel.x = 507 + progressLabel.width / 2;
        progressLabel.y = 170 + progressLabel.height / 2;
        this.progress.addChild(progressLabel, 5);

        this.top.addChild(this.progress, 3);
        this.addChild(this.top, 2);
        return true;
    },

    updateScoreLabel: function() {
        this.scoreLabel.setString( this.score );
        if (this.scoreCount == 299){}
        if (this.movesCount == 0){}
            //cc.director.runScene(new GameOverScene(this.score));
    },

    registerScoreCallback: function() {
        var gameLayer = this;
        this.field.setEatCallback(function( coin ) {
            gameLayer.scoreCount++;
            gameLayer.movesCount--;
            gameLayer.updateScoreLabel();
        });
    }
});

var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});

