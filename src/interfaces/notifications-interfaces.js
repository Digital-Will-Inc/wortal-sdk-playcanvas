
/**
 * @typedef {object} notificationPayload
 * Payload used to send notifications to a recipient.
 * @property {string} title The title of the notification.
 * @property {string} body The body of the notification.
 * @property {string | undefined} mediaURL URL to the icon of the notification. Defaults to game icon on Wortal if not provided.
 * @property {string | undefined} label Label used to categorize notifications.
 * @property {number | undefined} scheduleInterval Time from now (in seconds) to send the notification. Limited between 300 (5 minutes) and 6480000 (75 days).
 * Limit of 5 pending scheduled notifications per recipient. Default is 1 day (86400 seconds).
 */

/**
 * @typedef {object} notificationScheduleResult
 * Result of a scheduled notification.
 * @property {string} id ID of the scheduled notification.
 * @property {boolean} success Whether the notification was scheduled successfully.
 */
