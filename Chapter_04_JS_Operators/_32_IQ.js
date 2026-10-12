let responseTime = 850;
let sla = 1000;
let result = responseTime<=sla?"WithInSla":"SLA Breached";
console.log(result);
// Syantax of terneriry operator
// let result = condition?true:false
//let result =(a<=b)?Output1(true):Output2(false)