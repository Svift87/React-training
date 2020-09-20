let state = {
    profilePage: {
        postData: [
            { id: 1, message: "Hi, how are you?", like: 10 },
            { id: 2, message: "It`s my first post", like: 15 },
        ],
        profileInfoData: {
            id: 1,
            banner: 'https://best-quote.ru/wp-content/uploads/2019/01/rossiya_harkov_park_vecher_lavochka_879_1600x900-e1549035496929.jpg',
            avatar: 'https://static.mk.ru/upload/entities/2020/08/13/17/articles/detailPicture/9d/5d/76/5a/4991c61486bc262f5d90dc64fc67cec9.jpg',
            name: 'Sergey K',
            birthday: '22 juanvar',
            city: 'Novosibirsk',
            webSite: 'pokanet'
        }
    },
    messagesPage: {
        dialogsData: [
            { id: 1, name: "Dima" },
            { id: 2, name: "Nik" },
            { id: 3, name: "Sonya" },
            { id: 4, name: "Vitya" },
        ],
        messagesData: [
            { id: 1, message: "Сообщения Dima" },
            { id: 2, message: "Сообщения Nik" },
            { id: 3, message: "Сообщения Sonya" },
            { id: 4, message: "Сообщения Vitya" },
        ]
    },
    
    
}

export default state