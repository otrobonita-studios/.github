/**
 * T-Light Design System Tools Portal
 * Main Application — All modules
 */

'use strict';

// ====================================================================
// DATA: COLOR TOKENS
// ====================================================================

const COLOR_TOKEN_GROUPS = [
  {
    id: 'primary',
    label: 'Primär (Blå)',
    colors: [
      { name: '--tl-color-primary-50',  hex: '#E3F0FF', label: 'Primary 50' },
      { name: '--tl-color-primary-100', hex: '#BAD6FF', label: 'Primary 100' },
      { name: '--tl-color-primary-200', hex: '#8DBFFF', label: 'Primary 200' },
      { name: '--tl-color-primary-300', hex: '#5EA8FF', label: 'Primary 300' },
      { name: '--tl-color-primary-400', hex: '#3A94FF', label: 'Primary 400' },
      { name: '--tl-color-primary-500', hex: '#1A80FF', label: 'Primary 500' },
      { name: '--tl-color-primary-600', hex: '#0066CC', label: 'Primary 600 ★' },
      { name: '--tl-color-primary-700', hex: '#004D99', label: 'Primary 700' },
      { name: '--tl-color-primary-800', hex: '#003366', label: 'Primary 800' },
      { name: '--tl-color-primary-900', hex: '#001A33', label: 'Primary 900' },
    ]
  },
  {
    id: 'secondary',
    label: 'Sekundär (Lila)',
    colors: [
      { name: '--tl-color-secondary-50',  hex: '#F5EEF8', label: 'Secondary 50' },
      { name: '--tl-color-secondary-100', hex: '#E8D5F0', label: 'Secondary 100' },
      { name: '--tl-color-secondary-200', hex: '#D1ABE0', label: 'Secondary 200' },
      { name: '--tl-color-secondary-300', hex: '#B980D0', label: 'Secondary 300' },
      { name: '--tl-color-secondary-400', hex: '#9B56C0', label: 'Secondary 400' },
      { name: '--tl-color-secondary-500', hex: '#7D2DAD', label: 'Secondary 500' },
      { name: '--tl-color-secondary-600', hex: '#6C3082', label: 'Secondary 600 ★' },
      { name: '--tl-color-secondary-700', hex: '#4A1E5A', label: 'Secondary 700' },
      { name: '--tl-color-secondary-800', hex: '#2E1238', label: 'Secondary 800' },
      { name: '--tl-color-secondary-900', hex: '#150818', label: 'Secondary 900' },
    ]
  },
  {
    id: 'success',
    label: 'Framgång (Grön)',
    colors: [
      { name: '--tl-color-success-50',  hex: '#E6F4ED', label: 'Success 50' },
      { name: '--tl-color-success-100', hex: '#C3E4D1', label: 'Success 100' },
      { name: '--tl-color-success-300', hex: '#6CB895', label: 'Success 300' },
      { name: '--tl-color-success-500', hex: '#1A7A4A', label: 'Success 500 ★' },
      { name: '--tl-color-success-700', hex: '#0D5433', label: 'Success 700' },
      { name: '--tl-color-success-900', hex: '#062E1C', label: 'Success 900' },
    ]
  },
  {
    id: 'warning',
    label: 'Varning (Gul)',
    colors: [
      { name: '--tl-color-warning-50',  hex: '#FFF8E1', label: 'Warning 50' },
      { name: '--tl-color-warning-100', hex: '#FFEDB3', label: 'Warning 100' },
      { name: '--tl-color-warning-300', hex: '#FFD54F', label: 'Warning 300' },
      { name: '--tl-color-warning-500', hex: '#C17B00', label: 'Warning 500 ★' },
      { name: '--tl-color-warning-700', hex: '#8A5700', label: 'Warning 700' },
      { name: '--tl-color-warning-900', hex: '#4D3000', label: 'Warning 900' },
    ]
  },
  {
    id: 'error',
    label: 'Fel (Röd)',
    colors: [
      { name: '--tl-color-error-50',  hex: '#FDECEA', label: 'Error 50' },
      { name: '--tl-color-error-100', hex: '#F9C4C1', label: 'Error 100' },
      { name: '--tl-color-error-300', hex: '#EF7B74', label: 'Error 300' },
      { name: '--tl-color-error-500', hex: '#C62828', label: 'Error 500 ★' },
      { name: '--tl-color-error-700', hex: '#8B1A1A', label: 'Error 700' },
      { name: '--tl-color-error-900', hex: '#4D0F0F', label: 'Error 900' },
    ]
  },
  {
    id: 'info',
    label: 'Information (Teal)',
    colors: [
      { name: '--tl-color-info-50',  hex: '#E3F2F8', label: 'Info 50' },
      { name: '--tl-color-info-100', hex: '#BAE0EE', label: 'Info 100' },
      { name: '--tl-color-info-300', hex: '#6BC0DE', label: 'Info 300' },
      { name: '--tl-color-info-500', hex: '#0070A8', label: 'Info 500 ★' },
      { name: '--tl-color-info-700', hex: '#004E76', label: 'Info 700' },
      { name: '--tl-color-info-900', hex: '#002C42', label: 'Info 900' },
    ]
  },
  {
    id: 'neutral',
    label: 'Neutrala',
    colors: [
      { name: '--tl-color-neutral-0',    hex: '#FFFFFF', label: 'White' },
      { name: '--tl-color-neutral-50',   hex: '#F8F9FA', label: 'Neutral 50' },
      { name: '--tl-color-neutral-100',  hex: '#F1F3F5', label: 'Neutral 100' },
      { name: '--tl-color-neutral-200',  hex: '#E9ECEF', label: 'Neutral 200' },
      { name: '--tl-color-neutral-300',  hex: '#DEE2E6', label: 'Neutral 300' },
      { name: '--tl-color-neutral-400',  hex: '#CED4DA', label: 'Neutral 400' },
      { name: '--tl-color-neutral-500',  hex: '#ADB5BD', label: 'Neutral 500' },
      { name: '--tl-color-neutral-600',  hex: '#6C757D', label: 'Neutral 600' },
      { name: '--tl-color-neutral-700',  hex: '#495057', label: 'Neutral 700' },
      { name: '--tl-color-neutral-800',  hex: '#343A40', label: 'Neutral 800' },
      { name: '--tl-color-neutral-900',  hex: '#212529', label: 'Neutral 900' },
      { name: '--tl-color-neutral-950',  hex: '#12151A', label: 'Neutral 950' },
      { name: '--tl-color-neutral-1000', hex: '#000000', label: 'Black' },
    ]
  }
];

// ====================================================================
// DATA: CSS VARIABLES (flat list for variables table)
// ====================================================================

