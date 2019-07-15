
var target = 200
var intervalId

function play(interval){
	document.getElementById('button_correct').click()
	intervalId = setInterval(job, interval)
	console.log("start = "+intervalId)
}

function job(){
    var timeline_progress  = parseFloat(document.getElementById("timeline_progress").style.right)
    var scorevalue = document.getElementById('result_score_value').innerHTML
    console.log("scorevalue = "+scorevalue+"| gg = "+timeline_progress)
    if(timeline_progress == 100 || scorevalue >= target){
    	console.log("stop = "+intervalId)
    	clearInterval(intervalId)
    }else if(timeline_progress>=0){
	    answer()
    }else {

    }
}

function answer(){
	if(document.getElementById('task_x')!=null){
		var x=document.getElementById('task_x').innerHTML
		var operator = document.getElementById('task_op').innerText
		if(operator=='×'){
			operator='*'
		} else if(operator =='+'){
			operator='+'
		} else if(operator == '/'){
			operator ='/'
		} else {
			operator ='-'
		}  

		var y=document.getElementById('task_y').innerHTML
		var result = document.getElementById('task_res').innerHTML

		if(eval(x + operator + y ) == eval(result)){
			console.log(x+operator+y +'='+result) 
			document.getElementById('button_correct').click()
	    }else {
	    	console.log(x+operator+y +'='+ eval(x + operator + y ) +'!='+result) 
			document.getElementById('button_wrong').click()
		}
	}
}
play(50)
