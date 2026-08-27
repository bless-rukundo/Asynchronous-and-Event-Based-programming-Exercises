const stats = Promise.resolve("Stats loaded");
const users = Promise.reject("Users failed");
const logs = Promise.resolve("Logs loaded");

const myPromises = async ()=>{
    try{
    const promiseallsettle = await Promise.allSettled([stats,users,logs]);
    const promiseall = await Promise.all([stats, users, logs]);
    console.log(promiseallsettle)
    console.log(promiseall)
    }catch(error){
        console.log("Something went wrong!")
    }
}
myPromises()

