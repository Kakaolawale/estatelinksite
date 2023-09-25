import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../services/firebase';




export default function estatelinkupload() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
        setImage(e.target.files[0]);
    }
}


  const handleUpload = async () => {
    if (name && description && location && price && image) {
    const storageRef = ref(storage, 'property-images/' + image.name);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on('state_changed', 
          (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
          }, 
          (error) => {
            console.error('Error during upload: ', error);
          }, 
          async () => {
      
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            const property = {
                name, 
                description, 
                location: location.toLowerCase(), 
                price: Number(price), 
                imageUrl: downloadURL 
            };
            try {
                const docRef = await addDoc(collection(db, "properties"), property);
                console.log("Document written with ID: ", docRef.id);
                alert('Property Uploaded!');
                setName("");
                setDescription("");
                setLocation("");
                setPrice("");
                setImage(null);  
            } catch (e) {
                console.error("Error adding document: ", e);
                alert('Error uploading property: ', e.message);
            }
          }
        );
    } else {
        alert('Please fill all the fields');
    }
}

  return (
    
      <div className="bg-estatelinkpurple p-8 pt-20 mt-20 rounded-lg shadow-lg lg:mx-auto sm:mx-2 sm:w-1/2 lg:w-2/3">
          <div className="mb-4">
              <input
                  type="text"
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
              />
          </div>
          <div className="mb-4">
              <input
                  type='text'
                  placeholder='Description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
              />
          </div>
          <div className="mb-4">
              <input
                  type='text'
                  placeholder='Location'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
              />
          </div>
          <div className="mb-4">
              <input
                  type='number'
                  placeholder='Price'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
              />
          </div>
          <div className="mb-4">
            <input 
            type="file"
            accept='images/*'
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
              <button
                  onClick={handleUpload}
                  className="bg-estatelinkyellow font-bold text-estatelinkpurple px-5 py-2 rounded-md hover:bg-blue-600"
              >
                  Upload Property
              </button>
          </div>
      </div>
  );
};
