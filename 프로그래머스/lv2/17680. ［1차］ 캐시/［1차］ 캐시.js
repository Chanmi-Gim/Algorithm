function solution(cacheSize, cities) {
    let cache = Array(cacheSize)
    let time = 0;
    cities = cities.map((city)=> city.toUpperCase())
    for(let i = 0; i < cities.length ; i++){
        // 1. 캐시안에 요소가 있으면 
        if(cache.includes(cities[i])) {
            cache.splice(cache.indexOf(cities[i]),1)
            cache.push(cities[i])
            time += 1;
        // 2. 캐시안에 요소가 없으면(캐시가 꽉안찼으면 / 캐시가 0이면/ 캐시가 꽉찼으면)
        }else{
            if(cache.includes(null)) {
                cache.push(cities[i]) 
            }else if(cacheSize === 0){
            }else{ 
                cache.shift()
                cache.push(cities[i])
            }
            time += 5
        } 
    }
    return time
}
