import fs from 'fs';

export const printMessage = (title) => {
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

}
