import { request } from "utils/axios";

export async function signUp(
  email: string,
  password: string,
  username: string
) {
  try {
    const res = await request.post(`/auth/sign-up`, {
      email: email,
      password: password,
      username: username,
    });

    return res.data.data;
  } catch (e) {
    console.log("request failed", e);
  }
}

export async function signIn(email: string, password: string) {
  try {
    const res = await request.post(`/auth/sign-in`, {
      email: email,
      password: password,
    });
    return res.data.data;
  } catch (e) {
    console.log("request failed", e);
  }
}

export async function fetchPosts() {
  try {
    const res = await request.get(`/post/all`);
    return res.data.data;
  } catch (e) {
    console.log("request failed", e);
  }
}

export async function createPost(title: string, content: string) {
  try {
    const res = await request.post(`/post/create`, {
      title: title,
      content: content,
    });

    return res;
  } catch (e) {
    console.log("request failed", e);
  }
}
