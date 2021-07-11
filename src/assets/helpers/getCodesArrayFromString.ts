export const getCodesArrayFromString = (text: string | undefined): string[] | undefined => {
    return text?.split('\n')
}