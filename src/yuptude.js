const styles = `
<style id="yup-style">
    :root {
        --yup-2light-gray: #303030;
        --yup-light-gray: #909090;
        --yup-dark-gray: #202020;
        --yup-text: #f9f9f9;
        --yup-size: 25px;
        --yup-container-padding: 2px;
        --yup-cell-padding: 4px;
        --yup-slider-height: 20px;
        --yup-slider-width: 12px;
    }

    .yup-flex-align-center {
        display: flex;
        align-items: center;
    }

    .yup-flex-row {
        display: flex;
        flex-direction: row;
    }

    #yup-container {
        font-size: 16px;
        color: var(--yup-text);
        z-index: 9999;
        position: fixed;
        display: flex;
        flex-direction: column;
        width: min-content;

        background: var(--yup-dark-gray);
        border: 1px solid var(--yup-light-gray);
        border-radius: 0;
        font-family: sans-serif;
        padding: var(--yup-container-padding);
    }

    #yup-options-container {
        position: relative;
    }

    #yup-main-options {

    }

    #yup-secondary-options {
        display: none;
        position: absolute;
        left: 0;
        top: 0;
        background: var(--yup-dark-gray);
    }

    .yup-text-small {
        font-size: 80%;
    }

    .yup-row {
        display: flex;
    }

    .yup-col-1 {
        height: var(--yup-size);
        width: var(--yup-size);
        padding: var(--yup-cell-padding);
    }

    .yup-col-2 {
        height: var(--yup-size);
        width: calc(2 * var(--yup-size));
        padding: var(--yup-cell-padding) calc(2 * var(--yup-cell-padding));
    }

    .yup-col-3 {
        height: var(--yup-size);
        width: calc(3 * var(--yup-size));
        padding: var(--yup-cell-padding) calc(3 * var(--yup-cell-padding));
    }

    .yup-span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: rgb(240, 240, 240);
    }

    .yup-button, .yup-input {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }

    .yup-button {
        cursor: pointer;

        border: none;
        border-radius: 2px;
        font-weight: bold;
        color: var(--yup-text);
        background: none;
    }
    .yup-button:hover {
        background: var(--yup-2light-gray);
    }
    .yup-button:active {
        background: var(--yup-light-gray);
    }

    #yup-container a {
        color: var(--yup-light-gray);
    }

    #yup-input-slider-container::before {
        content: '';
        background: var(--yup-text);
        width: calc(3 * var(--yup-size));
        height: 2px;
        position: absolute;
        z-index: -1;
    }
    .yup-range {
        cursor: pointer;
        height: var(--yup-slider-height);
        -webkit-appearance: none;
        background: none;
        outline: none;
        border-radius: 2px;
    }
    .yup-range::-moz-range-thumb,
    .yup-range::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: var(--yup-slider-height);
        width: var(--yup-slider-width);
        border-radius: 2px;
        background: var(--yup-dark-gray);
        cursor: pointer;
        border: 3px solid var(--yup-text);
    }
    .yup-range:hover::-moz-range-thumb,
    .yup-range:hover::-webkit-slider-thumb {
        background: var(--yup-2light-gray);
    }

    /*************************************************************************/

    .yup-button-minimize {
        height: 12px;
        justify-content: center;
        align-items: center; */
    }
    .yup-button-minimize:hover {
        background: var(--yup-2light-gray);
    }
    .yup-button-minimize:active {
        background: var(--yup-light-gray);
    }

    .yup-top-left #yup-button-minimize-top,
    .yup-top-center #yup-button-minimize-top,
    .yup-top-right #yup-button-minimize-top {
        display: none;
    }

    .yup-bottom-left #yup-button-minimize-bottom,
    .yup-bottom-center #yup-button-minimize-bottom,
    .yup-bottom-right #yup-button-minimize-bottom {
        display: none;
    }

    .yup-minimized {
        border-color: var(--yup-text) !important;
        /*
         * Make it easier to click on this, remove padding from the container
         * element onto which this class is applied. Otherwise you accidently
         * click on padding and nothing happens
         */
        padding: 0 !important;
    }

    .yup-top-left.yup-minimized,
    .yup-top-center.yup-minimized,
    .yup-top-right.yup-minimized {
        top: calc(-2.6 * var(--yup-size));
    }

    .yup-bottom-left.yup-minimized,
    .yup-bottom-center.yup-minimized,
    .yup-bottom-right.yup-minimized {
        bottom: calc(-2.6 * var(--yup-size));
    }

    /*************************************************************************/

    .yup-top-left {
        top: -1px;
        left: -1px;
    }
    .yup-top-center {
        top: -1px;
        left: 50%;
        transform: translate(-50%, -1px);
    }
    .yup-top-right {
        top: -1px;
        right: -1px;
    }
    .yup-bottom-left {
        bottom: -1px;
        left: -1px;
    }
    .yup-bottom-center {
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 1px);
    }
    .yup-bottom-right {
        bottom: -1px;
        right: -1px;
    }
</style>
`;

