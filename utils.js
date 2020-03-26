// Check if window has closed
function detectClose(w) {
    var timer = setInterval(function () {
	    // Detect window close
            if (w.closed) {
                clearInterval(timer);
                trap();
            }
	    // Detect Screen size difference
	    if(window.screenX !== w.screenX || window.screenY !== w.screenY) trap();
        }, 1);
}

function defence() {
    // Prevent console.log
    console.log = function() {}
    // Prevent Context menu
    document.addEventListener('contextmenu', event => event.preventDefault());
    // Prevent shortcuts
    document.addEventListener('keydown', event => event.preventDefault());
    // Prevent Typing
    document.addEventListener('keypress', event => event.preventDefault());
    // Detect DevTools
    var done = false;
    var element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () {
            if (done) return
            done = true;
            trap();
        }
    });
	
    requestAnimationFrame(function check() {
        console.dir(element);
        requestAnimationFrame(check);
    });
}

function trap() {	
    if (navigator.userAgent.includes("Firefox")) {
        window.location.href = "https://rickroll.ndev.tk/crash"
    } else {
        window.location.href = "https://rickroll.ndev.tk/#noWait"
    }
}
