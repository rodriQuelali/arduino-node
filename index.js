const express = require('express');//nos sirve para levantar servicio.
const socketIO = require('socket.io');// es comunicacion entiempo real.

const app = express(); // instancia de espress
const io = require('socket.io')(app.listen(8080)); //estamos manejando el pueto 8080
app.use(express.static('public')); //en esta carpeta estamos dandole permisos
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html');//direccionando a index.html
})



const {Board, Led} = require("johnny-five");
const board = new Board();

board.on("ready", ()=>{
    
    const led = new Led(13);
    led.on();
    io.on('connection', (e)=>{
        e.on('apagar', ()=>{
            led.off();
        })
        //on() para enviar
        //emit para recivir
    })
    //led.on();
    //led.blink(500);
    //led.off();
})