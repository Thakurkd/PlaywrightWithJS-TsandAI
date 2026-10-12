let statuscode =404;
let category = statuscode<300?"success":statuscode<400?"redirect":statuscode<500?"Client Error":"Server Error";
console.log(category);