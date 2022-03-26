const socket = io();

const btn = document.getElementById('btn-onclick');
btn.onclick = ()=>{

    socket.emit('apagar');

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