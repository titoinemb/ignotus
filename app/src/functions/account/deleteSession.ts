export const deleteSession = async (session: string, username: string, id: string) => {
  if (!session || !username) return;

  await fetch('http://localhost:8080/account/session/remove', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      session: session,
      username: username,
      sessionid: id
    })
  });

  return window.location.href = "";
};