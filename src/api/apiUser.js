export async function loginUser({ email, password }) {
  const [loginRes, tokenRes] = await Promise.all([
    fetch("https://skypro-music-api.skyeng.tech/user/token/", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
    }),
    fetch("https://skypro-music-api.skyeng.tech/user/login/", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
    }),
  ]);

  const loginJsonData = await loginRes.json();
  const tokenJsonData = await tokenRes.json();

  if (!loginRes.ok) {
    throw new Error(loginJsonData.detail ?? "Ошибка сервера");
  }

  if (!tokenRes.ok) {
    throw new Error(tokenJsonData.detail ?? "Ошибка сервера");
  }

  return { ...loginJsonData, ...tokenJsonData };
}

export async function registrationUser({ email, password }) {
  const res = await fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      username: email,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  const jsonData = await res.json();

  if (!res.ok) {
    const error =
      jsonData.email?.[0] ??
      jsonData.password?.[0] ??
      jsonData.email?.[0] ??
      "Ошибка сервера";

    throw new Error(error);
  }

  return jsonData;
}
