function solution(name, yearning, photo) {
    const hash = {}
    name.forEach((item, i)=> hash[name[i]] = yearning[i])
    return photo.map((item)=> item.reduce((acc, el) => hash[el]? acc + hash[el] : acc + 0 , 0))
}