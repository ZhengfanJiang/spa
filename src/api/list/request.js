import http from '@/utils/http'

export async function getPostData (count, isSilent = false) {
  const get = isSilent ? http.silentGet : http.get
  const endPoint = count ? `posts/${count}` : 'posts'
  const response = await get(endPoint)
  return response.data
}
