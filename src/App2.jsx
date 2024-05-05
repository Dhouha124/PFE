import React  from "react";
import video  from '../src/assets/video.mp4';
const App = () => {
    return (
<div className='main'>
    <video src={video}autoPlay loop muted />
</div>


    )
}
export  default App;