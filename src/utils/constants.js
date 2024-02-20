import { EventBuilder } from './eventBuilder.js';
import { getEaster } from './moon.js';
import { applyCssVar, ColorSet } from './helpers.js';

const currentYear = new Date().getFullYear();
const changeColorVars = (text, background, primary, secondary, accent) => {
    Object.entries(ColorSet.build(text, background, primary, secondary, accent)).forEach(([key, val]) => {
        applyCssVar(key, val);
    });
};

export const DAY_IN_MINUTES = 1440;
export const DEFAULT_EVENTS = {
    NEW_YEAR: new EventBuilder(new Date(currentYear, 1, 1), DAY_IN_MINUTES, () => {}),
    CHRISTMAS: new EventBuilder(new Date(currentYear, 11, 25), DAY_IN_MINUTES, () => {}),
    VALENTINES_DAY: new EventBuilder(new Date(currentYear, 1, 14), DAY_IN_MINUTES, () => {}),
    HALLOWEEN: new EventBuilder(new Date(currentYear, 9, 31), DAY_IN_MINUTES, () => {}),
    EASTER: new EventBuilder(getEaster(currentYear), DAY_IN_MINUTES, () => {}),
    APRIL_FOOLS: new EventBuilder(new Date(currentYear, 3, 1), DAY_IN_MINUTES, () => {}),
};
