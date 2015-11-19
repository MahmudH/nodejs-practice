//var account = {
 // balance: 0
//}

var accounts = [];

//create an account and push it into the accounts array
function createAccount(account){
  accounts.push(account);
  return account;
};

//get account with username
// find matching account using forEach
function getAccount (username) {
  var matchedAccount;

  for (var i = 0; i < accounts.length; i++){
    if (accounts[i].username === username){
      matchedAccount = accounts[i];
    }
    return matchedAccount;
  }
}


// deposit(account, amount)
function deposit(account, amount) {
  if (typeof amount === 'number'){
    account.balance += amount;
  }
}

//withdraw(account, amount)
function withdraw(account, amount) {
  if (typeof amount === 'number'){
    account.balance -= amount;
  }
}

//getBalance(account)
function getBalance(account){
  return account.balance;
}

function createBalanceGetter(account) {
  return function () {
    return account.balance;
  }
}
