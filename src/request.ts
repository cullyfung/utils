export function request(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> {
  return fetch(input).then(async (res) => await res.json())
}
