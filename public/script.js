const socket = io();

/*const btn = document.getElementById('btn-onclick');
btn.onclick = ()=>{
    socket.emit('apagar');
}*/

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
    socket.emit('apagar');
}

const btnOn = ()=>{
    document.getElementById("circle").style.display = "block";
    socket.emit('prender');
}












/*
document.getElementById('btn-onclick').addEventListener('click', ()=>{
    console.log("hello button two");
})
*/
/*
const btnFuncion = ()=>{
    console.log("hollo button three");
}*/