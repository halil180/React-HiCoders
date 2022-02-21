import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
/*
Digital Clock ANALIZ
1.anlik saati gosteren bir dijital saat yapilacak
2. her saniye saat durumu degisecek
////
1.setinterval ile her saniye guncel saati al
2.guncel saati Date objesinden al
3.saati htmle yazdir
*/
ReactDOM.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>,
    document.getElementById('root')
);

