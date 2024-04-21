function detectZoom() {
    let ratio = 0,
      screen = window.screen,
      ua = navigator.userAgent.toLowerCase();
  
    if (window.devicePixelRatio !== undefined) {
      ratio = window.devicePixelRatio;
    } else if (~ua.indexOf('msie')) {
      if (screen.deviceXDPI && screen.logicalXDPI) {
        ratio = screen.deviceXDPI / screen.logicalXDPI;
      }
    } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
      ratio = window.outerWidth / window.innerWidth;
    }
  
    if (ratio) {
      ratio *= 100;
    }
  
    return ratio;
  }
  
  function checkZoomLevel() {
    const zoomLevel = detectZoom();
    const imageContainer = document.querySelector('.image-container');
  
    if (zoomLevel >= 250) {
      imageContainer.style.display = 'block';
    } else {
      imageContainer.style.display = 'none';
    }
  }
  
  window.addEventListener('resize', checkZoomLevel);
  checkZoomLevel();


  var details1 = document.getElementById("details1");
  var details2 = document.getElementById("details2");
  
  function synchronizeDetails(event) {
    var isOpen = event.target.open;
  
    if (event.target === details1 && isOpen) {
      details2.open = true;
    } else if (event.target === details2 && isOpen) {
      details1.open = true;
    } else {
      details1.open = false;
      details2.open = false;
    }
  }
  
  details1.addEventListener("toggle", synchronizeDetails);
  details2.addEventListener("toggle", synchronizeDetails);

