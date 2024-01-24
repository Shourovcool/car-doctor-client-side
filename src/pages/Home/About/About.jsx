import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute right-5 top-40 border-white border-8 w-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <h3 className='text-3xl font-bold text-red-500'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-error text-white">GET MORE INFO</button>
                </div>
            </div>
        </div>
    );
};

export default About;