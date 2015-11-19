var argv = require('yargs')
                    .command('hello', 'Greet the user', function (yargs) {
                            yargs.options({
                              name: {
                                demand: true,
                                alias: 'n',
                                description: 'your first name goes here'
                              },
                              lastName: {
                                demand: true,
                                alias: 'l',
                                description: 'your last name goes here'
                              }
                            }).help('help');
                    })
                    .argv;

var command = argv._[0];

if (command === 'hello'
    && typeof argv.name !== 'undefined'
    && typeof argv.lastName !== 'undefined') {
  console.log('Hello ' + argv.name + ' ' + argv.lastName);
} else {
  console.log('Hello World');
}
