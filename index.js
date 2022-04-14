const express = require('express');//nos sirve para levantar servicio.
const socketIO = require('socket.io');// es comunicacion entiempo real.

const app = express(); // instancia de espress
const io = require('socket.io')(app.listen(3000)); //estamos manejando el pueto 8080
app.use(express.static('public')); //en esta carpeta estamos dandole permisos
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html');//direccionando a index.html
})



const {Board, Leds} = require("johnny-five");
const board = new Board();

board.on("ready", ()=>{

    const leds = new Leds([3,5,6]);
    leds.pulse()

    //ejemplo 3, array animacion.


    //segundo pulso animacion
    leds.pulse({
        easing: "linear",
        duration: 5000,
        cuesPoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
        keyFrames: [0, 10, 50, 0, 255],
        onstop(){
            console.log("Animation stopped");
        }
        })
        


    //ejemplo 1 led pulse
    /*led.pulse();
    board.wait('3000', ()=>{
        led.stop().off();
    })*/

    io.on('connection', (e)=>{
        e.on('apagar', ()=>{
            leds.stop().off();
        })

        e.on('prender', ()=>{
            leds.on();
        })
        e.on('times', (data)=>{
            //led.off();
            board.wait(data.txttime, ()=>{
                leds.stop().off();
            })
        })
        //on() para enviar
        //emit para recivir
    })
    //led.on();
    //led.blink(500);
    //led.off();
})