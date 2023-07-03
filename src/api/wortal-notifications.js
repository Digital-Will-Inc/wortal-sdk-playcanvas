/**
 * Schedule a notification to be delivered to the player at a later time.
 * @example
 * wortalNotificationsScheduleAsync({
 *    title: "Your energy is full!",
 *    body: "Come back and play again.",
 *    mediaURL: "https://example.com/image.png",
 *    label: "resources-full",
 *    scheduleInterval: 300 // 5 minutes
 * }).then((result) => {
 *   console.log(result.id);
 * });
 * @param {notificationPayload} payload Object defining the notification to be scheduled.
 * @returns {Promise<notificationScheduleResult>} Promise that contains the result of the scheduled notification.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAM</li>
 * <li>OPERATION_FAILED</li>
 * </ul>
 */
function wortalNotificationsScheduleAsync(payload) {
    return window.Wortal.notifications.scheduleAsync(payload);
}

/**
 * Gets the history of scheduled notifications for the past 30 days.
 * @example
 * wortalNotificationsGetHistoryAsync().then((notifications) => {
 *   notifications.forEach((notification) => {
 *   console.log(notification.id);
 *   console.log(notification.status);
 * });
 * @returns {Promise<scheduledNotification[]>} Promise that contains an array of notifications scheduled.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>OPERATION_FAILED</li>
 * </ul>
 */
function wortalNotificationsGetHistoryAsync() {
    return window.Wortal.notifications.getHistoryAsync();
}

/**
 * Cancels a scheduled notification.
 * @example
 * wortalNotificationsCancelAsync("1234567890");
 * @param id ID of the notification to cancel.
 * @returns {Promise<boolean>} Promise that resolves true if the notification was cancelled successfully, false otherwise.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAM</li>
 * <li>OPERATION_FAILED</li>
 * </ul>
 */
function wortalNotificationsCancelAsync(id) {
    return window.Wortal.notifications.cancelAsync(id);
}

/**
 * Cancels all scheduled notifications.
 * @example
 * wortalNotificationsCancelAllAsync();
 * @param label Optional label of the notification category to cancel. If this is used then only notifications with the
 * specified label will be cancelled.
 * @returns {Promise<boolean>} Promise that resolves true if all notifications were cancelled successfully, false otherwise.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>OPERATION_FAILED</li>
 * </ul>
 */
function wortalNotificationsCancelAllAsync(label) {
    return window.Wortal.notifications.cancelAllAsync(label);
}
