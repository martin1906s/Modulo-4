const IP = "192.168.200.20"
const PORT = 3002
const URL = "http://" + IP + ":" + PORT + "/"

export const getAllLaptops = (fnRefreshList) => {
    fetch(URL + "laptops")
        .then((response) => { return response.json() })
        .then((body) => {
            fnRefreshList(body);
        })
}

export const saveLaptopsRest = (laptop, fnShowMessage) => {
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            marca: laptop.marca,
            procesador: laptop.procesador,
            memoria: laptop.memoria,
            disco: laptop.disco,
            id: laptop.id
        })
    }
    fetch(URL + "laptops", config).then(resp => resp.json()).then((body) => {
        fnShowMessage();
        console.log(body);

    })
}