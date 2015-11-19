console.log('starting password manager');

var crypto = require('crypto-js');
var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
                  .command('create', 'Create a new account', function (yargs) {
                    yargs.options({
                      name: {
                        demand: true,
                        alias: 'n',
                        description: 'Account name (e.g. Twitter, Google)',
                        type: 'string'
                      },
                      username: {
                        demand: true,
                        alias: 'u',
                        description: 'Enter username or email',
                        type: 'string'
                      },
                      password: {
                        demand: true,
                        alias: 'p',
                        description: 'Enter a password',
                        type: 'string'
                      },
                      masterPassword: {
                        demand: true,
                        alias: 'm',
                        description: 'Master passwrd',
                        type: 'string'
                      }
                    }).help('help');
                  })
                  .command('get', 'Get an existing account', function (yargs) {
                    yargs.options({
                      name: {
                        demand: true,
                        alias: 'n',
                        description: 'Account name (e.g. Twitter, Google)',
                        type: 'string'
                      },
                      masterPassword: {
                        demand: true,
                        alias: 'm',
                        description: 'Master passwrd',
                        type: 'string'
                      }
                    }).help('help');
                  })
                  .help('help')
                  .argv;

var command = argv._[0];

function getAccounts (masterPassword) {
  var encryptedAccount = storage.getItemSync('account');
  var accounts = [];

  if (typeof encryptedAccount !== 'undefined') {
    var bytes = crypto.AES.decrypt(encryptedAccount, masterPassword);
    var accounts = JSON.parse(bytes.toString(cypto.enc.Utf8));
  }
  return accounts;
}

function createAccount (account, masterPassword) {
  var accounts = storage.getItemSync('accounts');

  if (typeof accounts === 'undefined') {
    accounts = [];
  }

    accounts.push(account);
    storage.setItemSync('accounts', accounts);
    return account;

}

function getAccount(accountName, masterPassword) {
  var accounts = storage.getItemSync('accounts');
  var matchedAccount;

/*  for (var i = 0; i < accounts.length; i++){
    if (accounts[i].name === accountName) {
      var matchedAccount = accounts[i];
    }
  }
*/
  accounts.forEach(function (account) {
    if (account.name === accountName) {
      matchedAccount = account;
    }
  });

  return matchedAccount;
}

if (command === 'create') {
  var createdAccount = createAccount ({
    name: argv.name,
    username: argv.username,
    password: argv.password
  }, argv.masterPassword);
  console.log('Account created');
  console.log(createdAccount);
} else if (command === 'get') {
    var fetchedAccount = getAccount(argv.name, masterPassword);

    if (typeof fetchedAccount === 'undefined'){
      console.log('Account not found');
    } else {
      console.log('Account found');
      console.log(fetchedAccount);
  }
}

/*createAccount({
  name: 'Google',
  username: 'someone@gmail.com',
  password: 'password'
});

var googleAccount = getAccount('Google');

console.log(googleAccount); */
