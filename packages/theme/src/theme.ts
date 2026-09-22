import { createVuetify } from 'vuetify'
import { colors } from './colors'

export const georobotixTheme = createVuetify({
    theme: {
        defaultTheme: 'georobotixLight',

        themes: {
            georobotixLight: {
                dark: false,
                colors,
            },
        },
    },
})