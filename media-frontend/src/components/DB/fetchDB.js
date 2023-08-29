import axios from 'axios';

const port = 'http://localhost:5000/';

const loginUser = async (userLogIn) => {
  try {
    const { data } = await axios.post(`${port}auth/login`, { ...userLogIn });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const registerUser = async (userRegister) => {
  try {
    const { data } = await axios.post(`${port}auth/register`, {
      ...userRegister,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const checkValidToken = async (token) => {
  try {
    const { data } = await axios.post(
      `${port}auth/me`,
      {},
      { headers: { authorization: token } }
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { checkValidToken, loginUser, registerUser };
