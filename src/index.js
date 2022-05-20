const div = document.createElement("div")
div.id = "table-div"
const startBttn = document.getElementById("start-bttn")
const cells = document.getElementsByTagName("td")
const table = `
<table>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
`

function renderTable() {
    // design the table
    div.innerHTML = `${table}`
    startBttn.addEventListener("click", handleClick)
    document.body.appendChild(div)
}

function designTable(x,y) {
    console.log("IM IN DESIGNTABLE")
}

function handleClick(e) {
    // debugger; 
    if (e.target.innerText === "Start") {
        e.target.innerText = "Stop"
    } else if (e.target.innerText === "Stop") {
        e.target.innerText = "Start"
    }
}

renderTable();