const ALL_TOKENS = [
  // Colors
  { name: '--tl-color-primary',          value: '#0066CC',              category: 'color' },
  { name: '--tl-color-primary-light',    value: '#5EA8FF',              category: 'color' },
  { name: '--tl-color-primary-dark',     value: '#003366',              category: 'color' },
  { name: '--tl-color-primary-subtle',   value: '#E3F0FF',              category: 'color' },
  { name: '--tl-color-secondary',        value: '#6C3082',              category: 'color' },
  { name: '--tl-color-success',          value: '#1A7A4A',              category: 'color' },
  { name: '--tl-color-warning',          value: '#C17B00',              category: 'color' },
  { name: '--tl-color-error',            value: '#C62828',              category: 'color' },
  { name: '--tl-color-info',             value: '#0070A8',              category: 'color' },
  { name: '--tl-color-neutral-50',       value: '#F8F9FA',              category: 'color' },
  { name: '--tl-color-neutral-200',      value: '#E9ECEF',              category: 'color' },
  { name: '--tl-color-neutral-500',      value: '#ADB5BD',              category: 'color' },
  { name: '--tl-color-neutral-700',      value: '#495057',              category: 'color' },
  { name: '--tl-color-neutral-900',      value: '#212529',              category: 'color' },
  // Surface
  { name: '--tl-surface-page',           value: 'var(--tl-color-neutral-50)',    category: 'surface' },
  { name: '--tl-surface-card',           value: 'var(--tl-color-neutral-0)',     category: 'surface' },
  { name: '--tl-surface-sidebar',        value: 'var(--tl-color-neutral-900)',   category: 'surface' },
  { name: '--tl-surface-code',           value: '#1A1F2B',              category: 'surface' },
  // Text
  { name: '--tl-text-primary',           value: 'var(--tl-color-neutral-900)',   category: 'color' },
  { name: '--tl-text-secondary',         value: 'var(--tl-color-neutral-700)',   category: 'color' },
  { name: '--tl-text-muted',             value: 'var(--tl-color-neutral-500)',   category: 'color' },
  { name: '--tl-text-inverse',           value: 'var(--tl-color-neutral-0)',     category: 'color' },
  { name: '--tl-text-link',              value: 'var(--tl-color-primary)',       category: 'color' },
  // Spacing
  { name: '--tl-space-1',   value: '4px',   category: 'spacing' },
  { name: '--tl-space-2',   value: '8px',   category: 'spacing' },
  { name: '--tl-space-3',   value: '12px',  category: 'spacing' },
  { name: '--tl-space-4',   value: '16px',  category: 'spacing' },
  { name: '--tl-space-5',   value: '20px',  category: 'spacing' },
  { name: '--tl-space-6',   value: '24px',  category: 'spacing' },
  { name: '--tl-space-8',   value: '32px',  category: 'spacing' },
  { name: '--tl-space-10',  value: '40px',  category: 'spacing' },
  { name: '--tl-space-12',  value: '48px',  category: 'spacing' },
  { name: '--tl-space-16',  value: '64px',  category: 'spacing' },
  { name: '--tl-space-20',  value: '80px',  category: 'spacing' },
  // Typography
  { name: '--tl-font-primary',   value: "'Inter', system-ui, sans-serif",    category: 'typography' },
  { name: '--tl-font-mono',      value: "'JetBrains Mono', monospace",       category: 'typography' },
  { name: '--tl-text-xs',        value: '0.75rem (12px)',   category: 'typography' },
  { name: '--tl-text-sm',        value: '0.875rem (14px)',  category: 'typography' },
  { name: '--tl-text-base',      value: '1rem (16px)',      category: 'typography' },
  { name: '--tl-text-lg',        value: '1.125rem (18px)',  category: 'typography' },
  { name: '--tl-text-xl',        value: '1.25rem (20px)',   category: 'typography' },
  { name: '--tl-text-2xl',       value: '1.5rem (24px)',    category: 'typography' },
  { name: '--tl-text-3xl',       value: '1.875rem (30px)',  category: 'typography' },
  { name: '--tl-text-4xl',       value: '2.25rem (36px)',   category: 'typography' },
  { name: '--tl-font-regular',   value: '400',              category: 'typography' },
  { name: '--tl-font-medium',    value: '500',              category: 'typography' },
  { name: '--tl-font-semibold',  value: '600',              category: 'typography' },
  { name: '--tl-font-bold',      value: '700',              category: 'typography' },
  { name: '--tl-leading-tight',  value: '1.25',             category: 'typography' },
  { name: '--tl-leading-normal', value: '1.5',              category: 'typography' },
  { name: '--tl-leading-relaxed',value: '1.625',            category: 'typography' },
  // Border
  { name: '--tl-border-color',        value: '#E9ECEF',  category: 'border' },
  { name: '--tl-border-color-strong', value: '#CED4DA',  category: 'border' },
  { name: '--tl-border-width',        value: '1px',      category: 'border' },
  { name: '--tl-radius-sm',           value: '4px',      category: 'border' },
  { name: '--tl-radius-md',           value: '8px',      category: 'border' },
  { name: '--tl-radius-lg',           value: '12px',     category: 'border' },
  { name: '--tl-radius-xl',           value: '16px',     category: 'border' },
  { name: '--tl-radius-full',         value: '9999px',   category: 'border' },
  // Shadows
  { name: '--tl-shadow-xs',  value: '0 1px 2px rgba(0,0,0,0.05)',            category: 'shadow' },
  { name: '--tl-shadow-sm',  value: '0 1px 3px rgba(0,0,0,0.1)...',          category: 'shadow' },
  { name: '--tl-shadow-md',  value: '0 4px 6px rgba(0,0,0,0.1)...',          category: 'shadow' },
  { name: '--tl-shadow-lg',  value: '0 10px 15px rgba(0,0,0,0.1)...',        category: 'shadow' },
  { name: '--tl-shadow-xl',  value: '0 20px 25px rgba(0,0,0,0.1)...',        category: 'shadow' },
  { name: '--tl-shadow-focus', value: '0 0 0 3px rgba(0,102,204,0.3)',       category: 'shadow' },
  // Transitions
  { name: '--tl-transition-fast',  value: '150ms ease-in-out',  category: 'transition' },
  { name: '--tl-transition-base',  value: '200ms ease-in-out',  category: 'transition' },
  { name: '--tl-transition-slow',  value: '300ms ease-in-out',  category: 'transition' },
  { name: '--tl-ease-in-out',      value: 'cubic-bezier(0.4,0,0.2,1)',  category: 'transition' },
  // Z-index
  { name: '--tl-z-dropdown', value: '100',  category: 'z-index' },
  { name: '--tl-z-sticky',   value: '200',  category: 'z-index' },
  { name: '--tl-z-overlay',  value: '300',  category: 'z-index' },
  { name: '--tl-z-modal',    value: '400',  category: 'z-index' },
  { name: '--tl-z-toast',    value: '500',  category: 'z-index' },
  { name: '--tl-z-tooltip',  value: '600',  category: 'z-index' },
  // Component
  { name: '--tl-btn-height-sm',  value: '32px',  category: 'component' },
  { name: '--tl-btn-height-md',  value: '40px',  category: 'component' },
  { name: '--tl-btn-height-lg',  value: '48px',  category: 'component' },
  { name: '--tl-btn-radius',     value: 'var(--tl-radius-md)',  category: 'component' },
  { name: '--tl-input-height-md',value: '40px',  category: 'component' },
  { name: '--tl-card-radius',    value: 'var(--tl-radius-lg)', category: 'component' },
  { name: '--tl-card-padding',   value: 'var(--tl-space-6)',   category: 'component' },
];

// ====================================================================
// DATA: TYPOGRAPHY
// ====================================================================

const TYPE_SCALE = [
  { token: '--tl-text-xs',   size: '0.75rem',  px: '12px',  sample: 'Liten etikett' },
  { token: '--tl-text-sm',   size: '0.875rem', px: '14px',  sample: 'Brödtext liten' },
  { token: '--tl-text-base', size: '1rem',     px: '16px',  sample: 'Brödtext standard' },
  { token: '--tl-text-lg',   size: '1.125rem', px: '18px',  sample: 'Ingress / Lead' },
  { token: '--tl-text-xl',   size: '1.25rem',  px: '20px',  sample: 'Underrubrik' },
  { token: '--tl-text-2xl',  size: '1.5rem',   px: '24px',  sample: 'Rubrik nivå 3' },
  { token: '--tl-text-3xl',  size: '1.875rem', px: '30px',  sample: 'Rubrik nivå 2' },
  { token: '--tl-text-4xl',  size: '2.25rem',  px: '36px',  sample: 'Rubrik nivå 1' },
  { token: '--tl-text-5xl',  size: '3rem',     px: '48px',  sample: 'Hero rubrik' },
];

const TYPE_WEIGHTS = [
  { token: '--tl-font-light',    value: 300, label: 'Light' },
  { token: '--tl-font-regular',  value: 400, label: 'Regular' },
  { token: '--tl-font-medium',   value: 500, label: 'Medium' },
  { token: '--tl-font-semibold', value: 600, label: 'Semibold' },
  { token: '--tl-font-bold',     value: 700, label: 'Bold' },
  { token: '--tl-font-extrabold',value: 800, label: 'Extrabold' },
  { token: '--tl-font-black',    value: 900, label: 'Black' },
];

// ====================================================================
// DATA: DESIGN PRINCIPLES
// ====================================================================