const html = `
<!--
    Chould use css-grid to avoid duplicating the minimize for top and bottom,
    but that would result in possible incompatibility with non-css-grid
    supporting browsers
-->
<div id="yup-button-minimize-top" class="yup-button yup-button-minimize">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
    >
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M19 13H5v-2h14v2z" fill="var(--yup-text)" />
    </svg>
</div>

<div id="yup-options-container">
    <div id="yup-main-options">
        <!-- row 1 -->
        <div class="yup-row">
            <div class="yup-col-1">
                <button
                    id="yup-button-current-speed"
                    class="yup-button yup-current-speed"
                    title="Reset speed"
                >
                    1.0
                </button>
            </div>
            <div class="yup-col-1">
                <button
                    id="yup-button-decrease-speed"
                    class="yup-button"
                    title="Decrease speed"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                    >
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M19 13H5v-2h14v2z" fill="var(--yup-text)" />
                    </svg>
                </button>
            </div>
            <div class="yup-col-1">
                <button
                    id="yup-button-increase-speed"
                    class="yup-button"
                    title="Increase speed"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                    >
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="var(--yup-text)" />
                    </svg>
                </button>
            </div>
            <div class="yup-col-1">
                <button
                    id="yup-button-more"
                    class="yup-button"
                    title="More"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                    >
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path
                            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                            fill="var(--yup-text)"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <!-- row 1 -->

        <!-- row 2 -->
        <div class="yup-row">
            <div
                id="yup-input-slider-container"
                class="yup-col-3 yup-flex-align-center"
                title="Change speed"
            >
                <input
                    id="yup-input-speed"
                    class="yup-input yup-range"
                    type="range"
                    value = "1"
                    min="0.5"
                    max="4"
                    step="0.1"
                />
            </div>
            <div class="yup-col-1">
                <button
                    id="yup-button-hide"
                    class="yup-button"
                    title="Hide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                            fill="var(--yup-text)"
                        />
                    </svg>
                </button>
            </div>
        </div>
        <!-- row 2 -->
    </div>

    <div id="yup-secondary-options">
        <!-- row 1 -->
        <div class="yup-row">
            <div class="yup-col-3 yup-text-small yup-flex-row yup-flex-align-center">
                <input type="checkbox" />
                <label title="Firefox and Safari only">Pitch*</label>
            </div>
            <div class="yup-col-1">
                <button
                    id="yup-button-back"
                    class="yup-button"
                    title="Back"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enable-background="new 0 0 24 24"
                        height="24" viewBox="0 0 24 24"
                        width="24"
                    >
                        <rect fill="none" height="24" width="24" />
                        <g>
                            <polygon
                                points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"
                                fill="var(--yup-text)"
                            />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
        <!-- row 1 -->

        <!-- row 2 -->
        <div class="yup-row yup-text-small yup-flex-align-center">
            <div class="yup-col-3">
                <a href="https://github.com/francium/yuptude">
                    yuptude
                </a>
            </div>
        </div>
        <!-- row 2 -->
    </div>
</div>

<!--
    Chould use css-grid to avoid duplicating the minimize for top and bottom,
    but that would result in possible incompatibility with non-css-grid
    supporting browsers
-->
<div id="yup-button-minimize-bottom" class="yup-button yup-button-minimize">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
    >
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M19 13H5v-2h14v2z" fill="var(--yup-text)" />
    </svg>
</div>
`;

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const REPO_URL = 'https://github.com/francium/yuptude';

/** Enum of magic positions that are known by the build system */
const MAGIC_POSITION = {
    TL: 'tl',
    TC: 'tc',
    TR: 'tr',
    BL: 'bl',
    BC: 'bc',
    BR: 'br',
}

const POSITION_CLASS_VARIANTS = {
    [MAGIC_POSITION.TL]: 'yup-top-left',
    [MAGIC_POSITION.TC]: 'yup-top-center',
    [MAGIC_POSITION.TR]: 'yup-top-right',
    [MAGIC_POSITION.BL]: 'yup-bottom-left',
    [MAGIC_POSITION.BC]: 'yup-bottom-center',
    [MAGIC_POSITION.BR]: 'yup-bottom-right',
};

const STORE_KEY_SPEED = 'yup-speed';
const STORE_KEY_PITCH = 'yup-pitch';

const SELECTOR = {
    CONTAINER: null,
    BUTTON: {
        CURRENT_SPEED: null,
        HIDE: null,
        INCREASE_SPEED: null,
        DECREASE_SPEED: null,
        MORE: null,
        MINIMIZE: null,
    },
    INPUT: {
        SPEED: null,
    },
};

const EVENT_SPEED_CHANGE = 'yup-speed-change';

const INTERVAL_PERIOD_MS = 250;

const SPEED_DEFAULT = 1.0;
const SPEED_MIN = 0.5;
const SPEED_MAX = 4.0;
const SPEED_STEP = 0.1;

const SETTINGS = {
    speed: SPEED_DEFAULT,
    shift_pitch: false,
}

