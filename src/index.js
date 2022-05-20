const div = document.createElement("div")
div.id = "table-div"
const startBttn = document.getElementById("start-bttn")
const cells = document.getElementsByTagName("td")
const table = `
<table>
    <tr>
        <td class="a"></td>
        <td class="b"></td>
        <td class="b"></td>
        <td class="b"></td>
        <td class="b"></td>
    </tr>
    <tr>
        <td class="b"></td>
        <td class="a"></td>
        <td class="b"></td>
        <td class="b"></td>
        <td class="b"></td>
    </tr>
    <tr>
        <td class="b"></td>
        <td class="b"></td>
        <td class="a"></td>
        <td class="b"></td>
        <td class="b"></td>
    </tr>
    <tr>
        <td class="b"></td>
        <td class="b"></td>
        <td class="b"></td>
        <td class="a"></td>
        <td class="b"></td>
    </tr>
    <tr>
        <td class="b"></td>
        <td class="b"></td>
        <td class="b"></td>
        <td class="b"></td>
        <td class="a"></td>
    </tr>
</table>
`

function renderTable() {
    // design the table
    div.innerHTML = `${table}`
    startBttn.addEventListener("click", handleClick)
    document.body.appendChild(div)
}

function handleClick(e) {
    // debugger; 
    const cellsArr = Array.from(cells)
    
    if (e.target.innerText === "Start") {
        console.log("cells", cells)
        cellsArr.map(c => c.addEventListener("mouseover", handleHover))
        e.target.innerText = "Stop"
    } else if (e.target.innerText === "Stop") {
        cellsArr.map(c => c.removeEventListener("mouseover", handleHover))
        e.target.innerText = "Start"
    }
}

function handleHover(e) {
    if (e.target.className === "a") {
        e.target.style.backgroundColor = "white"
    } else if (e.target.className === "b") {
        e.target.style.backgroundColor = "rgb(21, 115, 215)"
    }
}
renderTable();