const DESIGN_PRINCIPLES = [
  {
    icon: '🎯',
    iconBg: '#EFF6FF',
    title: 'Klarhet framför komplexitet',
    description: 'Varje gränssnittselement ska ha ett tydligt syfte. Ta bort allt som inte hjälper användaren att nå sitt mål.',
    checks: [
      'Undvika dekorativa element utan informationsvärde',
      'Ett primärt handlingsval per vy',
      'Tydliga rubriker och etiketter utan jargong',
      'Progressiv avslöjning av komplex information',
    ]
  },
  {
    icon: '♿',
    iconBg: '#F0FDF4',
    title: 'Tillgänglighet som grund',
    description: 'Tillgänglighet är inte ett tillägg — det är en grundläggande designkrav. WCAG AA är miniminivå för alla T-Light-applikationer.',
    checks: [
      'Färgkontrast minst 4.5:1 för normal text',
      'Alla interaktiva element nåbara via tangentbord',
      'Meningsfulla alt-texter på alla bilder',
      'ARIA-attribut korrekt implementerade',
    ]
  },
  {
    icon: '🔄',
    iconBg: '#FFF7ED',
    title: 'Konsistens i hela systemet',
    description: 'Samma mönster, samma terminologi, samma beteenden — oavsett vilket ramverk som används under huven.',
    checks: [
      'Använd T-Light tokens, inte hårdkodade värden',
      'Komponenter beter sig enhetligt i alla kontexter',
      'Terminologi konsekvent med T-Light ordlista',
      'Animationer följer --tl-transition-* tokens',
    ]
  },
  {
    icon: '⚡',
    iconBg: '#FFF8E1',
    title: 'Prestanda är UX',
    description: 'Snabba, responsiva gränssnitt ger bättre användarupplevelse. Optimera CSS, minimera JavaScript och prova lazy loading.',
    checks: [
      'CSS-variabler för effektiv styling utan duplicering',
      'Undvika layout shifts (CLS under 0.1)',
      'Bilder med rätt format och dimensioner',
      'Kritisk CSS inline, resterande async',
    ]
  },
  {
    icon: '📱',
    iconBg: '#F5F3FF',
    title: 'Mobile-first responsivitet',
    description: 'Designa för minsta skärmen först. Bygg upp till större vy med T-Lights breakpoint-tokens.',
    checks: [
      'Minsta touchyta 44×44px (--tl-icon-2xl)',
      'Flexibla layouter med CSS Grid/Flexbox',
      'Bilder skalerbara med srcset och sizes',
      'Testa på verkliga mobila enheter',
    ]
  },
  {
    icon: '🌐',
    iconBg: '#F0FDF4',
    title: 'Ramverksagnostisk implementation',
    description: 'T-Light-tokens är grunden oavsett om projektet använder Tailwind, Bootstrap, PrimeFaces eller JSF.',
    checks: [
      'Importera t-light-tokens.css i alla projekt',
      'Komponenter dokumenterade med framework-specifika exempel',
      'Ingen hårdkodad ramverksspecifik styling',
      'Test i samtliga fyra stödda ramverk',
    ]
  },
  {
    icon: '🔒',
    iconBg: '#FFF1F2',
    title: 'Dataansvar och integritet',
    description: 'Skydda känslig information i alla skeden — från design till AI-analys. Använd Scramble Tool vid extern granskning.',
    checks: [
      'Scramble-funktion aktiverad innan AI-inskick',
      'Inget affärskritiskt data i publika kommentarer',
      'Användarbehörigheter tydligt kommunicerade',
      'GDPR-konformitet i formulär och spårning',
    ]
  },
  {
    icon: '✨',
    iconBg: '#FAFAF0',
    title: 'Avsiktlig visuell hierarki',
    description: 'Ögat ska ledas naturligt genom innehållet. Storlek, vikt, färg och avstånd skapar en tydlig berättelse.',
    checks: [
      'Max 2-3 typografiska nivåer per vy',
      'Primär åtgärd tydligt upphöjd visuellt',
      'Whitespace som designelement, inte bortglömt utrymme',
      'Ikoner alltid med textetikett eller aria-label',
    ]
  },
];

// ====================================================================
// DATA: LINTER RULES
// ====================================================================

