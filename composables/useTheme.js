export function useTheme() {
    const theme = ref('system');
    const updateDOM = () => {
        if (
            localStorage.theme === 'dark' ||
            theme.value === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };
    watch(theme, (theme) => {
        if (theme === 'system') {
            localStorage.removeItem('theme');
        } else {
            localStorage.theme = theme;
        }
        updateDOM();
    });
    onMounted(() => {
        theme.value = localStorage.theme || 'system';
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        updateDOM();
    });

    return theme;
}
