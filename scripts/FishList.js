// const { getFish } = require("./database.js")
import { getFish } from "./database.js"
export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTNL representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<div class="fish_card">
            <img class="fish_image" src="${fish.image}">
            <p>Name: ${fish.name}<br>
            Species: ${fish.species}<br>
            Lengths: ${fish.length}<br>
            Location harvested: ${fish.location}<br>
            Food: ${fish.food}</p></div>
        </div>`
    }
    htmlString += `</article>`

    return htmlString
}
// module.exports = { FishList }