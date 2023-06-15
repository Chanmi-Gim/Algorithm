function solution(routes) {
    routes.sort((a, b)=> a[1]- b[1]);
    let camera = 1
    let criteria = routes[0][1]
    for(let i = 1 ; i < routes.length ; i++){
        if(criteria < routes[i][0]) {
            camera++;
            criteria = routes[i][1]
        }
    }
    return camera   
}