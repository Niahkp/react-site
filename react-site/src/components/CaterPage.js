import React from 'react';

function CateringOption({ title, imageSrc, price, description }) {
    return (
        <div className="catering-option">
            <h1>{title}</h1>
            <img src={imageSrc} alt={title} />
            <p>{price}</p>
            <p>{description}</p>
        </div>
    );
}

export const BundleOption = () => (
    <CateringOption
        title="The Bundle" 
        imageSrc="images/bundle.jpeg" 
        price="$45.50" 
        description="The Bundle comes with your choice of 7 main entrees, 6 sides, and 2 desserts with your choice of a gallon drink." 
    />
);

export const SmallBundleOption = () => (
    <CateringOption
        title="Small Bundle" 
        imageSrc="images/smallbundle.jpeg" 
        price="$30.00" 
        description="The Small Bundle comes with your choice of 5 main entrees, 3 sides, and 1 dessert with your choice of a gallon drink." 
    />
);

export const PartySizeOption = () => (
    <CateringOption
        title="Party Size" 
        imageSrc="images/party.jpeg" 
        price="$60.50" 
        description="The Party Size comes with your choice of 10 main entrees, 8 sides, and 3 desserts with your choice of 2 gallon drinks." 
    />
);

export default CateringOption;