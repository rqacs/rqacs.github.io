import React from 'react'
import './Template.css';

export default function Template() {
    return (
        <div>
        <header id="header">
            <div className="container">

            <div id="logo" className="pull-left">
                <h1><a href="#intro" className="scrollto">Avilon</a></h1>
            
            
            </div>

            <nav id="nav-menu-container">
                <ul className="nav-menu">
                <li className="menu-active"><a href="#intro">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li className="menu-has-children"><a href="">Drop Down</a>
                    <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li className="menu-has-children"><a href="#">Drop Down 2</a>
                        <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                    <li><a href="#">Drop Down 5</a></li>
                    </ul>
                </li>
                <li><a href="#contact">Contact Us</a></li>
                </ul>
            </nav>
            </div>
        </header>

        
        <section id="intro">

            <div className="intro-text">
            <h2>Welcome to Avilon</h2>
            <p>We are team of talanted designers making websites with Bootstrap</p>
            <a href="#about" className="btn-get-started scrollto">Get Started</a>
            </div>

            <div className="product-screens">

            <div className="product-screen-1 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.6s">
                <img src="img/product-screen-1.png" alt=""/>
            </div>

            <div className="product-screen-2 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.6s">
                <img src="img/product-screen-2.png" alt=""/>
            </div>

            <div className="product-screen-3 wow fadeInUp" data-wow-duration="0.6s">
                <img src="img/product-screen-3.png" alt=""/>
            </div>

            </div>

        </section>

        <main id="main">


            <section id="about" className="section-bg">
            <div className="container-fluid">
                <div className="section-header">
                <h3 className="section-title">About Us</h3>
                <span className="section-divider"></span>
                <p className="section-description">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque<br/>
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                </div>

                <div className="row">
                <div className="col-lg-6 about-img wow fadeInLeft">
                    <img src="img/about-img.jpg" alt="" />
                </div>

                <div className="col-lg-6 content wow fadeInRight">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elite storium paralate</h2>
                    <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <ul>
                    <li><i className="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="ion-android-checkmark-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                    </ul>

                    <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Libero justo laoreet sit amet cursus sit amet dictum sit. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec
                    </p>
                </div>
                </div>

            </div>
            </section>


            <section id="features">
            <div className="container">

                <div className="row">

                <div className="col-lg-8 offset-lg-4">
                    <div className="section-header wow fadeIn" data-wow-duration="1s">
                    <h3 className="section-title">Product Featuress</h3>
                    <span className="section-divider"></span>
                    </div>
                </div>

                <div className="col-lg-4 col-md-5 features-img">
                    <img src="img/product-features.png" alt="" className="wow fadeInLeft" />
                </div>

                <div className="col-lg-8 col-md-7 ">

                    <div className="row">

                    <div className="col-lg-6 col-md-6 box wow fadeInRight">
                        <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
                        <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                        <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident clarida perendo.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 box wow fadeInRight" data-wow-delay="0.1s">
                        <div className="icon"><i className="ion-ios-flask-outline"></i></div>
                        <h4 className="title"><a href="">Dolor Sitema</a></h4>
                        <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata noble dynala mark.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 box wow fadeInRight" data-wow-delay="0.2s">
                        <div className="icon"><i className="ion-social-buffer-outline"></i></div>
                        <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                        <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur teleca starter sinode park ledo.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 box wow fadeInRight" data-wow-delay="0.3s">
                        <div className="icon"><i className="ion-ios-analytics-outline"></i></div>
                        <h4 className="title"><a href="">Magni Dolores</a></h4>
                        <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum dinoun trade capsule.</p>
                    </div>
                    </div>

                </div>

                </div>

            </div>

            </section>


            <section id="advanced-features">

            <div className="features-row section-bg">
                <div className="container">
                <div className="row">
                    <div className="col-12">
                    <img className="advanced-feature-img-right wow fadeInRight" src="img/advanced-feature-1.jpg" alt=""/>
                    <div className="wow fadeInLeft">
                        <h2>Duis aute irure dolor in reprehenderit in voluptate velit esse</h2>
                        <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="features-row">
                <div className="container">
                <div className="row">
                    <div className="col-12">
                    <img className="advanced-feature-img-left" src="img/advanced-feature-2.jpg" alt=""/>
                    <div className="wow fadeInRight">
                        <h2>Duis aute irure dolor in reprehenderit in voluptate velit esse</h2>
                        <i className="ion-ios-paper-outline" className="wow fadeInRight" data-wow-duration="0.5s"></i>
                        <p className="wow fadeInRight" data-wow-duration="0.5s">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <i className="ion-ios-color-filter-outline wow fadeInRight" data-wow-delay="0.2s" data-wow-duration="0.5s"></i>
                        <p className="wow fadeInRight" data-wow-delay="0.2s" data-wow-duration="0.5s">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                        <i className="ion-ios-barcode-outline wow fadeInRight" data-wow-delay="0.4" data-wow-duration="0.5s"></i>
                        <p className="wow fadeInRight" data-wow-delay="0.4s" data-wow-duration="0.5s">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="features-row section-bg">
                <div className="container">
                <div className="row">
                    <div className="col-12">
                    <img className="advanced-feature-img-right wow fadeInRight" src="img/advanced-feature-3.jpg" alt=""/>
                    <div className="wow fadeInLeft">
                        <h2>Duis aute irure dolor in reprehenderit in voluptate velit esse</h2>
                        <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <i className="ion-ios-albums-outline"></i>
                        <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>


            <section id="call-to-action">
            <div className="container">
                <div className="row">
                <div className="col-lg-9 text-center text-lg-left">
                    <h3 className="cta-title">Call To Action</h3>
                    <p className="cta-text"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col-lg-3 cta-btn-container text-center">
                    <a className="cta-btn align-middle" href="#">Call To Action</a>
                </div>
                </div>

            </div>
            </section>


            <section id="more-features" className="section-bg">
            <div className="container">

                <div className="section-header">
                <h3 className="section-title">More Features</h3>
                <span className="section-divider"></span>
                <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>

                <div className="row">

                <div className="col-lg-6">
                    <div className="box wow fadeInLeft">
                    <div className="icon"><i className="ion-ios-stopwatch-outline"></i></div>
                    <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.</p>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="box wow fadeInRight">
                    <div className="icon"><i className="ion-ios-bookmarks-outline"></i></div>
                    <h4 className="title"><a href="">Dolor Sitema</a></h4>
                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata nodera clas.</p>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="box wow fadeInLeft">
                    <div className="icon"><i className="ion-ios-heart-outline"></i></div>
                    <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur trinige zareta lobur trade.</p>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="box wow fadeInRight">
                    <div className="icon"><i className="ion-ios-analytics-outline"></i></div>
                    <h4 className="title"><a href="">Magni Dolores</a></h4>
                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum rideta zanox satirente madera</p>
                    </div>
                </div>

                </div>
            </div>
            </section>


            <section id="clients">
            <div className="container">

                <div className="row wow fadeInUp">

                <div className="col-md-2">
                    <img src="img/clients/client-1.png" alt=""/>
                </div>

                <div className="col-md-2">
                    <img src="img/clients/client-2.png" alt=""/>
                </div>

                <div className="col-md-2">
                    <img src="img/clients/client-3.png" alt=""/>
                </div>

                <div className="col-md-2">
                    <img src="img/clients/client-4.png" alt=""/>
                </div>

                <div className="col-md-2">
                    <img src="img/clients/client-5.png" alt=""/>
                </div>

                <div className="col-md-2">
                    <img src="img/clients/client-6.png" alt=""/>
                </div>

                </div>
            </div>
            </section>


            <section id="pricing" className="section-bg">
            <div className="container">

                <div className="section-header">
                <h3 className="section-title">Pricing</h3>
                <span className="section-divider"></span>
                <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>

                <div className="row">

                <div className="col-lg-4 col-md-6">
                    <div className="box wow fadeInLeft">
                    <h3>Free</h3>
                    <h4><sup>$</sup>0<span> month</span></h4>
                    <ul>
                        <li><i className="ion-android-checkmark-circle"></i> Quam adipiscing vitae proin</li>
                        <li><i className="ion-android-checkmark-circle"></i> Nec feugiat nisl pretium</li>
                        <li><i className="ion-android-checkmark-circle"></i> Nulla at volutpat diam uteera</li>
                        <li><i className="ion-android-checkmark-circle"></i> Pharetra massa massa ultricies</li>
                        <li><i className="ion-android-checkmark-circle"></i> Massa ultricies mi quis hendrerit</li>
                    </ul>
                    <a href="#" className="get-started-btn">Get Started</a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="box featured wow fadeInUp">
                    <h3>Business</h3>
                    <h4><sup>$</sup>29<span> month</span></h4>
                    <ul>
                        <li><i className="ion-android-checkmark-circle"></i> Quam adipiscing vitae proin</li>
                        <li><i className="ion-android-checkmark-circle"></i> Nec feugiat nisl pretium</li>
                        <li><i className="ion-android-checkmark-circle"></i> Nulla at volutpat diam uteera</li>
                        <li><i className="ion-android-checkmark-circle"></i> Pharetra massa massa ultricies</li>
                        <li><i className="ion-android-checkmark-circle"></i> Massa ultricies mi quis hendrerit</li>
                    </ul>
                    <a href="#" className="get-started-btn">Get Started</a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="box wow fadeInRight">
                    <h3>Developer</h3>
                    <h4><sup>$</sup>49<span> month</span></h4>
                    <ul>
                        <li><i className="ion-android-checkmark-circle"></i> Quam adipiscing vitae proin</li>
                        <li><i className="ion-android-checkmark-circle"></i> Nec feugiat nisl pretium</li>
                        <li><i className="ion-android-checkmark-circle"></i> Nulla at volutpat diam uteera</li>
                        <li><i className="ion-android-checkmark-circle"></i> Pharetra massa massa ultricies</li>
                        <li><i className="ion-android-checkmark-circle"></i> Massa ultricies mi quis hendrerit</li>
                    </ul>
                    <a href="#" className="get-started-btn">Get Started</a>
                    </div>
                </div>

                </div>
            </div>
            </section>


            <section id="faq">
            <div className="container">

                <div className="section-header">
                <h3 className="section-title">Frequently Asked Questions</h3>
                <span className="section-divider"></span>
                <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>

                <ul id="faq-list" className="wow fadeInUp">
                <li>
                    <a data-toggle="collapse" className="collapsed" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i className="ion-android-remove"></i></a>
                    <div id="faq1" className="collapse" data-parent="#faq-list">
                    <p>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </p>
                    </div>
                </li>

                <li>
                    <a data-toggle="collapse" href="#faq2" className="collapsed">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="ion-android-remove"></i></a>
                    <div id="faq2" className="collapse" data-parent="#faq-list">
                    <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </p>
                    </div>
                </li>

                <li>
                    <a data-toggle="collapse" href="#faq3" className="collapsed">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="ion-android-remove"></i></a>
                    <div id="faq3" className="collapse" data-parent="#faq-list">
                    <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                    </p>
                    </div>
                </li>

                <li>
                    <a data-toggle="collapse" href="#faq4" className="collapsed">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="ion-android-remove"></i></a>
                    <div id="faq4" className="collapse" data-parent="#faq-list">
                    <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </p>
                    </div>
                </li>

                <li>
                    <a data-toggle="collapse" href="#faq5" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="ion-android-remove"></i></a>
                    <div id="faq5" className="collapse" data-parent="#faq-list">
                    <p>
                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                    </p>
                    </div>
                </li>

                <li>
                    <a data-toggle="collapse" href="#faq6" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="ion-android-remove"></i></a>
                    <div id="faq6" className="collapse" data-parent="#faq-list">
                    <p>
                        Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                    </p>
                    </div>
                </li>

                </ul>

            </div>
            </section>


            <section id="team" className="section-bg">
            <div className="container">
                <div className="section-header">
                <h3 className="section-title">Our Team</h3>
                <span className="section-divider"></span>
                <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <div className="row wow fadeInUp">
                <div className="col-lg-3 col-md-6">
                    <div className="member">
                    <div className="pic"><img src="img/team/team-1.jpg" alt=""/></div>
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                    <div className="social">
                        <a href=""><i className="fa fa-twitter"></i></a>
                        <a href=""><i className="fa fa-facebook"></i></a>
                        <a href=""><i className="fa fa-google-plus"></i></a>
                        <a href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="member">
                    <div className="pic"><img src="img/team/team-2.jpg" alt=""/></div>
                    <h4>Sarah Jhinson</h4>
                    <span>Product Manager</span>
                    <div className="social">
                        <a href=""><i className="fa fa-twitter"></i></a>
                        <a href=""><i className="fa fa-facebook"></i></a>
                        <a href=""><i className="fa fa-google-plus"></i></a>
                        <a href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="member">
                    <div className="pic"><img src="img/team/team-3.jpg" alt=""/></div>
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                    <div className="social">
                        <a href=""><i className="fa fa-twitter"></i></a>
                        <a href=""><i className="fa fa-facebook"></i></a>
                        <a href=""><i className="fa fa-google-plus"></i></a>
                        <a href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="member">
                    <div className="pic"><img src="img/team/team-4.jpg" alt=""/></div>
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                    <div className="social">
                        <a href=""><i className="fa fa-twitter"></i></a>
                        <a href=""><i className="fa fa-facebook"></i></a>
                        <a href=""><i className="fa fa-google-plus"></i></a>
                        <a href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                    </div>
                </div>
                </div>

            </div>
            </section>


            <section id="gallery">
            <div className="container-fluid">
                <div className="section-header">
                <h3 className="section-title">Gallery</h3>
                <span className="section-divider"></span>
                <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>

                <div className="row no-gutters">

                <div className="col-lg-4 col-md-6">
                    <div className="gallery-item wow fadeInUp">
                    <a href="img/gallery/gallery-1.jpg" className="gallery-popup">
                        <img src="img/gallery/gallery-1.jpg" alt=""/>
                    </a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="gallery-item wow fadeInUp">
                    <a href="img/gallery/gallery-2.jpg" className="gallery-popup">
                        <img src="img/gallery/gallery-2.jpg" alt=""/>
                    </a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="gallery-item wow fadeInUp">
                    <a href="img/gallery/gallery-3.jpg" className="gallery-popup">
                        <img src="img/gallery/gallery-3.jpg" alt=""/>
                    </a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="gallery-item wow fadeInUp">
                    <a href="img/gallery/gallery-4.jpg" className="gallery-popup">
                        <img src="img/gallery/gallery-4.jpg" alt=""/>
                    </a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="gallery-item wow fadeInUp">
                    <a href="img/gallery/gallery-5.jpg" className="gallery-popup">
                        <img src="img/gallery/gallery-5.jpg" alt=""/>
                    </a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="gallery-item wow fadeInUp">
                    <a href="img/gallery/gallery-6.jpg" className="gallery-popup">
                        <img src="img/gallery/gallery-6.jpg" alt=""/>
                    </a>
                    </div>
                </div>

                </div>

            </div>
            </section>


            <section id="contact">
            <div className="container">
                <div className="row wow fadeInUp">

                <div className="col-lg-4 col-md-4">
                    <div className="contact-about">
                    <h3>Avilon</h3>
                    <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                    <div className="social-links">
                        <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                        <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4">
                    <div className="info">
                    <div>
                        <i className="ion-ios-location-outline"></i>
                        <p>A108 Adam Street<br/>New York, NY 535022</p>
                    </div>

                    <div>
                        <i className="ion-ios-email-outline"></i>
                        <p>info@example.com</p>
                    </div>

                    <div>
                        <i className="ion-ios-telephone-outline"></i>
                        <p>+1 5589 55488 55s</p>
                    </div>

                    </div>
                </div>

                <div className="col-lg-5 col-md-8">
                    <div className="form">
                    <div id="sendmessage">Your message has been sent. Thank you!</div>
                    <div id="errormessage"></div>
                    <form action="" method="post" role="form" className="contactForm">
                        <div className="form-row">
                        <div className="form-group col-lg-6">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validation"></div>
                        </div>
                        <div className="form-group col-lg-6">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validation"></div>
                        </div>
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                        <div className="validation"></div>
                        </div>
                        <div className="form-group">
                        <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                        <div className="validation"></div>
                        </div>
                        <div className="text-center"><button type="submit" title="Send Message">Send Message</button></div>
                    </form>
                    </div>
                </div>

                </div>

            </div>
            </section>

        </main>

        <footer id="footer">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 text-lg-left text-center">
                <div className="copyright">
                    &copy; Copyright <strong>Avilon</strong>. All Rights Reserved
                </div>
                <div className="credits">
                
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
                </div>
                <div className="col-lg-6">
                <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
                    <a href="#intro" className="scrollto">Home</a>
                    <a href="#about" className="scrollto">About</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                </nav>
                </div>
            </div>
            </div>
        </footer>
      </div>
    );
}


