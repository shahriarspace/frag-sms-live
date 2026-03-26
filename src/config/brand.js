// Brand configuration — driven by build-time environment variables.
// Default: FragSMS (Germany). Override via BRAND_* env vars for other brands.
//
// Astro exposes env vars prefixed with PUBLIC_ via import.meta.env.
// Usage: import { brand } from '../config/brand.js';

const env = import.meta.env;

// ─── Core identity ───────────────────────────────────────────────
const BRAND_NAME        = env.PUBLIC_BRAND_NAME        || 'FragSMS';
const BRAND_DOMAIN      = env.PUBLIC_BRAND_DOMAIN      || 'fragsms.de';
const BRAND_TAGLINE     = env.PUBLIC_BRAND_TAGLINE     || 'Frag einfach.';
const BRAND_COUNTRY     = env.PUBLIC_BRAND_COUNTRY     || 'DE';
const BRAND_CONTACT_EMAIL = env.PUBLIC_BRAND_CONTACT_EMAIL || ('kontakt@' + BRAND_DOMAIN);

// ─── Phone ───────────────────────────────────────────────────────
const BRAND_PHONE_E164   = env.PUBLIC_BRAND_PHONE_E164   || '+4915908138432';
const BRAND_PHONE_DISPLAY = env.PUBLIC_BRAND_PHONE_DISPLAY || '+49 1590 8138432';
const BRAND_PHONE_PREFIX  = env.PUBLIC_BRAND_PHONE_PREFIX  || '+49';
// WhatsApp number (without +)
const BRAND_WA_NUMBER    = BRAND_PHONE_E164.replace('+', '');

// ─── Language ────────────────────────────────────────────────────
const BRAND_DEFAULT_LANG  = env.PUBLIC_BRAND_DEFAULT_LANG  || 'de';
const BRAND_SUPPORTED_LANGS = env.PUBLIC_BRAND_SUPPORTED_LANGS
  ? env.PUBLIC_BRAND_SUPPORTED_LANGS.split(',')
  : ['de', 'en'];

// ─── Currency ────────────────────────────────────────────────────
const BRAND_CURRENCY_CODE   = env.PUBLIC_BRAND_CURRENCY_CODE   || 'EUR';
const BRAND_CURRENCY_SYMBOL = env.PUBLIC_BRAND_CURRENCY_SYMBOL || '\u20ac';

// ─── AI Provider label (for display only) ────────────────────────
const BRAND_AI_PROVIDER = env.PUBLIC_BRAND_AI_PROVIDER || 'gemini';

// ─── Signup / Worker URLs ────────────────────────────────────────
const BRAND_SMS_WORKER_URL = env.PUBLIC_BRAND_SMS_WORKER_URL || ('https://sms.' + BRAND_DOMAIN);
const BRAND_SIGNUP_URL     = BRAND_SMS_WORKER_URL + '/signup';
const BRAND_STRIPE_DOMAIN  = env.PUBLIC_BRAND_STRIPE_DOMAIN  || ('stripe.' + BRAND_DOMAIN);

// ─── Consent keyword ─────────────────────────────────────────────
// DE=JA, BD=YES (or haan), US=YES
const BRAND_CONSENT_KEYWORD = env.PUBLIC_BRAND_CONSENT_KEYWORD || 'JA';

