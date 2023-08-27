export enum AnalyticsEvent {
  VISIT_WEBSITE = "VISITE_WEBSITE",
}

export type AnalyticsOptions = {
  event: AnalyticsEvent;
  unique?: boolean;
};
