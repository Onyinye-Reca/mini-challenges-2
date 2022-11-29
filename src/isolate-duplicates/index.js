// // function isolateDuplicates(text) {
// //     const arr = text.split('');
// //     const hash = new Map();
// //     const newMap = [];
// // //If there's any duplicate the value is false, if there's no repition the value is true.
// // for(let i = 0; i < arr.length; i++){
// //     if(hash.get(arr[i])==undefined){
// //         hash.set(arr[i], true);
// //     }else{
// //         const value = hash.get(arr[i]);
// //         if(value){
// //             hash.set(arr[i], !value);
// //         }
// //     }
// // }







// function isolateDuplicates(text) {
//     let count  = 0;
//     let arr = [];
    
    
//     for(let i = 0; i < text.length; i++){
//         if(text[i] == text[i-1] && text[i]== text[i-2] && text[i - 1] !== text[i] ){
//             arr.push('[');
//             count += 1;
//             arr.push(text[i]);
      
//         }
//         else if (text[i]===text[i -1] && text[i] ===  text[i-2] && text[i] !== text[i-1]){
//             arr.push(']')
//         }
//         else arr.push[text[i]]
//     }
    
//     return arr
//     }
    
    
//     console.log(isolateDuplicates("hellllloooooodeeeecadevvsss"))













// // hash.forEach(value, key); {
// //     if(!value)
// //     newMap.push(arr[i]);
// // };
// // return newMap
// //}
// // function isolateDuplicates(text) {
// //     if (typeof text === "string") {
// //       let repeated = 0;
// //       let counter = 0;
// //       let newArr = [];
  
// //       let arr = [];
// //       for (let i = 0; i < text.length; i++) {
// //         if (text[i] != text[i - 1]) {
// //           if (arr.length !== 0) {
// //             newArr.push("[");
// //             newArr.push(arr.join(""));
// //             newArr.push("]");
// //             repeated++;
// //           }
// //           arr = [];
// //           counter = 0;
// //           newArr.push(text[i]);
// //         } else if (text[i] == text[i - 1] && counter < 1) {
// //           counter++;
  
// //           newArr.push(text[i]);
// //         } else if (text[i] == text[i - 1] && counter >= 1) {
// //           counter++;
// //           arr.push(text[i]);
// //         }
// //         //  else{
// //         //   // newArr.push(repeated);
// //         //  }
// //         // Todo get repeated
// //       }
// //       newArr.push(repeated);
// //       let result = [];
// //       result.push(newArr.join(""));
// //       result.push(repeated);
// //       return result;
// //     } else {
// //         throw "Please enter a valid string";
// //     }
// //   }
  
// //   const final = isolateDuplicates("aaaaadddc");
// //   console.log(final);
// // module.exports = isolateDuplicates;




function isolateDuplicates(text) {




    if (typeof text !== 'string'){
        throw new Error("Please enter a valid string");
    }

    let count  = 0;
    let arr = []
    let arr2 = []
  
 

 for(let i = 0; i < text.length; i++){
       
    

        // if(text[i] == text[i-1] && text[i]== text[i+1] && i ==1 && text[i] !== text[i+2]){
        //     arr.push(text[i]);
        //     arr.push('[');
        //     count += 1;
     
      
        // }

       //logic for opening brackets
        if(text[i] == text[i-1] && text[i]== text[i+1] && text[i] !== text[i-2] && text[i]){
            arr.push(text[i]);
            arr.push('[');
            count += 1;
     
      
        }

 
   
        //logic for closing bracket
        else if (text[i]===text[i -1] && text[i] ===  text[i-2] && text[i] !== text[i+1]){
        
            arr.push(text[i]);
            
            arr.push(']')
   
        }
       
else arr.push(text[i])
    }
// if (arr[arr.length - 2] === '['){
//     arr.push(']')
    
// }

    
    let string = arr.join('')
      arr2.push(string, count)
      return arr2
   
    }
    
    
    console.log(isolateDuplicates("."))



  module.exports = isolateDuplicates;


 