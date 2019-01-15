import test from 'ava'
const moment = require('moment')

/**
 * Library under test
 */

import { utcDate } from '../src/utc-date'

test('should return current date in UTC timezone', t => {
    t.deepEqual(new Date(moment().utc().format()), utcDate())
})
