let s="Hello World"
let element=s.split(' ')
//console.log(s.split('').reverse().join(''))
let s1 = " fly me to the moon "
let s2=s1.trim().split(' ')
console.log(element[1].length)
console.log(s2[s2.length-1].length);

function isAnagram(su,sur){

let a=su.toLowerCase().split('').sort().join('')
let a1=sur.toLowerCase().split('').sort().join('');
if(a===a1){
console.log("Is a Anagarm")
}else{
    console.log("Is not a anagram")
}
}
isAnagram("silent","listen")
isAnagram('hello', 'world')