import readline from 'readline';
import fs from 'fs';

export const createMessage = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the title: ', (title) => {
        if (fs.existsSync(`./messages/${title}.txt`)) {
            rl.close()

            console.log('File already exists!');
        } else {
            rl.question('Enter the content: ', (content) => {
                fs.writeFile(`./messages/${title}.txt`, content, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('File created successfully');
                    }
                });
                rl.close();
            });
        }
    });
}

export const deleteMessages = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the title of the message you want to delete: ', (title) => {
        fs.unlink(`./messages/${title}.txt`, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('File deleted successfully');
            }
        });

        rl.close();
    });
}

export const deleteAllMessages = () => {
    fs.readdir('./messages', (err, files) => {
        if (files.length === 0) {
            return console.log('No messages to delete!');
        } else if (err) {
            return console.log(err);
        } else {
            files.forEach(file => {
                fs.unlink(`./messages/${file}`, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            });
            console.log('All files deleted successfully!');
        }
    });
}