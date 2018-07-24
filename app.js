
var arr1 = {
	question: 'how are u?',
	answers: ['car','no','ok'],
	right: 'car'
};

var arr2 = {
	question: '2+1 = wat?',
	answers: ['3','1','0','56'],
	right: '3'
};


var arr3 = {
	question: '4-2 = wat?',
	answers: ['3','2','5'],
	right: '2'
};

var arr4 = {
	question: 'wo?',
	answers: ['q','x','t','c'],
	right: 'q'
};
var spanT = ('<span class="js-question"></span>');
var inputE = (

	'<input type="radio" name="radio" checked ="true" value="">')
;



$(function ()
{

	var question = [arr1,arr2,arr3,arr4];
	var count =0;

	enterButton(question,$('form'),inputE,spanT);
	handleSubmit(question,count);
	handleNext(question,count,inputE,spanT);

});

function handleNext(elem,pos,item,sTem)
{
	var elem1 ;
	$('main').on("click",'#js-next',(function (event){
		elem1 = elem[++pos];
		console.log(';ddddd');
		this.remove();
		$('form').remove();
		$('main').append('<form class="js-form">');
		addE(elem1,$('form'),item,sTem)
		if(pos == elem.length -1)
			pos =0;
	}));
}

function handleSubmit(question,count,state)
{   var outOf =0;
	$('main').on('submit','.js-form',(function (event){
		event.preventDefault();

		console.log(this);
	//var form = this.document.getElementsByTagName("input");
	var a = $(this).find('input');
	for(var i =0 ; i< a.length; ++i)
	{
		console.log(a[i].value);
		if(a[i].value == question[count].right)
			{$('<label>Y</label>').insertAfter(a[i]);
		if(a[i].checked == true)
			++outOf;
	}
	else if(a[i].checked == true)
		$('<label>N</label>').insertAfter(a[i]);	
}
console.log('come')
++count;
var string = outOf + ' right out of '+count;
if(count < question.length)
{
	$(this).append('<button id="js-next" >Next');
	$(this).find('#js-submit').remove();
	$(this).append('<h2>'+string+'</h2>');
}
else
	{	count =0;
		$(this).remove();
		$('main').append('<button id="foo">Click to enter</button><form class="js-form">');
		$('main').append('<h2>'+string+'</h2>');
		outOf = 0;
	}

}));

}




function enterButton(elem,state,item,sTem)
{
	var count ;
	$('main').on('click', '#foo',(function (event){
		count =0;
		elem1 = elem[count];
		console.log('wow');
		this.remove();
		addE(elem1,$('form'),item,sTem);
		$('h2').remove();
	}));
}

function addE(elem,state,item,sTem)
{
	
	var a =  $(sTem);
	a.text(elem.question);
	var out ='';
	var temp;
	state.append(a);
	console.log(elem.answers[0]);
	for(var i =0;i < elem.answers.length; ++i)
	{
		temp = $(item);
		temp.attr('value',elem.answers[i]).attr('id',elem.answers[i]);
		console.log(temp.attr('value'));

		state.append('<div>');
		state.append(temp);
		state.append('<label'+ ' for="'+elem.answers[i]+ '">'+elem.answers[i]+'</label></div>');
	}
	state.append('<br><input id="js-submit" type="submit" ></form>');

};