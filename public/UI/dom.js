document.addEventListener("DOMContentLoaded", function (event) {

    let count_filter_icon = 1;
    let add_username = true;
    let filter_config = {};

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
        document.getElementById('load-button').style.display = "none";
        document.getElementById('loading-state').style.display = "table";

        if (Module.allPostsShowed) {
            document.getElementById('load-button').style.display = "none";

        } else {
            let posts = Module.getPhotoPosts(Module.countShowedPosts, 10, filter_config);
            DomModule.displayPhotoPosts(posts);
        }

        document.getElementById('load-button').style.display = "table";
        document.getElementById('loading-state').style.display = "none";
    };

    /*************************************************************************************************/

    let add_button = document.getElementsByClassName("add-button")[0];

    let content = document.getElementsByClassName('content')[0];

    let door = document.getElementsByClassName('door')[0];

    let reg_sign = document.getElementsByClassName('reg-sign')[0];

    let username = document.getElementsByClassName('username')[0];

    let registration_page = document.getElementsByClassName("registration-page")[0];

    let lenta = document.getElementsByClassName("lenta")[0];

    let sign_page = document.getElementsByClassName("sign-page")[0];

    let my_profile_page = document.getElementsByClassName("my-profile-page")[0];

    add_button.onclick = function () {
        let elem = document.getElementsByClassName('add-post')[0];
        if (!elem.classList.contains('active')) {

            door.style.display = 'none';

            elem.classList.add('active');

            add_button.style.backgroundImage = "url('http://image.flaticon.com/icons/png/512/262/262037.png')";
        } else {
            username.style.display = 'block';

            door.style.display = 'block';

            elem.classList.remove('active');

            add_button.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIfXsnemLCIeFyg57FU_YQHS2eQbtvjE5rmltLLVmIXHJrtRBQ')";
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

    //Применение фильтра

    let apply = document.getElementsByClassName("for-filter")[0];

    apply.onclick = function () {

        Module.setCountShowedPosts(0);

        let filter_name = document.getElementsByClassName("filter-name")[0].value;

        let filter_tags = [];
        for (let i = 0; i < count_filter_icon; i++) {
            let val = document.getElementsByClassName("filter-tags")[i].value;

            if (val.length > 0)
                filter_tags.push(val);
        }

        let filter_date_from = document.getElementsByClassName("filter-date-from")[0].value;
        let filter_date_to = document.getElementsByClassName("filter-date-to")[0].value;

        filter_config['author'] = filter_name.length > 0 ? filter_name : undefined;

        filter_config['dateTo'] = filter_date_from === "" ? undefined : new Date(filter_date_to);
        filter_config['dateFrom'] = filter_date_from === "" ? undefined : new Date(filter_date_from);
        filter_config['hashTags'] = filter_tags;

        let last;
        while (last = content.lastChild) {
            content.removeChild(last)
        }

        DomModule.displayPhotoPosts(Module.getPhotoPosts(Module.countShowedPosts, 10, filter_config));

    };

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
        let list_tags_new_post = [];
        let tags = prompt("Впишите через пробел желаемые теги. Помните, что длина тега не должна превышать 20 символов", "");

        let beginListTags = document.getElementsByClassName("list-new-tags")[0];
        if (tags.length !== 0) {
            list_tags_new_post = tags.split(/(\s+)/).filter(function (e) {
                return e.trim().length;
            });

            add_tags_new_post.innerHTML = "Изменить теги";


            for (let i = 0; i < list_tags_new_post.length; i++) {
                let oneTag = document.createElement("li");
                oneTag.innerHTML = list_tags_new_post[i];
                beginListTags.appendChild(oneTag);
            }

        } else {
            add_tags_new_post.innerHTML = "Добавить теги";
            let last;
            while (last = beginListTags.lastChild) {
                beginListTags.removeChild(last)
            }
        }
    };

    /*//////////////////////////////////////////////////////////////////////////////////////*/

    let new_post_ok = document.getElementsByClassName("new-post-ok")[0];
    new_post_ok.onclick = function () {
        let answer = confirm("Добавить пост?");
    };

    let add_photo_in_post = document.getElementById("file");
    add_photo_in_post.addEventListener("change", function (e) {
        let fileName = this.files[0].name;
        if (fileName) {
            add_photo_in_post.nextElementSibling.querySelector("span").innerHTML = fileName;
        }
    });

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


    let clip_circle = document.getElementsByClassName("clip-circle")[0];
    let profile_name = document.getElementsByClassName("profile-name")[0];


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

            if (add_username) {

                let child_author = document.createElement('p');
                child_author.className = "author";
                child_author.innerHTML = Module.getUser().login;
                let before = document.getElementsByClassName("new_image_wrapper")[0];
                clip_circle.insertBefore(child_author, before);


                let child = document.createElement('span');
                child.className = "prof-name";
                child.innerHTML = Module.getUser().login;
                profile_name.appendChild(child);

                add_username = false;
            }
        }

        DomModule.displayPhotoPosts(Module.getPhotoPosts(Module.countShowedPosts, 10, filter_config));
    };

    /*************************************************************************************/

    username.onclick = function () {

        my_profile_page.style.display = "block";
        lenta.style.display = "none";
        welcome_page.style.display = "none";
        registration_page.style.display = "none";
        sign_page.style.display = "none";
        document.body.classList.add("my-profile");
        document.body.classList.remove("welcome");
        document.body.classList.remove("registration");
        document.body.classList.remove("sign");

    };

    /*******************************************************************/
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

        add_username = true;
        clip_circle.removeChild(document.getElementsByClassName("author")[0]);
        profile_name.removeChild(document.getElementsByClassName("prof-name")[0]);
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


}());