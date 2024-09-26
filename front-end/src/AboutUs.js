import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AboutUs() {
    const [data, setData] = useState({ paragraphs: [], image: "" }); 

    useEffect(() => {
        axios.get('http://localhost:5002/aboutus')
            .then(response => {
                const { paragraphs, image } = response.data;

                setData({ paragraphs, image });
            })
            .catch(error => console.error('Error fetching data about us:', error));
    }, []); 

    return (
        <div>
            <h1>About Nikky</h1>
            {data.paragraphs.map((paragraph, i) => (
                <p key={i} style={{ fontSize: '20px', margin:'30px' }}>{paragraph}</p>
            ))}
            <img src={data.image} alt="Photo of Nikky" style={{ width: '400px', height: 'auto', marginTop: '20px' }} />
        </div>
    );
}

export default AboutUs;
