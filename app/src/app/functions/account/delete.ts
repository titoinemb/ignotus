export const deleteAccount = async () => {
  let username = localStorage.getItem("username");
  let session = localStorage.getItem("session");

  if (!username || !session) return;

  try {
    await fetch('http://localhost:8080/account/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        session: session,
        username: username
      })
    });
  } catch (e) {
    return;
  } finally {
    return window.location.href = "";
  };
};