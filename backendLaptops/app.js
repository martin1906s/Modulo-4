const express = require("express")
const bodyParser = require("body-parser");
const app = express();
const puerto = 3002
const laptops = [
    { id: 100, marca: "Lenovo", procesador: "Intel Core i5", memoria: "16 GB", disco: "1 TB" },
    { id: 101, marca: "HP", procesador: "AMD Ryzen 5", memoria: "8 GB", disco: "512 GB" },
    { id: 102, marca: "Dell", procesador: "Intel Core i7", memoria: "16 GB", disco: "512 GB" }
];
app.use(bodyParser.json());

app.use("/laptops", (req, resp, next) => {
    console.log("ingresa a middleware");
    console.log(req.headers);
    console.log("body: ", req.body);
    next();
})

app.post("/laptops", (request, response) => {
    request.body.id=103
    response.send(request.body)
});

app.get("/laptops/:idGet", (request, response) => {
    const id=parseInt(request.params.idGet);
    let laptopEncontrada=null;
    for (let i=0;i<laptops.length;i++){
        if (laptops[i].id==id){
            laptopEncontrada=laptops[i];
            break;
        }
    }
    if (laptopEncontrada) {
        response.send(laptopEncontrada);
    }else {
        response.status(404).send("Error: Laptop no encontrada")
    }
})

app.get("/laptops",(req,res)=>{
    res.send(laptops)
})

app.put("/laptops/:idParam", (request, response) => {
    const id=request.params.idParam
    console.log(id);
    response.send(request.body)
});

app.delete("/laptops/:idDelete", (request, response) => {
    const id=request.params.idDelete
    console.log(id);
    
    response.send()
});
app.listen(puerto, () => {
    console.log("Servidor en puerto: " + puerto);
})