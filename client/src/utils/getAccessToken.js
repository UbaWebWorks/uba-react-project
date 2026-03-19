let accessToken
const updateAccessToken = (token) => accessToken = token

export const getAccessToken = () => {
    return { accessToken, updateAccessToken }
}