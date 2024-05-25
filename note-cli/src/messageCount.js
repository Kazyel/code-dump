import fs from 'fs';
const directoryPath = './messages';

export const countMessages = () => {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        const messageCount = files.length;
        console.log(`There are ${messageCount} messages in the directory.`);
    });
}