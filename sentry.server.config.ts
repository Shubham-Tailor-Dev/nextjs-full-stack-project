import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://ae92a43422d14ee00738e911a11aa8c4@o4508234144874496.ingest.us.sentry.io/4508234155884544",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
