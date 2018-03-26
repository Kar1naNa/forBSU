document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementsByClassName('scrollup')[0].onclick = function () {
        scrollTo(document.documentElement, 0, 300);
    };

    //показать еще
    document.getElementById('load-more-id').onclick = function () {
        document.getElementById('load-more-id').style.display = "none";
        document.getElementById('loading-state').style.display = "table";

        var posts = Module.getPhotoPosts(10, 10);

        document.getElementById('load-more-id').style.display = "table";
        document.getElementById('loading-state').style.display = "none";
    };


    //эффект кнопки для добавления фото
    document.getElementById('add-post').onclick = function () {
        document.getElementById('add-post').style.display = 'none';
    };

    function scrollTo(element, to, duration) {
        if (duration < 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(function () {
            element.scrollTop = element.scrollTop + perTick;
            scrollTo(element, to, duration - 10);
        }, 10);
    }

    DomModule.displayPhotoPosts(Module.getPhotoPosts());
    DomModule.initUser();

}());


