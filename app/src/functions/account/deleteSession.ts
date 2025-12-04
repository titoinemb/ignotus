export const deleteSession = async (session: string, username: string, id: string) => {
  if (!session || !username) return;

  await fetch('http://localhost:8080/account/wishlist/remove', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      session: session,
      username: username,
      id: id
    })
  });

  window.location.href = "";
};