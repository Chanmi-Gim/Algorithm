function solution(str1, str2) {
    let arr1 = [], arr2 = []
    let 교집합 = 0, 합집합 = 0;
    str1 = str1.toUpperCase()
    str2 = str2.toUpperCase()
    for(let i =0; i< str1.length-1; i++) arr1.push(str1[i]+str1[i+1])
    for(let i =0; i< str2.length-1; i++) arr2.push(str2[i]+str2[i+1])
    arr1 = arr1.filter((el)=> el.split('').every((x)=> /[A-Z]/.test(x)))
    arr2 = arr2.filter((el)=> el.split('').every((x)=> /[A-Z]/.test(x)))
    if(arr1.length === 0 && arr2.length === 0) return 65536
    let sumLen = arr1.length + arr2.length
    arr1.forEach((el)=>{
        if(arr2.includes(el)){
            교집합++;
            arr2.splice(arr2.indexOf(el), 1);
        }
    })
    합집합 = sumLen - 교집합 
    return Math.floor(65536*(교집합/합집합))
}