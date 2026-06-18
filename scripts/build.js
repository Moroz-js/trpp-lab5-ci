const fs = require('fs');
const path = require('path');

const src = fs.readFileSync(path.join(__dirname, '../src/calculator.js'), 'utf8');
const browser = src.replace('module.exports = { add, subtract, multiply, divide };', '');

const outDir = path.join(__dirname, '../dist');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'calculator.js'), browser.trim());
console.log('Build OK: dist/calculator.js');
