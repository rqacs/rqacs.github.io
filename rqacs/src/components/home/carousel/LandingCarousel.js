import React, { Component } from 'react';
import './LandingCarousel.css'
import carousel1 from '../../../assets/img/carousel/landing1.jpeg'
import carousel2 from '../../../assets/img/carousel/landing2.jpeg'
import carousel3 from '../../../assets/img/carousel/landing3.jpeg'
import carousel4 from '../../../assets/img/carousel/landing4.jpeg'

export class LandingCarousel extends Component {
    render() {
        return (
            <section id="landingcarousel" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">

            <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
            
            <div class="text-center text-white mx-5 wow fadeIn">
            <h1 class="mb-4">
            <strong>Learn Bootstrap 4 with MDB</strong>
            </h1>
            <p>
            <strong>Best & free guide of responsive web design</strong>
            </p>
            <p class="mb-4 d-none d-md-block">
            <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and
            written versions
            available. Create your own, stunning website.</strong>
            </p>
            
            <a target="_blank" href="https://mdbootstrap.com/bootstrap-tutorial/" class="btn btn-outline-white btn-lg">Start
            free tutorial
            <i class="fas fa-graduation-cap ml-2"></i>
            </a>
            </div>
            
            </div>
            </div>
            </div>

            <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
            
            <div class="text-center text-white mx-5 wow fadeIn">
            <h1 class="mb-4">
            <strong>Learn Bootstrap 4 with MDB</strong>
            </h1>
            <p>
            <strong>Best & free guide of responsive web design</strong>
            </p>
            <p class="mb-4 d-none d-md-block">
            <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and
            written versions
            available. Create your own, stunning website.</strong>
            </p>
            
            <a target="_blank" href="https://mdbootstrap.com/bootstrap-tutorial/" class="btn btn-outline-white btn-lg">Start
            free tutorial
            <i class="fa fa-graduation-cap ml-2"></i>
            </a>
            </div>
            
            </div>
            </div>
            </div>

            <div className="carousel-item">
            <img src={carousel3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
            
            <div class="text-center text-white mx-5 wow fadeIn">
            <h1 class="mb-4">
            <strong>Learn Bootstrap 4 with MDB</strong>
            </h1>
            <p>
            <strong>Best & free guide of responsive web design</strong>
            </p>
            <p class="mb-4 d-none d-md-block">
            <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and
            written versions
            available. Create your own, stunning website.</strong>
            </p>
            
            <a target="_blank" href="https://mdbootstrap.com/bootstrap-tutorial/" class="btn btn-outline-white btn-lg">Start
            free tutorial
            <i class="fa fa-graduation-cap ml-2"></i>
            </a>
            </div>
            
            </div>
            </div>
            </div>
            

            <div className="carousel-item">
            <img src={carousel4} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
            
            <div class="text-center text-white mx-5 wow fadeIn">
            <h1 class="mb-4">
            <strong>Learn Bootstrap 4 with MDB</strong>
            </h1>
            <p>
            <strong>Best & free guide of responsive web design</strong>
            </p>
            <p class="mb-4 d-none d-md-block">
            <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video and
            written versions
            available. Create your own, stunning website.</strong>
            </p>
            
            <a target="_blank" href="https://mdbootstrap.com/bootstrap-tutorial/" class="btn btn-outline-white btn-lg">Start
            free tutorial
            <i class="fa fa-graduation-cap ml-2"></i>
            </a>
            </div>
            
            </div>
            </div>
            </div>
            </div>
            {/*<a className="carousel-control-prev" href="#landingcarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#landingcarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>*/}
            </section>
            
            
            );
        }
        
    }
    
    export default LandingCarousel;