document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementsByClassName('scrollup')[0].onclick = function () {
        scrollTo(document.documentElement, 0, 300);
    };

    function scrollTo(element, to, duration) {
        if (duration < 0) return;
        let difference = to - element.scrollTop;
        let perTick = difference / duration * 10;

        setTimeout(function () {
            element.scrollTop = element.scrollTop + perTick;
            scrollTo(element, to, duration - 10);
        }, 10);
    }

    //показать еще
    document.getElementById('load-more-id').onclick = function () {
        document.getElementById('load-more-id').style.display = "none";
        document.getElementById('loading-state').style.display = "table";

        let posts = Module.getPhotoPosts(10, 10);
        DomModule.displayPhotoPosts(posts);


        document.getElementById('load-more-id').style.display = "table";
        document.getElementById('loading-state').style.display = "none";
    };



    DomModule.displayPhotoPosts(Module.getPhotoPosts());
    DomModule.initUser();


    //избранное/не избранное
    let changeFavorite = document.getElementsByClassName('count-favorite')[0];
    changeFavorite.onclick = function () {
        if (changeFavorite.src === 'assets/blackstar.png'){
            changeFavorite.src = 'assets/whitestar.png';
        }
    };



    var tr = document.getElementsByClassName("add-button");
    console.log(tr);

    var content = document.getElementsByClassName('content')[0];

    tr[0].onclick = function () {
        let elem = document.getElementsByClassName('add-post')[0];
        if (!elem.classList.contains('active')) {
            elem.classList.add('active');
            tr[0].style.backgroundImage = "url('http://image.flaticon.com/icons/png/512/262/262037.png')";
        } else {
            elem.classList.remove('active');
            tr[0].style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIfXsnemLCIeFyg57FU_YQHS2eQbtvjE5rmltLLVmIXHJrtRBQ')";
        }
    }

}());