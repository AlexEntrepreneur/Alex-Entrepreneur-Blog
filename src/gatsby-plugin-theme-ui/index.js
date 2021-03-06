import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';
import colors from './colors';

const fonts = {
  serif: "'Merriweather', Georgia, Serif",
  sansSerif:
    "'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif",
  monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
};

export default {
  ...novelaTheme,
  colors,
  fonts
};