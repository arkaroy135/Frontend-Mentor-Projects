export default defineNuxtConfig({
  telemetry: false,
  experimental: {
    asyncEntry: true,
  },
  modules: [
    "@nuxt/devtools",
    "@nuxt/image-edge",
    "@nuxtjs/html-validator",
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "nuxt-icon",
    "nuxt-typed-router",
    "nuxt-security",
  ],
  extends: ["nuxt-seo-kit"],
  css: ["assets/PageFonts.css"],
  unocss: {
    preflight: true,
  },
  runtimeConfig: {
    public: {
      siteUrl: "https://arloopstudio.vercel.app",
      siteName: "Loopstudios-Immersive Experiences that Delivers",
      titleSeparator: "|",
      siteDescription:
        "We create immersive experiences that engage audiences and boost brands. Let us help you achieve your goals.",
      language: "en", // prefer more explicit language codes like `en-AU` over `en`
      trailingSlash: true,
    },
  },
  security: {
    headers: {
      crossOriginResourcePolicy: "same-origin",
      crossOriginOpenerPolicy: "same-origin",
      crossOriginEmbedderPolicy: "require-corp",
      contentSecurityPolicy: {
        "base-uri": ["'self'"],
        "font-src": ["'self'", "https:", "data:"],
        "form-action": ["'self'"],
        "frame-ancestors": ["'self'"],
        "img-src": ["'self'", "data:"],
        "object-src": ["'none'"],
        "script-src-attr": ["'none'"],
        "style-src": ["'self'", "https:", "'unsafe-inline'"],
        "upgrade-insecure-requests": true,
      },
      originAgentCluster: "?1",
      referrerPolicy: "no-referrer",
      strictTransportSecurity: {
        maxAge: 15552000,
        includeSubdomains: true,
      },
      xContentTypeOptions: "nosniff",
      xDNSPrefetchControl: "off",
      xDownloadOptions: "noopen",
      xFrameOptions: "SAMEORIGIN",
      xPermittedCrossDomainPolicies: "none",
      xXSSProtection: "0",
      permissionsPolicy: {
        camera: ["()"],
        "display-capture": ["()"],
        fullscreen: ["()"],
        geolocation: ["()"],
        microphone: ["()"],
      },
    },
    requestSizeLimiter: {
      maxRequestSizeInBytes: 2000000,
      maxUploadFileRequestInBytes: 8000000,
    },
    rateLimiter: {
      // Twitter search rate limiting
      tokensPerInterval: 150,
      interval: "hour",
      fireImmediately: true,
    },
    xssValidator: {
      stripIgnoreTag: true,
      // throwError: false,  //optional
    },
    corsHandler: {
      origin: "*",
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      preflight: {
        statusCode: 204,
      },
    },
    allowedMethodsRestricter: "*",
    hidePoweredBy: true,
    basicAuth: false,
    enabled: true,
    csrf: true,
  },
});

