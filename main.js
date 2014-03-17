//http://winter2014.refactoru.com/exercises/problem-set/function-practice2
//10) Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).

//10a) unique(['a', 'b', 'a', 'c', 'd', 'd']) should return ['a', 'b', 'c', 'd']
//10b) unique(['todd', 'avery', 'maria', 'avery']) should return ['todd', 'avery', 'maria']

var unique = function(userArr){
	var output = [];
	var check = {};
	var l = userArr.length;
	var i;

	for (i=0; i<l; i++){
		check[userArr[i]] = true;
	}

	for (var key in check) {
		output.push(key);
	}

	return output;

};

console.log(unique(['a', 'b', 'a', 'c', 'd', 'd'])); 
//should return ['a', 'b', 'c', 'd']
console.log(unique(['todd', 'avery', 'maria', 'avery']));
//should return ['todd', 'avery', 'maria']