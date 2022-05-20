const div = document.createElement("div")
div.id = "table-div"
const startBttn = document.getElementById("start-bttn")
const resetBttn = document.getElementById("reset-bttn")
const cells = document.getElementsByTagName("td")
const sizeMenu = document.getElementById("size-menu")
const table = `
<table>
    <tr>
        <td class="b"></td>
        <td class="b"></td>
        <td class="a"></td>
        <td class="a"></td>
        <td class="a"></td>
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
        <td class="a"></td>
        <td class="b"></td>
    </tr>
    <tr>
        <td class="b"></td>
        <td class="a"></td>
        <td class="b"></td>
        <td class="a"></td>
        <td class="b"></td>
    </tr>
    <tr>
        <td class="b"></td>
        <td class="b"></td>
        <td class="a"></td>
        <td class="b"></td>
        <td class="b"></td>
    </tr>
</table>
`

function renderTable() {
    div.innerHTML = `${table}`
    startBttn.addEventListener("click", handleClick)
    document.body.appendChild(div)
}

function handleClick(e) {
    const cellsArr = Array.from(cells)
    
    if (e.target.innerText === "START") {
        console.log("cells", cells)
        cellsArr.map(c => c.addEventListener("mouseover", handleHover))
        e.target.innerText = "STOP"
    } else if (e.target.innerText === "STOP") {
        cellsArr.map(c => c.removeEventListener("mouseover", handleHover))
        e.target.innerText = "START"
    }
}


function handleHover(e) {
    if (e.target.className === "a") {
        e.target.style.backgroundColor = "white"
    } else if (e.target.className === "b") {
        e.target.style.backgroundColor = "rgb(21, 115, 215)"
    }
}

sizeMenu.addEventListener("change", handleChange)

function handleChange(e) {
    startBttn.innerText = "START"
    if (e.target.value === "3x3") {
        div.innerHTML = `
        <table>
        <tr>
            <td class="b"></td>
            <td class="b"></td>
            <td class="a"></td>
        </tr>
        <tr>
            <td class="b"></td>
            <td class="a"></td>
            <td class="b"></td>
        </tr>
        <tr>
            <td class="a"></td>
            <td class="b"></td>
            <td class="b"></td>
        </tr>
        </table>
        `
    } else if (e.target.value === "4x4") {
        div.innerHTML = `
        <table>
        <tr>
            <td class="b"></td>
            <td class="a"></td>
            <td class="a"></td>
            <td class="a"></td>
        </tr>
        <tr>
            <td class="b"></td>
            <td class="b"></td>
            <td class="a"></td>
            <td class="b"></td>
        </tr>
        <tr>
            <td class="a"></td>
            <td class="b"></td>
            <td class="a"></td>
            <td class="b"></td>
        </tr>
        <tr>
            <td class="b"></td>
            <td class="a"></td>
            <td class="b"></td>
            <td class="b"></td>
        </tr>
        </table>
        `
    } else {
        div.innerHTML = `${table}`
    }
}

renderTable();



