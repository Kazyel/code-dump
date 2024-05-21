#!/usr/bin/env node
import { countMessages } from './utils/messageCount.js';
import { printMessage } from './utils/printMessage.js';
import { createMessage, deleteMessages, deleteAllMessages } from './utils/coreFunctions.js';

const firstArg = process.argv[2];

function main() {
    if (firstArg === 'create') {
        createMessage();
    } else if (firstArg === 'delete') {
        deleteMessages()
    } else if (firstArg === 'purge') {
        deleteAllMessages();
    } else if (firstArg === 'count') {
        countMessages();
    } else if (firstArg === 'print') {
        printMessage();
    } else {
        console.log('Invalid command!');
    }
}

main()


