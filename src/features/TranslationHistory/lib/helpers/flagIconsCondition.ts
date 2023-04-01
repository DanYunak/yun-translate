export const flagIconsCondition = (language: string) => {
    switch (language) {
        case 'uk':
            return '🇺🇦'
        case 'en':
            return '🇬🇧'
        case 'pl':
            return '🇵🇱'
        case 'es':
            return '🇪🇸'
        case 'de':
            return '🇩🇪'
        case 'it':
            return '🇮🇹'
        case 'fr':
            return '🇫🇷'
        case 'cn':
            return '🇨🇳'
        case 'ja':
            return '🇯🇵'
        case 'tr':
            return '🇹🇷'
    }
}