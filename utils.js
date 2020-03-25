function detectClose(w) {
    var timer = setInterval(function () {
            if (w.closed) {
                clearInterval(timer);
                trap();
            }
        }, 1);
}

function defence() {
	document.addEventListener('contextmenu', event => event.preventDefault());
	
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
        window.location.href = "https://rickroll.ndev.tk"
    }
}
