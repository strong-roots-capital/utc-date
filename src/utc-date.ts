/**
 * utcDate
 * Get Date in UTC timezone
 */

const moment = require('moment')


/**
 * Get current date in UTC timezone.
 */
export function utcDate(): Date {
    return new Date(moment.utc().format())
}
