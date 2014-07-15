// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  	return check_type(obj);
  	
	function check_type(value){
		 var string = "";
		 if(Array.isArray(value)) {
		     string+="[";
		     string+= stringify_array(value);
		     string+="]"
		 }
		 else if(typeof value === 'object'){
		     string+="{";
		     string+=stringify_object(value);
		     string+="}";
		 }
		 else if(typeof value === 'string'){
		     string+= "\""+value+"\"";
		 }
		 else{
		     string = value;
		 }
		 return string;
	}

	function stringify_array(value){
	    var len = value.length;
	    var string = "";
	    for(var i = 0; i < len; i++){
	        string+= check_type(value[i]);
	        if(i !== len - 1){
	            string+=",";
	        }
	    }
	    
	    return string;
	}

	function stringify_object(value){
	    var keys = [];
	    var string = "";
	    for(var prop in value){
	        keys.push(prop);
	    }
	    
	    var len = keys.length;
	    for(var i = 0; i < len; i++){
	        prop = keys[i];
	        string+=check_type(prop) + ":";
	        string+=check_type(value[prop]);
	        if(i !== len-1){
	            string+=",";
	        }
	    }
	    
	    return string;
	}
};
