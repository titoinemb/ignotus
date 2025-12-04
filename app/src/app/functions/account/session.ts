export const session = async (session: string, username: string): Promise<1 | 0> => {
  try {
    const response = await fetch('http://localhost:8080/account/session/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, session: session }),
    });

    const datarep = await response.json();

    if (!response.ok || !datarep) return 0;

    if (datarep.message !== "1") return 0;

    return 1;
  } catch (e) {
    return 0;
  };
};