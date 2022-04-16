import React from 'react';

function Resume() {
    return ( 
        <div className="container">
            <div className="text-container">
                <div className="card">
                    <h1 className="heading">
                        <p>resumé</p>
                    </h1>
                    <p>I planned to embed the pdf in here using an "object" tag, 
                        but it completely broke responsiveness on mobile. It also looked really odd 
                        in contrast to the card theme, so a google drive link is the next best thing!</p>
                    <p className="resume-link"><a className="a-resume"href='https://drive.google.com/file/d/1yeiGTEYrnfjHi58mr7eiw5jCx2eF5JTz/preview?usp=sharing'>Click here instead !</a> : )</p>
                </div>
            </div>
        </div>
    );
}

export default Resume;