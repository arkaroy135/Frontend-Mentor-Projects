export default defineNuxtConfig({
  telemetry: false,
  modules: [
    "@nuxt/devtools",
    "@nuxt/image-edge",
    "@nuxtjs/html-validator",
    "@unocss/nuxt",
    "nuxt-security",
    "nuxt-typed-router",
  ],
  extends: ["nuxt-seo-kit"],
  css: ["assets/UsedFonts.css"],
  unocss: {
    preflight: true,
  },
  // debug: true,
  htmlValidator: {
    usePrettier: false,
    logLevel: "verbose",
    failOnError: false,
    options: {
      extends: [
        "html-validate:document",
        "html-validate:recommended",
        "html-validate:standard",
      ],
      rules: {
        "svg-focusable": "off",
        "no-unknown-elements": "error",
        // Conflicts or not needed as we use prettier formatting
        "void-style": "off",
        "no-trailing-whitespace": "off",
        // Conflict with Nuxt defaults
        "require-sri": "off",
        "attribute-boolean-style": "off",
        "doctype-style": "off",
        // Unreasonable rule
        "no-inline-style": "off",
      },
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: "https://projtrack.vercel.app",
      siteName: "Project Tracking-Manage Your Projects Efficiently",
      titleSeparator: "|",
      siteDescription:
        "Our project tracking software simplifies project management, allowing you to focus on your work and achieve your goals. Streamline your workflow and increase productivity today.",
      language: "en", // prefer more explicit language codes like `en-AU` over `en`
      // trailingSlash: true,
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

