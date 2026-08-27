function createAlarm(name, millisecs){
    
    return new Promise((resolve, reject)=>{
        if(millisecs<3){
         let err=new Error("Delay is not sufficient");
         reject(err)

    }
        setTimeout(resolve(`Wake up ${name}`), millisecs*1000)
    })
    }
createAlarm('John', 0).then((message) => {
    console.log(message) // output "Wake up John" after 4 seconds
}).catch((error) => {
    console.error(error.message)
})

