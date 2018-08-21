{
	
	let list=$(".toshow li img");
	let btns=$("#btns li");
	var currentPos=0;
	var timer=setInterval(autoPlay,3000);	
	
function autoPlay(){
			currentPos=currentPos<3?++currentPos:0;
			changeState(currentPos);
		}

	
	let findCurrent=()=>{
		var obj={}
		for (let a of list){
			if(a.classList.contains('in')){obj[0]=a}
		}
		for(let b of btns){
			if(b.classList.contains('bg-success')){obj[1]=b}
		}
		return obj
   }
	let changeState=(pos)=>{
		let current=findCurrent();
		current[0].classList.remove("in");
		list[pos].classList.add("in");
		current[1].classList.remove("bg-success");
		btns[pos].classList.add("bg-success");
	}
	
	//事件委托
	$(".banner").click(function(e){
		switch(e.target.id){
			case 'left':
			currentPos--;
			currentPos=currentPos<0?3:currentPos;
			changeState(currentPos);
			break;
			case 'right':
			currentPos++;
			currentPos=currentPos>3?0:currentPos;
			changeState(currentPos);
			break;
		}
			if([...$("#btns li")].includes(e.target)){
				currentPos=[...$("#btns li")].indexOf(e.target);
				changeState(currentPos);
			}
	})
	//img自适应，但absolute导致父类塌陷，通过js让父类有宽度，从而让图标不外出。
	let resizeHeight=()=>{
		let actualHeight=$(".toshow li img").height();
		$(".banner").height(actualHeight+"px");		
	}
	
	$(window).resize(function(){
		resizeHeight();
	})
	//init
	window.onload=()=>{
		resizeHeight();
	}
}