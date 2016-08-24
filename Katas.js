/**
 * Created by davehochstrasser on 8/20/16.
 */

function firstLast6(list) {
    return (list[0] == 6 || list[list.length - 1] == 6);

}
var list = [1, 2, 6];
console.log("Example of firstLast6", list, " ->>", firstLast6(list));
list = [1, 2, 3, 1];
console.log("Example of firstLast6", list, " ->>", firstLast6(list));
list = [1, 2, 1];
console.log("Example of firstLast6", list, " ->>", firstLast6(list));
list = [5, 6, 6, 7];
console.log("Example of firstLast6", list, " ->>", firstLast6(list));
list = [6, 5, 5, 7];
console.log("Example of firstLast6", list, " ->>", firstLast6(list));
list = [4, 7, 6];
console.log("Example of firstLast6", list, " ->>", firstLast6(list));
console.log("");


function sameFirstLast(list) {
    return (list[0] == list[list.length - 1] && list.length >= 1);}

var list = [1, 2, 3];
console.log("Example of sameFirstLast", list, " ->>", sameFirstLast(list));
var list = [1, 2, 3, 1];
console.log("Example of sameFirstLast", list, " ->>", sameFirstLast(list));
var list = [1, 2, 1];
console.log("Example of sameFirstLast", list, " ->>", sameFirstLast(list));
var list = [6, 2, 7, 6];
console.log("Example of sameFirstLast", list, " ->>", sameFirstLast(list));
var list = [6, 4, 5, 3];
console.log("Example of sameFirstLast", list, " ->>", sameFirstLast(list));
var list = [];
console.log("Example of sameFirstLast", list, " ->>", sameFirstLast(list));
var list = [8, 0, 0, 8];
console.log("Example of sameFirstLast", list, " ->>", sameFirstLast(list));
console.log("");

//Rotate Left - Given an array of integers length 3, return an array with
//the elements "rotated left" so [1, 2, 3] yields [2, 3, 1].

function rotateLeft(list) {
    console.log("Example of rotateLeft", list, "->>", list[1], list[2], list[0]);}

list = [1, 2, 3]; rotateLeft(list);
list = [0, 0, 7]; rotateLeft(list);
list = [5, 11, 9]; rotateLeft(list);
list = [4, 6, 8]; rotateLeft(list);
list = [10, 12, 14]; rotateLeft(list);
list = [44, 55, 66]; rotateLeft(list);
console.log("");


//Reverse 3 - Given an array of Integers length 3, return a new array with
//the elements in reverse order, so [1, 2, 3] becomes [3, 2, 1].

function reverse3(list) {
    console.log("Example of reverse3", list, "->>", list[2], list[1], list[0]);}

list = [1, 2, 3]; reverse3(list);
list = [5, 11, 9]; reverse3(list);
list = [7, 0, 0]; reverse3(list);
list = [9, 6, 3]; reverse3(list);
list = [22, 44, 66]; reverse3(list);
list = [3, 2, 1]; reverse3(list);
console.log("");



//Sum First Penultimate - Given an array of integers of at least length 2,
//return the sum of the first elements in the array and the second from last element.
//If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.

function sumFirstPen(list) {
    if (list.length <= 2) {
        return list[0] + list[1];
    }
    else {
        return list[0] + list[list.length - 2];
    }
}

list = [1, 2, 3];
console.log("Example of sumFirst Penultimate", list,
    "->> ", sumFirstPen(list));
list = [1, 1, 1, 1];
console.log("Example of sumFirst Penultimate", list,
    "->> ", sumFirstPen(list));
list = [1, 2, 3, 4];
console.log("Example of sumFirst Penultimate", list,
    "->> ", sumFirstPen(list));
list = [2, 3];
console.log("Example of sumFirst Penultimate", list,
    "->> ", sumFirstPen(list));
list = [3, 2];
console.log("Example of sumFirst Penultimate", list,
    "->> ", sumFirstPen(list));
list = [2, 4, 6, 4, 9];
console.log("Example of sumFirst Penultimate", list,
    "->> ", sumFirstPen(list));
console.log("");



//Map Bully - Modify and return the given HashMap as follows: if the key "a" has a value,
//set the key "b" to have that value, and set the key "a" to have the value "".
//Basically "b" is a bully, taking the value of "a".


function mapBully(map) {
    if (map["a"]) {
        map["b"] = map["a"];
        map["a"] = [];
    }
    return map;
}

var maps = {"a": "candy", "b": "dirt"};
console.log("Example of Map Bully", JSON.stringify(maps),
    " --> ", mapBully(maps));

maps = {"a": "candy"};
console.log("Example of Map Bully", JSON.stringify(maps),
    " --> ", mapBully(maps));

maps = {"b": "carrot", "c": "meh", "a": "candy"};
console.log("Example of Map Bully", JSON.stringify(maps),
    " --> ", mapBully(maps));

maps = {"b": "spinach", "c": "beans", "a": "lunchmoney"};
console.log("Example of Map Bully", JSON.stringify(maps),
    " --> ", mapBully(maps));

