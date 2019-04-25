var name;
var deposit;
var transactions = [];
var totalDeposit = 0;

$(".newDeposit").click(function() {
    totalDeposit = 0;
    name = $(".accountName").val();
    deposit = parseInt($(".accountDeposit").val());
    $(".ledger").append("<p>" + name + "</p><p class='ledgerBorder'>$" + deposit + "</p>");
    transactions.push([name, deposit]);
    
    $(".number span").text(transactions.length);
    
    transactions.forEach(function (transaction){
       totalDeposit += transaction[1]; 
    });
    $(".total span").text(totalDeposit);
});

$(".update").click(function (){
    if(transactions.length){
        alert("Your last deposit was $" + transactions[transactions.length-1][1] + " by " + transactions[transactions.length-1][0]);
        // I am so, so sorry
    }
});