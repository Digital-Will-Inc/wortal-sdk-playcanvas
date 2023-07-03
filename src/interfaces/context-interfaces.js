
/**
 * @typedef {object} invitePayload
 * Payload for context.inviteAsync. Defines the content to be sent in the invite.
 * @property {string} image Data URL of base64 encoded image to be displayed. This is required for the payload to be sent.
 * @property {string | localizableContent} text A text message, or an object with the default text as the value of 'default'
 * and another object mapping locale keys to translations as the value of 'localizations'.
 * @property {string | localizableContent | undefined} cta Text of the call-to-action button.
 * @property {string | localizableContent | undefined} dialogTitle An optional title to display at the top of the invite dialog instead of the generic title.
 * This param is not sent as part of the message, but only displays in the dialog header.
 * The title can be either a string or an object with the default text as the value of 'default' and another object
 * mapping locale keys to translations as the value of 'localizations'.
 *
 * PLATFORM NOTE: Facebook only.
 * @property {Record<string, unknown> | undefined} data Object passed to any session launched from this context message.
 * Its size must be <=1000 chars when stringified.
 * It can be accessed from `wortal.context.getEntryPointData()`
 * @property {inviteFilter[] | undefined} filters The set of filters to apply to the suggestions. Multiple filters may be applied. If no results are returned when
 * the filters are applied, the results will be generated without the filters.
 * @property {inviteSection[] | undefined} sections The set of sections to be included in the dialog. Each section can be assigned a maximum number of results to be
 * returned (up to a maximum of 10). If no max is included, a default max will be applied. Sections will be included
 * in the order they are listed in the array. The last section will include a larger maximum number of results, and
 * if a maxResults is provided, it will be ignored. If this array is left empty, default sections will be used.
 *
 * PLATFORM NOTE: Facebook only.
 */

/**
 * @typedef {object} choosePayload
 * Payload for context.chooseAsync. Defines the filters and search parameters to apply to the friend list.
 * @property {string | localizableContent | undefined} description Optional customizable text field in the share UI.
 * This can be used to describe the incentive a user can get from sharing.
 * @property {[contextFilter] | undefined} filters An array of filters to be applied to the friend list. Only the first filter is currently used.
 * @property {number | undefined} hoursSinceInvitation Specify how long a friend should be filtered out after the current player sends them a message.
 * This parameter only applies when `NEW_INVITATIONS_ONLY` filter is used.
 * When not specified, it will filter out any friend who has been sent a message.
 *
 * PLATFORM NOTE: Viber only.
 * @property {number | undefined} maxSize Context maximum size.
 * @property {number | undefined} minSize Context minimum size.
 */

/**
 * @typedef {object} sharePayload
 * Payload for context.shareAsync. Defines the message to be sent to the context.
 * @property {string | localizableContent | undefined} cta Text of the call-to-action button.
 * @property {Record<string, unknown> | undefined} data Object passed to any session launched from this context message.
 * Its size must be <=1000 chars when stringified.
 * It can be accessed from `wortal.context.getEntryPointData()`
 * @property {string | localizableContent | undefined} description Optional customizable text field in the share UI.
 * This can be used to describe the incentive a user can get from sharing.
 * @property {[contextFilter] | undefined} filters An array of filters to be applied to the friend list. Only the first filter is currently used.
 * @property {number | undefined} hoursSinceInvitation Specify how long a friend should be filtered out after the current player sends them a message.
 * This parameter only applies when `NEW_INVITATIONS_ONLY` filter is used.
 * When not specified, it will filter out any friend who has been sent a message.
 *
 * PLATFORM NOTE: Viber only.
 * @property {string} image Data URL of base64 encoded image to be displayed. This is required for the payload to be sent.
 * @property {intent | undefined} intent Message format to be used. There's no visible difference among the available options.
 * @property {number | undefined} minShare Defines the minimum number of players to be selected to start sharing.
 * @property {string[] | undefined} playerIds Optional property to directly send share messages to multiple players with a confirmation prompt.
 * Selection UI will be skipped if this property is set.
 *
 * PLATFORM NOTE: Viber only.
 * @property {string | localizableContent} text A text message, or an object with the default text as the value of 'default'
 * and another object mapping locale keys to translations as the value of 'localizations'.
 * @property {ui | undefined} ui Optional property to switch share UI mode.
 * @property {shareDestination[] | undefined} shareDestination An optional array to set sharing destinations in the share dialog.
 * If not specified all available sharing destinations will be displayed.
 *
 * PLATFORM NOTE: Facebook only.
 * @property {boolean} switchContext A flag indicating whether to switch the user into the new context created on sharing.
 *
 * PLATFORM NOTE: Facebook only.
 */