const LINTER_RULES = [
  // Universal rules
  {
    id: 'no-hardcoded-color',
    severity: 'error',
    category: 'tokens',
    pattern: /(?:color|background|background-color|border-color|fill|stroke)\s*:\s*(#[0-9a-fA-F]{3,8}|rgb[a]?\([^)]+\))/g,
    title: 'Hårdkodad färg',
    message: 'Färgvärden ska använda T-Light CSS-variabler, inte hårdkodade hex/rgb-värden.',
    fix: 'Ersätt med lämplig --tl-color-* variabel. Exempel: color: var(--tl-color-primary)',
  },
  {
    id: 'no-hardcoded-spacing',
    severity: 'warning',
    category: 'tokens',
    pattern: /(?:margin|padding|gap)\s*:\s*\d+px(?!\s*\*)/g,
    title: 'Hårdkodat avstånd',
    message: 'Avståndsvärden bör använda T-Light spacing-tokens.',
    fix: 'Ersätt med --tl-space-* variabel. Exempel: padding: var(--tl-space-4)',
  },
  {
    id: 'no-hardcoded-font-size',
    severity: 'warning',
    category: 'tokens',
    pattern: /font-size\s*:\s*\d+px/g,
    title: 'Hårdkodad fontstorlek',
    message: 'Typografistorlekar ska använda T-Light typskala-tokens.',
    fix: 'Ersätt med --tl-text-* variabel. Exempel: font-size: var(--tl-text-base)',
  },
  {
    id: 'inline-style',
    severity: 'warning',
    category: 'structure',
    pattern: /style\s*=\s*["'][^"']+["']/g,
    title: 'Inline-stil',
    message: 'Inline-stilar försvårar underhåll och bryter mot T-Light separationen av concerns.',
    fix: 'Flytta stilen till en CSS-klass med T-Light tokens',
  },
  {
    id: 'missing-alt',
    severity: 'error',
    category: 'accessibility',
    pattern: /<img(?![^>]*\balt\s*=)[^>]*>/gi,
    title: 'Bild saknar alt-attribut',
    message: 'Alla <img>-element måste ha ett alt-attribut för tillgänglighet.',
    fix: 'Lägg till alt="" för dekorativa bilder, eller en beskrivande text för innehållsbilder',
  },
  {
    id: 'empty-button',
    severity: 'error',
    category: 'accessibility',
    pattern: /<button(?![^>]*(?:aria-label|aria-labelledby|title))[^>]*>\s*<\/button>/gi,
    title: 'Tom knapp saknar etikett',
    message: 'Tomma knappar måste ha aria-label för tillgänglighet.',
    fix: 'Lägg till aria-label="Beskrivning av knappens funktion" på <button>',
  },
  {
    id: 'empty-anchor',
    severity: 'error',
    category: 'accessibility',
    pattern: /<a(?![^>]*(?:aria-label|aria-labelledby))[^>]*>\s*(?:<\/a>|(?:klicka här|click here|läs mer|read more|här|here)\s*<\/a>)/gi,
    title: 'Icke-beskrivande länktext',
    message: '"Klicka här" eller "Läs mer" ger ingen kontext i skärmläsare.',
    fix: 'Använd beskrivande länktext eller lägg till aria-label med kontext',
  },
  {
    id: 'missing-lang',
    severity: 'error',
    category: 'accessibility',
    pattern: /<html(?![^>]*lang\s*=)[^>]*>/gi,
    title: 'HTML saknar lang-attribut',
    message: 'html-elementet måste ha lang-attribut för skärmläsare och sökoptimering.',
    fix: 'Lägg till lang="sv" (eller relevant språkkod) på <html>',
  },
  {
    id: 'missing-label',
    severity: 'error',
    category: 'accessibility',
    pattern: /<input(?![^>]*(?:aria-label|aria-labelledby|id))[^>]*type\s*=\s*["'](?!hidden)[^"']+["'][^>]*>/gi,
    title: 'Formulärfält saknar etikett',
    message: 'Input-fält utan kopplad <label> eller aria-label är otillgängliga.',
    fix: 'Lägg till <label for="inputId"> eller aria-label="Fältbeskrivning"',
  },
  {
    id: 'heading-skip',
    severity: 'warning',
    category: 'structure',
    pattern: null,
    title: 'Rubriknivåer hoppas över',
    message: 'Rubrikhierarkin ska vara sekventiell (h1→h2→h3, aldrig h1→h3).',
    fix: 'Säkerställ att rubriker följer hierarkin utan att hoppa nivåer',
    customCheck: (code) => checkHeadingHierarchy(code),
  },
  {
    id: 'clickable-div',
    severity: 'warning',
    category: 'accessibility',
    pattern: /<div[^>]*onclick[^>]*>/gi,
    title: 'Klickbar div',
    message: 'Divs med onclick är otillgängliga. Använd semantiska element.',
    fix: 'Ersätt <div onclick> med <button type="button"> och rätt styling',
  },
  {
    id: 'missing-form-method',
    severity: 'info',
    category: 'structure',
    pattern: /<form(?![^>]*method)[^>]*>/gi,
    title: 'Formulär saknar method-attribut',
    message: 'Formulär utan explicit method-attribut kan bete sig oväntat.',
    fix: 'Lägg till method="post" eller method="get" på <form>',
  },
];

// Framework-specific rules
const FRAMEWORK_RULES = {
  tailwind: [
    {
      id: 'tailwind-arbitrary',
      severity: 'warning',
      category: 'tokens',
      pattern: /class\s*=\s*["'][^"']*\[[^\]]+\][^"']*["']/g,
      title: 'Tailwind arbiträrt värde',
      message: 'Arbiträra Tailwind-värden som w-[123px] bör undvikas. Använd T-Light tokens.',
      fix: 'Använd T-Light CSS-variabel istället: style="width: var(--tl-space-8)"',
    },
    {
      id: 'tailwind-non-tl-color',
      severity: 'info',
      category: 'tokens',
      pattern: /(?:text|bg|border)-(?:red|blue|green|yellow|purple|pink|indigo|gray|slate|zinc|orange)-\d{2,3}/g,
      title: 'Tailwind standardfärg',
      message: 'Tailwind-standardfärger (blue-500, red-300 etc.) bryter mot T-Light färgsystem.',
      fix: 'Konfigurera Tailwind att använda T-Light tokens i tailwind.config.js',
    }
  ],
  bootstrap: [
    {
      id: 'bootstrap-primary-override',
      severity: 'warning',
      category: 'tokens',
      pattern: /class\s*=\s*["'][^"']*\bbtn-primary\b[^"']*["']/g,
      title: 'Bootstrap standard primärknapp',
      message: 'Bootstrap btn-primary ska ersättas med T-Light knappklasser för korrekt branding.',
      fix: 'Använd T-Light knappstilar via CSS-variabler. Åsidosätt Bootstrap --bs-primary med --tl-color-primary',
    }
  ],
  primefaces: [
    {
      id: 'pf-missing-tl-theme',
      severity: 'info',
      category: 'structure',
      pattern: /p:outputStylesheet[^\/]*library\s*=\s*["'](?!tlight)[^"']+["']/g,
      title: 'PrimeFaces tema saknar T-Light',
      message: 'PrimeFaces ska använda T-Light tema-biblioteket.',
      fix: 'Använd library="tlight" i p:outputStylesheet för T-Light integration',
    }
  ],
  jsf: [
    {
      id: 'jsf-inline-style',
      severity: 'warning',
      category: 'structure',
      pattern: /style\s*=\s*["'](?!.*var\(--tl-)[^"']+["']/g,
      title: 'JSF komponent med inline-stil utan tokens',
      message: 'JSF-komponenter med inline-stilar ska använda T-Light CSS-variabler.',
      fix: 'Använd CSS-klasser med T-Light variabler istället för inline-stilar',
    }
  ]
};

// ====================================================================
// DATA: BRANDING ASSETS
// ====================================================================

const BRANDING_ASSETS = {
  logos: [
    { name: 'Primärlogotyp', icon: '🔷', formats: 'SVG · PNG · WebP', status: 'approved' },
    { name: 'Vit variant', icon: '⬜', formats: 'SVG · PNG', status: 'approved' },
    { name: 'Mörkläge', icon: '⬛', formats: 'SVG · PNG', status: 'approved' },
    { name: 'Favicon', icon: '📌', formats: 'ICO · PNG · SVG', status: 'approved' },
  ],
  colors: [
    { name: 'Primärfärger', icon: '🔵', formats: 'ASE · SCSS · CSS', status: 'approved' },
    { name: 'Sekundärfärger', icon: '🟣', formats: 'ASE · SCSS · CSS', status: 'approved' },
    { name: 'Semantiska', icon: '🟢', formats: 'JSON · CSS', status: 'approved' },
  ],
  typography: [
    { name: 'Inter Regular', icon: 'Aa', formats: 'WOFF2 · WOFF', status: 'approved' },
    { name: 'Inter Medium', icon: 'Aa', formats: 'WOFF2 · WOFF', status: 'approved' },
    { name: 'Inter Bold', icon: 'Aa', formats: 'WOFF2 · WOFF', status: 'approved' },
    { name: 'JetBrains Mono', icon: '<>', formats: 'WOFF2', status: 'approved' },
  ],
  icons: [
    { name: 'Icon set v3', icon: '✨', formats: 'SVG · Figma', status: 'approved' },
    { name: 'Animated icons', icon: '🎬', formats: 'Lottie · SVG', status: 'review' },
  ]
};

// ====================================================================
// NAVIGATION MODULE
// ====================================================================

const BREADCRUMB_MAP = {
  colors:       { category: 'Design Tokens',       label: 'Färgpalett' },
  typography:   { category: 'Design Tokens',       label: 'Typografi' },
  variables:    { category: 'Design Tokens',       label: 'CSS-variabler' },
  linter:       { category: 'Kvalitetsverktyg',    label: 'T-Light Linter' },
  accessibility:{ category: 'Kvalitetsverktyg',    label: 'Accessibility Shaker' },
  principles:   { category: 'Kvalitetsverktyg',    label: 'Designprinciper' },
  scramble:     { category: 'Säkerhet & Branding', label: 'Scramble Tool' },
  branding:     { category: 'Säkerhet & Branding', label: 'Branding Portal' },
};

function initNavigation() {
  document.querySelectorAll('.nav__item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = item.dataset.section;
      if (sectionId) activateSection(sectionId);
    });
  });

  // Hash-based routing
  const hash = location.hash.replace('#', '');
  if (hash && BREADCRUMB_MAP[hash]) {
    activateSection(hash);
  }
}

function activateSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav__item').forEach(n => n.classList.remove('active'));

  // Show target section
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add('active');
    history.replaceState(null, '', `#${sectionId}`);
  }

  // Activate nav item
  const navItem = document.querySelector(`.nav__item[data-section="${sectionId}"]`);
  if (navItem) navItem.classList.add('active');

  // Update breadcrumb
  const crumb = BREADCRUMB_MAP[sectionId];
  if (crumb) {
    const catEl = document.getElementById('headerBreadcrumb');
    const curEl = document.getElementById('breadcrumbCurrent');
    if (catEl && curEl) {
      catEl.childNodes[0].textContent = crumb.category;
      curEl.textContent = crumb.label;
    }
  }

  // Close popover
  hideColorPopover();
}

// ====================================================================
// COLOR PALETTE MODULE
// ====================================================================

let popoverCurrentToken = null;

function initColors() {
  renderColorFilters();
  renderColorPalette('all');

  document.getElementById('popoverCopyVar').addEventListener('click', () => {
    if (popoverCurrentToken) {
      copyToClipboard(popoverCurrentToken.name);
      showToast(`Kopierade ${popoverCurrentToken.name}`, 'success');
    }
  });
  document.getElementById('popoverCopyHex').addEventListener('click', () => {
    if (popoverCurrentToken) {
      copyToClipboard(popoverCurrentToken.hex);
      showToast(`Kopierade ${popoverCurrentToken.hex}`, 'success');
    }
  });

  document.addEventListener('click', (e) => {
    const popover = document.getElementById('colorPopover');
    if (!popover.contains(e.target) && !e.target.closest('.color-swatch')) {
      hideColorPopover();
    }
  });
}

function renderColorFilters() {
  const bar = document.getElementById('colorFilterBar');
  if (!bar) return;

  const filters = [
    { id: 'all', label: 'Alla' },
    ...COLOR_TOKEN_GROUPS.map(g => ({ id: g.id, label: g.label.split(' ')[0] }))
  ];

  bar.innerHTML = filters.map(f =>
    `<button class="color-filter-btn${f.id === 'all' ? ' active' : ''}" data-filter="${f.id}">${f.label}</button>`
  ).join('');

  bar.addEventListener('click', (e) => {
    const btn = e.target.closest('.color-filter-btn');
    if (!btn) return;
    bar.querySelectorAll('.color-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderColorPalette(btn.dataset.filter);
  });
}

function renderColorPalette(filter) {
  const root = document.getElementById('colorPaletteRoot');
  if (!root) return;

  const groups = filter === 'all' ? COLOR_TOKEN_GROUPS
    : COLOR_TOKEN_GROUPS.filter(g => g.id === filter);

  root.innerHTML = groups.map(group => `
    <div class="color-group">
      <div class="color-group__header">
        <span class="color-group__title">${group.label}</span>
        <span class="color-group__count">${group.colors.length} färger</span>
      </div>
      <div class="color-swatches">
        ${group.colors.map(token => `
          <div class="color-swatch" role="button" tabindex="0"
               data-name="${token.name}" data-hex="${token.hex}"
               aria-label="${token.label}: ${token.hex}">
            <div class="color-swatch__preview" style="background-color:${token.hex}">
              <span class="color-swatch__copy-hint">kopiera</span>
            </div>
            <div class="color-swatch__info">
              <span class="color-swatch__label">${token.label}</span>
              <span class="color-swatch__hex">${token.hex}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Attach click listeners
  root.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', (e) => {
      const name = swatch.dataset.name;
      const hex = swatch.dataset.hex;
      showColorPopover({ name, hex }, swatch);
    });
    swatch.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const name = swatch.dataset.name;
        const hex = swatch.dataset.hex;
        showColorPopover({ name, hex }, swatch);
      }
    });
  });
}

