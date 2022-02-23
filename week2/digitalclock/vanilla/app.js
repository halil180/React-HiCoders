/*
Digital Clock ANALIZ
1.anlik saati gosteren bir dijital saat yapilacak
2. her saniye saat durumu degisecek
////
1.setinterval ile her saniye guncel saati al
2.guncel saati Date objesinden al
3.saati htmle yazdir
*/
setInterval(() => {
showtime();
}, 1000);
const  showtime = () =>  {
    let time = new Date() /// guncel saati alma
    let clock = time.toLocaleTimeString() /// bu method okunabilir bir sekilde  saati donuyor
    document.getElementById("app").innerHTML = clock;
}
showtime();