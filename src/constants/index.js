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
        name: "Meat"
    },
    {
        img: tomato,
        name: "Tomato"
    },
    {
        img: pepperoni,
        name: "Pepperoni"
    },
    {
        img: hamAndMushroms,
        name: "Ham and Mushrooms"
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