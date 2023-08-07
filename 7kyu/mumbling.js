//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

//This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//Input is a string
//Output is a string
//We need a loop that iterates thru each letter on the string and returns a string
//Declare an output string that will be concatenated throughout the loop
// s = s.toLowerCase()
//for each letter, outputStr += s[i].toUpperCase() + s[i].repeat(i) + "-"
//return outputStr

function accum(s) {
	s = s.toLowerCase()
	let outputStr = ""
	for(let i = 0; i < s.length; i++){
		outputStr += s[i].toUpperCase() + s[i].repeat(i) + "-"
	}
	return outputStr.slice(0, -1)
}

console.log(accum("ZpglnRxqenU"))//, "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
console.log(accum("NyffsGeyylB"))//, "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
console.log(accum("MjtkuBovqrU"))//, "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
console.log(accum("EvidjUnokmM"))//, "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
console.log(accum("HbideVbxncC"))//, "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");