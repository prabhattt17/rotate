let input="2\n12345";
let arr=input.split("\n");

let k=Number(arr[0]);
let number=Number(arr[1]);
 //1. find number of digits
 
 let num = number;
 console.log(num);
 let nod = 0;

 while(num != 0){
     num = Math.floor(num/10);
     nod++;
   
 }
 console.log(nod);
 
 //2. bring value of k in range
 k = k % nod;
 if(k < 0){
     k = k + nod;
 }
 console.log(nod);
 let s=nod-k;
 //3. set value of div and mult
 let div = Math.pow(10, k);
 let mult=Math.pow(10, s);
 console.log(div);
 console.log(mult);
 
 //4. find q and r
 let q = number / div;
 let r = number % div;
 
 //5. update ans and print it
 let ans =Math.floor(((r * mult) + q));
 console.log(ans);