var dayjs = require('dayjs');

export function timeago(date){
    var relativeTime = require('dayjs/plugin/relativeTime');
    dayjs.extend(relativeTime);
    var now = dayjs();
    var then = dayjs(date);
    return then.from(now);
}

export function calendarTime(date)
{
    var localizedFormat = require('dayjs/plugin/localizedFormat');
    dayjs.extend(localizedFormat);
    return dayjs(date).format('llll');
}

export function dropboxTime(date)
{
    var localizedFormat = require('dayjs/plugin/localizedFormat');
    dayjs.extend(localizedFormat);
    return dayjs(date).format('LL'); 
}
