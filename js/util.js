import moment from 'moment';

export const rand = (s, e) => s + Math.floor(e - s + 1) * Math.random();

const LOCALE_MAPPER = {
    korea: 'ko',
    japan: 'jp',
    english: 'en',
};

export function fromNow(dt, locale = 'korea') {
    const localCode =
        locale?.length < 3
            ? locale
            : moment.locale(LOCALE_MAPPER[locale.toLowerCase()]);
    return moment(dt).fromNow();
}
