function simpleFunction(){
	return "simpleFunction";
}
//console.log(simpleFunction());
var func = function(){
return "variableFunction";
};

//console.log(func())
 var fun =  function(callback){
	 var name = "Hi";
	 callback(name);
 };
 fun(function(n){
	 console.log("calll " + n);
 });
