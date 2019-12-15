window.EVT = new EventEmitter2();

$(document).ready( () => {
    EVT.emit("init");
    /*window.EVT = new EventEmitter2()
    Header.init();
    Carousel.init();
    Details.init();*/
});