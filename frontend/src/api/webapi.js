import axios from "axios"

export const register = async(data)=>{
    const {username,password,email}=data
    try {
        const response = await axios.post(
          'http://localhost:5002/api/users',
          {username, password ,email},
        
        );
  return response.data;
       

        // You can perform further actions after successful registration here
  
      } catch (error) {
        console.error('Registration failed:', error);
        // Handle error (e.g., display an error message to the user)
      }
}

export const login = async(data)=>{
  const {username,password,email}=data
  try {
      const response = await axios.post(
        'http://localhost:5002/api/login',
        {password ,email},
      
      );
return response.data;
     

      // You can perform further actions after successful registration here

    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error (e.g., display an error message to the user)
    }
}


export const addblog = async(data)=>{
  const {title, desscription, category}=data
  try {
      const response = await axios.post(
        'http://localhost:5002/api/addblog',
        {title, desscription, category},
      
      );
return response.data;
     

      // You can perform further actions after successful registration here

    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error (e.g., display an error message to the user)
    }
}

export const allblog = async(data)=>{

  try {
      const response = await axios.get(
        'http://localhost:5002/api/allblog'
     
      
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