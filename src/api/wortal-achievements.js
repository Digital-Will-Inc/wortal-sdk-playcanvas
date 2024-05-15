
/**
 * Gets a player's achievements. This method returns all achievements, regardless of whether they are unlocked or not.
 * @example
 * wortalAchievementsGetAchievementsAsync()
 *   .then((achievements) => {
 *      foreach (const achievement of achievements) {
 *          if (achievement.isUnlocked) {
 *              console.log(achievement.name + " is unlocked");
 *          }
 *      }
 *   });
 * @returns {Promise<achievement[]>} Promise that resolves to an array of achievements.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * </ul>
 */
function wortalAchievementsGetAchievementsAsync() {
    return window.Wortal.achievements.getAchievementsAsync();
}

/**
 * Unlocks an achievement for the player. This method will only unlock the achievement if it has not already been unlocked.
 * @param achievementName The name of the achievement to unlock.
 * @example
 * wortalAchievementsUnlockAchievementAsync("first_win")
 *  .then((unlocked) => {
 *    if (unlocked) {
 *      console.log("Achievement unlocked");
 *    } else {
 *      console.log("Achievement already unlocked");
 *    }
 *  });
 * @returns {Promise<boolean>} Promise that resolves to true if the achievement was unlocked, false if it was already unlocked.
 * @throws {errorMessage} See error.message for details.
 * <ul>
 * <li>NOT_SUPPORTED</li>
 * <li>INVALID_PARAMS</li>
 * <li>ACHIEVEMENT_NOT_FOUND</li>
 * </ul>
 */
function wortalAchievementsUnlockAchievementAsync(achievementName) {
    return window.Wortal.achievements.unlockAchievementAsync(achievementName);
}
