let arr = ["red","Green","Blue"];
let arr2 = ["pink","black"];

for (const key in arr2) {
    console.log(arr[key]);
    arr.push(arr2[key]);
}
console.log("arr...",arr);

