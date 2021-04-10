#!/bin/env node

const _mkdir = require('fs').mkdirSync;
const readFile = require('fs').readFileSync;
const writeFile = require('fs').writeFileSync;
const bookmarklet = require('bookmarklet');

main();

async function main() {
    mkdir('dist');
    mkdir('dist/src');

    const variants = [
        'tl',
        'tc',
        'tr',
        'bl',
        'bc',
        'br',
    ];

    let template = readFile('index.template.md').toString();

    for (const variant of variants) {
        const variantSrc = readFile('src/yuptude.js').toString().replace('__yup_position__', variant);
        const compiledBookmarkletSrc = await bookmarklet.convert(variantSrc, {});
        template = template.replace(`{{${variant}}}`, compiledBookmarkletSrc);
    }
    console.log('Compiled bookmarklet');

    template = `<!-- SCRIPT GENERATED, DO NO EDIT DIRECTLY -->\n\n` + template;

    writeFile('index.md', template);
    console.log('Updated index.md');
    console.log('Done');
}

function mkdir(path) {
    try {
        _mkdir(path);
    } catch (e) {
        // If dir exists, don't error
    }
}
