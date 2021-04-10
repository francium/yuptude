const styles = `
<style id="yptd-style">
    #yptd {
        user-select: none;
    }
    #yptd span,
    #yptd-box {
        float: left;
        padding: 0 0.5em;
        display: block;
    }
    #yptd span em,
    #yptd-bottom,
    #yptd-in {
        vertical-align: middle;
    }
    #yptd-pit,
    #yptd-pit input {
        float: right;
    }
    #yptd a,
    #yptd-bar {
        background-color: #fd0d5d;
    }
    #yptd {
        z-index: 9999999999;
        position: fixed;
        bottom: 0;
        left: 6px;
        font: 16px Helvetica, Arial, sans-serif;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
    }
    #yptd * {
        margin: 0;
    }
    #yptd a {
        border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        float: left;
        margin: 0 0.5em 0 0;
        padding: 0.25em 1em;
        font-weight: 700;
        color: #fff;
    }
    #yptd a em {
        font-size: 0.9em;
    }
    #yptd a:active,
    #yptd a:focus,
    #yptd a:hover {
        outline: 0;
        color: #fd0d5d;
        background-color: #fff;
        text-decoration: none;
    }
    #yptd span {
        border-radius: 3px;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0.5em;
        width: 2.5em;
        border-bottom: 2px solid rgba(0, 0, 0, 0.25);
        text-decoration: none;
        color: #000;
        background-color: #fff;
        cursor: pointer;
        text-align: center;
    }
    #yptd span em {
        font-size: 0.75em;
    }
    #yptd span:active,
    #yptd span:focus,
    #yptd span:hover {
        color: #fd0d5d;
    }
    #yptd-bar {
        border-radius: 3px 3px 0 0;
        -moz-border-radius: 3px 3px 0 0;
        -webkit-border-radius: 3px 3px 0 0;
        height: 2.25em;
    }
    #yptd-bar:after,
    #yptd-bottom:after {
        content: "";
        display: block;
        clear: both;
    }
    #yptd-controls {
        float: right;
        height: 2.25em;
        border-left: 2px solid rgba(0, 0, 0, 0.33);
    }
    #yptd-box {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 4em;
        min-width: 4em;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.15);
    }
    #yptd-in {
        width: 100%;
        height: 100%;
        border: 0;
        text-align: center;
        font: 14px Helvetica, Arial, sans-serif;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: #fff;
        background-color: transparent;
    }
    #yptd-bottom {
        padding: 0.75em;
        font-size: 0.75em;
        background-color: rgba(0, 0, 0, 0.8);
    }
    #yptd-pit {
        position: relative;
        padding: 0.25em 0;
    }
    #yptd-pit label {
        margin-right: 0.5em;
        color: #fff;
    }
    #yptd-pit em {
        display: none;
    }
    #yptd-pit:active em,
    #yptd-pit:focus em,
    #yptd-pit:hover em {
        display: block;
        position: absolute;
        top: -2.5em;
        left: 0;
        padding: 0.5em;
        white-space: pre;
        font-size: 0.8em;
        background-color: #fd0d5d;
    }
</style>
`;

const html = `
<div id="yptd">
    <div id="yptd-bar">
        <span id="yptd-off"><em>Hide</em></span>
        <div id="yptd-controls">
            <span id="yptd-dwn">-</span>
            <div id="yptd-box"><input id="yptd-in" type="text" value="1.0" /></div>
            <span id="yptd-up">+</span>
        </div>
    </div>
    <div id="yptd-bottom">
        <a href="http://yuptude.com" target="_blank"><em>yuptude</em></a>
        <div id="yptd-pit">
            <label for="yptd-pin"> Shift Pitch <em>(Firefox &amp; Safari only)</em></label><input type="checkbox" name="yptd-pin" id="yptd-pin" value="1" />
        </div>
    </div>
</div>
`;

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

if ($('#yptd') !== null) {
    console.log('yuptude\'s already running!');
    // return; -------------------------------------------------------- TODO
}
const ypt_position = '__ypt_position__';
console.log('Starting yuptude!', ypt_position);

/** Videos on the page */
let videos;

/** Individual video element */
let v;

/** Speed value from manual input field */
let inputval;

/** Container for yuptude widget */
let ytw_el = document.createElement('div');
ytw_el.innerHTML = `${styles}${html}`;
document.body.appendChild(ytw_el);

const yti_in = $('#yptd-in');
const yti_off = $('#yptd-off');
const yti_pit = $('#yptd-pin');
const yti_up = $('#yptd-up');
const yti_dwn = $('#yptd-dwn');

// Speed at which to play
let s = window.sessionStorage.getItem('yuptudeSpeed');
if (s === null) {
    s = 1.0;
} else {
    console.log('Recovered speed ' + s);
    $('#yptd-in').value = s;
}

// Pitch shifting off/on
let p = window.sessionStorage.getItem('yuptudePitch');
if (p === null) {
    p = false;
} else {
    console.log('Recovered pitch ' + p);
    $('#yptd-pin').checked = p;
}

// Update the speed variable when the input field changes
yti_in.addEventListener('input', yte_in);
function yte_in() {
    s = $('#yptd-in').value;
    window.sessionStorage.setItem('yuptudeSpeed', s);
}

// Unload yuptude
yti_off.addEventListener('click', yte_off);
function yte_off() {
    yti_in.removeEventListener('input', yte_in);
    yti_off.removeEventListener('click', yte_off);
    yti_pit.removeEventListener('click', yte_pit);
    yti_up.removeEventListener('click', yte_up);
    yti_dwn.removeEventListener('click', yte_dwn);

    const ytw = $('#yptd');
    ytw.parentNode.removeChild(ytw);
    const yts = $('#yptd-style');
    yts.parentNode.removeChild(yts);

    clearInterval(interval);

    //Don't reset speed on close.
}

// Toggle pitch-shifting
yti_pit.addEventListener('click', yte_pit);
function yte_pit() {
    p = $('#yptd-pin').checked;
    window.sessionStorage.setItem('yuptudePitch', p);
}

// Increase video playback speed up to the standard cutoff of 4.0
yti_up.addEventListener('click', yte_up);
function yte_up() {
    inputval = document.getElementById('yptd-in').value;
    inputval = inputval ? parseFloat(inputval) : 1;
    inputval = (inputval <= 3.9 ? inputval + 0.1 : inputval);

    s = $('#yptd-in').value = inputval.toFixed(1);
    window.sessionStorage.setItem('yuptudeSpeed', s);
}

// Decrease video playback speed down to the standard cutoff of 0.5
yti_dwn.addEventListener('click', yte_dwn);
function yte_dwn() {
    inputval = $('#yptd-in').value;
    inputval = inputval ? parseFloat(inputval) : 1;
    inputval = (inputval >= 0.6 ? inputval - 0.1 : inputval);

    s = $('#yptd-in').value = inputval.toFixed(1);
    window.sessionStorage.setItem('yuptudeSpeed', s);
}

// Apply speed & pitch changes with a running internal to catch videos that are
// appended to the page or loaded after yuptude starts.
let interval = setInterval(function() { ytp_apply() }, 100);

function ytp_apply(ns) {
    videos = $$('video');
    for (const v of videos) {
        if( v && v.readyState >= 2) {
            v.playbackRate = (ns || (s || 1));
            v.mozPreservesPitch = v.webkitPreservesPitch = v.preservePitch = !p;
        }
    }
}
