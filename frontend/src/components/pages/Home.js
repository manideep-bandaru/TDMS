import React from 'react';
import Navbar from '../inc/Navbar';

function Home() {
    return (
        <div>
<Navbar />
        <div className="container">
            {/* <div className="card mt-4">
                <div className="card-body">
                <h2>
                You are in Home Page
                </h2>
                </div>
                
            </div> */}
            <div className='h2 mt-4 text-center'>
              Welcome to TDMS 
            </div>
            <div class="row gutters-sm">
            <div class="row-md-4 mt-5">
              <div class="card ">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>Mr. Chitranjan Hota</h4>
                      <p class="text-secondary mb-1">HOD, Department of Computer Science & Information System </p>
                      <p class="text-muted font-size-sm">Bits Pilani Hyderabad Campus</p>
                    </div>
                  </div>
                </div>
              </div>
</div>
</div>
        </div>
                </div>
    );
}

export default Home;