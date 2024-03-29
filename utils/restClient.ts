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
    console.log("signUp request failed", e);
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
    console.log("signIn request failed", e);
  }
}

export async function getPosts() {
  try {
    const res = await request.get(`/post/all`);
    return res.data.data;
  } catch (e) {
    console.log("getPosts request failed", e);
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
    console.log("createPost request failed", e);
  }
}

export async function deletePost(postID: string) {
  try {
    const res = await request.post(`/post/delete`, { postID: postID });

    return res;
  } catch (e) {
    console.log("deletePost request failed", e);
  }
}

export async function getPost(postID: string) {
  try {
    const res = await request.get(`/post/one?postID=${postID}`);

    return res.data.data;
  } catch (e) {
    console.log("getPost request failed", e);
  }
}

interface GetUserOptions {
  property: "username" | "userID";
  value: string;
}

export async function getUser(options: GetUserOptions) {
  try {
    const res = await request.get(
      `/user/one?${options.property}=${options.value}`
    );

    return res.data.data;
  } catch (e) {
    console.log("getUser request failed", e);
  }
}