// ─── Pricing plans (fully configurable per brand) ────────────────
// JSON string from env, or default FragSMS plans
const defaultPlans = [
  {
    id: 'free',
    name: 'Free',
    price: '0',
    priceDisplay: '\u20ac0',
    featured: false,
    features: {
      de: ['500 WhatsApp / Monat', 'Kein Account n\u00f6tig', '3 Gespr\u00e4chsrunden', 'Web-Suche inklusive'],
      en: ['500 WhatsApp / month', 'No account needed', '3 conversation turns', 'Web search included']
    },
    extraNote: {
      de: 'SMS per Guthaben m\u00f6glich',
      en: 'SMS via credits available'
    },
    ctaType: 'whatsapp',
    cta: { de: 'WhatsApp \u00f6ffnen', en: 'Open WhatsApp' }
  },
  {
    id: 'plus',
    name: 'Plus',
    price: '4.99',
    priceDisplay: '\u20ac4,99',
    featured: true,
    features: {
      de: ['1.000 WhatsApp / Monat', '30 SMS / Monat inklusive', 'Gespr\u00e4chsverlauf (20 Nachr.)', 'Priorit\u00e4ts-Antworten'],
      en: ['1,000 WhatsApp / month', '30 SMS / month included', 'Conversation history (20 msgs)', 'Priority answers']
    },
    ctaType: 'upgrade',
    cta: { de: 'Jetzt upgraden', en: 'Upgrade now' }
  },
  {
    id: 'flat',
    name: 'Flat',
    price: '14.99',
    priceDisplay: '\u20ac14,99',
    featured: false,
    features: {
      de: ['WhatsApp unbegrenzt', '150 SMS / Monat inklusive', 'Gespr\u00e4chsverlauf (50 Nachr.)', 'Priorit\u00e4ts-Antworten'],
      en: ['WhatsApp unlimited', '150 SMS / month included', 'Conversation history (50 msgs)', 'Priority answers']
    },
    ctaType: 'upgrade',
    cta: { de: 'Jetzt upgraden', en: 'Upgrade now' }
  }
];

const BRAND_PLANS = env.PUBLIC_BRAND_PLANS
  ? JSON.parse(env.PUBLIC_BRAND_PLANS)
  : defaultPlans;

// ─── SMS Credit packs ────────────────────────────────────────────
const defaultCredits = [
  { count: 10, price: '1.99', priceDisplay: '\u20ac1,99', perSms: { de: '\u20ac0,20 / SMS', en: '\u20ac0.20 / SMS' } },
  { count: 50, price: '7.99', priceDisplay: '\u20ac7,99', perSms: { de: '\u20ac0,16 / SMS', en: '\u20ac0.16 / SMS' } }
];

const BRAND_CREDITS = env.PUBLIC_BRAND_CREDITS
  ? JSON.parse(env.PUBLIC_BRAND_CREDITS)
  : defaultCredits;

// ─── Legal framework ─────────────────────────────────────────────
// DE: DSGVO, EU Server, 14-day withdrawal, UStG
// BD: ICT Act 2006, Bangladesh Telecommunication Regulation
// US: TCPA, CCPA
const BRAND_PRIVACY_LAW    = env.PUBLIC_BRAND_PRIVACY_LAW    || 'DSGVO';
const BRAND_PRIVACY_LABEL  = env.PUBLIC_BRAND_PRIVACY_LABEL  || 'DSGVO-konform';
const BRAND_SERVER_LABEL   = env.PUBLIC_BRAND_SERVER_LABEL   || 'EU';
const BRAND_TAX_NOTE       = env.PUBLIC_BRAND_TAX_NOTE       || '';

// ─── Stats bar trust signals ─────────────────────────────────────
// Configurable per brand — array of { value, label_de, label_en }
const defaultStats = [
  { value: '100%',   label: { de: 'DSGVO-konform',    en: 'GDPR Compliant' } },
  { value: 'EU',     label: { de: 'Server & Datenschutz', en: 'EU Servers' } },
  { value: '\u20ac0', label: { de: 'Kostenlos starten',  en: 'Start Free' } },
  { value: '\ud83d\udcf1', label: { de: 'Jedes Handy',       en: 'Any phone' } }
];

const BRAND_STATS = env.PUBLIC_BRAND_STATS
  ? JSON.parse(env.PUBLIC_BRAND_STATS)
  : defaultStats;

