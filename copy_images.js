const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\Users\\sahaj\\Downloads\\ilovepdf_pages-to-jpg';
const destDir = 'c:\\Users\\sahaj\\Downloads\\Balaji_Sales-main\\website\\public\\catalogue';

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Read and copy all files
fs.readdirSync(srcDir).forEach(file => {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);

    if (fs.statSync(srcFile).isFile() && srcFile.endsWith('.jpg')) {
        fs.copyFileSync(srcFile, destFile);
        console.log(`Copied ${file}`);
    }
});

console.log('Copy complete!');
