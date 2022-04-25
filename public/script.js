const socket = io();

const  estaSe = ()=> {
    document.getElementById("circle").style.display = "block";
    document.getElementById("circle-1").style.display = "none";
    document.getElementById("circle-2").style.display = "none";
    socket.emit('apagarT')
}
estaSe();
const btnTime = ()=>{
    const datos = {
        txttime: document.getElementById("txttime").value
    }
    socket.emit('times', datos);
    setTimeout(() => {
        document.getElementById("circle").style.display = "none";
    }, document.getElementById("txttime").value);
}

const btnOff = ()=>{
    document.getElementById("circle").style.display = "none";
    document.getElementById("circle-1").style.display = "none";
    document.getElementById("circle-2").style.display = "none";
    socket.emit('apagar');
}

const btnOn = ()=>{
    document.getElementById("circle").style.display = "block";
    document.getElementById("circle-1").style.display = "block";
    document.getElementById("circle-2").style.display = "block";
    socket.emit('prender');
}
var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
let van=1;
let Centesimas = document.getElementById("Centesimas");
let Segundos = document.getElementById("Segundos");
const inicio = ()=> {
    document.getElementById("circle").style.display = "block";
    socket.emit('prender-1');
	control = setInterval(cronometro,10);
	
}
const parar = ()=> {
    clearInterval(control);
    socket.emit('apagarT')
}
const reiniciar = ()=>{
    clearInterval(control);
    centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = ":00";
    socket.emit('apagarT')
    estaSe();
}
const cronometro = ()=> {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
    if(van === 1){
        if (segundos == 15) {
            document.getElementById("circle").style.display = "none";
            document.getElementById("circle-1").style.display = "block";
            document.getElementById("circle-2").style.display = "none";
            van = 2;
            segundos = -1;
            socket.emit('apagarT')
            socket.emit('prender-2');
        }
    }
    if(van === 2){
        if (segundos == 3) {
            document.getElementById("circle").style.display = "none";
            document.getElementById("circle-1").style.display = "none";
            document.getElementById("circle-2").style.display = "block";
            socket.emit('apagarT')
            socket.emit('prender-3');
            van = 3;
            segundos = -1;
        }
    }

    if(van === 3){
        if (segundos == 10) {
            document.getElementById("circle").style.display = "block";
            document.getElementById("circle-1").style.display = "none";
            document.getElementById("circle-2").style.display = "none";
            socket.emit('apagarT')
            socket.emit('prender-1');
            van = 1;
            segundos = -1;
        }
    }
	
	
}