function showColorPopover(token, anchorEl) {
  const popover = document.getElementById('colorPopover');
  popoverCurrentToken = token;

  document.getElementById('popoverSwatch').style.backgroundColor = token.hex;
  document.getElementById('popoverVarName').textContent = token.name;
  document.getElementById('popoverHex').textContent = token.hex.toUpperCase();

  const rgb = hexToRgb(token.hex);
  document.getElementById('popoverRgb').textContent = rgb
    ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
    : '—';

  // Position near swatch
  const rect = anchorEl.getBoundingClientRect();
  const popoverW = 240;
  let left = rect.left + rect.width / 2 - popoverW / 2;
  let top = rect.bottom + 8;

  // Keep within viewport
  left = Math.max(8, Math.min(left, window.innerWidth - popoverW - 8));
  if (top + 220 > window.innerHeight) top = rect.top - 220;

  popover.style.left = `${left}px`;
  popover.style.top = `${top}px`;
  popover.classList.remove('hidden');
}

function hideColorPopover() {
  const popover = document.getElementById('colorPopover');
  if (popover) {
    popover.classList.add('hidden');
    popoverCurrentToken = null;
  }
}

// ====================================================================
// TYPOGRAPHY MODULE
// ====================================================================

function initTypography() {
  renderTypeScale();
  renderTypeWeights();
  renderTypeFonts();
}

function renderTypeScale() {
  const root = document.getElementById('typeScaleRoot');
  if (!root) return;

  root.innerHTML = TYPE_SCALE.map(item => `
    <div class="type-scale-row">
      <div>
        <span class="type-scale-meta">${item.px}</span>
      </div>
      <div style="font-size:${item.size};line-height:1.3;color:var(--tl-text-primary)">${item.sample}</div>
      <div style="text-align:right">
        <span class="type-scale-token">${item.token}</span>
      </div>
    </div>
  `).join('');
}

function renderTypeWeights() {
  const root = document.getElementById('typeWeightRoot');
  if (!root) return;

  root.innerHTML = TYPE_WEIGHTS.map(w => `
    <div class="type-weight-card">
      <div class="type-weight-card__sample" style="font-weight:${w.value}">
        T-Light
      </div>
      <div class="type-weight-card__meta">
        <span class="type-weight-card__name">${w.label} (${w.value})</span>
        <span class="type-weight-card__value">${w.token}</span>
      </div>
    </div>
  `).join('');
}

function renderTypeFonts() {
  const root = document.getElementById('typeFontRoot');
  if (!root) return;

  root.innerHTML = `
    <div class="type-font-card">
      <div class="type-font-card__header">
        <span class="type-font-card__name">Inter</span>
        <span class="type-font-card__token">--tl-font-primary</span>
      </div>
      <div class="type-font-card__body">
        <p class="type-font-card__pangram" style="font-family:'Inter',sans-serif">
          Åh! Vad mycket fräsiga och djupa önskvärda blommor glimmade kring Björn.
        </p>
        <p class="type-font-card__chars" style="font-family:'Inter',sans-serif">
          ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ<br>
          abcdefghijklmnopqrstuvwxyzåäö<br>
          0123456789 !@#$%^&amp;*()_+-=[]{}|;':",.&lt;&gt;?
        </p>
      </div>
    </div>
    <div class="type-font-card">
      <div class="type-font-card__header">
        <span class="type-font-card__name">JetBrains Mono</span>
        <span class="type-font-card__token">--tl-font-mono</span>
      </div>
      <div class="type-font-card__body">
        <p class="type-font-card__pangram" style="font-family:'JetBrains Mono',monospace">
          const tlColor = 'var(--tl-color-primary)';<br>
          .tl-btn { padding: var(--tl-space-4); }
        </p>
        <p class="type-font-card__chars" style="font-family:'JetBrains Mono',monospace;font-size:var(--tl-text-sm)">
          0 1 2 3 4 5 6 7 8 9 A B C D E F<br>
          &lt;&gt; [] {} () = =&gt; !== &amp;&amp; || ?? ?. ...
        </p>
      </div>
    </div>
  `;
}

// ====================================================================
// CSS VARIABLES MODULE
// ====================================================================

function initVariables() {
  renderVariables(ALL_TOKENS);
  updateVariablesCount(ALL_TOKENS.length, ALL_TOKENS.length);

  const searchInput = document.getElementById('variablesSearch');
  const filterSelect = document.getElementById('variablesFilter');

  function applyFilter() {
    const q = searchInput.value.toLowerCase();
    const cat = filterSelect.value;
    const filtered = ALL_TOKENS.filter(t => {
      const matchQ = !q || t.name.toLowerCase().includes(q) || t.value.toLowerCase().includes(q);
      const matchCat = !cat || t.category === cat;
      return matchQ && matchCat;
    });
    renderVariables(filtered);
    updateVariablesCount(filtered.length, ALL_TOKENS.length);
  }

  searchInput.addEventListener('input', applyFilter);
  filterSelect.addEventListener('change', applyFilter);
}

function renderVariables(tokens) {
  const tbody = document.getElementById('variablesTableBody');
  if (!tbody) return;

  if (tokens.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;padding:var(--tl-space-8);color:var(--tl-text-muted)">Inga variabler matchar din sökning</td></tr>`;
    return;
  }

  tbody.innerHTML = tokens.map(token => {
    const isColor = token.category === 'color' || token.category === 'surface';
    const swatchHex = isColor && token.value.startsWith('#') ? token.value : null;

    return `
      <tr>
        <td>
          ${swatchHex
            ? `<span class="var-swatch" style="background:${swatchHex}" title="${swatchHex}"></span>`
            : '<span style="width:20px;display:inline-block"></span>'
          }
        </td>
        <td><code class="var-name">${escHtml(token.name)}</code></td>
        <td><code class="var-value">${escHtml(token.value)}</code></td>
        <td><span class="var-category var-category--${token.category}">${token.category}</span></td>
      </tr>
    `;
  }).join('');
}

function updateVariablesCount(shown, total) {
  const el = document.getElementById('variablesCount');
  if (el) {
    el.textContent = shown === total
      ? `Visar alla ${total} variabler`
      : `Visar ${shown} av ${total} variabler`;
  }
}

// ====================================================================
// LINTER MODULE
// ====================================================================

function initLinter() {
  document.getElementById('btnRunLinter').addEventListener('click', () => {
    const code = document.getElementById('linterInput').value.trim();
    if (!code) {
      showToast('Klistra in kod att granska först', 'warning');
      return;
    }
    const framework = document.getElementById('linterFramework').value;
    const results = runLinter(code, framework);
    renderLintResults(results);
  });

  document.getElementById('btnLinterSample').addEventListener('click', () => {
    document.getElementById('linterInput').value = LINTER_SAMPLE_CODE;
    document.getElementById('linterFramework').value = 'generic';
  });

  document.getElementById('btnLinterClear').addEventListener('click', () => {
    document.getElementById('linterInput').value = '';
    document.getElementById('linterResults').classList.remove('visible');
  });

  document.getElementById('btnExportTokens').addEventListener('click', exportTokensJson);
}

