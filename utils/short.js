const array =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","0","1","2","3","4","5","6","7","8","9"]

const getShortUrl=(id)=>{
    var num = Number(id)
    var temp=[];

    while(num>0){
        temp.push(array[num%62])
        num=parseInt(num/62)
    }
    return temp.reverse().join("")


}
const decodeShortUrl = (shortKey)=>{
    let splitedString = shortKey.split('').reverse()
    //console.log(splitedString)
    var temp = 0
    for (var i=0;i<splitedString.length;i++){
            temp+=Math.pow(62,i)*array.indexOf(splitedString[i])
            //console.log(temp)
    }
    return temp
}

module.exports={
    getShortUrl,
    decodeShortUrl
}