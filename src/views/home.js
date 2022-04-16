import React, { useState, useEffect } from 'react';

function Home() {
    const [error, setError] = useState(null);
    const [projects, setProjects] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("data/data.json")
        .then((res) => res.json())
        .then((data) => {
            setProjects(data);
            setIsLoaded(true);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        })
    }, []);

    const projectList = projects.map((p) => (
        <div className="card" key={p.id}>
            <h1 className='heading'>{p.title}</h1>
            <p>{p.desc}</p>
            <p>Technology used: {p.tech}</p>
            <a href={p.url1}>live version</a> | <a href={p.url2}>github</a>
        </div>
    )); 

    if(error){
        return <div className="container">error</div>
    }
    else if(!isLoaded){
        return <div className="container"></div>
    }
    return ( 
        <div className="container">
            <div className="text-container">{projectList}</div>
        </div> 
    );
}

export default Home;