import readline from 'readline';
import fs from 'fs';

export const printMessage = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the title: ', (title) => {
        try {
            const data = fs.readFileSync(`./messages/${title}.txt`, 'utf8',);

            if (data !== '') {
                console.log(data);
            } else {
                console.log('File is empty.');
            }

        } catch (err) {
            console.log(err.message);
        }

        rl.close()
    })

}
