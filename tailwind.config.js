const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      letterSpacing: {
        tightest: '-.075em',
      },
    },
    fontFamily: {
      sans: ['Uber Move Text', ...defaultTheme.fontFamily.sans],
      serif: ['Uber Move Regular', ...defaultTheme.fontFamily.serif],
      mono: ['Iosevka', ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.6em' }],
      medium: ['1.065rem', { lineHeight: '1.65rem' }],
      lg: ['1.125rem', { lineHeight: '1.65rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '5/2xl': ['1.7rem', { lineHeight: '2.125rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          '--tw-prose-body': theme('colors.zinc.600'),
          '--tw-prose-headings': theme('colors.zinc.900'),
          '--tw-prose-links': theme('colors.teal.500'),
          '--tw-prose-links-hover': theme('colors.teal.600'),
          '--tw-prose-underline': theme('colors.teal.500 / 0.2'),
          '--tw-prose-underline-hover': theme('colors.teal.500'),
          '--tw-prose-bold': theme('colors.zinc.700'),
          '--tw-prose-counters': theme('colors.zinc.700'),
          '--tw-prose-bullets': theme('colors.zinc.700'),
          '--tw-prose-hr': theme('colors.zinc.200'),
          '--tw-prose-quote-borders': theme('colors.zinc.200'),
          '--tw-prose-captions': theme('colors.zinc.400'),
          '--tw-prose-code': theme('colors.red.800'),
          '--tw-prose-code-bg': theme('colors.zinc.300 / 0.2'),
          '--tw-prose-pre-code': theme('colors.zinc.600'),
          '--tw-prose-pre-bg': theme('colors.zinc.900'),
          '--tw-prose-pre-border': 'transparent',
          '--tw-prose-th-borders': theme('colors.zinc.200'),
          '--tw-prose-td-borders': theme('colors.zinc.100'),
          // Base
          color: 'var(--tw-prose-body)',
          '*': {
            fontSize: theme('fontSize.base'[0]),
          },
          '> :not(ul, ol)': {
            marginTop: theme('spacing.10'),
            marginBottom: theme('spacing.10'),
          },
          p: {
            marginTop: theme('spacing.7'),
            marginBottom: theme('spacing.7'),
          },

          // Headings
          'h2, h3': {
            color: 'var(--tw-prose-headings)',
            fontWeight: theme('fontWeight.normal'),
            letterSpacing: theme('letterSpacing.tight'),
            fontFamily: 'Uber Move Regular',
          },
          h2: {
            fontSize: theme('fontSize.2xl')[0],
            '@screen lg': {
              fontSize: '1.875rem',
            },
            lineHeight: theme('lineHeight.6'),
            marginTop: theme('spacing.8'),
            marginBottom: theme('spacing.4'),
          },
          h3: {
            fontSize: theme('fontSize.5/2xl')[0],
            lineHeight: theme('lineHeight.4'),
            marginTop: theme('spacing.8'),
            marginBottom: theme('spacing.4'),
          },
          ':is(h2, h3) + *': {
            marginTop: 0,
          },

          // Images
          img: {
            borderRadius: theme('borderRadius.3xl'),
          },

          // Inline elements
          a: {
            color: 'var(--tw-prose-links)',
            fontWeight: theme('fontWeight.semibold'),
            textDecoration: 'underline',
            textDecorationColor: 'var(--tw-prose-underline)',
            transitionProperty: 'color, text-decoration-color',
            transitionDuration: theme('transitionDuration.150'),
            transitionTimingFunction: theme('transitionTimingFunction.in-out'),
          },
          'a:hover': {
            color: 'var(--tw-prose-links-hover)',
            textDecorationColor: 'var(--tw-prose-underline-hover)',
          },
          strong: {
            color: 'var(--tw-prose-bold)',
            fontWeight: theme('fontWeight.semibold'),
          },
          code: {
            display: 'inline-block',
            color: 'var(--tw-prose-code)',
            fontSize: theme('fontSize.base')[0],
            backgroundColor: 'var(--tw-prose-code-bg)',
            paddingLeft: theme('spacing.1'),
            paddingRight: theme('spacing.1'),
            borderRadius: theme('borderRadius.md'),
            fontWeight: theme('fontWeight.regular'),
          },
          'a code': {
            color: 'inherit',
          },
          ':is(h2, h3) code': {
            fontWeight: theme('fontWeight.bold'),
          },

          // Quotes
          blockquote: {
            paddingLeft: theme('spacing.6'),
            borderLeftWidth: theme('borderWidth.2'),
            borderLeftColor: 'var(--tw-prose-quote-borders)',
            fontStyle: 'italic',
          },

          // Figures
          figcaption: {
            color: 'var(--tw-prose-captions)',
            fontSize: theme('fontSize.sm')[0],
            lineHeight: theme('lineHeight.6'),
            marginTop: theme('spacing.3'),
          },
          'figcaption > p': {
            margin: 0,
          },

          // Lists
          ul: {
            listStyleType: 'disc',
          },
          ol: {
            listStyleType: 'decimal',
          },
          'ul, ol': {
            marginTop: '-1.2em',
            paddingLeft: theme('spacing.6'),
          },
          li: {
            marginTop: theme('spacing.1'),
            marginBottom: theme('spacing.0'),
            paddingLeft: theme('spacing[3.5]'),
          },
          'li::marker': {
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.semibold'),
          },
          'ol > li::marker': {
            color: 'var(--tw-prose-counters)',
          },
          'ul > li::marker': {
            color: 'var(--tw-prose-bullets)',
          },
          'li :is(ol, ul)': {
            marginTop: theme('spacing.4'),
            marginBottom: theme('spacing.4'),
          },
          'li :is(li, p)': {
            marginTop: theme('spacing.3'),
            marginBottom: theme('spacing.3'),
          },

          // Code blocks
          pre: {
            color: 'var(--tw-prose-pre-code)',
            fontSize: theme('fontSize.sm')[0],
            fontWeight: theme('fontWeight.medium'),
            backgroundColor: 'var(--tw-prose-pre-bg)',
            borderRadius: theme('borderRadius.3xl'),
            padding: theme('spacing.8'),
            boxShadow: theme('boxShadow.sm'),
            overflowX: 'auto',
            borderColor: 'var(--tw-prose-pre-border)',
          },
          'pre code': {
            display: 'inline',
            color: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            backgroundColor: 'transparent',
            borderRadius: 0,
            padding: 0,
          },

          // Horizontal rules
          hr: {
            marginTop: theme('spacing.6'),
            marginBottom: theme('spacing.6'),
            borderTopWidth: '1px',
            borderColor: 'var(--tw-prose-hr)',
            '@screen lg': {
              marginLeft: `calc(${theme('spacing.12')} * -0.01)`,
              marginRight: `calc(${theme('spacing.12')} * -0.01)`,
            },
          },

          // Tables
          table: {
            width: '100%',
            tableLayout: 'auto',
            textAlign: 'left',
            fontSize: theme('fontSize.sm')[0],
          },
          thead: {
            borderBottomWidth: '1px',
            borderBottomColor: 'var(--tw-prose-th-borders)',
          },
          'thead th': {
            color: 'var(--tw-prose-headings)',
            fontWeight: theme('fontWeight.semibold'),
            verticalAlign: 'bottom',
            paddingBottom: theme('spacing.2'),
          },
          'thead th:not(:first-child)': {
            paddingLeft: theme('spacing.2'),
          },
          'thead th:not(:last-child)': {
            paddingRight: theme('spacing.2'),
          },
          'tbody tr': {
            borderBottomWidth: '1px',
            borderBottomColor: 'var(--tw-prose-td-borders)',
          },
          'tbody tr:last-child': {
            borderBottomWidth: 0,
          },
          'tbody td': {
            verticalAlign: 'baseline',
          },
          tfoot: {
            borderTopWidth: '1px',
            borderTopColor: 'var(--tw-prose-th-borders)',
          },
          'tfoot td': {
            verticalAlign: 'top',
          },
          ':is(tbody, tfoot) td': {
            paddingTop: theme('spacing.2'),
            paddingBottom: theme('spacing.2'),
          },
          ':is(tbody, tfoot) td:not(:first-child)': {
            paddingLeft: theme('spacing.2'),
          },
          ':is(tbody, tfoot) td:not(:last-child)': {
            paddingRight: theme('spacing.2'),
          },
        },
      },
    }),
  },
}
