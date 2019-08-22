import httpServie from './_httpService'

export default {
  getAllRooms () {
    const path = '/rooms'
    return httpServie({
      method: 'get',
      path,
      auth: true
    })
  },
  getRoomDetail (id) {
    const path = `/room/${id}`
    return httpServie({
      method: 'get',
      path,
      auth: true
    })
  }
}
