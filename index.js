// Write your solution in this file!
var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = "bob";

function upperCaseCustomerName(){
    customerName = window.customerName.toUpperCase();
}
function setBestCustomer(){
    bestCustomer = window.bestCustomer = "not bob";
}
function overwriteBestCustomer(){
    bestCustomer = window.bestCustomer = "maybe bob";
}
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = window.leastFavoriteCustomer = "not bob";
}