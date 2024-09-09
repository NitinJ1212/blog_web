import axios from 'axios';
import React, { useState } from 'react'

function Contactus() {
    const [selectedImage, setSelectedImage] = useState();

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



    return (
        <div>
            <button className='btn btn-success' onClick={() => downloadImage('https://example.com/image.jpg')}>
                Download Image
            </button>
            <input type='file' accept='image/*' onChange={handleChangeFile} />
            <button className='btn btn-success' onClick={handleSubmit} >Submit</button>
            {/* <a href='https://res.cloudinary.com/dmdkqp7ca/image/upload/v1725878785/shoes.jpg' download >Download Image</a> */}
        </div>
    )
}

export default Contactus