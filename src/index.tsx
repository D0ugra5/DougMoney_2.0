import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from "miragejs";
  import {App} from './App';

// createServer({
//   models:{
//     transactions:Model
//   },

//   routes(){
//     this.namespace='api';

//     this.get('/transactions',()=>{
//       return this.schema.all('transactions')
   
//     })

//     this.post('/transactions',(scheme,request)=>{
//       const data = JSON.parse(request.requestBody)
//       return this.schema.create('transactions',data)
//     })
//   }
// })
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

