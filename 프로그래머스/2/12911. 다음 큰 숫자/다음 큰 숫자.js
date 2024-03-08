 function solution(n) {
     let numberOfOne = n.toString(2).match(/1/g).length;
     while(true){
         n++;
         if(n.toString(2).match(/1/g).length === numberOfOne) return n
     }
}