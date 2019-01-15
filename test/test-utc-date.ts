import test from 'ava'
const moment = require('moment-timezone')

/**
 * Library under test
 */

import { utcDate } from '../src/utc-date'

test('date should be in UTC timezone', t => {
    t.deepEqual(new Date(moment().utc().format()), utcDate())
})
