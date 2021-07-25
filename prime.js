let ans=1;
let input=7;
    for(let i=2;i<=input;i++)
        {
            for(let j=0;j<i;j++)
             {
              if(i%j==0){
                  ans=0;
                  breakl
               }
              }
            
            if(ans==1)
              console.log(i);
            }