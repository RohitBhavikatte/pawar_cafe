const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\ROHIT\\.gemini\\antigravity-ide\\brain\\6d6f13ac-a758-4500-a335-c252bed85922';
const destDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

fs.readdirSync(srcDir).forEach(file => {
    if (file.endsWith('.png')) {
        fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
        console.log(`Copied ${file}`);
    }
});
