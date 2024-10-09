// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumcallback){
//    sumcallback(a,b);
// }

// // calculator(1,2,sum);
// calculator(1,2,(a,b)=>{
//     console.log(a+b);
// })


// function getdata (dataId, getNextdata){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextdata){
//             getNextdata();
//         }
//     },2000)
// }

// getdata(1,()=>{
//     getdata(2)
// })

// const promisis = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("i am a promise");
//         // resolve('sucecced')
//         reject('error');
//     });
// };
// let promise = promisis();
// promise.than((res)=>{
//     console.log("promise is fulfilled",res);
// });

// promise.catch((err)=>{
//     console.log('rejected',err);
// })

// function asyncfun1 (){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data");
//             resolve('sucess')
//         },3000)
//     });
// }

// function asyncfun2 (){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data");
//             resolve('sucess')
//         },3000)
//     });
// }
// console.log("fetching1 data1");
// let p1 = asyncfun1();
// p1.then((res)=>{
//     console.log("fetching2 data2");
//     let p2 = asyncfun2();
//     p2.then((res)=>{
//     })
// })

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },3000)
    });
}
async function getWeatherData(){
    await api();
}