function main() {
    create_container_element();
    init_selectors();
    init_event_handlers();
    init_settings_application_loop();
}

/**
 * Initialize and create the element that contains the entire widget
 */
function create_container_element() {
    const container_el = document.createElement('div');
    container_el.innerHTML = `${styles}${html}`;
    document.body.appendChild(container_el);
    container_el.id = 'yup-container';

    // This is a special placeholder magic string that will get rewritten by
    // the build script
    const yup_position = '__yup_position__';
    container_el.classList.add(POSITION_CLASS_VARIANTS[yup_position]);

    SELECTOR.CONTAINER = container_el;
}

function init_selectors() {
    SELECTOR.BUTTON.CURRENT_SPEED = $('#yup-button-current-speed');
    SELECTOR.INPUT.SPEED = $('#yup-input-speed');
    SELECTOR.BUTTON.HIDE = $('#yup-button-hide');
    SELECTOR.BUTTON.INCREASE_SPEED = $('#yup-button-increase-speed');
    SELECTOR.BUTTON.DECREASE_SPEED = $('#yup-button-decrease-speed');
    SELECTOR.BUTTON.MORE = $('#yup-button-more');
    SELECTOR.BUTTON.MINIMIZE_TOP = $('#yup-button-minimize-top');
    SELECTOR.BUTTON.MINIMIZE_BOTTOM = $('#yup-button-minimize-bottom');
}

function init_event_handlers() {
    document.addEventListener(EVENT_SPEED_CHANGE, e => {
        SELECTOR.BUTTON.CURRENT_SPEED.innerText = +e.yup_speed.toFixed(2);
        SELECTOR.INPUT.SPEED.value = +e.yup_speed.toFixed(2);
    });

    SELECTOR.BUTTON.CURRENT_SPEED.addEventListener('click', () => {
        SETTINGS.speed = SPEED_DEFAULT;
        const e = new Event(EVENT_SPEED_CHANGE)
        e.yup_speed = SETTINGS.speed;
        document.dispatchEvent(e);
    });

    SELECTOR.BUTTON.DECREASE_SPEED.addEventListener('click', () => {
        SETTINGS.speed -= SPEED_STEP;
        SETTINGS.speed = Math.min(SPEED_MAX, Math.max(SPEED_MIN, SETTINGS.speed));
        const e = new Event(EVENT_SPEED_CHANGE)
        e.yup_speed = SETTINGS.speed;
        document.dispatchEvent(e);
    });

    SELECTOR.BUTTON.INCREASE_SPEED.addEventListener('click', () => {
        SETTINGS.speed += SPEED_STEP;
        SETTINGS.speed = Math.min(SPEED_MAX, Math.max(SPEED_MIN, SETTINGS.speed));
        const e = new Event(EVENT_SPEED_CHANGE)
        e.yup_speed = SETTINGS.speed;
        document.dispatchEvent(e);
    });

    SELECTOR.INPUT.SPEED.addEventListener('input', () => {
        SETTINGS.speed = SELECTOR.INPUT.SPEED.value;
        SETTINGS.speed = Math.min(SPEED_MAX, Math.max(SPEED_MIN, SETTINGS.speed));
        const e = new Event(EVENT_SPEED_CHANGE)
        e.yup_speed = SETTINGS.speed;
        document.dispatchEvent(e);
    });

    SELECTOR.BUTTON.HIDE.addEventListener('click', () => {
        SELECTOR.CONTAINER.style.display = 'none';
    });

    SELECTOR.BUTTON.MORE.addEventListener('click', () => {
        alert(`Not implemented yet. Please visit ${REPO_URL}`);
    });

    SELECTOR.BUTTON.MINIMIZE_TOP.addEventListener('click', () => {
        SELECTOR.CONTAINER.classList.toggle('yup-minimized');
    });
    SELECTOR.BUTTON.MINIMIZE_BOTTOM.addEventListener('click', () => {
        SELECTOR.CONTAINER.classList.toggle('yup-minimized');
    });
}

/**
 * Initialize loop that continuously re-applies video playback speed and
 * pitch setting to every video on the page
 *
 * This is to catch any videos that get added to the page after
 * initialization.
 *
 * @returns {number} DOM interval loop id for future clean up or to stop loop
 */
function init_settings_application_loop() {
    return setInterval(
        () => apply_settings_to_all_videos(),
        INTERVAL_PERIOD_MS,
    );
}

function apply_settings_to_all_videos() {
    const videos = $$('video');
    for (const v of videos) {
        if(!v || v.readyState < 2) { continue; }

        v.playbackRate = (SETTINGS.speed || 1);

        v.mozPreservesPitch = !SETTINGS.shift_pitch;
        v.webkitPreservesPitch = !SETTINGS.shift_pitch;
        v.preservePitch = !SETTINGS.shift_pitch;
    }
}

const c = $('#yup-container');
if (c !== null) {
   c.style.display = 'block';
} else {
    main();
}
