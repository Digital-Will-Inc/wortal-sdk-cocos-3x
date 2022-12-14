/**
 * Gets the ID of the current context.
 * @example
 * let id = Wortal.context.getId();
 * console.log(id);
 * @returns String ID of the current context if one exists. Null if the player is playing solo. Empty string if the
 * game is being played on a platform that does not currently support context.
 */
export function getId(): string {
    return (window as any).Wortal.context.getId();
}

/**
 * Opens the platform UI to select friends to invite and play with.
 * @example
 * Wortal.context.chooseAsync({
 *     image: 'data:base64Image',
 *     text: 'Invite text',
 *     caption: 'Play',
 *     data: { exampleData: 'yourData' },
 * });
 * @param payload Object defining the options for the context choice.
 */
export function chooseAsync(payload: ContextPayload): Promise<void> {
    return (window as any).Wortal.context.chooseAsync(payload);
}

/**
 * Creates a context with the given player ID.
 * @example
 * Wortal.context.createAsync('player123');
 * @param playerId ID of player to create a context with.
 */
export function createAsync(playerId: string): Promise<void> {
    return (window as any).Wortal.context.createAsync(playerId);
}

/**
 * Switches the current context to the context with the given ID.
 * @example
 * Wortal.context.switchAsync('abc123');
 * @param contextId ID of the context to switch to.
 */
export function switchAsync(contextId: string): Promise<void> {
    return (window as any).Wortal.context.switchAsync(contextId);
}

/**
 * Shares a message to the player's friends. Will trigger a UI for the player to choose which friends to share with.
 * @example
 * Wortal.context.shareAsync({
 *     image: 'data:base64Image',
 *     text: 'Share text',
 *     caption: 'Play',
 *     data: { exampleData: 'yourData' },
 * }).then(result => console.log(result); // Contains shareCount with number of friends the share was sent to.
 * @param payload Object defining the share message.
 * @returns Number of friends the message was shared with.
 */
export function shareAsync(payload: ContextPayload): Promise<number> {
    return (window as any).Wortal.context.shareAsync(payload);
}

/**
 * Posts an update to the current context. Will send a message to the chat thread of the current context.
 * @example
 * Wortal.context.updateAsync({
 *     image: 'data:base64Image',
 *     text: 'Update text',
 *     caption: 'Play',
 *     data: { exampleData: 'yourData' },
 * });
 * @param payload Object defining the update message.
 */
export function updateAsync(payload: ContextPayload): Promise<void> {
    return (window as any).Wortal.context.updateAsync(payload);
}

/**
 * Payload for various function calls in the context API.
 */
export interface ContextPayload {
    /** URL of base64 encoded image to be displayed. This is required for the payload to be sent. */
    image: string;
    /** Message body. This is required for the payload to be sent. */
    text: string | LocalizableContent;
    /** Text of the call-to-action button. */
    caption?: string | LocalizableContent;
    /** Text of the call-to-action button. */
    cta?: string | LocalizableContent;
    /** Object passed to any session launched from this context message.
     *  Its size must be <=1000 chars when stringified.
     *  It can be accessed from `Wortal.context.getEntryPointData()`.
     */
    data?: Record<string, unknown>;
    /** An array of filters to be applied to the friend list. Only the first filter is currently used. */
    filters?: [ContextFilter];
    /** Context maximum size. */
    maxSize?: number;
    /** Context minimum size. */
    minSize?: number;
    /** Specify how long a friend should be filtered out after the current player sends them a message.
     * This parameter only applies when `NEW_INVITATIONS_ONLY` filter is used.
     * When not specified, it will filter out any friend who has been sent a message.
     */
    hoursSinceInvitation?: number;
    /** Optional customizable text field in the share UI.
     * This can be used to describe the incentive a user can get from sharing.
     */
    description?: string | LocalizableContent;
    /** Message format to be used. There's no visible difference among the available options. */
    intent?: 'INVITE' | 'REQUEST' | 'CHALLENGE' | 'SHARE';
    /** Optional property to switch share UI mode.
     * DEFAULT: Serial contact card with share and skip button.
     * MULTIPLE: Selectable contact list.
     */
    ui?: 'DEFAULT' | 'MULTIPLE';
    /** Defines the minimum number of players to be selected to start sharing. */
    minShare?: number;
    /** Defines how the update message should be delivered.
     * 'IMMEDIATE': will be sent immediately.
     * 'LAST': when the game session ends, the latest payload will be sent.
     * 'IMMEDIATE_CLEAR': will be sent immediately, and also discard any pending `LAST` payloads in the same session.
     */
    strategy?: 'IMMEDIATE' | 'LAST' | 'IMMEDIATE_CLEAR';
    /** Specifies if the message should trigger push notification. */
    notifications?: 'NO_PUSH' | 'PUSH';
    /** Not used */
    action?: 'CUSTOM';
    /** Not used */
    template?: string;
}

/**
 * Enable passing localizable content to API calls.
 * SDK will use the current player's locale for locale matching.
 */
export interface LocalizableContent {
    /** Text will be used if not finding matching locale */
    default: string;
    /** Key value pairs of localized strings */
    localizations: Record<string, string>;
}

/**
 * Defines the filtering behavior
 *
 * `NEW_CONTEXT_ONLY` only enlists contexts that the current player is in, but never participated in (e.g. a new context created by a friend).
 * `INCLUDE_EXISTING_CHALLENGES` enlists contexts that the current player has participated before.
 * `NEW_PLAYERS_ONLY` only enlists friends who haven't played this game before.
 * `NEW_INVITATIONS_ONLY` only enlists friends who haven't been sent an in-game message before. This filter can be fine-tuned with `hoursSinceInvitation` parameter.
 */
export type ContextFilter = 'NEW_CONTEXT_ONLY'
    | 'INCLUDE_EXISTING_CHALLENGES'
    | 'NEW_PLAYERS_ONLY'
    | 'NEW_INVITATIONS_ONLY';