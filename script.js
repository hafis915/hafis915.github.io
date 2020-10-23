//variabel
let question = document.getElementById("soal") ;
let infoPlayer = document.getElementById('info').children ;
let idxSoal = 0 ;
let jumlahSoal = 10 ;
let waktu = document.getElementById("countdowntimer")
let modal = document.getElementById("topup");
let soalHabis = document.getElementById("topupSoal")
let ready = false ;
let waktuHabis = false;
let selesai = false ;
let span = document.getElementsByClassName("close")[0];
let spanSoal = document.getElementsByClassName("closeSoal")[0];
console.log(span)
let pesanSoal = document.getElementById("soal-habis")
let skor = 0 ;
let benar = document.getElementById('Benar')
let salah = document.getElementById('Salah') 
let start = document.getElementById('start')
let timeleft = 5;


// meminta nama
let nama = prompt("halo selamat datang siapa nama kamu ?")
infoPlayer[0].innerText = `Nama: ${nama} `
infoPlayer[1].innerText = `Skor : ${skor}`

// Mengubah soal 
let listSoal =[
    
    ["Benar atau salah, Indonesia berada di kawasan asia tenggara","Salah"],
    ['Benar atau salah, naruto adalah hokage kelima ',"Benar"],
    ['Benar atau salah elektron adalah benda terkecil yg ada di alam semesta',"Benar"],
    ['Benar atau salah akar dari 114 adalah 12',"Salah"],
    ['Benar atau salah , warna adalah pancaran dari gelombang cahaya',"salah"],
    ['Benar atau salah 2 x 2 - 8 = -4 ',"salah"],
    ['Benar atau salah di ujung pelangi ada bidadari yang sedang mandi ',"Benar"],
    ['Benar atau salah , jam tangan dipakai di kaki',"Benar"],
    ['Benar atau salah, saat jawabannya benar tombol yang dipencet adalah tombol salah',"Salah"]
]

start.addEventListener("click",function(){
    question.innerText = listSoal[0][0]
    idxSoal= 0
    ready = true   
    let downloadTimer = setInterval(function(){
        timeleft--;
        waktu.innerText = `Waktu: ${timeleft} detik`;
        if(timeleft <= 0){      
            waktuHabis = true
            idxSoal = 0
            clearInterval(downloadTimer);
            modal.style.display = "block" 
            timeleft =5
        }
    },1000); 
})


benar.addEventListener("click",function(){
    timeleft = 5
    waktu.innerText = `Waktu: ${timeleft}`;

    if (!ready){
        alert("pencet mulai dulu ")
    }
    else {
        if(idxSoal <= listSoal.length-1 ){
            question.innerText = listSoal[idxSoal][0]
            if (listSoal[idxSoal][1] == "Benar"){
                console.log(idxSoal)
                skor++; 
                idxSoal++
                infoPlayer[1].innerText = `Skor : ${skor}`;
            }
            else{
                console.log("tidak masuk sini")
                idxSoal++
            }
            question.innerText = listSoal[idxSoal][0]
        }
        else if(idxSoal > listSoal.length -1){
            selesai = true
            soalHabis.style.display = "block"
            pesanSoal.innerText = `Selamat anda telah menyelesaikan game dengan skor: ${skor}`
        }
    }


})

salah.addEventListener("click",function(){
    timeleft = 5 ;
    waktu.innerText = `Waktu: ${timeleft}`;
    if (!ready){
        alert("pencet mulai dulu ")
    }
    else {
        if(idxSoal <= listSoal.length-1 ){
            if (listSoal[idxSoal][1] == "Salah"){
                console.log("masuk sini")
                skor++ ;
                idxSoal++;
                infoPlayer[1].innerText = `Skor : ${skor}` ;
                
            }
            else{
                console.log("tidak masuk sini")
                idxSoal++
            }
            question.innerText = listSoal[idxSoal][0]
        }
        else if(idxSoal > listSoal.length -1){
            selesai = true
            soalHabis.style.display = "block"
            pesanSoal.innerText = `Selamat anda telah menyelesaikan game dengan skor: ${skor}`
        }
    }
})

spanSoal.onclick = function() {
    timeleft = 5 
    idxSoal = 0
    skor = 0 
    console.log(skor)
    infoPlayer[1].innerText = `Skor : ${skor}`;
    soalHabis.style.display = "none";
}
console.log("habis")
span.onclick = function() {
    console.log("clikc")
    timeleft = 5
    modal.style.display = "none";
}