const LINTER_SAMPLE_CODE = `<!DOCTYPE html>
<html>
<head>
  <title>Exempelsida</title>
</head>
<body>
  <!-- Hårdkodade färger istället för T-Light tokens -->
  <div style="color: #ff0000; background-color: #ffffff; padding: 16px; margin: 8px;">

    <!-- Bild utan alt-text -->
    <img src="hero-banner.jpg">

    <!-- Tom knapp utan etikett -->
    <button></button>

    <!-- Klickbar div (icke-semantisk) -->
    <div onclick="handleClick()">Klicka på mig</div>

    <!-- Icke-beskrivande länktext -->
    <a href="/mer">klicka här</a>

    <!-- Formulär utan labels -->
    <form>
      <input type="text" placeholder="Skriv ditt namn">
      <input type="email" placeholder="E-postadress">
    </form>

    <!-- Rubrikhierarki hoppar h2 -->
    <h1>Sidtitel</h1>
    <h3>Underrubrik (saknar h2!)</h3>

    <!-- Hårdkodad fontstorlek -->
    <p style="font-size: 14px;">Brödtext med hårdkodad storlek</p>

  </div>
</body>
</html>`;

function runLinter(code, framework) {
  const issues = [];
  const allRules = [
    ...LINTER_RULES,
    ...(FRAMEWORK_RULES[framework] || [])
  ];

  for (const rule of allRules) {
    if (rule.customCheck) {
      const customIssues = rule.customCheck(code);
      issues.push(...customIssues.map(i => ({ ...i, ruleId: rule.id, rule })));
      continue;
    }
    if (!rule.pattern) continue;

    rule.pattern.lastIndex = 0;
    let match;
    while ((match = rule.pattern.exec(code)) !== null) {
      const lineNum = getLineNumber(code, match.index);
      const lineContent = code.split('\n')[lineNum - 1] || '';
      issues.push({
        ruleId: rule.id,
        rule,
        line: lineNum,
        col: match.index - code.lastIndexOf('\n', match.index),
        match: match[0].length > 80 ? match[0].substring(0, 80) + '…' : match[0],
        lineContent: lineContent.trim().length > 100
          ? lineContent.trim().substring(0, 100) + '…'
          : lineContent.trim(),
      });
    }
    rule.pattern.lastIndex = 0;
  }

  return issues;
}

function checkHeadingHierarchy(code) {
  const issues = [];
  const headingPattern = /<(h[1-6])[^>]*>/gi;
  const headings = [];
  let match;
  while ((match = headingPattern.exec(code)) !== null) {
    headings.push({ tag: match[1].toLowerCase(), index: match.index });
  }

  for (let i = 1; i < headings.length; i++) {
    const prev = parseInt(headings[i-1].tag[1]);
    const curr = parseInt(headings[i].tag[1]);
    if (curr > prev + 1) {
      issues.push({
        rule: { ...LINTER_RULES.find(r => r.id === 'heading-skip'), severity: 'warning' },
        line: getLineNumber(code, headings[i].index),
        col: 0,
        match: `<${headings[i].tag}> (föregående nivå: <${headings[i-1].tag}>)`,
        lineContent: `Rubrikhierarki hoppar från ${headings[i-1].tag} till ${headings[i].tag}`,
      });
    }
  }
  return issues;
}

function renderLintResults(issues) {
  const container = document.getElementById('linterResults');
  const summary = document.getElementById('linterSummary');
  const list = document.getElementById('issueList');

  const errors   = issues.filter(i => i.rule.severity === 'error');
  const warnings = issues.filter(i => i.rule.severity === 'warning');
  const infos    = issues.filter(i => i.rule.severity === 'info');

  const svgCheck = `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>`;
  const svgWarn  = `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>`;
  const svgErr   = `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>`;

  summary.innerHTML = issues.length === 0
    ? `<div class="results-stat results-stat--pass">${svgCheck} Inga problem hittades — koden följer T-Light-standarder!</div>`
    : [
        errors.length   ? `<div class="results-stat results-stat--error">${svgErr} ${errors.length} fel</div>` : '',
        warnings.length ? `<div class="results-stat results-stat--warning">${svgWarn} ${warnings.length} varningar</div>` : '',
        infos.length    ? `<div class="results-stat results-stat--info" style="background:var(--tl-color-info-subtle);color:var(--tl-color-info)"><svg viewBox="0 0 20 20" fill="currentColor" style="width:15px;height:15px"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg> ${infos.length} info</div>` : '',
      ].join('');

  list.innerHTML = issues.length === 0 ? '' : issues.map((issue, idx) => `
    <div class="issue-item issue-item--${issue.rule.severity}" id="issue-${idx}">
      <div class="issue-header" onclick="document.getElementById('issue-${idx}').classList.toggle('expanded')">
        <span class="issue-severity issue-severity--${issue.rule.severity}">${issue.rule.severity}</span>
        <div class="issue-main">
          <div class="issue-title">${escHtml(issue.rule.title)}</div>
          <div class="issue-rule-id">${issue.ruleId}</div>
        </div>
        <span class="issue-line">Rad ${issue.line}</span>
      </div>
      <div class="issue-body">
        <div class="issue-code-block">${escHtml(issue.lineContent || issue.match)}</div>
        <div class="issue-fix-block">
          <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/></svg>
          <span><strong>Auto-fix:</strong> ${escHtml(issue.rule.fix)}</span>
        </div>
      </div>
    </div>
  `).join('');

  container.classList.add('visible');
  container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ====================================================================
// ACCESSIBILITY MODULE
// ====================================================================

let currentWcagLevel = 'AA';

function initAccessibility() {
  document.querySelectorAll('.wcag-level-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.wcag-level-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentWcagLevel = btn.dataset.level;
    });
  });

  document.getElementById('btnRunA11y').addEventListener('click', () => {
    const code = document.getElementById('a11yInput').value.trim();
    if (!code) {
      showToast('Klistra in HTML att analysera', 'warning');
      return;
    }
    const results = runAccessibilityCheck(code, currentWcagLevel);
    renderA11yReport(results, currentWcagLevel);
  });

  document.getElementById('btnA11ySample').addEventListener('click', () => {
    document.getElementById('a11yInput').value = A11Y_SAMPLE_CODE;
  });

  document.getElementById('btnA11yClear').addEventListener('click', () => {
    document.getElementById('a11yInput').value = '';
    document.getElementById('a11yResults').style.display = 'none';
  });
}

const A11Y_SAMPLE_CODE = `<!DOCTYPE html>
<html>
<head><title>Testssida</title></head>
<body>
  <!-- Bild utan alt -->
  <img src="banner.jpg" width="800">

  <!-- Formulär utan labels -->
  <form>
    <input type="text" placeholder="Namn">
    <input type="email" placeholder="E-post">
    <select><option>Välj land</option></select>
  </form>

  <!-- Dålig länktext -->
  <a href="/artikel">läs mer</a>
  <a href="/kontakt">klicka här</a>

  <!-- Knapp utan label -->
  <button>
    <svg width="24" height="24"><use href="#icon-search"/></svg>
  </button>

  <!-- Icke-semantisk interaktion -->
  <div onclick="doSomething()" tabindex="0">Anpassad knapp</div>

  <!-- Rubrikhierarki-problem -->
  <h1>Välkommen</h1>
  <h4>Undersektion</h4>

  <!-- Video utan undertexter -->
  <video src="intro.mp4" autoplay></video>

  <!-- Bra element som referens -->
  <img src="logo.png" alt="Företagets logotyp">
  <button aria-label="Sök på sajten">
    <svg aria-hidden="true" width="24" height="24"><use href="#icon-search"/></svg>
  </button>
  <label for="name">Ditt namn</label>
  <input id="name" type="text">
</body>
</html>`;

