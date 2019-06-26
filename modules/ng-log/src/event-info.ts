// tslint:disable: no-any
/**
 * The event telemetry info interface.
 */
export interface EventInfo {
    /**
     * Mapping for custom dimensions and metrics.
     */
    customMap?: { [key: string]: string };
    /**
     * Metrics associated with this event.
     */
    measurements?: { [name: string]: number };
    /**
     * Additional properties.
     */
    properties?: {
        [key: string]: any;
    };
    /**
     * The string that will appear as the event label.
     */
    eventLabel?: string;
    /**
     * The string that will appear as the event category.
     */
    eventCategory?: string;
}
