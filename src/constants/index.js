import { natural, local, time } from '../assets'
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
        href: "menu"
    },
    {
        id: "about",
        title: "O Nas",
        href: "about"
    },
    {
        id: "contact",
        title: "Kontakt",
        href: "contact"
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
        desc: "Pizza Vege to idealne połączenie grillowanych warzyw i syra heh.",
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
        desc: "Pizza Pepperoni jest idealna na wieczór, ale boli pupa rano przy kupie, bo jest ostra.",
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