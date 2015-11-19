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

	accounts.forEach(function (account) {
		if (account.username === username) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
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

//create an account
var myAccount = createAccount({
  username: 'Mahmud',
  balance: 0
});

var andrewsAccount = createAccount({
  username: 'Andrew',
  balance: 12
});

console.log(accounts);

deposit(myAccount, 100);

console.log(getBalance(myAccount));

withdraw(myAccount, 10);

console.log(getBalance(myAccount));

var existingAccount = getAccount('Andrew');

console.log(existingAccount);

var jensAccount = createAccount({
	username: 'jen001',
	balance: 12
});

var exitingJensAccount = getAccount('jen001');
console.log(exitingJensAccount);

console.log(accounts);
