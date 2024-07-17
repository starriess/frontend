import React from 'react'
import Antman from '../assets/images/superhero/antman.jpg';
import Batman from '../assets/images/superhero/batman.jpg';
import Robinhood from '../assets/images/superhero/robinhood.jpg';
import Avenger from '../assets/images/superhero/avenger.jpg';
import Superman from '../assets/images/superhero/superman.jpg';
import Spiderman from '../assets/images/superhero/spiderman-cover.jpg';

function Superhero() {
  return (
   <div className="container-fluid text-light superhero" id='superhero'>
    <div className="container p-3">
        <div className="row">
        <h3>Superhero</h3>
        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div class="card" style={{width: '17rem'}}>
                        <img src={Antman} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">ANTMAN</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div class="card" style={{width: '17rem'}}>
                        <img src={Batman} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">BATMAN</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div class="card" style={{width: '17rem'}}>
                        <img src={Robinhood} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">ROBINHOOD</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </div>
        </div>
    </div>

    <div className="container p-3">
        <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div class="card" style={{width: '17rem'}}>
                        <img src={Avenger} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">AVANGER</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div class="card" style={{width: '17rem'}}>
                        <img src={Superman} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">SUPERMAN</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
                        <div class="card" style={{width: '17rem'}}>
                        <img src={Spiderman} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">SPIDERMAN</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    </div>
        </div>
    </div>
   </div>
  )
}

export default Superhero