// ─── Legal page links (footer nav) ──────────────────────────────
// DE: impressum, datenschutz, nutzungsbedingungen, widerrufsbelehrung
// Other countries will have different legal pages
const defaultLegalLinks = [
  { href: '/impressum',            label: { de: 'Impressum',            en: 'Imprint' } },
  { href: '/datenschutz',          label: { de: 'Datenschutz',          en: 'Privacy Policy' } },
  { href: '/nutzungsbedingungen',  label: { de: 'Nutzungsbedingungen',  en: 'Terms of Service' } },
  { href: '/widerrufsbelehrung',   label: { de: 'Widerrufsbelehrung',   en: 'Cancellation Policy' } }
];

const BRAND_LEGAL_LINKS = env.PUBLIC_BRAND_LEGAL_LINKS
  ? JSON.parse(env.PUBLIC_BRAND_LEGAL_LINKS)
  : defaultLegalLinks;

// ─── Footer tax/legal note ───────────────────────────────────────
const defaultFooterTax = {
  de: 'Gem\u00e4\u00df \u00a7 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet.',
  en: 'As per \u00a7 19 para. 1 UStG, no VAT is charged (small business regulation).'
};
const BRAND_FOOTER_TAX = env.PUBLIC_BRAND_FOOTER_TAX
  ? JSON.parse(env.PUBLIC_BRAND_FOOTER_TAX)
  : defaultFooterTax;

// ─── Pricing guarantees ──────────────────────────────────────────
const defaultGuarantees = [
  { icon: '\ud83d\udd12', label: { de: '14 Tage Widerrufsrecht',  en: '14-Day Right of Withdrawal' } },
  { icon: '\u26d4',       label: { de: 'Keine Abofalle',          en: 'No Subscription Trap' } },
  { icon: '\u2705',       label: { de: 'Sofort k\u00fcndbar per SMS', en: 'Cancel instantly via SMS' } }
];
const BRAND_GUARANTEES = env.PUBLIC_BRAND_GUARANTEES
  ? JSON.parse(env.PUBLIC_BRAND_GUARANTEES)
  : defaultGuarantees;

// ─── Pricing footnote ────────────────────────────────────────────
const defaultPricingFootnote = {
  de: 'Alle Preise sind Endpreise. Gem\u00e4\u00df \u00a7 19 Abs. 1 UStG wird keine Umsatzsteuer berechnet.',
  en: 'All prices are final. As per \u00a7 19 para. 1 UStG, no VAT is charged.'
};
const BRAND_PRICING_FOOTNOTE = env.PUBLIC_BRAND_PRICING_FOOTNOTE
  ? JSON.parse(env.PUBLIC_BRAND_PRICING_FOOTNOTE)
  : defaultPricingFootnote;

// ─── Phone validation config ─────────────────────────────────────
// DE: +49, mobile prefixes 15x/16x/17x
// BD: +880, mobile prefixes 13/14/15/16/17/18/19
// US: +1, 10-digit NANP
const BRAND_PHONE_REGEX = env.PUBLIC_BRAND_PHONE_REGEX || '^\\+49(\\d{9,12})$';
const BRAND_MOBILE_REGEX = env.PUBLIC_BRAND_MOBILE_REGEX || '^1[567]';
const BRAND_PHONE_PLACEHOLDER = env.PUBLIC_BRAND_PHONE_PLACEHOLDER || '151 XXXXXXXX';

// ─── Language switcher flags ─────────────────────────────────────
// Each brand has different flag pairs
// Defined as array of { lang, ariaLabel, title, flagSvg }
// We keep the flag SVGs as data since they are tiny inline SVGs

const defaultLangFlags = [
  {
    lang: 'de',
    ariaLabel: 'Deutsch',
    title: 'Deutsch',
    flag: 'de'
  },
  {
    lang: 'en',
    ariaLabel: 'English',
    title: 'English',
    flag: 'gb'
  }
];

