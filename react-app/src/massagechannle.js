const childToParent = function (message) {
  if (window) {
    window.top.postMessage(message, "*");
  } else {
    console.log("window not found");
  }
};
const checkOriginForChild = function () {
  return window.location.origin === window.top.origin;
};
const checkOriginForParent = function (frame) {
  return window.location.origin === frame.contentWindow.location.origin;
};
const parentToChild = function (frame, message) {
  if (frame && frame.tagName === "IFRAME") {
    frame.contentWindow.postMessage(message, "*");
  } else {
    console.log("tag need be iFrame");
  }
};
const setCustomEvent = function (
  listenner = function () {},
  eventNam = "cEvent"
) {
  if (window) {
    window.document.addEventListener(eventNam, listenner, false);
  }
};
const clearCustomEvent = function (
  listenner = function () {},
  eventNam = "cEvent"
) {
  if (window) {
    window.document.removeEventListener(eventNam, listenner);
  }
};

const setEvent = function (listenner = function () {}) {
  if (window) {
    window.addEventListener("message", listenner, false);
  }
};
const clearEvent = function (listenner = function () {}) {
  if (window) {
    window.removeEventListener("message", listenner);
  }
};
const customEventChildToParent = function (message, eventNam = "cEvent") {
  if (window) {
    var event = new CustomEvent(eventNam, { detail: message });
    window.parent.document.dispatchEvent(event);
  } else {
    console.log("window not found");
  }
};
const customEventParentToChild = function (
  frame,
  message,
  eventNam = "cEvent"
) {
  if (frame && frame.tagName == "IFRAME") {
    var event = new CustomEvent(eventNam, { detail: message });
    frame.contentDocument.dispatchEvent(event);
  } else {
    console.log("tag need be iFrame");
  }
};

export {
  clearEvent,
  setEvent,
  childToParent,
  parentToChild,
  customEventChildToParent,
  customEventParentToChild,
  setCustomEvent,
  clearCustomEvent,
  checkOriginForChild,
  checkOriginForParent
};
