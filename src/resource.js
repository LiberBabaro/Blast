var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",

    FieldBg: "res/images/FieldBg.png",
    ScoreBg: "res/images/panel_score.png",

    button: {
        btn1: "res/images/buttonBg_1",
        btn2: "res/images/buttonBg_2",
        pauseBtn: "res/images/buttonBg_2"
    },

    tile: {
        blue: "/res/images/tiles/BlueTile.png",
        purple: "/res/images/tiles/PurpleTile.png",
        red: "/res/images/tiles/RedTile.png",
        yellow: "/res/images/tiles/YellowTile.png",
        green: "/res/images/tiles/GreenTile.png",
    },

    font: {
        type: "font",
        name: "Marvin",
        srcs: ["res/fonts/Marvin.ttf"]
    }

};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}