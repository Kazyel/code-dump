import { countMessages } from './messageCount.js';
import { printMessage } from './printMessage.js';
import { createMessage, deleteMessages, deleteAllMessages } from './coreFunctions.js';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
    .command('count', 'count the number of messages', () => { }, (argv) => {
        countMessages();
    })
    .command('read <title>', 'read a message', () => { }, (argv) => {
        printMessage(argv.title);
    })
    .command('create', 'create a message', () => { }, () => {
        createMessage();
    })
    .command('delete <title>', 'delete a message', (yargs) => {
        yargs.positional('title', {
            type: 'string',
            describe: 'title of the message'
        })
    }, (argv) => {
        deleteMessages(argv.title);
    })
    .command('deleteAll', 'delete all messages', () => { }, (argv) => {
        deleteAllMessages();
    }).demandCommand(1)
    .parse()