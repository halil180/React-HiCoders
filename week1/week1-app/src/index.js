/* 
ANALIZ - my first react app
1-react kullanilarak basit bir html sayfasi olustur
2-sayfanin en ustunde header bolumu,ortada kartlar ,
en altta footer bolumu olacak
3-her fragment icin yeni bir js dosyasi ac 
4-butun komponentleri App.js dosyasinda topla
5-index.js de app dosyasini import et ve <App/> i root elemanina render et
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

