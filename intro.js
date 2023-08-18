// document.write("welcome to javascript<br>");
// var a=10;
// var b=20;
// var c=30;
// alert(a);
// console.log(b);
// document.write(c);
// document.write("<br>the value of a, b, c,"+a+" " +b+" "  +c+" " +"<br>");
// var name='SATYA SAI LAKSHMI';
// document.write(name+"<br>");
// document.write(name.length+"<br>");
// name ='sindhhu';
// document.write(name+"<br>");
// document.write(name.length+"<br>");
// var name='reka '
// name +='ramya&geetha' 
// document.write(name+"<br>");
// var a=10.23;
// document.write(typeof(a)+"<br>");
// var c=45
// document.write(typeof(c));
// var t;
// document.write(t+"<br>");
// var r ;
// r +='jdp';
// document.write(r);

// var arr=['sindhu','swapna','true'];
// document.write(typeof(arr)+"<br>");
// document.write(arr+"<br>");
// document.write(arr[1]);
// var arr=['sindhu' ,'yamini' ,'swapna','varshini'];
// document.write(arr+"<br>");
// document.write(arr[1]+"<br>");
// document.write(arr[3]+"<br>");

// var obj=[{
// 	'name':'satya',
// 	'number':10,
// 	'college':'acoe',
// 	'branch':'cse'
//     }]
// console.log(obj[0].name+" " +obj[0].number+" " +obj.college+" " +obj.branch+" ");
// document.write(obj[0].name+" " +obj[0].number+" "+obj[0].college+" "+obj[0].branch);
var obj=[{
	'name':'satya',
	'number':10,
	'college':'acoe',
	'branch':'cse'
    },
    {'name':'sindhi',
	'number':10,
	'college':'acoe',
	'branch':'cse'},
	{
	'name':'yamini',
	'number':10,
	'college':'acoe',
	'branch':'cse'
	},
	{
	'name':'varshini',
	'number':10,
	'college':'acoe',
	'branch':'cse' 
     }]
     for (var i =0; i < obj.length; i++) 
     {
     	// document.write(i+1,obj[i].name,obj[i].number,
     	// 	obj[i].college,obj[i].branch);
     	// document.write("<br>");
      for (var key in obj[i]){
        document.write(obj[i][key]);
        }
        document.write("<br>");
        
     }
       
    
