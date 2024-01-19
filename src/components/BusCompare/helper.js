const BASE_URL = "https://rt.data.gov.hk/v1.1/transport"

export const getRoute = async (route, direction) => {
    const resp = await fetch(`${BASE_URL}/citybus-nwfb/route-stop/ctb/${route}/${direction}`)
    const data = await resp.json()

    return data.data
}

export const getStop = async (stop_id) => {
    const resp = await fetch(`${BASE_URL}/citybus-nwfb/stop/${stop_id}`)
    const data = await resp.json()

    return data.data
}