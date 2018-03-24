document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementsByClassName('scrollup')[0].onclick = function () {
        alert("Hello");
        scrollTo(document.documentElement, 0, 300);
    };

    //показать еще
    document.getElementById('load-button-id').onclick = function () {
        alert("Hello");
        document.getElementById('load-more-id').style.display = "none";
        document.getElementById('loading-state').style.display = "table";

        var posts = Module.getPhotoPosts(10, 10);

        // console.log(posts);
        //
        // document.getElementById('load-more-id').style.display = "table";
        // document.getElementById('loading-state').style.display = "none";
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

    var DomModule = (function () {

        var user = {
            name: 'Karina',
            idPerson: '8'
        };
        var filter = {};







        function forRegisteredUser() {
            document.getElementById('add-post').style.display = 'block';

            for (let i in photoPosts) {
                if (i.idPerson === user.idPerson()) {
                    let elem =document.getElementsById('photoPost');


                }
            }
        }

    });

}());


