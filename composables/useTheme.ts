export function useTheme() {
    const theme = useCookie<string>('theme');
    const cookieClass = useCookie<string>('themeClass');
    if (!theme.value) theme.value = 'system';

    const themeClass = computed<string>(() =>
        theme.value === 'dark' ||
        (theme.value === 'system' && process.client && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ? 'dark'
            : ''
    );
    const updateClass = () => {
        if (themeClass.value) {
            document.documentElement.classList.add(themeClass.value);
        } else {
            document.documentElement.classList.remove('dark');
        }
        cookieClass.value = themeClass.value;
    };
    watch(theme, updateClass);
    onMounted(updateClass);
    onServerPrefetch(() => {
        useHead({
            htmlAttrs: {
                class: cookieClass.value || themeClass.value,
            },
        });
    });

    return theme;
}
