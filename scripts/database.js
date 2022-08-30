const database = {
    fish: [
        {   
            image: "https://www.tankarium.com/wp-content/uploads/2020/10/Pygmy-Cory-vs-Dwarf-Cory-Whats-The-Difference_-1.jpg",
            name: "Bart",
            species: "Dwarf Cory",
            length: "3 cm / 1.2 in",
            location: "Brazil",
            food: "crustaceans",
        },
        {
            image: "https://seaunseen.com/wp-content/uploads/2014/12/DSC04288-1400-swm.jpg",
            name: "Lisa",
            species: "Royal Angelfish",
            length: "25 cm / 9.8 in",
            location: "Japan",
            food: "seaweed, algae, krill",
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Synchiropus_splendidus_2_Luc_Viatour_cropped.png",
            name: "Maggie",
            species: "Mandarinfish",
            length: "8 cm / 3 in",
            location: "Australia",
            food: "crustaceans, worms",
        }
    ]
}

export const getFish = () => {
     return database.fish.map(fish => ({...fish}))
}

// module.exports = { getFish }

// export const getFish = () => {
//     return database.fish.map(fish => ({...fish}))
// 