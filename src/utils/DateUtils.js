var dayjs = require('dayjs');

export function timeago(date){
    var relativeTime = require('dayjs/plugin/relativeTime');
    dayjs.extend(relativeTime);
    var now = dayjs();
    var then = dayjs(date);
    return then.from(now);
}

export function dateformat(date)
{
    
}
