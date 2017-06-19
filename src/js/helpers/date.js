import moment from 'moment';

const dateHelper = {
    fromNow: (thenTimestamp) => {
        const now = moment(),
            then = moment(thenTimestamp),
            diff = moment.duration(now.diff(then))._data;

        if (diff.year || diff.month || diff.days) {
            return then.format('D MMMM')
        } else if (diff.hours) {
            return `${diff.hours} h`;
        } if (diff.minutes) {
            return `${diff.minutes} min`;
        }

        return `${diff.seconds} s`;
    }
};

export default dateHelper;
