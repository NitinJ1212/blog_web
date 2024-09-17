import axios from 'axios';
import React, { useState } from 'react'
import { submitQuery } from '../api/webapi';

function Contactus() {
    const [selectedImage, setSelectedImage] = useState();
    const [Error, setError] = useState({
        name: false,
        email: false,
        description: false,
        phone: false
    })
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        description: ""
    })

    const handleChangeInputs = (e) => {
        const { name, value } = e.target;
        if (name === "name") { setData({ ...data, name: value }) }
        else if (name === "email") { setData({ ...data, email: value }); }
        else if (name === "phone") { setData({ ...data, phone: value }) }
        else { setData({ ...data, description: value }) }

        if (value.length === 0) {
            setError({ ...Error, [name]: true })
        } else {
            setError({ ...Error, [name]: false })
        }
    }

    const downloadImage = async (imageUrl) => {
        try {
            const response = await axios.get("https://res.cloudinary.com/dmdkqp7ca/image/upload/v1725878785/shoes.jpg", { responseType: 'blob' });

            // Create a URL for the blob
            const url = window.URL.createObjectURL(new Blob([response.data]));

            // Create a link element and trigger the download
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Form-image.jpg'; // Set the default file name
            document.body.appendChild(link);
            link.click();

            link.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('There was an error downloading the image:', error);
        }
    };

    const handleChangeFile = (e) => {
        const file = e.target.files[0]
        if (file) {
            return selectedImage(file)
        }
        selectedImage("")
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedImage) {
            alert('Please select an image.');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedImage);

        try {
            const response = await axios.post('https://your-api-endpoint.com/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Specify Content-Type for FormData
                },
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Upload successful:', result);
            } else {
                console.error('Upload failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };
    const handleSubmitQuery = async (e) => {
        e.preventDefault()
        if (!data.name) {
            setError({ ...Error, name: true })
            alert("Please Enter all Field")
        } else if (!data.email) {
            setError({ ...Error, email: true })
            alert("Please Enter all Field")
        } else if (!data.phone) {
            setError({ ...Error, phone: true })
            alert("Please Enter all Field")
        } else if (!data.description) {
            setError({ ...Error, description: true })
            alert("Please Enter all Field")
        } else {
            const res = await submitQuery(data)
            if (res?.status) {
                alert(res?.message)
            } else {
                alert("Some internal Error Occured.")
            }
        }
    }


    return (
        <div>
            <div className='container'>
                <form onSubmit={handleSubmitQuery}>
                    <div className="mb-3">
                        <label for="exampleInputName" className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={handleChangeInputs} id="exampleInputname" name="name" aria-describedby="nameHelp" placeholder='Enter name' />
                        {Error.name && <span id="nameHelp" className="form-text text-danger required_text">
                            Name is required*
                        </span>}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' onChange={handleChangeInputs} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        {Error.email && <span id="nameHelp" className="form-text text-danger required_text">
                            Email is required*
                        </span>}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Phone</label>
                        <input type="number" className="form-control" name='phone' onChange={handleChangeInputs} id="exampleInputPassword1" />
                        {Error.name && <span id="nameHelp" className="form-text text-danger required_text">
                            Name is required*
                        </span>}
                    </div>
                    <div className="mb-3 ">
                        {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label> */}

                        <label for="exampleInputPassword1" name='description' className="form-label">Description</label>
                        <textarea type="text" className="form-control" cols={7} rows={10} onChange={handleChangeInputs}
                            // onChange={handleChange}
                            // value={data.description}
                            name='description'
                            id="exampleInputPassword1" />
                        {Error.name && <span id="nameHelp" className="form-text text-danger required_text">
                            Name is required*
                        </span>}
                    </div>
                    <button type="submit" className="btn btn-success">Submit Query</button>
                </form>
            </div>
            <p className='container text-primary mt-5'>If you want sbmit your openion by a form so please download form and fill all mandatory field then upload that form.</p>
            <div className='container d-flex align-items-center justify-content-center'>

                <button className='btn btn-danger me-5' onClick={() => downloadImage('https://example.com/image.jpg')}>
                    Download Image
                </button>
                <input type='file' accept='image/*' onChange={handleChangeFile} />
                <button className='btn btn-success' onClick={handleSubmit} >Submit</button>
            </div>
            {/* <a href='https://res.cloudinary.com/dmdkqp7ca/image/upload/v1725878785/shoes.jpg' download >Download Image</a> */}
        </div>
    )
}

export default Contactus