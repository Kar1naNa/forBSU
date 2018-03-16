var photoPosts = [
    {
        id: '1',
        idPerson: '1',
        author: 'annica',
        description: 'Воспоминания бесценны',
        createdAt: new Date(2018, 11, 26, 11, 41, 12),
        photoLink: 'assets/photo1.png',
        favorites: ['Lola', 'No name', 'Karina', 'alexx'],
        countFavorites: 4,
        likes: ['Nina', 'Viola', 'Mable'],
        countLikes: 3,
        hashTags: ['море', 'отпуск', 'Новая-Зеландия', 'былиВНовойЗеландии']
    },
    {
        id: '2',
        idPerson: '2',
        author: 'KlaraWrittenBlog',
        description: 'Сегодня наконец выбрались в зоопарк. Больше всего понравилось, конечно же, Аннабель.',
        createdAt: new Date(2017, 11, 23, 19, 43),
        photoLink: 'assets/photo2.png',
        favorites: ['Karina', 'Mable'],
        countFavorites: 2,
        likes: ['Santa'],
        countLikes: 1,
        hashTags: ['Аннабель', 'мойлюбимыйребенок', 'мыкупилизоопарк', 'какукрастьшляпу']
    },
    {
        id: '3',
        idPerson: '3',
        author: 'Lola',
        description: '',
        createdAt: new Date(2017, 11, 29, 3, 54, 0),
        photoLink: 'assets/photo3.png',
        favorites: ['KlaraWrittenBlog'],
        countFavorites: 1,
        likes: ['KlaraWrittenBlog'],
        countLikes: 1,
        hashTags: ['морскаязвезда', 'подводныекамни']
    },
    {
        id: '4',
        idPerson: '4',
        author: 'Алина Воробьева',
        description: 'Почему бы не забежать на кофе к хорошему человеку?)',
        createdAt: new Date(2018, 0, 18, 8, 21, 0),
        photoLink: 'assets/photo4.png',
        favorites: [],
        countFavorites: 0,
        likes: ['Santa'],
        countLikes: 1,
        hashTags: []
    },
    {
        id: '5',
        idPerson: '5',
        author: 'НеГлупаяБлондинка',
        description: 'А у вас случался книжный голод? У меня определенно да',
        createdAt: new Date(2018, 11, 26, 11, 41, 12),
        photoLink: 'assets/photo5.png',
        favorites: [],
        countFavorites: 0,
        likes: ['Nina', 'Viola'],
        countLikes: 2,
        hashTags: ['книгинашевсе', 'хочубытьюиюлиотекарем']
    },
    {
        id: '6',
        idPerson: '6',
        author: 'No Name',
        description: 'Это было последнее из того, что видел мой дрон(',
        createdAt: new Date(2018, 1, 9, 11, 2),
        photoLink: 'assets/photo6.png',
        favorites: [],
        countFavorites: 0,
        likes: [],
        countLikes: 0,
        hashTags: []
    },

    {
        id: '7',
        idPerson: '7',
        author: 'alexx',
        description: 'My life is good',
        createdAt: new Date(2018, 1, 9, 11, 1),
        photoLink: 'assets/photo7.png',
        favorites: ['annica', 'Lola'],
        countFavorites: 2,
        likes: ['НеГлупаяБлондинка', 'Viola'],
        countLikes: 2,
        hashTags: []
    },
    {
        id: '8',
        idPerson: '8',
        author: 'Karina',
        description: 'London is the capital of Great Britain',
        createdAt: new Date(2018, 1, 6, 23, 14),
        photoLink: 'assets/photo8.png',
        favorites: [],
        countFavorites: 0,
        likes: ['Nina', 'Viola', 'KlaraWrittenBlog', 'alexx'],
        countLikes: 4,
        hashTags: ['яуедужитьвлондон', 'мнемоскваНЕбудетсниться']
    },
    {
        id: '9',
        idPerson: '9',
        author: 'Santa',
        description: 'Happy \n' + 'New \n' + 'Year',
        createdAt: new Date(2018, 0, 1, 0, 0),
        photoLink: 'assets/photo9.png',
        favorites: ['Karina'],
        countFavorites: 1,
        likes: ['Karina', 'annica', 'alexx', 'Lola', 'KlaraWrittenBlog', 'No name', 'Алина Воробьева', 'Santa'],
        countLikes: 8,
        hashTags: ['найдименя']
    },
    {
        id: '10',
        idPerson: '8',
        author: 'Karina',
        description: 'В мире столько красивого, что жизни не хватит чтобы все посмотреть, но мы же будем стараться, правда?',
        createdAt: new Date(2017, 11, 20, 19, 56),
        photoLink: 'assets/photo10.png',
        favorites: ['annica', 'alexx', 'Lola'],
        countFavorites: 3,
        likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
        countLikes: 5,
        hashTags: ['Амстердам', 'найдименя']
    },
    {
        id: '11',
        idPerson: '2',
        author: 'KlaraWrittenBlog',
        description: 'Добрый волшебник (догадались как я завуалировала мужа?) разбудил долгожданным подарком',
        createdAt: new Date(2017, 11, 6, 9, 41),
        photoLink: 'assets/photo11.jpg',
        favorites: ['annica', 'alexx', 'Lola'],
        countFavorites: 3,
        likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
        countLikes: 5,
        hashTags: ['доброеУтро']
    },
    {
        id: '12',
        idPerson: '4',
        author: 'Алина Воробьева',
        description: 'Привет, друзья! А мы на море! УРА!!!',
        createdAt: new Date(2017, 10, 30, 17, 24),
        photoLink: 'assets/photo12.jpg',
        favorites: ['annica', 'alexx', 'Lola'],
        countFavorites: 3,
        likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
        countLikes: 5,
        hashTags: ['шлемПриветы']
    }, {
        id: '13',
        idPerson: '5',
        author: 'НеГлупаяБлондинка',
        description: 'Природой так интересно все предусмотрено. От одного цветочка аромат на всю студию',
        createdAt: new Date(2017, 10, 2, 21, 18),
        photoLink: 'assets/photo13.png',
        favorites: ['annica', 'alexx', 'Lola'],
        countFavorites: 3,
        likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
        countLikes: 5,
        hashTags: []
    },
    {
        id: '14',
        idPerson: '10',
        author: 'Viola',
        description: 'Люблю ч/б фото, а значит, и вы полюбите:)',
        createdAt: new Date(2017, 9, 28, 11, 46),
        photoLink: 'assets/photo14.jpg',
        favorites: ['annica', 'alexx', 'Lola'],
        countFavorites: 3,
        likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
        countLikes: 5,
        hashTags: ['ч/б', 'новыеобои']
    }, {
        id: '15',
        idPerson: '11',
        author: 'Nina',
        description: 'Год прошел. А это значит, что с ситцевой сводьбой нас!!!',
        createdAt: new Date(2017, 9, 10, 10, 10),
        photoLink: 'assets/photo15.jpg',
        favorites: ['annica', 'alexx', 'Lola'],
        countFavorites: 3,
        likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
        countLikes: 5,
        hashTags: ['самаяСчастливая', 'ниДняБезСмеха', '365днейСчастья']
    },
    {
        id: '16',
        idPerson: '1',
        author: 'annica',
        description: 'В Норвегии уже зима, а у вас?',
        createdAt: new Date(2017, 11, 20, 19, 56),
        photoLink: 'assets/photo16.jpg',
        favorites: ['annica', 'alexx', 'Lola'],
        countFavorites: 3,
        likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
        countLikes: 5,
        hashTags: ['Норвегия']
    },
    {
        id: '17',
        idPerson: '12',
        author: 'Mable',
        description: 'Уютный Хеллоуинский вечер',
        createdAt: new Date(2017, 9, 21, 17, 40),
        photoLink: 'assets/photo17.jpg',
        favorites: ['annica', 'alexx', 'Lola'],
        countFavorites: 3,
        likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
        countLikes: 5,
        hashTags: ['MyHomeIsMyCastle', 'октябрь']
    },
    {
        id: '18',
        idPerson: '11',
        author: 'Nina',
        description: 'На пределе сил и возможностей',
        createdAt: new Date(2017, 8, 29, 20, 52),
        photoLink: 'assets/photo19.jpg',
        favorites: ['annica', 'alexx', 'Lola'],
        countFavorites: 1,
        likes: [],
        countLikes: 0,
        hashTags: ['nature', 'sun']
    },
    {
        id: '19',
        idPerson: '8',
        author: 'Viola',
        description: 'Когда мечты становятся реальностью... С Днем Рождения меня!!!',
        createdAt: new Date(2017, 8, 29, 10, 52),
        photoLink: 'assets/photo19.jpg',
        favorites: ['annica', 'alexx', 'Lola'],
        countFavorites: 1,
        likes: [],
        countLikes: 0,
        hashTags: ['HappyBirthday', 'dreamcometrue']
    },
    {
        id: '20',
        idPerson: '10',
        author: 'Viola',
        description: 'Пора простуд и серых туч... Привет, осень!',
        createdAt: new Date(2017, 8, 1, 0, 1),
        photoLink: 'assets/photo20.jpg',
        favorites: ['annica', 'alexx', 'Lola'],
        countFavorites: 3,
        likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
        countLikes: 5,
        hashTags: ['грипп', 'желтыеЛимоны']
    },

    {
        id: '21',
        idPerson: '11',
        author: 'Nina',
        description: 'Интересно, любовь к азиатской кухне передается на генетическом уровне?',
        createdAt: new Date(2017, 5, 19, 21, 44),
        photoLink: 'assets/photo21.jpg',
        favorites: ['annica', 'alexx', 'Lola'],
        countFavorites: 3,
        likes: ['annica', 'alexx', 'НеГлупаяБлондинка', 'Алина Воробьева', 'Lola'],
        countLikes: 5,
        hashTags: ['пп', 'прхудеюКЛету']
    }
];

