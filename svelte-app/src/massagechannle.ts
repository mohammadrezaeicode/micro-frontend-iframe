const childToParent = function (message:unknown) {
  if (window) {
    window.top?.postMessage(message, "*");
  } else {
    console.log("window not found");
  }
};
const parentToChild = function (frame:HTMLIFrameElement, message:unknown) {

  if (frame && frame.tagName === "IFRAME") {
    frame.contentWindow?.postMessage(message, "*");
  } else {
    console.log("tag need be iFrame");
  }
};
const setCustomEvent = function (listenner:(event:unknown)=>unknown, eventNam = "cEvent") {
  if (window) {
    window.document.addEventListener(eventNam, listenner, false);
  }
};
const  clearCustomEvent = function (listenner:(event:unknown)=>unknown, eventNam = "cEvent") {
  if (window) {
    window.document.removeEventListener(eventNam, listenner);
  }
};

const setEvent = function (listenner :(event:unknown)=>unknown) {
  if (window) {
    window.addEventListener("message", listenner, false);
  }
};
const clearEvent = function (listenner :(event:unknown)=>unknown) {
  if (window) {
    window.removeEventListener("message", listenner);
  }
};
const customEventChildToParent = function (message:unknown, eventNam = "cEvent") {
  if (window) {
    const event = new CustomEvent(eventNam, { detail: message });
    window.parent.document.dispatchEvent(event);
  } else {
    console.log("window not found");
  }
};
const customEventParentToChild = function (
  frame:HTMLIFrameElement, message:unknown,
  eventNam = "cEvent"
) {
  if (frame && frame.tagName == "IFRAME") {
    const event = new CustomEvent(eventNam, { detail: message });
    frame.contentDocument?.dispatchEvent(event);
  } else {
    console.log("tag need be iFrame");
  }
};

const checkOriginForChild = function () {
  return window.location.origin === window.top?.origin;
};
const checkOriginForParent = function (frame:HTMLIFrameElement) {
  return window.location.origin === frame.contentWindow?.location.origin;
};
export {
  clearEvent,
  setEvent,
  childToParent,
  parentToChild,
  customEventChildToParent,
  customEventParentToChild,
  setCustomEvent,clearCustomEvent,
  checkOriginForChild,
  checkOriginForParent
};
