const endDate = "3 November 2024 00:51 AM"

document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;
    if(diff<0) return;
    input[0].value = Math.floor(diff / 60 / 60 / 24);
    input[1].value = Math.floor(diff/60/60)%24;
    input[2].value = Math.floor(diff/60)%60;
    input[3].value = Math.floor(diff)%60;
}
clock()
setInterval(
    () => {
        clock()
    },
    1000
)