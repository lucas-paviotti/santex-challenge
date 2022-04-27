export const Theme = {
    colors: {
        primary: '#000',
        primaryLight: '#999999',
        secondary: '#f45c5c',
        green: '#00d19f',
        darkGreen: '#2bb795',
        dark: '#3d4040',
        white: '#ffffff',
    },
    breakPoints: {
        mobileBreakpoint: '992px',
        laptopBreakpoint: '1280px',
    },
    heights: {
        header: '60px',
    }
}

export type themeProps = {
    theme: typeof Theme
}