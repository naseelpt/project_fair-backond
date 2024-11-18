//  imoport dotenv
  require('dotenv').config()

// 1- import express

  const express = require('express')

  // // // //5- import cors
const cors = require('cors')

// // // // import router

const router = require('./router')

// import connect

require('./connection')

// // 2- create server

const pfServer = express()

// // // // 6-server using cors

 pfServer.use(cors())

//  ecporting upload file

pfServer.use('/upload',express.static('./uploads'))

// // // // 7-parse the data

 pfServer.use(express.json())

// // // //2- create server

 

// // //create server
 
 pfServer.use(router)

// // //3- port

 const PORT = 4000 || process.env.PORT

// // 4- listen

 pfServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
    
})

//  pfServer.get('./',(req,res)=>{
//      res.send('get requast recieved')
//  })




