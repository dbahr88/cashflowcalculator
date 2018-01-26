<script type="text/javascript">

	var homeval = document.getElementById('price');
	var loan = document.getElementById('loan');
	var ir = document.getElementById('ir');
	var mortgage = document.getElementById('mortgage');
	var button = document.getElementById('btn');
	var result = document.getElementById('result');

btn.onclick = function(){
	var homeval2 = parseFloat(homeval.value);
	var loanamount = parseFloat(loan.value);
	console.log(loanamount)
	var int = parseFloat(ir.value);
	var mortgagelength = parseFloat(mortgage.value);


	var n = mortgagelength*12;
	console.log(n);
	// console log the number of months (years*12)

	var absolute = int/100/12 
	console.log(absolute)
	// adjusted int rate, or "r"

	var top = (absolute*(Math.pow((1+absolute),n)))
	console.log(top)

	var mysterynumber = (Math.pow((1+absolute),n))
	console.log(mysterynumber)

	var bottom = (Math.pow((1+absolute),n)-1)
	console.log(bottom)

	console.log(top/bottom)

	var mp = loanamount*(top/bottom)
	console.log(mp.toFixed(2))
	// changes 2 decimal places

	result.innerHTML = mp.toFixed(2);

}	

</script>
<script type="text/javascript">

	
	var homeval5 = document.getElementById('price5');

	var rents2 = document.getElementById('rents');
	var financing2 = document.getElementById('Financing');
	var prop2 = document.getElementById('prop');
	var water2 = document.getElementById('water');
	var ins2 = document.getElementById('ins');
	var main2 = document.getElementById('Maintenance');
	var vac2 = document.getElementById('Vacancy');

	var button = document.getElementById('btn');
	var result = document.getElementById('result');	

	btn2.onclick = function(){
	var price6 = parseFloat(price5.value);
	var rents3 = parseFloat(rents2.value);
	console.log(rents3)
	var financing3 = parseFloat(financing2.value);
	console.log(financing3)
	var prop3 = parseFloat(prop2.value);
	console.log(prop3)
	var water3 = parseFloat(water2.value);
	console.log(water3)
	var ins3 = parseFloat(ins2.value);
	console.log(ins3)
	var main3 = parseFloat(main2.value);
	console.log(main3)
	var vac3 = parseFloat(vac2.value);
	console.log(vac3);
// ---------------
	var monthly = (rents3-financing3-prop3-water3-ins3-main3-vac3)
	var annual = monthly*12;
	var cashoncash = annual/10000;
	var caprate = annual/price6;

	result2.innerHTML = monthly.toFixed(2);
	result3.innerHTML = annual.toFixed(2);
	result4.innerHTML =	cashoncash.toFixed(2);
	result5.innerHTML = caprate.toFixed(2);

	if(caprate>.14){
		alert("You should buy this property!");
	}
}

</script>