var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",

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