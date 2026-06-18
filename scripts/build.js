const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const outDir = path.join(root, 'dist');
const outSrc = path.join(outDir, 'src');

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outSrc, { recursive: true });

fs.copyFileSync(path.join(root, 'index.html'), path.join(outDir, 'index.html'));
fs.copyFileSync(path.join(root, 'src', 'calculator.js'), path.join(outSrc, 'calculator.js'));

console.log('Build OK: dist/index.html, dist/src/calculator.js');
