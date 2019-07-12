var intervalId 
var counter=0
var target =200
function answer(){
	if(document.getElementById('task_x')!=null){
		var x=document.getElementById('task_x').innerHTML
		var operator = document.getElementById('task_op').innerHTML
		if(operator=='x'){
			operator='*'
		}else if(operator =='+'){
			operator='+'
		}else if(operator == '/'){
			operator ='/'
		}else {
			operator ='-'
		}
		var y=document.getElementById('task_y').innerHTML
		var result = document.getElementById('task_res').innerHTML

		if( eval(x + operator + y )== eval(result)){
			document.getElementById('button_correct').click()
	    }else{
			document.getElementById('button_wrong').click()
		}

		if(counter <= target){
			counter++
		}else{
			clearInterval(intervalId)
		}
	}
}
intervalId = setInterval(answer, 50);
