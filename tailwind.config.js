module.exports = {
    purge: [], // not false, [] - for IDEA tailwind autocomplete ;/
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            boxShadow: {
                outline: '0px 0px 16px 6px rgba(89, 89, 89, 0.15)',
            },
        },
        screens: {
            md: '768px',
            lg: '1024px',
            xl: '1440px',
        },
        colors: {
            white: '#FFFFFF',
            red: {
                DEFAULT: '#B41F1F',
                light: '#FFEBEB',
            },
            blue: {
                DEFAULT: '#1F337C',
                light: '#64BEFF',
            },
            green: {
                DEFAULT: '#029259',
                light: '#EEF8F2',
            },
            yellow: {
                DEFAULT: '#FF9549',
                light: '#FFFEE0',
            },
            gray: {
                DEFAULT: '#F1F1F1',
                50: '#a4a4a4',
                75: '#6d6d6d',
                100: '#323232',
            },
        },
        flex: {
            12: '0 0 100%',
            6: '0 0 50%',
            4: '0 0 33.3333%',
            3: '0 0 25%',
            auto: '0 0 auto',
            none: 'none',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
