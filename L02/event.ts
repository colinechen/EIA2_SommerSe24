namespace EventInspector {


    window.addEventListener("load", handleLoad);
      
    function handleLoad(_event: Event): void {


    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);

    document.body.addEventListener("click", logInfo);
    document.body.addEventListener("keyup", logInfo);
         
       

    let div0:HTMLElement = <HTMLElement>document.getElementById("div0");
    let div1:HTMLElement = <HTMLElement>document.getElementById("div1");

    div0.addEventListener("click", logInfo);
    div1.addEventListener("keyup", logInfo);
      
    let button: HTMLElement = <HTMLElement>document.querySelector("button");
    button.addEventListener("click", customEvent);
      
          
    }
      
    function customEvent() {
        let button = document.querySelector("button");
        let customEvent = new CustomEvent("hello");
        document.addEventListener("hello", <EventListener> helloFunction);
        button?.dispatchEvent(customEvent);
    }
      

    function helloFunction(_event:CustomEvent) {
      console.log(_event);
    }
      
    function setInfoBox(_event: MouseEvent): void {
        let x: number = _event.pageX + 10;
        let y: number = _event.pageY + 10;
      
        let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");
        span.style.left = x + "px"
        span.style.top = y + "px"
        span.innerHTML = "mouse_position: " + x + "px" + " " + y + "px" + " " + "target: " + _event.target;
        }
      
    function logInfo(_event: MouseEvent | KeyboardEvent): void {
        console.log(_event);
        console.log(_event.type);
        console.log(_event.currentTarget);
        console.log(_event.target);
        }
      }