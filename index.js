

let api = "https://ifsc.razorpay.com/"
function f1() {
    let input = document.getElementById("input")
    let inputvalue = input.value
    console.log(inputvalue);
    fetch(api + inputvalue)
        .then(Response => Response.json())
        .then(data => {
            console.log(data);
            document.getElementById("a1").innerText += " " + data["BANK"]
            document.getElementById("a2").innerText += " " + data["ADDRESS"]
            document.getElementById("a3").innerText += " " + data["BANKCODE"]
            document.getElementById("a4").innerText += " " + data["BRANCH"]
            document.getElementById("a5").innerText += " " + data["CENTRE"]
            document.getElementById("a6").innerText += " " + data["CITY"]
            document.getElementById("a7").innerText += " " + data["CONTACT"]
            document.getElementById("a8").innerText += " " + data["DISTRICT"]
            document.getElementById("a9").innerText += " " + data["IFSC"]
            document.getElementById("a10").innerText += " " + data["MICR"]
            document.getElementById("a11").innerText += " " + data["STATE"]

        })

   




}