window.funcModul = (function () {

    var checkers = new Map();

    checkers.set('id', function (id) {
        return (typeof id === 'string' && id.trim().length > 0);
    });

    checkers.set('description', function (description) {
        return (typeof description === 'string' && description.length < 201)
    });

    checkers.set('createdAt', function (createdAt) {
        return (Object.prototype.toString.call(createdAt) === '[object Date]');
    });

    checkers.set('author', function (author) {
        return (typeof author === 'string' && author.trim().length > 0);
    });

    checkers.set('photoLink', function (photoLink) {
        return (typeof photoLink === 'string' && photoLink.trim().length > 3);
    });

    checkers.set('countLikes', function (countLikes) {
        return (Number.isInteger(countLikes) && countLikes >= 0);
    });

    checkers.set('countFavorites', function (countFavorites) {
        return (Number.isInteger(countFavorites) && countFavorites >= 0);
    });

    checkers.set('idPerson', function (idPerson) {
        return (typeof idPerson === 'string' && idPerson.trim().length > 0);
    });

    checkers.set('favorites', function (favorites) {
        return !!(favorites);
    });

    checkers.set('likes', function (likes) {
        return !!(likes);
    });

    checkers.set('hashTags', function (hashTags) {
        return !!(hashTags);
    });

    function findPhotoPostById(id) {
        for (i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id === id)
                return i;
        }
        return -1;
    }


    function getPhotoPosts(skip = 0, top = 10, filterConfig) {

        if (typeof skip !== 'number' || typeof top !== 'number') {
            console.log('Error type');
            return;
        }

        if (filterConfig !== undefined && typeof filterConfig !== 'object') {
            console.log('Error type');
            return;
        }


        var skipped = 0;
        var photoPostsFilter = [];

        for (var i = 0; i < photoPosts.length; i++) {
            if (checkPostForFilterSutable(photoPosts[i], filterConfig)) {
                if (skipped < skip) {
                    skipped++;
                }
                else {
                    photoPostsFilter.push(photoPosts[i]);
                    if (top === photoPostsFilter.length)
                        break;
                }
            }
        }

        return photoPostsFilter;
    }

    function checkPostForFilterSutable(photoPost, filterConfig) {
        var isGood = true;
        if (filterConfig !== undefined) {
            if (filterConfig.author !== undefined && photoPost.author !== filterConfig.author) {
                isGood = false;
            }
            if (isGood && filterConfig.hashTags !== undefined && filterConfig.hashTags.length !== 0
                && photoPost.hashTags.length !== 0) {
                for (var j = 0; j < filterConfig.hashTags.length; j++) {
                    var hashtag = filterConfig.hashTags[j];

                    var isFound = false;
                    for (var k = 0; k < photoPost.hashTags.length; k++) {
                        if (photoPost.hashTags[k] === hashtag) {
                            isFound = true;
                            break;
                        }
                    }
                    if (!isFound) {
                        isGood = false;
                        break;
                    }
                }
            }

            if (isGood && filterConfig.dateFrom !== undefined) {
                if (photoPost.createdAt < filterConfig.dateFrom) {
                    isGood = false;
                }
            }

            if (isGood && filterConfig.dateTo !== undefined) {
                if (photoPost.createdAt > filterConfig.dateTo) {
                    isGood = false;
                }
            }
        }

        return isGood;
    }

    console.log(getPhotoPosts(0, 10, {author: 'annica', hashTags: ['море'] }));

    function validatePhotoPost(photoPost) {
        for (var property in photoPost) {
            if (photoPost.hasOwnProperty(property)) {
                if (!checkers.has(property) || !checkers.get(property)(photoPost[property]))
                    return false;
            }
        }
        return true;
    }

    function getPhotoPost(id) {
        var index = findPhotoPostById(id);
        if (index !== -1) {
            return photoPosts[index];
        }
        return null;
    }


    function addPhotoPost(photoPost) {
        if (validatePhotoPost(photoPost)) {
            photoPosts.push(photoPost);
        }
    }

    function editPhotoPost(id, photoPost) {
        var i = findPhotoPostById(id);
        if (i === -1)
            return false;

        for (var property in photoPost) {
            if (photoPost.hasOwnProperty(property)) {
                if (checkers.has(property) && checkers.get(property)(photoPost[property])) {
                    photoPosts[i][property] = photoPost[property];
                }
            }
        }
        return true;
    }

    function removePhotoPost(id) {
        var index = findPhotoPostById(id);
        if (index !== -1) {
            photoPosts.splice(index, 1);
            return true;
        }
        return false;
    }

})
();