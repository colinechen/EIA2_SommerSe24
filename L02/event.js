"use strict";
var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        let div0 = document.getElementById("div0");
        let div1 = document.getElementById("div1");
        div0.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
        let button = document.querySelector("button");
        button.addEventListener("click", customEvent);
    }
    function customEvent() {
        let button = document.querySelector("button");
        let customEvent = new CustomEvent("hello");
        document.addEventListener("hello", helloFunction);
        button?.dispatchEvent(customEvent);
    }
    function helloFunction(_event) {
        console.log(_event);
    }
    function setInfoBox(_event) {
        let x = _event.pageX + 10;
        let y = _event.pageY + 10;
        let span = document.querySelector("span");
        span.style.left = x + "px";
        span.style.top = y + "px";
        span.innerHTML = "mouse position: " + x + "px" + " " + " " +
            "mouse position:" + y + "px" + " " +
            "target: " + _event.target;
    }
    function logInfo(_event) {
        console.log(_event);
        console.log(_event.type);
        console.log(_event.currentTarget);
        console.log(_event.target);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=event.js.map