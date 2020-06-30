var y = "";
            //find the substring d in y, it would return false, because it isn't found
            var x = "david";
            // find the substring d in x, it would return 0, because d is at position 0

            // with the triple equals it prevents the next statement from evaluating as true accidentally.
            if (x === y) {
                alert("you won a million dolllars");
            }

            var firstnum="";
            var operator="";
            var oper_was_last=false;
            var should_we_perform_eq=false;

            function calc(num) {

                var total = String(document.getElementById("total").value);

                switch (num) {
                    case "AC":
                        firstnum="";
                        operator="";
                        oper_was_last=false;
                        should_we_perform_eq=false;
                        document.getElementById("total").value = "0";
                        break;
                    case "C":
                        document.getElementById("total").value = "0";
                        break;
                    case "+/-":
                        total = parseFloat(total) * -1;
                        document.getElementById("total").value = total;
                        break;
                    case "-":
                    case "*":
                    case "/":
                    case "+":
                        operator=num;
                        // if (firstnum !== "") {
                        //     should_we_perform_eq = true;
                        // }
                        firstnum = total;
                        oper_was_last = true;
                        break;
                    case "=":
                        // if (!should_we_perform_eq) {
                        //     break;
                        // }
                        let sum = 0;
                        switch(operator) {
                            case "+":
                                sum = parseFloat(firstnum) + parseFloat(total);
                                break;
                            case "-":
                                sum = parseFloat(firstnum) - parseFloat(total);
                                break;
                            case "*":
                                sum = parseFloat(firstnum) * parseFloat(total);
                                break;
                            case "/":
                                sum = parseFloat(firstnum) / parseFloat(total);
                                break;
                            default: 
                                alert("invalid operation");
                                break;
                        }
                        document.getElementById("total").value=sum;
                        // firstnum = sum;

                        break;
                    default:
                        // check to see if firstnum has a value, 
                        // if it does we need to clear total before putting the next number in the box

                        if (oper_was_last) {
                            total = "";
                            oper_was_last = false;
                        }

                        // check to see if there is a value in the total box
                        // if there is a value take the existing value and append the new number
                        if (total === "0") {
                            total = "";
                        }
                        num = String(num);
                        document.getElementById("total").value=total + num;
                        break;

                        function percentage(num, per)
                        {
                          return (num/100)*per;
                        }
                                  
                        console.log(percentage(1000, 47.12));
                }
            }

            function percentage(num, per)
{
  return (num/100)*per;
}
          
console.log(percentage(1000, 47.12));
