const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

const storeTheme = (theme) => document.documentElement.setAttribute('data-theme', theme);

const setTheme = (theme) => {
  // Force media queries to update
  document.querySelectorAll('link[media]').forEach(link => {
    if (link.href.includes('catppuccin') || link.href.includes('panda-syntax')) {
      link.media = link.href.includes(theme) ? 'all' : 'not all';
    }
  });
}

const initTheme = (isDark) => {
  const theme = isDark ? DARK_THEME : LIGHT_THEME;
  storeTheme(theme);
  setTheme(theme);
}

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
  storeTheme(newTheme);
  setTheme(newTheme);
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Initialize theme based on system preference
initTheme(prefersDark.matches);

// Update theme when system preference changes
prefersDark.addEventListener('change', (e) => initTheme(e.matches));

// Toggle theme when button is clicked
document.getElementById('theme-toggle').addEventListener('click', () => toggleTheme());
