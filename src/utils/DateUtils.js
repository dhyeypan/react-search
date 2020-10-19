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
    var calendar = require('dayjs/plugin/calendar');
    dayjs.extend(calendar);
    var time = date.split(" ")[0];
    var time2 = date.split(" ")[1];
    // return dayjs().calendar(dayjs(date));
    return dayjs().calendar(time2, {
        sameDay: '[Today at] h:mm A', // The same day ( Today at 2:30 AM )
        nextDay: '[Tomorrow at] h:mm A', // The next day ( Tomorrow at 2:30 AM )
        nextWeek: 'dddd [at] h:mm A', // The next week ( Sunday at 2:30 AM )
        lastDay: '[Yesterday at] h:mm A', // The day before ( Yesterday at 2:30 AM )
        lastWeek: '[Last] dddd [at] h:mm A', // Last week ( Last Monday at 2:30 AM )
        sameElse: 'DD/MM/YYYY' // Everything else ( 17/10/2011 )
      })
    // console.log(time);
    // console.log(time2);
}
