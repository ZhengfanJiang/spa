import http from '@/utils/http'

export async function getPostData (count) {
  const endPoint = count ? `posts/${count}` : 'posts'
  const response = await http.get(endPoint)
  return response.data
}