const BRAND_LANG_FLAGS = env.PUBLIC_BRAND_LANG_FLAGS
  ? JSON.parse(env.PUBLIC_BRAND_LANG_FLAGS)
  : defaultLangFlags;

// ─── Brand logo text ─────────────────────────────────────────────
// FragSMS: "Frag" + "SMS" (two-tone)
// HelloKobi: "Hello" + "Kobi"
// TextiSMS: "Texti" + "SMS"
const BRAND_LOGO_PART1 = env.PUBLIC_BRAND_LOGO_PART1 || 'Frag';
const BRAND_LOGO_PART2 = env.PUBLIC_BRAND_LOGO_PART2 || 'SMS';

// ─── Country-specific structured data ────────────────────────────
const BRAND_COUNTRY_NAME = env.PUBLIC_BRAND_COUNTRY_NAME || 'Germany';
const BRAND_OG_LOCALE    = env.PUBLIC_BRAND_OG_LOCALE    || 'de_DE';
const BRAND_SCHEMA_LANG  = env.PUBLIC_BRAND_SCHEMA_LANG  || 'German';

// ─── SMS conversation examples (for buy keyword) ─────────────────
const BRAND_BUY_KEYWORD = env.PUBLIC_BRAND_BUY_KEYWORD || 'KAUFEN';

// ─── Export everything as a single brand object ──────────────────
export const brand = {
  name:          BRAND_NAME,
  domain:        BRAND_DOMAIN,
  tagline:       BRAND_TAGLINE,
  country:       BRAND_COUNTRY,
  contactEmail:  BRAND_CONTACT_EMAIL,

  phone: {
    e164:     BRAND_PHONE_E164,
    display:  BRAND_PHONE_DISPLAY,
    prefix:   BRAND_PHONE_PREFIX,
    waNumber: BRAND_WA_NUMBER,
    smsLink:  'sms:' + BRAND_PHONE_E164,
    waLink:   'https://wa.me/' + BRAND_WA_NUMBER,
  },

  lang: {
    default:   BRAND_DEFAULT_LANG,
    supported: BRAND_SUPPORTED_LANGS,
    flags:     BRAND_LANG_FLAGS,
  },

  currency: {
    code:   BRAND_CURRENCY_CODE,
    symbol: BRAND_CURRENCY_SYMBOL,
  },

  urls: {
    site:          'https://' + BRAND_DOMAIN,
    smsWorker:     BRAND_SMS_WORKER_URL,
    signup:        BRAND_SIGNUP_URL,
    stripeDomain:  BRAND_STRIPE_DOMAIN,
  },

  consent:  BRAND_CONSENT_KEYWORD,
  buyKeyword: BRAND_BUY_KEYWORD,

  plans:    BRAND_PLANS,
  credits:  BRAND_CREDITS,

  legal: {
    privacyLaw:   BRAND_PRIVACY_LAW,
    privacyLabel: BRAND_PRIVACY_LABEL,
    serverLabel:  BRAND_SERVER_LABEL,
    taxNote:      BRAND_TAX_NOTE,
    links:        BRAND_LEGAL_LINKS,
    footerTax:    BRAND_FOOTER_TAX,
    pricingFootnote: BRAND_PRICING_FOOTNOTE,
    guarantees:   BRAND_GUARANTEES,
  },

  stats:    BRAND_STATS,
  aiProvider: BRAND_AI_PROVIDER,

  logo: {
    part1: BRAND_LOGO_PART1,
    part2: BRAND_LOGO_PART2,
  },

  schema: {
    countryName: BRAND_COUNTRY_NAME,
    ogLocale:    BRAND_OG_LOCALE,
    lang:        BRAND_SCHEMA_LANG,
  },

  validation: {
    phoneRegex:      BRAND_PHONE_REGEX,
    mobileRegex:     BRAND_MOBILE_REGEX,
    phonePlaceholder: BRAND_PHONE_PLACEHOLDER,
  },
};
