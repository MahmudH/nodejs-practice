var account = {
  balance: 0
}

// deposit(account, amount)
function deposit(account, amount) {
  account.balance += amount;
}

//withdraw(account, amount)
function withdraw(account, amount) {
  account.balance -= amount;
}

//getBalance(account)
function getBalance(account){
  return account.balance;
}

deposit(account, 20);

withdraw(account, 10);

//getBalance(account);

console.log(getBalance(account));
