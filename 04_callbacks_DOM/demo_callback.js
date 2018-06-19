// var blah = function(){
// 	var x = 10;
	
// 	if (x === 20){
// 		var y = 20
// 	} else {
// 		var z = 30
// 	}
// 	console.log(x)
// 	console.log(y)
// 	console.log(z)
// }

// blah();

// var add = function(a, b) {
//     return(a + b);
// };

// var my_add = function(){
//     return(2 + 3);
// }();

// console.log(add(15, my_add))


// var first = function(){
// 	var x = 10
	
// 	var nestedFunc = function(){
// 		var y = 20
		
// 		console.log(x+y) 
// 	}
	
// 	console.log(x+y)
// }

// first()


var myLoop = function(num){
	for (var i = 0; i<num; i++){

		var printing = function(n){
			
			setTimeout(function(){
				console.log(n)
			}, 2000)
		
		}
		printing(i)
	}	
}

myLoop(5)











