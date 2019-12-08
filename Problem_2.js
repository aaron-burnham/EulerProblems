//Create a fibonacci sequence of numbers under 4,000,000. Find the sum of all even numbers in the sequence

fib = () => {
	let a = 1;
    let b = 2;
    let newNum;
    let sum = 0;
    
    do {
        newNum = a+b;
        a = b;
        b = newNum;
        console.log(a);
        
    	if (a % 2 == 0) {
        	sum += a;	
        	console.log("The sum of even numbers is: " + (sum));
    	}        
    } while(newNum < 4000000);   
}

fib();
