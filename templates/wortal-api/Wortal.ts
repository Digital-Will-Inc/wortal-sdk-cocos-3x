import * as _ads from './api/Ads';
import * as _analytics from './api/Analytics';
import * as _context from './api/Context';
import * as _iap from './api/IAP';
import * as _leaderboard from './api/Leaderboard';
import * as _notifications from './api/Notifications';
import * as _player from './api/Player';
import * as _session from './api/Session';
import * as _tournament from './api/Tournament';
import { AuthResponse } from './interfaces/Wortal';

/**
 * API for the Wortal SDK.
 */
export class Wortal {
    /** Ads API */
    static ads = _ads;
    /** Analytics API */
    static analytics = _analytics;
    /** Context API */
    static context = _context;
    /** In-App Purchasing API */
    static iap = _iap;
    /** Leaderboard API */
    static leaderboard = _leaderboard;
    /** Notifications API */
    static notifications = _notifications;
    /** Player API */
    static player = _player;
    /** Session API */
    static session = _session;
    /** Tournament API */
    static tournament = _tournament;

    /**
     * Returns true if the SDK Core has been initialized.
     */
    isInitialized: boolean = (window as any).Wortal.isInitialized;

    /**
     * Initializes the SDK. This should be called before any other SDK functions. It is recommended to call this
     * as soon as the script has been loaded to shorten the initialization time.
     *
     * NOTE: This is only available if the manual initialization option is set to true. Otherwise, the SDK will initialize automatically.
     *
     * PLATFORM NOTE: Only supported on Viber, Link and Facebook.
     * @example
     * Wortal.initializeAsync().then(() => {
     *    // SDK is ready to use, wait for game to finish loading.
     *    Wortal.setLoadingProgress(100);
     *    Wortal.startGameAsync();
     * });
     * @returns {Promise<void>} Promise that resolves when the SDK initialized successfully.
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>INITIALIZATION_ERROR</li>
     * <li>NOT_SUPPORTED</li>
     * </ul>
     */
    async initializeAsync(): Promise<void> {
        return (window as any).Wortal.initializeAsync();
    }

    /**
     * This indicates that the game has finished initial loading and is ready to start. Context information will be
     * up-to-date when the returned promise resolves. The loading screen will be removed after this is called along with
     * the following conditions:
     * <ul>
     * <li>initializeAsync has been called and resolved</li>
     * <li>setLoadingProgress has been called with a value of 100</li>
     * </ul>
     *
     * NOTE: This is only available if the manual initialization option is set to true. Otherwise, the game will start automatically.
     *
     * PLATFORM NOTE: Only supported on Viber, Link and Facebook.
     * @example
     * Wortal.startGameAsync().then(() => {
     *    // Game is rendered to player.
     * });
     * @returns {Promise<void>} Promise that resolves when the game has started successfully.
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>INITIALIZATION_ERROR</li>
     * <li>NOT_SUPPORTED</li>
     * </ul>
     */
    async startGameAsync(): Promise<void> {
        return (window as any).Wortal.startGameAsync();
    }

    /**
     * Sets the loading progress value for the game. This is required for the game to start. Failure to call this with 100
     * once the game is fully loaded will prevent the game from starting.
     * @example
     * onGameLoadProgress(percent) {
     *     Wortal.setLoadingProgress(percent);
     * }
     *
     * onGameLoaded() {
     *     Wortal.setLoadingProgress(100);
     * }
     * @param value Percentage of loading complete. Range is 0 to 100.
     */
    setLoadingProgress(value: number): void {
        (window as any).Wortal.setLoadingProgress(value);
    }

    /**
     * Sets a callback which will be invoked when the app is brought to the background.
     * @param callback Callback to invoke.
     */
    onPause(callback: Function): void {
        (window as any).Wortal.onPause(() => {
            callback();
        });
    }

    /**
     * Requests and performs haptic feedback on supported devices.
     * @returns {Promise<void>} Haptic feedback requested successfully
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>NOT_SUPPORTED</li>
     * <li>CLIENT_UNSUPPORTED_OPERATION</li>
     * <li>INVALID_OPERATION</li>
     * </ul>
     */
    performHapticFeedbackAsync(): Promise<void> {
        return (window as any).Wortal.performHapticFeedbackAsync();
    }

    /**
     * Gets the supported APIs for the current platform.
     * @example
     * let supportedAPIs = Wortal.getSupportedAPIs();
     * if (supportedAPIs.includes("context.shareAsync")) {
     *    shareWithFriendsDialog.show();
     * }
     * @returns {string[]} Array of supported APIs.
     */
    getSupportedAPIs(): string[] {
        return (window as any).Wortal.getSupportedAPIs();
    }
    
    /**
     * Starts the authentication process for the player. If the current platform has its own authentication prompt then
     * this will be displayed.
     * @example
     * Wortal.authenticateAsync()
     * .then(response => console.log(response));
     * @param {AuthPayload} payload Optional payload for the authentication process.
     * @returns {Promise<AuthResponse>} Promise that resolves with the response from the authentication process.
     * @throws {ErrorMessage} See error.message for details.
     * <ul>
     * <li>AUTH_IN_PROGRESS</li>
     * <li>USER_ALREADY_AUTHENTICATED</li>
     * <li>USER_INPUT</li>
     * <li>NOT_SUPPORTED</li>
     * </ul>
     */
    authenticateAsync(payload?: any): Promise<AuthResponse> {
        return (window as any).Wortal.authenticateAsync(payload);
    }
}
