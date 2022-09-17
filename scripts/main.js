import {fetchPaintings } from "./museumData.js"

const paintingsID = ["438815", "438011", "438014", "437430", "437432"]

const displayPaintings = async () => {
    for (const id of paintingsID) {
        const data = await fetchPaintings(id)
        renderPaintings(data)
    }
}

const renderPaintings = (data) => {
    let html =
    `<p>Title:${data.title}</p>
    <img src=${data.primaryImageSmall} alt=${data.title}>`
    
    document.getElementById("app").innerHTML += html
}


displayPaintings()