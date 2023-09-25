import React from 'react';

const EstatelinkWhatsAppButton = () => {
    const whatsappNumber = "2348094156441";
    const text = "Welcome to Estatelink, chat us for more enquiries";
    const urlEncodedText = encodeURIComponent(text);
    console.log(urlEncodedText);

    return (
        <a
        href={`https://wa.me/${whatsappNumber}?text=${urlEncodedText}`}
        target="_blank"
        rel="nonopener noreferrer"
        className='fixed bottom-4 right-4 bg-estatelinkyellow p-2 rounded-full shadow-md'
        >
           <img src='/images/whatsappicon.png' alt='Chat with Estatelink now on WhatsApp' className='w-10 h-10' />
        </a>
    );
};

export default EstatelinkWhatsAppButton;