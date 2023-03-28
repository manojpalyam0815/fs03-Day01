//array list named shoppingList
var shoppingList = ["apples", "ball", "cat", "dog", "elephant"];
// using for each loop
shoppingList.forEach((item)=>{console.log(item)})
//addig push method to add the element at the end of the array
shoppingList.push("Grapes")
console.log(shoppingList);
//pop method to delete the last item
shoppingList.pop();
console.log(shoppingList);
//shift method to remove the first item
shoppingList.shift();
console.log(shoppingList);
//unshift method to add the new item in the first
shoppingList.unshift();
console.log(shoppingList);
shoppingList = ["apples", "ball", "cat", "dog", "elephant"];
//filter method to create an array
var shortList = shoppingList.filter(item => item.length < 6);
console.log(shoppingList);
//using map to create  a new array
var capitalList = shoppingList.map(function(item) {
return item.charAt(0).toUpperCase() + item.slice(1);
});
console.log(shoppingList);
// reduce method to calculate all letters 
var suhel = shoppingList.reduce((accumulator, currentItem) => {
return accumulator + currentItem.length;
}, 0);
console.log(shoppingList);
//slice method to create an array.
var partialList = shoppingList.slice(0, 3);
console.log(shoppingList);
// splice method to remove the second and third element
shoppingList.splice(1, 2);
console.log(shoppingList);
//sort method to sort all the elements in alphabetical  order.
shoppingList.sort();
console.log(shoppingList);