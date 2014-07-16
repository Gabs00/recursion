// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here



  	//Tokenizer class handles walking over json string
  	//Recursively makes a tree of Tokens
	function Tokenizer(string, parent){
	    if(string){
	        this.string = (parent) ? parent.string: string;
	        this.parent = (parent) ? parent.value:null;

	        this.chars = string.split('');
	        this.value = this.chars.shift();

	        var remaining = this.remaining();
	        this.nextDescend = (remaining) ? new Tokenizer(this.remaining(), this):remaining;
	        this.nextValue = (this.nextDescend) ? this.nextDescend.value:null;


	    }
	}

	Tokenizer.prototype = {};
	Tokenizer.prototype.constructor = new Tokenizer();

	//must be implimented
	//use grammar rules here
	Tokenizer.prototype.expect = function(func, args){
	    //must be implimented
	    if(typeof func === 'function'){
	        this.expect = func;
	            if(args !== undefined){
	                this.expect.apply(this, args);
	            }
	            if(this.nextValue !== null){
	                this.nextDescend.expect(func);
	            }
	        
	    }    
	    else{
	        throw new Error('You must impliment this function before using');
	    }
	}
	//returns a reference to the next Tokenizer object
	Tokenizer.prototype.nextToken = function(){
	    var next = this;
	    return function(){
	          if(next !== null){
	              var token = next;
	              next = next.nextDescend;
	              return token;
	          } 
	    }
	}
	//returns the remaining string;
	Tokenizer.prototype.remaining = function(){
	    var string = this.chars.join('');
	    if(string.length > 0){
	        return string;
	    }
	    return null;
	}
};
