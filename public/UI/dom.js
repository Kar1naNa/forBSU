document.addEventListener("DOMContentLoaded", function (event) {

    DomModule.displayPhotoPosts(Module.getPhotoPosts());
    DomModule.initUser();

    let count_filter_icon = 1;

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

        let posts = Module.getPhotoPosts(Module.countShowedPosts, 10);
        DomModule.displayPhotoPosts(posts);

        document.getElementById('load-more-id').style.display = "table";
        document.getElementById('loading-state').style.display = "none";
    };

    /*************************************************************************************************/

    let add_button = document.getElementsByClassName("add-button");

    let content = document.getElementsByClassName('content')[0];

    let door = document.getElementsByClassName('door')[0];

    let reg_sign = document.getElementsByClassName('reg-sign')[0];

    let username = document.getElementsByClassName('username')[0];

    let registration_page = document.getElementsByClassName("registration-page")[0];

    let lenta = document.getElementsByClassName("lenta")[0];

    let sign_page = document.getElementsByClassName("sign-page")[0];

    let my_profile_page = document.getElementsByClassName("my-profile-page")[0];

    add_button[0].onclick = function () {
        let elem = document.getElementsByClassName('add-post')[0];
        if (!elem.classList.contains('active')) {


            door.style.display = 'none';

            elem.classList.add('active');

            tr[0].style.backgroundImage = "url('http://image.flaticon.com/icons/png/512/262/262037.png')";
        } else {
            username.style.display = 'block';

            door.style.display = 'block';

            elem.classList.remove('active');

            add_button[0].style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIfXsnemLCIeFyg57FU_YQHS2eQbtvjE5rmltLLVmIXHJrtRBQ')";
        }
    };

    /*************************************************************************************************/
    /*Фильтр*/
    let fi = document.getElementsByClassName("filter_icon")[0];
    let fbd = document.getElementsByClassName("filter_body")[0];

    document.getElementById('filter_menu').onclick = function () {
        if (fbd.classList.contains("nav_is_visible")) {
            fbd.classList.remove("nav_is_visible");
            fi.src = "assets/filter_icon.png";
        } else {
            fbd.classList.add("nav_is_visible");
            fi.src = "assets/close_filter.png";

        }
    };

    //Добавление иконок для фильтра
    document.getElementsByClassName("add_tag_input")[0].onclick = function () {
        let parent = document.getElementsByClassName("add_new_input")[0];
        let son_input = document.createElement('input');
        son_input.setAttribute("type", "text");
        son_input.placeholder = "";
        son_input.className = "filter_input filter-tags";
        son_input.maxLength = 20;
        parent.appendChild(son_input);


        count_filter_icon++;
        if (count_filter_icon === 5) {
            document.getElementsByClassName("add_tag_input")[0].style.display = "none";
        }
    };

    //Фильтрация

    let filter_name = document.getElementsByClassName("filter-name")[0].value;

    let filter_tags = document.getElementsByClassName("filter-tags")[0].value;

    let filter_date_from = document.getElementsByClassName("filter-date-from")[0].value;

    let filter_date_to = document.getElementsByClassName("filter-date-to")[0].value;


    /**************************************************************************************************/
    /*Начальная страница*/
    let welcome_page = document.getElementsByClassName("welcome-page")[0];

    document.getElementsByClassName("registration-welcome")[0].onclick = function () {
        welcome_page.style.display = "none";
        sign_page.style.display = "none";
        lenta.style.display = "none";

        registration_page.style.display = "block";
        document.body.classList.remove("welcome");
        document.body.classList.remove("registration");
        document.body.classList.add("sign");

    };

    document.getElementsByClassName("guest-welcome")[0].onclick = function () {
        welcome_page.style.display = "none";
        registration_page.style.display = "none";
        sign_page.style.display = "none";
        lenta.style.display = "block";
        document.body.classList.remove("welcome");
        document.body.classList.remove("registration");
        document.body.classList.remove("sign");

        document.getElementsByClassName("clip-circle")[0].style.display = "none";
        document.getElementsByClassName("add-button")[0].style.display = "none";

        Module.setUser(null, null);
        DomModule.initUser();
        reg_sign.style.display = "inline-block";
        username.style.display = "none";
        door.style.display = 'none';

    };


    document.getElementsByClassName("green-button-wp")[0].onclick = function () {
        welcome_page.style.display = "none";
        registration_page.style.display = "none";
        sign_page.style.display = "none";
        document.body.classList.remove("welcome");
        document.body.classList.remove("registration");
        document.body.classList.add("sign");
        sign_page.style.display = "block";

    };

    /**************************************************************************************************/
    /*Добавление поста*/

    let add_tags_new_post = document.getElementsByClassName("new-post-add-tags")[0];
    add_tags_new_post.onclick = function () {

        let tags = prompt("Впишите через пробел желаемые теги. Помните, что длина тега не должна превышать 20 символов", "");
        let list_tags_new_post = [];
        if (tags.length !== 0) {
            list_tags_new_post = tags.split(/(\s+)/).filter(function (e) {
                return e.trim().length > 0;
            });

            add_tags_new_post.innerHTML = "Изменить теги";

            document.getElementsByClassName("tags_new_post")[0].style.display = "inline-block";
        } else {

            add_tags_new_post.innerHTML = "Добавить теги";

            document.getElementsByClassName("tags_new_post")[0].style.display = "none";

        }
    };

    let new_post_ok = document.getElementsByClassName("new-post-ok")[0];
    new_post_ok.onclick = function () {
        let answer = confirm("Добавить пост?");
    };

    /**************************************************************************************************/
    /*Страница входа*/

    document.getElementsByClassName("sign-guest-login")[0].onclick = function () {
        document.body.classList.remove("registration");
        document.body.classList.remove("sign");
        document.body.classList.remove("welcome");

        lenta.style.display = "block";
        welcome_page.style.display = "none";
        registration_page.style.display = "none";
        sign_page.style.display = "none";

        document.getElementsByClassName("clip-circle")[0].style.display = "none";
        document.getElementsByClassName("add-button")[0].style.display = "none";

        Module.setUser(null, null);
        DomModule.initUser();
        reg_sign.style.display = "inline-block";
        username.style.display = "none";
        door.style.display = "none";
    };

    document.getElementsByClassName("registration-guest-login")[0].onclick = function () {
        welcome_page.style.display = "none";
        registration_page.style.display = "none";
        sign_page.style.display = "none";
        lenta.style.display = "block";
        document.body.classList.remove("welcome");
        document.body.classList.remove("registration");
        document.body.classList.remove("sign");

        document.getElementsByClassName("clip-circle")[0].style.display = "none";
        document.getElementsByClassName("add-button")[0].style.display = "none";

        Module.setUser(null, null);
        DomModule.initUser();
        reg_sign.style.display = "inline-block";
        username.style.display = "none";
        door.style.display = "none";
    };

    document.getElementsByClassName("registration-grey-button")[0].onclick = function () {
        prompt("Введите указанный при регистрации email", "ivan.ivanov@mail.ru");
        alert("На этот адрес когда-нибудь будет отправлено письмо, если я узнаю как это сделать, а пока можете просмотреть записи в гостевом режиме");
        welcome_page.style.display = "none";
        registration_page.style.display = "none";
        sign_page.style.display = "none";
        lenta.style.display = "block";
        document.body.classList.remove("welcome");
        document.body.classList.remove("registration");
        document.body.classList.remove("sign");
    };

    /****************************************************************************************************/
    /*ВЫХОД*/
    door.onclick = function () {
        lenta.style.display = "none";
        registration_page.style.display = "none";
        sign_page.style.display = "none";
        welcome_page.style.display = "block";

        document.body.classList.add("welcome");

        Module.setUser(null, null);
        DomModule.initUser();
        username.style.display = "none";
        reg_sign.style.display = "inline-block";
    };

    reg_sign.onclick = function () {
        lenta.style.display = "none";
        registration_page.style.display = "none";
        sign_page.style.display = "none";
        welcome_page.style.display = "block";

        document.body.classList.add("welcome");

        Module.setUser(null, null);
        DomModule.initUser();
        username.style.display = "none";
        reg_sign.style.display = "inline-block";
    };


    /****************************************************************************************************/
    /*Мой профиль*/

    /*opacity при наведении на текст для фотографии */
    // let description_post = document.getElementsByClassName("description-post")[0];
    // let my_profile_image = document.getElementsByClassName("my-profile-photopost-image")[0];
    // description_post.onmouseover = f1;
    // function f1() {
    //     my_profile_image.style.background = rgba(255,255,255,0.3);
    // }
    //
    // description_post.onmouseout = f2;
    // function f2 () {
    //     my_profile_image.style.opacity = 1;
    // }


    let my_profile_door = document.getElementsByClassName("my-profile-door")[0];
    my_profile_door.onclick = function () {
        my_profile_page.style.display = "none";
        lenta.style.display = "block";
        welcome_page.style.display = "none";
        registration_page.style.display = "none";
        sign_page.style.display = "none";
        document.body.classList.remove("my-profile");
        document.body.classList.remove("welcome");
        document.body.classList.remove("registration");
        document.body.classList.remove("sign");
    };

    /******************************************************************************/
    /*Регистрация*/
    document.getElementsByClassName("sign-button")[0].onclick = function () {

        alert("Будет работать в 8 задании");

        let registration_login = document.getElementById("registration-login");
        let login = registration_login.value;

        let registration_password = document.getElementById("registration-password");
        let password = registration_password.value;

        let registration_email = document.getElementById("registration-email");
        let email = registration_email.value;

        document.getElementsByClassName("clip-circle")[0].style.display = "block";
        document.getElementsByClassName("add-button")[0].style.display = "block";
    };


    /*Вход*/
    document.getElementsByClassName("registration-button")[0].onclick = function () {

        let sign_login = document.getElementById("sign-login");
        let login = sign_login.value;

        let sign_password = document.getElementById("sign-password");
        let password = sign_password.value;

        if (login.length < 1 || password.length < 1) {
            alert("Заполните все поля");
        } else {

            Module.setUser(login, password);
            DomModule.initUser();

            reg_sign.style.display = "none";
            username.style.display = "block";

            welcome_page.style.display = "none";
            registration_page.style.display = "none";
            sign_page.style.display = "none";
            lenta.style.display = "block";
            document.body.classList.remove("welcome");
            document.body.classList.remove("registration");
            document.body.classList.remove("sign");

            document.getElementsByClassName("clip-circle")[0].style.display = "block";
            document.getElementsByClassName("add-button")[0].style.display = "block";

        }
    };

    /*************************************************************************************/


    username.onclick = function () {

        /**/
        let clip_circle = document.getElementsByClassName("clip-circle")[0];

        let child_author = document.createElement('p');
        child_author.className = "author";
        child_author.innerHTML = Module.getUser().login;
        let before = document.getElementsByClassName("new_image_wrapper")[0];
        clip_circle.insertBefore(child_author, before);


        let profile_name = document.getElementsByClassName("profile-name")[0];
        let child = document.createElement('span');
        child.innerHTML = Module.getUser().login;
        profile_name.appendChild(child);


        my_profile_page.style.display = "block";
        lenta.style.display = "none";
        welcome_page.style.display = "none";
        registration_page.style.display = "none";
        sign_page.style.display = "none";
        document.body.classList.add("my-profile");
        document.body.classList.remove("welcome");
        document.body.classList.remove("registration");
        document.body.classList.remove("sign");


    }
}());