import axios from "axios"

const base_url = "http://localhost:5002"
const valid_token = JSON.parse(localStorage.getItem('token'))

const header =
{
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${valid_token}`,
  }
}

export const register = async (data) => {
  const { username, password, email } = data
  try {
    const response = await axios.post(
      'http://localhost:5002/blogapi/users',
      { username, password, email },

    );
    return response.data;


    // You can perform further actions after successful registration here

  } catch (error) {
    console.error('Registration failed:', error);
    // Handle error (e.g., display an error message to the user)
  }
}

export const login = async (data) => {
  const { username, password, email } = data
  try {
    const response = await axios.post(
      'http://localhost:5002/api/login',
      { password, email },

    );
    return response.data;


    // You can perform further actions after successful registration here

  } catch (error) {
    console.error('Registration failed:', error);
    // Handle error (e.g., display an error message to the user)
  }
}


export const addblog = async (data) => {
  console.log(valid_token, "llllllllllllllllll")
  try {
    const response = await axios.post(
      // `${process.env.REACT_APP_API_BASE_URL}/blogapi/addblog`,
      `${base_url}/blogapi/addblog`,
      data,
      header

    );
    return response;


    // You can perform further actions after successful registration here

  } catch (error) {
    console.error('Registration failed:', error);
    // Handle error (e.g., display an error message to the user)
  }
}

export const allblog = async (data) => {

  try {
    const response = await axios.post(
      `${base_url}/blogapi/allblog`,
      {
        category: data
      },
      header
    );
    return response.data;


    // You can perform further actions after successful registration here

  } catch (error) {
    console.error('Registration failed:', error);
    // Handle error (e.g., display an error message to the user)
  }
}

export const oneblog = async (data) => {

  try {
    const response = await axios.post(
      `${base_url}/blogapi/blogById`,
      {
        id: data
      },
      header
    );
    return response.data;


    // You can perform further actions after successful registration here

  } catch (error) {
    console.error('Registration failed:', error);
    // Handle error (e.g., display an error message to the user)
  }



}
export const addcatagory = async(data)=>{
  const {catagory}=data
  try {
      const response = await axios.post(
        'http://localhost:5002/blogapi/blog/addcatagory',
        {catagory},
      
      );
return response.data;
     

      // You can perform further actions after successful registration here

    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error (e.g., display an error message to the user)
    }
}

export const getcatagory = async()=>{

  try {
      const response = await axios.get(
        'http://localhost:5002/blogapi/blog/getcatagory',
       
      );
return response.data;
     

      // You can perform further actions after successful registration here

    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error (e.g., display an error message to the user)
    }
}

export const addcomment = async(data)=>{
  const {iduser,text,id}=data
  try {
      const response = await axios.post(
        'http://localhost:5002/blogapi/blog/addComment',
        {postId:id,text:text},header
      
      );
return response.data;
     

      // You can perform further actions after successful registration here

    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error (e.g., display an error message to the user)
    }
}

export const userLike = async(data)=>{
  const {iduser,text,id}=data
  try {
      const response = await axios.post(
        'http://localhost:5002/blogapi/blog/like',
        {postId:id},header
      
      );
return response.data;
     

      // You can perform further actions after successful registration here

    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error (e.g., display an error message to the user)
    }
}