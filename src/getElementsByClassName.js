// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(classes, elem){
    if(!elem){
        elem = document.body;   
    }
    var results = [];
    var target_classes = classes.split(' ');
    var class_list = elem.classList;
    if(class_list){
        if(check_classes(target_classes, class_list)){
            results.push(elem);   
        }
    }
    if(elem.hasChildNodes()){
        var children = elem.childNodes;
        for(var i = 0; i < children.length; i++){
              var matches = getElementsByClassName(classes, children[i]);
              transfer(results, matches);
        }
        
    }
    return results;

	function transfer(in_array, out_array){
	    var item;
	    while(item = out_array.shift()){
	        in_array.push(item);   
	    }
	}
	function check_classes(classes, class_list){
	    for(var i = 0; i < classes.length; i++){
	        if(!class_list.contains(classes[i])){
	            return false;   
	        }
	    }
	    return true;
	}
};
