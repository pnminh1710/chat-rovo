// @flow
const selectedLocale = 'en';
const cachedDateFormat = {};

function formatDate(
  time: string,
  options: Object = {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  }
) {
  const date = new Date(time);
  const hashKey = JSON.stringify(options);
  let i18d = cachedDateFormat[hashKey];
  if (!i18d) {
    i18d = new Intl.DateTimeFormat(selectedLocale, options);
    cachedDateFormat[hashKey] = i18d;
  }
  return i18d.format(date);
}

export default formatDate;
