export const ConfigFunction = (userInfo) => {
    const { JwtToken } = userInfo
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${JwtToken}`
        }
    }
    return config
}
