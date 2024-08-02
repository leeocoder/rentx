const theme = {
  colors: {
    header: '#1b1b1f',
    background_primary: '#f4f5f6',
    background_secondary: '#fff',
    text: '#7a7a80',
    text_details: '#aeaeb3',
    title: '#47474d',
    line: '#7a7a80',
    main: '#dc1637',
    main_light: '#fbedef',
    success: '#03b252',
    shape: '#e1e1e8',
    shape_dark: '#29292e',
  },
  fonts: {
    primary_400: 'Inter_400Regular',
    primary_500: 'Inter_500Medium',
    secondary_400: 'Archivo_400Regular',
    secondary_500: 'Archivo_500Medium',
    secondary_600: 'Archivo_600SemiBold',
  },
};

export default theme;
export type ThemeType = typeof theme;
