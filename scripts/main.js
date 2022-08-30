import { getFish } from "./database.js"
// const { getFish } = require("./database.js")

// import { getFish } from './database.js'

import { FishList } from "./FishList.js"

// const { FishList } = require("./FishList.js")

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fish_section")


parentHTMLElement.innerHTML = FishList()


const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}