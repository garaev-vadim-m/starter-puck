export {};

declare global {
  interface Window {
    gpnSpaUrl: string;
    gpnCounterId: number;
    userId: number;
    apiVersion: string;
    gpnAnalytics: {
      sendEvent: any;
    };
  }
}
