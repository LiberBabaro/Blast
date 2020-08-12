var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",

    FieldBg: "res/images/FieldBg.png",

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
        srcs: ["res/Marvin.ttf"]
    }

};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}