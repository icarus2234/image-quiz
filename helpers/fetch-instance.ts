type FetchResponse<T> = T;

const fetchInstance =
  <T>(method: string) =>
  async (route: string, body?: T, options?: RequestInit): Promise<FetchResponse<T>> => {
    const response = await fetch(route, {
      method,
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    return response.json() as FetchResponse<T>;
  };

export const postInstance = <T>(route: string, body: T, options?: RequestInit) =>
  fetchInstance<T>('POST')(route, body, options);

export const getInstance = <T>(route: string, options?: RequestInit) =>
  fetchInstance<T>('GET')(route, undefined, options);

export const getUserData = async () => {
  try {
    return await getInstance<{ user: { id: string; name: string } }>(
      `${process.env.IP_LOCATE_API_URL}`
    );
  } catch (error) {
    console.error('Error fetching user data:', error);
    return {};
  }
};
