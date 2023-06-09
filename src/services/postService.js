import * as tokenService from "./tokenService";

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/posts`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    // console.log(res);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const create = async (postData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const update = async (postData) => {
  try {
    const res = await fetch(`${BASE_URL}/${postData._id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${tokenService.getToken()}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

async function getAllPosts() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  });
  return await res.json();
}

export { index, getAllPosts, create, show, deletePost, update };
