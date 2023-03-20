if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    // Mobile device style: fill the whole browser client area with the game canvas:
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
    document.getElementsByTagName('head')[0].appendChild(meta);
}

var canvas = document.querySelector("#unity-canvas");

var scaleToFit;
try {
    scaleToFit = !!JSON.parse("true");
} catch (e) {
    scaleToFit = true;
}

function onResize() {
    var container = canvas.parentElement;
    var container = canvas;
    var w;
    var h;

    if (scaleToFit) {
        w = window.innerWidth;
        h = window.innerHeight;

        var r = 1080 / 1920;

        if (w * r > window.innerHeight) {
            w = Math.min(w, Math.ceil(h / r));
        }
        h = Math.floor(w * r);
    } else {
        w = 1920;
        h = 1080;
    }

    container.style.width = canvas.style.width = w + "px";
    container.style.height = canvas.style.height = h + "px";
    container.style.top = Math.floor((window.innerHeight - h) / 2) + "px";
    container.style.left = Math.floor((window.innerWidth - w) / 2) + "px";
}

dataUrl: "Build/Build.data",
frameworkUrl: "Build/Build.framework.js",
codeUrl: "Build/Build.wasm",
streamingAssetsUrl: "StreamingAssets",
companyName: "Visuarte",
productName: "VisuSolutions",
productVersion: "0.2.0",
matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
// devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
}).then(function (instance){
onResize();
});

window.addEventListener('resize', onResize);
onResize();
