import React from 'react';
import '../css/Cater.css';


export const BundleOption = () => (
    <div className="catering-option">
        <h2>The Bundle</h2>
        <img src="/images/bundle.jpeg" alt="The Bundle" />
        <p>$45.50</p>
        <p>The Bundle comes with your choice of 7 main entrees, 6 sides, and 2 desserts with a gallon drink.</p>
    </div>
);

export const SmallBundleOption = () => (
    <div className="catering-option">
        <h2>Small Bundle</h2>
        <img src="/images/smallbundle.jpeg" alt="Small Bundle" />
        <p>$30.00</p>
        <p>The Small Bundle comes with your choice of 5 main entrees, 3 sides, and 1 dessert with a gallon drink.</p>
    </div>
);

export const PartySizeOption = () => (
    <div className="catering-option">
        <h2>Party Size</h2>
        <img src="/images/party.jpeg" alt="Party Size" />
        <p>$60.50</p>
        <p>The Party Size comes with your choice of 10 main entrees, 8 sides, 3 desserts, and 2 gallon drinks.</p>
    </div>
);
