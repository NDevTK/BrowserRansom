// Check if window has closed
function detectClose(w, target) {
    var X = window.screenX;
    var Y = window.screenY;
    var timer = setInterval(function () {
        // Detect window close
        if (w.closed || w.location.href !== target) {
            clearInterval(timer);
            trap();
        }
	
        if (!navigator.userAgent.includes("Firefox")) {
            // on window size change
            if (window.screenX !== X || window.screenY !== Y) {
                // Detect Screen size difference
                if (window.screenX !== w.screenX || window.screenY !== w.screenY) {
                    w.trap();
                }
                X = window.screenX;
                Y = window.screenY;
            }
        }
    }, 1);
}

function defence() {
    console.info("defence disabled");
}

function trap(preload = true) {	
    window.location.href = "https://ndev.tk/noob.html";
}
