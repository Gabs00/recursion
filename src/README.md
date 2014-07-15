stringifyJSON

check variable type

	If type is primitive value
		if type is string
			return double quoted string
		else
			return value
	if type is array
		set opening bracket
			for each value
				go to check variable type 
				if additional values add comma
		set close bracket
	if type is object
		set opening curly
			foreach proerty
				go to check variable type for property name
				add semicolon
				go to check variable type for value 
				if additional properties add comma
		set closing curly
		


Functions
	check type
	primitive
	array
	object