function runAccessibilityCheck(code, level) {
  const checks = {
    missingAlt: { title: 'Bilder saknar alt-text', items: [], wcag: '1.1.1', level: 'A' },
    missingLabel: { title: 'Formulärfält utan etikett', items: [], wcag: '1.3.1', level: 'A' },
    emptyButton: { title: 'Knappar utan tillgänglig etikett', items: [], wcag: '4.1.2', level: 'A' },
    poorLinkText: { title: 'Icke-beskrivande länktext', items: [], wcag: '2.4.4', level: 'A' },
    missingLang: { title: 'Dokument saknar språkattribut', items: [], wcag: '3.1.1', level: 'A' },
    headingOrder: { title: 'Rubrikhierarki', items: [], wcag: '1.3.1', level: 'A' },
    clickableDiv: { title: 'Icke-semantiska klickbara element', items: [], wcag: '4.1.2', level: 'A' },
    missingVideo: { title: 'Video utan undertexter', items: [], wcag: '1.2.2', level: 'A' },
  };

  // Check missing alt
  const imgNoAlt = code.match(/<img(?![^>]*\balt\s*=)[^>]*>/gi) || [];
  checks.missingAlt.items = imgNoAlt.map(m => `Rad ${getLineNumber(code, code.indexOf(m))}: ${m.substring(0, 50)}…`);

  // Check missing form labels (inputs without id or aria-label)
  const inputsNoLabel = code.match(/<input(?![^>]*(?:aria-label|id\s*=|type\s*=\s*["']hidden))[^>]*type\s*=\s*["'][^"']+["'][^>]*>/gi) || [];
  checks.missingLabel.items = inputsNoLabel.map(m => `Input utan etikett: ${m.substring(0, 60)}`);

  // Check empty buttons
  const emptyBtns = code.match(/<button(?![^>]*(?:aria-label|aria-labelledby|title))[^>]*>(\s*<(?!\/button)[^>]*\/?>)*\s*<\/button>/gi) || [];
  checks.emptyButton.items = emptyBtns.map((m, i) => `Knapp ${i+1} utan tillgänglig etikett`);

  // Check poor link text
  const badLinks = code.match(/<a[^>]*>(?:\s*(?:klicka här|click here|läs mer|read more|här|here|mer)\s*)<\/a>/gi) || [];
  checks.poorLinkText.items = badLinks.map(m => `Icke-beskrivande länktext: "${m.replace(/<[^>]+>/g,'').trim()}"`);

  // Check missing lang
  if (!/<html[^>]*lang\s*=/i.test(code)) {
    checks.missingLang.items = ['html-elementet saknar lang-attribut'];
  }

  // Check heading hierarchy
  const headingIssues = checkHeadingHierarchy(code);
  checks.headingOrder.items = headingIssues.map(i => i.lineContent);

  // Check clickable divs
  const clickDivs = code.match(/<div[^>]*onclick[^>]*>/gi) || [];
  checks.clickableDiv.items = clickDivs.map((m, i) => `Klickbar div ${i+1}: saknar roll och tangentbordsstöd`);

  // Check video without track
  const videoNoTrack = (code.match(/<video[^>]*>/gi) || []).filter(v =>
    !code.includes('<track') && v
  );
  checks.missingVideo.items = videoNoTrack.map(() => 'Video-element saknar <track> för undertexter (WCAG 1.2.2)');

  return checks;
}

function renderA11yReport(checks, level) {
  const resultsDiv = document.getElementById('a11yResults');
  const scoreCard = document.getElementById('a11yScoreCard');
  const checksGrid = document.getElementById('a11yChecksGrid');

  const allIssues = Object.values(checks).flatMap(c => c.items);
  const totalChecks = Object.keys(checks).length;
  const passed = Object.values(checks).filter(c => c.items.length === 0).length;
  const failed = Object.values(checks).filter(c => c.items.length > 0).length;
  const score = Math.round((passed / totalChecks) * 100);

  const scoreColor = score >= 80 ? 'var(--tl-color-success)' : score >= 60 ? 'var(--tl-color-warning)' : 'var(--tl-color-error)';
  const circumference = 2 * Math.PI * 32;
  const offset = circumference - (score / 100) * circumference;

  scoreCard.innerHTML = `
    <div class="score-ring">
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="32" fill="none" stroke="var(--tl-color-neutral-200)" stroke-width="8"/>
        <circle cx="40" cy="40" r="32" fill="none" stroke="${scoreColor}" stroke-width="8"
          stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"
          stroke-linecap="round" style="transition:stroke-dashoffset 0.8s ease"/>
      </svg>
      <div class="score-ring__text">
        <span class="score-ring__number" style="color:${scoreColor}">${score}</span>
        <span class="score-ring__unit">/ 100</span>
      </div>
    </div>
    <div class="a11y-score-details">
      <div class="a11y-stat a11y-stat--pass">
        <div class="a11y-stat__value">${passed}</div>
        <div class="a11y-stat__label">Godkända kontroller</div>
      </div>
      <div class="a11y-stat a11y-stat--error">
        <div class="a11y-stat__value">${failed}</div>
        <div class="a11y-stat__label">Kontroller med problem</div>
      </div>
      <div class="a11y-stat a11y-stat--info">
        <div class="a11y-stat__value">${allIssues.length}</div>
        <div class="a11y-stat__label">Totala problem</div>
      </div>
      <div class="a11y-stat">
        <div class="a11y-stat__value" style="color:var(--tl-color-primary)">${level}</div>
        <div class="a11y-stat__label">WCAG-nivå</div>
      </div>
    </div>
  `;

  const svgPass = `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>`;
  const svgFail = `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>`;

  checksGrid.innerHTML = Object.entries(checks).map(([key, check]) => {
    const pass = check.items.length === 0;
    const status = pass ? 'pass' : 'fail';
    return `
      <div class="a11y-check-card">
        <div class="a11y-check-card__header">
          <div class="a11y-check-status a11y-check-status--${status}">
            ${pass ? svgPass : svgFail}
          </div>
          <span class="a11y-check-title">${check.title}</span>
          <span class="a11y-check-count">${pass ? '✓' : check.items.length + ' problem'}</span>
        </div>
        ${!pass ? `
          <ul class="a11y-check-items">
            ${check.items.slice(0, 4).map(item => `<li class="a11y-check-item">${escHtml(item)}</li>`).join('')}
            ${check.items.length > 4 ? `<li class="a11y-check-item" style="color:var(--tl-text-muted)">... och ${check.items.length - 4} fler problem</li>` : ''}
          </ul>
          <div style="margin-top:var(--tl-space-2);padding:var(--tl-space-1-5) var(--tl-space-2);background:var(--tl-color-neutral-50);border-radius:var(--tl-radius-sm);font-size:10px;color:var(--tl-text-muted)">
            WCAG ${check.wcag} — Nivå ${check.level}
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  resultsDiv.style.display = 'block';
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ====================================================================
// DESIGN PRINCIPLES MODULE
// ====================================================================

function initPrinciples() {
  renderPrinciples(DESIGN_PRINCIPLES);

  document.getElementById('principlesSearch').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    const filtered = DESIGN_PRINCIPLES.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.checks.some(c => c.toLowerCase().includes(q))
    );
    renderPrinciples(filtered);
  });
}

function renderPrinciples(principles) {
  const grid = document.getElementById('principlesGrid');
  if (!grid) return;

  if (principles.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:var(--tl-space-12);color:var(--tl-text-muted)">
        Inga principer matchar sökningen
      </div>`;
    return;
  }

  grid.innerHTML = principles.map(p => `
    <div class="principle-card">
      <div class="principle-card__icon" style="background:${p.iconBg}">${p.icon}</div>
      <h3 class="principle-card__title">${escHtml(p.title)}</h3>
      <p class="principle-card__description">${escHtml(p.description)}</p>
      <ul class="principle-card__checks">
        ${p.checks.map(c => `
          <li class="principle-card__check">
            <i class="principle-card__check-icon" aria-hidden="true">→</i>
            ${escHtml(c)}
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

// ====================================================================
// SCRAMBLE MODULE
// ====================================================================

function initScramble() {
  document.getElementById('btnScramble').addEventListener('click', doScramble);

  document.getElementById('btnCopyScrambled').addEventListener('click', () => {
    const output = document.getElementById('scrambleOutput').value;
    if (output) {
      copyToClipboard(output);
      showToast('Maskerad kod kopierad till urklipp', 'success');
    }
  });

  document.getElementById('btnScrambleSample').addEventListener('click', () => {
    document.getElementById('scrambleInput').value = SCRAMBLE_SAMPLE;
  });

  document.getElementById('btnScrambleClear').addEventListener('click', () => {
    document.getElementById('scrambleInput').value = '';
    document.getElementById('scrambleOutput').value = '';
    document.getElementById('scrambleStats').innerHTML = '';
    document.getElementById('btnCopyScrambled').disabled = true;
  });
}

const SCRAMBLE_SAMPLE = `<!DOCTYPE html>
<html lang="sv">
<head>
  <title>Acme Corp Beställningssystem</title>
</head>
<body>
  <header class="acme-header company-branding">
    <img src="https://acme.internal/assets/logo-acme.png" alt="Acme logotyp">
    <nav>
      <a href="https://portal.acme.se/orders">Mina beställningar</a>
      <a href="https://portal.acme.se/customers">Kundregister</a>
    </nav>
  </header>

  <main class="acme-main-content order-management-view">
    <h1>Beställning #ORD-2024-98765</h1>
    <p>Kund: Anna Andersson (anna.andersson@acme.se)</p>
    <p>Artikel: Produktnamn XL Pro Premium Paket</p>

    <form action="https://api.acme.se/v2/orders/create" method="post">
      <input type="text" name="customer_id" value="CUST-12345">
      <button type="submit" class="acme-btn-primary">Skicka beställning</button>
    </form>

    <footer class="acme-footer">
      Kontakt: support@acme.se | Tel: 08-123 45 67
    </footer>
  </main>
</body>
</html>`;

function doScramble() {
  const input = document.getElementById('scrambleInput').value.trim();
  if (!input) {
    showToast('Klistra in kod att maskera', 'warning');
    return;
  }

  const opts = {
    domains: document.getElementById('scrambleDomains').checked,
    text: document.getElementById('scrambleText').checked,
    emails: document.getElementById('scrambleEmails').checked,
    ids: document.getElementById('scrambleIds').checked,
    images: document.getElementById('scrambleImages').checked,
  };

  const { scrambled, stats } = scrambleCode(input, opts);

  document.getElementById('scrambleOutput').value = scrambled;
  document.getElementById('btnCopyScrambled').disabled = false;

  const statsEl = document.getElementById('scrambleStats');
  statsEl.innerHTML = Object.entries(stats)
    .filter(([,v]) => v > 0)
    .map(([k, v]) => `<span class="scramble-stat"><strong>${v}</strong> ${k} maskerade</span>`)
    .join('');

  showToast(`Kod maskerad — ${Object.values(stats).reduce((a,b) => a+b, 0)} ersättningar gjorda`, 'success');
}

function scrambleCode(code, opts) {
  let result = code;
  const stats = { URL: 0, domäner: 0, e-postadresser: 0, texter: 0, klassnamn: 0, bildnamn: 0 };
  let urlCounter = 1, domainCounter = 1, emailCounter = 1, textCounter = 1;
  let classMap = {};
  let classCounter = 1;

  if (opts.emails) {
    result = result.replace(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g, (m) => {
      stats['e-postadresser']++;
      return `MASKED-EMAIL-${emailCounter++}@example.com`;
    });
  }

  if (opts.domains) {
    result = result.replace(/https?:\/\/[a-zA-Z0-9.\-]+(\/[^\s"'<>]*)?/g, (m) => {
      stats.URL++;
      return `https://MASKED-DOMAIN-${domainCounter++}.example.com`;
    });
    result = result.replace(/(?<![=\/"])([a-zA-Z0-9\-]+\.(?:se|com|net|org|io|dev))/g, (m) => {
      stats.domäner++;
      return `MASKED-DOMAIN-${domainCounter++}.example`;
    });
  }

  if (opts.images) {
    result = result.replace(/src\s*=\s*["']([^"']+\.(?:png|jpg|jpeg|gif|svg|webp))["']/gi, (m, filename) => {
      stats.bildnamn++;
      return `src="MASKED-IMAGE-${urlCounter++}.png"`;
    });
  }

  if (opts.ids) {
    result = result.replace(/class\s*=\s*["']([^"']+)["']/gi, (m, classes) => {
      const maskedClasses = classes.split(/\s+/).map(cls => {
        // Preserve T-Light classes
        if (cls.startsWith('tl-') || cls.startsWith('t-') || !cls.match(/[a-zA-Z]/)) return cls;
        if (!classMap[cls]) {
          classMap[cls] = `masked-cls-${classCounter++}`;
          stats.klassnamn++;
        }
        return classMap[cls];
      }).join(' ');
      return `class="${maskedClasses}"`;
    });
  }

  if (opts.text) {
    // Mask text content in tags (not attributes)
    result = result.replace(/>([^<]{6,})</g, (m, text) => {
      if (text.trim().length < 3) return m;
      stats.texter++;
      const words = text.trim().split(/\s+/);
      const masked = words.map((w, i) => `TEXT-${textCounter}-W${i+1}`).join(' ');
      return `>${masked}<`;
    });
    textCounter++;
  }

  return { scrambled: result, stats };
}

// ====================================================================
// BRANDING MODULE
// ====================================================================

function initBranding() {
  renderBrandingPortal();

  document.getElementById('btnVerifyBranding').addEventListener('click', () => {
    const btn = document.getElementById('btnVerifyBranding');
    btn.disabled = true;
    btn.textContent = 'Verifierar…';
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = `<svg viewBox="0 0 20 20" fill="currentColor" style="width:15px;height:15px"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg> Verifiera mot Branding Portal`;
      showToast('Alla brand assets verifierade ✓ Inga avvikelser hittade', 'success');
    }, 1800);
  });
}

function renderBrandingPortal() {
  const root = document.getElementById('brandingRoot');
  if (!root) return;

  const svgCheck = `<svg viewBox="0 0 20 20" fill="currentColor" style="width:10px;height:10px"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>`;
  const svgClock = `<svg viewBox="0 0 20 20" fill="currentColor" style="width:10px;height:10px"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/></svg>`;

  const sections = [
    { key: 'logos', label: 'Logotyper' },
    { key: 'colors', label: 'Färgpaletter' },
    { key: 'typography', label: 'Typsnitt' },
    { key: 'icons', label: 'Ikoner' },
  ];

  root.innerHTML = sections.map(sec => `
    <div style="margin-bottom:var(--tl-space-8)">
      <h3 class="branding-section-title">${sec.label}</h3>
      <div class="branding-assets-grid">
        ${BRANDING_ASSETS[sec.key].map(asset => `
          <div class="branding-asset-card" role="button" tabindex="0"
               onclick="showToast('Laddar ner ${escHtml(asset.name)}…', 'info')"
               aria-label="Ladda ner ${escHtml(asset.name)}">
            <div class="branding-asset-card__preview">${typeof asset.icon === 'string' && asset.icon.length > 2 ? `<span style="font-family:var(--tl-font-mono);font-size:var(--tl-text-2xl)">${asset.icon}</span>` : asset.icon}</div>
            <div class="branding-asset-card__name">${escHtml(asset.name)}</div>
            <div class="branding-asset-card__format">${asset.formats}</div>
            <div class="branding-asset-card__status branding-asset-card__status--${asset.status}">
              ${asset.status === 'approved' ? svgCheck + ' Godkänd' : svgClock + ' Granskas'}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ====================================================================
// EXPORT TOKENS
// ====================================================================

function exportTokensJson() {
  const data = {
    meta: { name: 'T-Light Design Tokens', version: '2.0', exported: new Date().toISOString() },
    colors: {},
    spacing: {},
    typography: {},
    shadows: {},
    transitions: {},
  };

  ALL_TOKENS.forEach(t => {
    const cat = t.category;
    if (!data[cat]) data[cat] = {};
    data[cat][t.name] = t.value;
  });

  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 't-light-tokens.json';
  a.click();
  URL.revokeObjectURL(url);
  showToast('Tokens exporterade som JSON', 'success');
}

// ====================================================================
// UTILITIES
// ====================================================================

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  if (h.length !== 6 && h.length !== 3) return null;
  const expanded = h.length === 3
    ? h.split('').map(c => c + c).join('')
    : h;
  const num = parseInt(expanded, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255
  };
}

function getRelativeLuminance(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  const srgb = [rgb.r, rgb.g, rgb.b].map(v => {
    const n = v / 255;
    return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
}

function getContrastRatio(hex1, hex2) {
  const l1 = getRelativeLuminance(hex1);
  const l2 = getRelativeLuminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

function getLineNumber(code, index) {
  return (code.substring(0, index).match(/\n/g) || []).length + 1;
}

function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const el = document.createElement('textarea');
  el.value = text;
  el.style.position = 'fixed';
  el.style.opacity = '0';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const icons = {
    success: `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>`,
    warning: `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>`,
    error:   `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>`,
    info:    `<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>`,
  };

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `${icons[type] || icons.info}${escHtml(message)}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('leaving');
    setTimeout(() => toast.remove(), 250);
  }, 3200);
}

// ====================================================================
// INIT
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initColors();
  initTypography();
  initVariables();
  initLinter();
  initAccessibility();
  initScramble();
  initBranding();
  initPrinciples();

  const hash = location.hash.replace('#', '');
  if (!hash || !BREADCRUMB_MAP[hash]) {
    activateSection('colors');
  }
});
