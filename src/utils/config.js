export const ConfigFunction = (userInfo) => {
    const { token } = userInfo
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
    return config
  }