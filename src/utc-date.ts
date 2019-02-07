/**
 * utcDate
 * Get Date in UTC timezone
 */

/**
 * Get current date in UTC timezone.
 */
export function utcDate(): Date {
    return new Date(new Date().toUTCString())
}
