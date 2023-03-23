const http =require("http")
const port =5000
const addition =(a,b)=>{
    return a+b
}
http.createServer((request,response)=>{
    response.write("<h1>result is </h1>"+addition(5,11));
    response.end()
}).listen(port)
console.log("mrighel sa7bi");