/**
 * Enable passing localizable content to API calls.
 * SDK will use the current player's locale for locale matching.
 */
export interface LocalizableContent {
    /** T
     * ext will be used if not finding matching locale
     * */
    default: string;
    /**
     * Key value pairs of localized strings
     * */
    localizations: Record<string, string>;
}
