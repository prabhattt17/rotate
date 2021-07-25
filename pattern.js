let input=5;
let star=Math.floor(input/2)+1;
let space=1
let s=Math.floor(input/2)+1;
for(let i=1;i<=input;i++)
    {
        for(let j=1;j<=star;j++)
             process.stdout.write("*");
        for(let k=1;k<=space;k++)
            process.stdout.write(" ");
        for(let a=1;a<=star;a++)
            process.stdout.write("*");
         if(i<s){
             star--;
             space+=2;
         }
        else{
            star++;
            space=space-2;
        }
        console.log();
         
    }