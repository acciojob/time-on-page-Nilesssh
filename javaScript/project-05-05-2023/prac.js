function findMax(array) {
    // return the max value
   // do not console.log here
       let max = Integer.MIN_VALUE;
       console.log(max);
       for(let i=0; i<array.length; i++){
           for(let j=0; j<array[i].length; j++){
               if(max<array[i][j]){
                   max = array[i][j];
               }
           }
       }
       return max;
   }

   console.log(findMax([[60052,43630,67562,21241,50746],[38322,89702,64390,90644,72060],[69322,68740,13873,72933,97828],[45514,74510,81013,93837,21278],[95309,84140,9035,23264,21745]]))