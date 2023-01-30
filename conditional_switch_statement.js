// Switch conditional statement

// is the arg a number 1 to 5 or something else
function useSwitchStatement(arg){

    switch(arg){
        case 1:
            console.log("Our value is 1");
            break; // use breaks in switch to stop comparing! Make sure each block last line is a break;
        case 2:
            console.log("Our value is 2");
            break;
        case 3:
            console.log("Our value is 3");
            break;
        case 4:
            console.log("Our value is 4");
            break;
        case 5:
            console.log("Our value is 5");
            break;
        default:
            console.log("Something else, not between 1 and 5");
    }

}

console.log("Using Switch statement")
useSwitchStatement(4);
// useSwitchStatement(6);
// useSwitchStatement("4");
console.log("\n")

// Equivalent to switch as if statement

function useifStatement(arg){
    if (arg === 1){
        console.log("Our value is 1");
    } else if (arg === 2){
        console.log("Our value is 2");
    } else if (arg === 3){
        console.log("Our value is 3");
    } else if (arg === 4){
        console.log("Our value is 4");
    } else if (arg === 5){
        console.log("Our value is 5");
    } else {
        console.log("Something else, not between 1 and 5");
    }
}

console.log("Using If statement equally to Switch")
useifStatement(4);
// useifStatement(6);
// useifStatement("4");
console.log("\n");


function whatTypeIsMyArgument(arg){
    switch (typeof arg){
        case "bigint":
            console.log("My art is type of: " + typeof arg);
            break;
            // additional switch can happen but beware of break; !!! 
            // switch(){}
            // if(){}
            // a = a + 1;
            // in this case if inner switch hits a break it will exit the whole code block ==> IF statement won't be executed;
        case "boolean":
            console.log("My art is type of: " + typeof arg);
            break;
        case "number":
            console.log("My art is type of: " + typeof arg);
            break;
        case "undefined":
            console.log("My art is type of: " + typeof arg);
            break;
        case "string":
            console.log("My art is type of: " + typeof arg);
    }
}

// whatTypeIsMyArgument(true);
// whatTypeIsMyArgument("bla bla bla");
// whatTypeIsMyArgument();