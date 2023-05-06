function Hero() {
    return (

        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Join Us in Making a Difference</h5>
                            <p>Together, we can create a better world. Join our mission to empower communities and make a lasting impact on the lives of those in need.</p>
                        </div>
                </div>
                <div class="carousel-item">
                    <img src="https://images.pexels.com/photos/1002061/pexels-photo-1002061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Every Life Counts</h5>
                            <p>We believe that every life counts, and we're committed to making a positive difference in the world. Join us in our efforts to improve the lives of individuals and communities around the globe.</p>
                        </div>
                </div>
                <div class="carousel-item">
                    <img src="https://images.pexels.com/photos/6646864/pexels-photo-6646864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Building a Better World</h5>
                            <p>Our mission is to build a better world by supporting communities in need. Join us in our efforts to make a lasting impact and create a brighter future for all.</p>
                        </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Hero;