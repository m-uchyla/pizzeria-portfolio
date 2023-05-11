import { natural, local, time, pikantnyPoniedzialek, wegeWtorek, salamiSroda, czerstwyCzwartek, pracowityPiatek } from '../assets'
import { salami, vege, meat, tomato, pepperoni, hamAndMushroms, random } from '../assets'

export const pizzaNames = [
    {
        img: random,
        name: "random"
    },
    {
        img: salami,
        name: "Salami"
    },
    {
        img: vege,
        name: "Vege"
    },
    {
        img: meat,
        name: "Mięsna"
    },
    {
        img: tomato,
        name: "Pomidorowa"
    },
    {
        img: pepperoni,
        name: "Pepperoni"
    },
    {
        img: hamAndMushroms,
        name: "Szynka i Pieczarki"
    },
]

export const navLinks = [
    {
        id: "menu",
        title: "Menu",
        href: "/menu"
    },
    {
        id: "promo",
        title: "Promocje",
        href: "/promocje"
    },
    {
        id: "contact",
        title: "Kontakt",
        href: "/kontakt"
    }
]

export const ingredients = [
    {
        id: "natural",
        title: "Naturalne Składniki",
        img: natural
    },
    {
        id: "loacl",
        title: "Lokalni Dostawcy",
        img: local
    },
    {
        id: "time",
        title: "Dostawa zawsze na czas!",
        img: time
    },
]

export const menuList = [
    {
        id: "SalamiPizza",
        name: "Salami" ,
        img: salami,
        ingredients: "pomidory s.marzano D.O.P. / fiordilatte /  grana D.O.P. / salame napoli / rukola ",
        desc: "Pizza Salami to połączenie delikatnego, cienkiego ciasta z pikantnym smakiem Neapolitaństkiego Salami.",
    },
    {
        id: "VegePizza",
        name: "Vege" ,
        img: vege,
        ingredients: " pomidory s.marzano D.O.P. / fiordilatte /  grana D.O.P. / pieczona papryka peperoni/ duszony por/ karmelizowane orzechy/ pasta z karczochów/ kiełki groszku ",
        desc: "Pizza Vege to idealne połączenie grillowanych warzyw i syra.",
    },
    {
        id: "MeatPizza",
        name: "Mięsna" ,
        img: meat,
        ingredients: " pomidory s.marzano D.O.P. / fiordilatte /  grana D.O.P. / salsiccia/ salame napoli/ szalotka/ alpejski ser dobbiaco D.O.P. ",
        desc: "Pizza Mięsna to dużo mięsa na masę i nie tylko.",
    },
    {
        id: "SzynkaiPieczarkiPizza",
        name: "Szynka i Pieczarki" ,
        img: hamAndMushroms,
        ingredients: "pomidory s.marzano D.O.P. / fiordilatte /  grana D.O.P. / funghi prataioli / spianata calabrese picante ",
        desc: "Pizza Szynka i Pieczarki to pizza z szynką i pieczarką (jedną).",
    },
    {
        id: "TomatoPizza",
        name: "Pomidorowa" ,
        img: tomato,
        ingredients: "pomidory s.marzano D.O.P. / fiordilatte /  grana D.O.P. ",
        desc: "Pizza Pomidorowa to nasza propozycja znanej i lubianej Margarity.",
    },
    {
        id: "PepperoniPizza",
        name: "Pepperoni" ,
        img: pepperoni,
        ingredients: "pomidory s.marzano D.O.P. / fiordilatte /  grana D.O.P. / pieczona papryka peperoni / pepperoncino ",
        desc: "Pizza Pepperoni jest idealna na wieczór, ale zalecamy ostrożność, bo jest ostra również rano.",
    }
]

export const privacy = [
    {
        id: "politykaPrywatności",
        title: "Polityka Prywatności"
    },
    {
        id: "cookies",
        title: "Cookies"
    },
    {
        id: "regulamin",
        title: "Regulamin"
    },
]

export const promo = [
    {
        id: "pikantnyPoniedzialek",
        name: "Pikantny Poniedziałek",
        amount: "-15%",
        desc: "Każdy poniedziałek świętujemy pikantnie, dlatego na każdą pizzę z dodatkiem pikantnych papryczek dajemy 15% zniżkę!",
        img: pikantnyPoniedzialek
    },
    {
        id: "wegeWtorek",
        name: "Wege Wtorek",
        amount: "-15%",
        desc: "We wtorek każda bezmięsna pizza z 15% rabatem!",
        img: wegeWtorek
    },
    {
        id: "salamiSroda",
        name: "Salami Środa",
        amount: "-15%",
        desc: "Środa to dzień SALAMI! 15% zniżki na każdą pizzę z dodatkiem salami!",
        img: salamiSroda
    },
    {
        id: "czerwstyCzwartek",
        name: "Czerstwy Czwartek",
        amount: "-20%",
        desc: "Każda stara albo nieodebrana poprzedniego dnia przez klienta pizza za 20% mniej!",
        img: czerstwyCzwartek
    },
    {
        id: "pracowityPiątek",
        name: "Pracowity Piątek",
        amount: "-30%",
        desc: "W piątki pracownicy na umowie o pracę bądź umowie zlecenie dostają rabat w wysokości 30%! (Umowy zlecenie nie sumują się)",
        img: pracowityPiatek
    }
]

export const reviews = [
    {
        name: "Ania",
        rating: 4.5,
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia soluta quod, pariatur quis sequi atque natus velit esse, voluptates animi excepturi quos cumque optio nisi quasi dolorum est. Facere, voluptas."
    },
    {
        name: "Maciek",
        rating: 5,
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia soluta quod, pariatur quis sequi atque natus velit esse, voluptates animi excepturi quos cumque optio nisi quasi dolorum est. Facere, voluptas."
    },
]