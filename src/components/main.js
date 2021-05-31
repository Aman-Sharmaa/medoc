import  React from 'react';
import Doctor from '../components/doctor.png';

const Main = () => {
    return (
        <div className="main-con">
            <div className="float-con">
             <h1>Skip the travel !</h1>
             <h1>Take Online Doctor Consultation!</h1>
             <p>consultation + Audio call free 24/7· </p>
             <button>consult now</button>
             </div>
             <div className="float-right">
                <img src={Doctor} alt="Doctor"/>
             </div>
        </div>
    )
}
export default Main;