const browserVersion=144;

function getBrowserVersion(browserName){
    if (browserName==="chrome") {
       let browserVersion=1233;
        console.log("Inside block ",browserVersion);
        
    } 
    console.log("Outside block ",browserVersion);
}

getBrowserVersion("chrome")

// function launchBrowser(browserName){
//     if (browserName==="chrome") {
//     //    var browserVersion=1233;
//         console.log("Inside block ",browserName);
        
//     } else{
//         console.log("Unsupported browser ",browserName);
//     }
    
// }

// function runTests(testType){
//     switch (testType) {
//         case "sanity":
//             console.log("Run Sanity");  
//             break;
//         case "regression":
//             console.log("Run regression");  
//             break;
       
//         default:
//              console.log("Run smoke");  
//             break;
//     }
// }

// launchBrowser("opera")
// runTests("sanity")