/**
 * @typedef {object} updatePayload
 * Payload for context.updateAsync. Defines the message to be sent to the context.
 * @property {action | undefined} action Message format to be used. Not currently used.
 * @property {string | localizableContent | undefined} cta Text of the call-to-action button.
 * @property {Record<string, unknown> | undefined} data Object passed to any session launched from this context message.
 * Its size must be <=1000 chars when stringified.
 * It can be accessed from `wortal.context.getEntryPointData()`
 * @property {string} image Data URL of base64 encoded image to be displayed. This is required for the payload to be sent.
 * @property {mediaParams | undefined} media Optional content for a gif or video. At least one image or media should be provided in order to render the update.
 *
 * PLATFORM NOTE: Facebook only.
 * @property {notifications | undefined} notifications Specifies if the message should trigger push notification.
 * @property {strategy | undefined} strategy Defines how the update message should be delivered.
 * @property {string | undefined} template ID of the template this custom update is using. Templates should be predefined in fbapp-config.json.
 * See the [Bundle Config documentation](https://developers.facebook.com/docs/games/instant-games/bundle-config)
 * for documentation about fbapp-config.json.
 *
 * PLATFORM NOTE: Facebook only.
 * @property {string | localizableContent} text A text message, or an object with the default text as the value of 'default'
 * and another object mapping locale keys to translations as the value of 'localizations'.
 */

/**
 * @typedef {object} linkSharePayload
 * Represents a custom link to be shared by the user.
 * @property {string | undefined} image A base64 encoded image to be shown for the link preview. The image is recommended to either be a square or of
 * the aspect ratio 1.91:1.
 * @property {string | undefined} text A text description for the link preview. Recommended to be less than 44 characters.
 * @property {Record<string, unknown> | undefined} data A blob of data to associate with the shared link. All game sessions launched from the share will be able to
 * access this blob through Wortal.session.getEntryPointData().
 */

/**
 * @typedef {object} localizableContent
 * Enable passing localizable content to API calls.
 * SDK will use the current player's locale for locale matching.
 * @property {string} default Text that will be used if a matching locale was not found.
 * @property {Record<string, string>} localizations Key value pairs of localized strings.
 */

/**
 * @typedef {object} contextSizeResponse
 * Response from context.isSizeBetween API. Contains the answer and the min and max size.
 * @property {boolean} answer
 * @property {number} maxSize
 * @property {number} minSize
 */

/**
 * @typedef {object} inviteSection
 * Represents a section in the inviteAsync dialog that contains suggested matches. The sections will be shown in the
 * order they are included in the array, and the last section will contain as many results as possible.
 * @property {inviteSectionType} sectionType The type of section to include in the inviteAsync dialog.
 * @property {number | undefined} maxResults Optional maximum number of results to include in the section. This can be no higher than 10. This will be
 * disregarded for the last section, which will contain as many results as possible. If not included, the default
 * maximum number of results for that section type will be used.
 */

/**
 * @typedef {object} mediaParams
 * Represents the media payload used by custom update and custom share.
 * @property {mediaContent | undefined} gif URL of the gif to be displayed.
 * @property {mediaContent | undefined} video URL of the video to be displayed.
 */

/**
 * @typedef {object} mediaContent
 * Specifies the content for media.
 * @property {string} url
 */
