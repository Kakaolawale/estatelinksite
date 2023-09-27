import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../services/firebase';




export default function estatelinkupload() {
    const [propertyName, setPropertyName] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const [type, setType] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [squareFeet, setSquareFeet] = useState("");
    const [yearBuilt, setYearBuilt] = useState("");
    const [amenities, setAmenities] = useState("");
    const [address, setAddress] = useState("");

   
  
  const handleAmenityChange = (e) => {
    if (e.target.checked) {
      setAmenities(prev => [...prev, e.target.value]);
    } else {
      setAmenities(prev => prev.filter(amenity => amenity !== e.target.value));
    }
  };
   

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
        setImage(e.target.files[0]);
    }
}


  const handleUpload = async () => {
    if (propertyName && description && location && price && image && type && bedrooms && bathrooms && squareFeet && yearBuilt && amenities && address) {
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
        imageUrl: downloadURL,
        type,
        bedrooms: Number(bedrooms),
        bathrooms: Number(bathrooms),
        squareFeet: Number(squareFeet),
        yearBuilt: Number(yearBuilt),
        amenities,
        address, 
            };
            try {
                const docRef = await addDoc(collection(db, "properties"), property);
                console.log("Document written with ID: ", docRef.id);
                alert('Property Uploaded!');
                setPropertyName("");
                setDescription("");
                setLocation("");
                setPrice("");
                setImage(null); 
                type("");
                bedrooms("");
                bathrooms("");
                squareFeet("");
                yearBuilt("");
                amenities("");
                address("");
            
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
    
      <div className="bg-estatelinkpurple p-4 pt-20 mt-10 rounded-lg shadow-lg lg:mx-auto sm:mx-2 sm:w-1/2 lg:w-2/3">
          <h1 className='mb-4 text-estatelinkyellow font-bold'>Complete the property upload form below...</h1>
          <div className="mb-4">
              <input
                  type="text"
                  placeholder='Property Name'
                  value={propertyName}
                  onChange={(e) => setPropertyName(e.target.value)}
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
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            className="text-estatelinkwhite w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        >
          <option value="">Select Type</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Duplex">Duplex</option>
          <option value="Land">Land</option>
          <option value="Mansion">Mansion</option>
          
        </select>
      </div>

      <div className="mb-4 text-estatelinkwhite">
        <label>
          <input
            type="checkbox"
            value="Swimming Pool"
            checked={amenities.includes("Swimming Pool")}
            onChange={handleAmenityChange}
          /> Swimming Pool
        </label>
        <label>
          <input
            type="checkbox"
            value="Gym"
            checked={amenities.includes("Gym")}
            onChange={handleAmenityChange}
          /> Gym
        </label>
     
      </div>
      
      <div className="mb-4">
        <input
          type='number'
          placeholder='Bedrooms'
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <input
          type='text'
          placeholder='Address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <input
          type='number'
          placeholder='Year Built'
          value={yearBuilt}
          onChange={(e) => setYearBuilt(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <input
          type='number'
          placeholder='Square Feet'
          value={squareFeet}
          onChange={(e) => setSquareFeet(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <input
          type='number'
          placeholder='Bathrooms'
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
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
