declare global {
  interface Document {
    exitFullscreen: () => Promise<void>;
    mozCancelFullScreen: () => void;
    webkitExitFullscreen: () => void;
    fullscreenElement: () => void;
    mozFullScreenElement: () => void;
    webkitFullscreenElement: () => void;
    msFullscreenElement: () => void;
    msExitFullscreen: () => void;
  }

  interface Element {
    mozRequestFullScreen: () => Promise<void>;
    webkitRequestFullscreen: () => void;
    msRequestFullscreen: () => void;
  }
}

const toggleFullScreen = (element: Element) => {
  if (
    "fullscreenElement" in document ||
    "webkitFullscreenElement" in document ||
    "mozFullScreenElement" in document ||
    "msFullscreenElement" in document
  ) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }
};

export default toggleFullScreen;
