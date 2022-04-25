const express = require('express');//nos sirve para levantar servicio.
const socketIO = require('socket.io');// es comunicacion entiempo real.

const app = express(); // instancia de espress
const io = require('socket.io')(app.listen(3000)); //estamos manejando el pueto 8080
app.use(express.static('public')); //en esta carpeta estamos dandole permisos
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html');//direccionando a index.html
})



const {Board, Leds, Led} = require("johnny-five");
const board = new Board();

board.on("ready", ()=>{

    const leds = new Leds([3,5,6]);
    const led1 = new Led(6); //rojo
    const led2 = new Led(5);//amar
    const led3 = new Led(3); //verde
    
    /*leds.pulse({
        easing: "linear",
        duration: 5000,
        cuesPoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
        keyFrames: [0, 10, 50, 0, 255],
        onstop(){
            console.log("Animation stopped");
        }
        })
      */  


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
        e.on('prender-1', ()=>{
            led1.on();
        })
        e.on('prender-2', ()=>{
            led2.on();
        })
        e.on('prender-3', ()=>{
            led3.on();
        })
        e.on('apagarT', ()=>{
            leds.stop().off();
        })
        e.on('times', (data)=>{
            board.wait(data.txttime, ()=>{
                leds.stop().off();
            })
        })
        
    })
    
})