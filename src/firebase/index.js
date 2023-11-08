const {EXPO_PUBLIC_BASE_URL, EXPO_PUBLIC_API_KEY, EXPO_PUBLIC_AUTH_URL, EXPO_PUBLIC_G_API} = process.env

export const baseUrl = EXPO_PUBLIC_BASE_URL
export const apiKey = EXPO_PUBLIC_API_KEY
export const authUrl = EXPO_PUBLIC_AUTH_URL
export const googleApi = {
    mapStatic: EXPO_PUBLIC_G_API,
}