maps = {"a": "ball", "b": "stick", "c": "sneakers"};
console.log("Example of Map Bully", JSON.stringify(maps),
    " --> ", mapBully(maps));

maps = {"a": "girlfriend", "b": ""};
console.log("Example of Map Bully", JSON.stringify(maps),
    " --> ", mapBully(maps));
console.log("");




//Map Share - Modify and return the given object as follows: if the key "a" has a value,
//set the key "b" to have that same value. In all cases remove the key "c",
// leaving the rest of the object unchanged.

function mapShare(map) {

    if (map["a"]) {
        map = {"a": map["a"], "b": map["a"]};
    }
    delete map["c"];
    return map;
}

maps = {"b": "bbb", "c": "ccc", "a": "aaa"};
console.log("Example of Map Share", JSON.stringify(maps),
    " --> ", mapShare(maps));

maps = {"b": "xyz", "c": "ccc"};
console.log("Example of Map Share", JSON.stringify(maps),
    " --> ", mapShare(maps));

maps = {"d": "hi", "c": "meh", "a": "aaa"};
console.log("Example of Map Share", JSON.stringify(maps),
    " --> ", mapShare(maps));

maps = {"b": "heyhey", "c": "hihi", "a": "goodDay"};
console.log("Example of Map Share", JSON.stringify(maps),
    " --> ", mapShare(maps));

maps = {"a": "Twofor", "c": "onefor", "b": "triple"};
console.log("Example of Map Share", JSON.stringify(maps),
    " --> ", mapShare(maps));
console.log("");




//
//MapAB - Modify and return the given object as follows: for this problem the object may or
//may not contain the "a" and "b" keys. If both keys are present, append their 2 string values
// together and store the result under the key "ab".


function mapAB(map) {

    if (map["a"] && map["b"]) {
        var ab = map["a"] + map["b"];
        map = {"a": map["a"], "b": map["b"], "ab": ab};
    }
    return map;
}

maps = {"b": "There", "a": "Hi"};
console.log("Example of Map AB", JSON.stringify(maps),
    " --> ", mapAB(maps));
maps = {"a": "Hi"};
console.log("Example of Map AB", JSON.stringify(maps),
    " --> ", mapAB(maps));
maps = {"b": "There"};
console.log("Example of Map AB", JSON.stringify(maps),
    " --> ", mapAB(maps));
maps = {"b": "yo", "a": "Yo"};
console.log("Example of Map AB", JSON.stringify(maps),
    " --> ", mapAB(maps));
maps = {"b": "ana", "a": "ban"};
console.log("Example of Map AB", JSON.stringify(maps),
    " --> ", mapAB(maps));
maps = {"b": "but", "a": "tired"};
console.log("Example of Map AB", JSON.stringify(maps),
    " --> ", mapAB(maps));
console.log("");


//Given an array of strings, return an object containing a key
// for every different string in the array, and the value is
// that string's length.

function wordLen(words) {
    var result = {};
    for (var i = 0; i < words.length; i++) {
        result[words[i]] = words[i].length;

    }
    return result;
}

var List = ["a", "bb", "a", "bb"];
console.log("Example of Map Word Length", List ,
    " --> ", wordLen(maps));
var List = ["this", "and", "that", "and"];
console.log("Example of Map Word Length", List ,
        " --> ", wordLen(maps));
var List = ['code',"code","code","bug"];
console.log("Example of Map Word Length", List ,
    " --> ", wordLen(maps));
var List = ["boo", "boo", "ga", "ga", "goo"];
console.log("Example of Map Word Length", List ,
    " --> ", wordLen(maps));
var List = ["be","be","be","be","there","was", "man"];
console.log("Example of Map Word Length", List ,
    " --> ", wordLen(maps));
var List = ["hi","hi","hi","hi","hi","five"];
console.log("Example of Map Word Length", List ,
    " --> ", wordLen(maps));
console.log();





function indexWords(words) {
    var result = {};
    for(var i = 0; i < words.length; i++) {
        var arraynew = [];
        if(!result[words[i].substr(0,1)]) {
            result[words[i].substr(0,1)] = [];
        }
        result[words[i].substr(0,1)].push(words[i]);


    }
    return result;
}

var List = ["aardvark","apple","zamboni","phone"];
console.log("Example of Map Index Words", List ,
    " --> ", indexWords(List));
var List = ["elephant"];
console.log("Example of Map Index Words", List ,
    " --> ", indexWords(List));
var List = [];
console.log("Example of Map Index Words", List ,
    " --> ", indexWords(List));
var List = [""];
console.log("Example of Map Index Words", List ,
    " --> ", indexWords(List));
var List = ["Army's", "army", "arbitrary","blew","blue","khat","cat"];
console.log("Example of Map Index Words", List ,
    " --> ", indexWords(List));
var List = ["fill","Phil","file","phyllus","false","fancy"];
console.log("Example of Map Index Words", List ,
    " --> ", indexWords(List));



