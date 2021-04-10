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
        ['tl', 'top left'],
        ['tr', 'top right'],
        ['bl', 'bottom left'],
        ['br', 'bottom right'],
    ];

    let template = readFile('index.template.md').toString();

    for (const variant of variants) {
        const variantSrc = readFile('src/yuptude.js').toString().replace('__ypt_position__', variant[1]);
        const compiledBookmarkletSrc = await bookmarklet.convert(variantSrc, {});
        template = template.replace(`{{${variant[0]}}}`, compiledBookmarkletSrc);
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
