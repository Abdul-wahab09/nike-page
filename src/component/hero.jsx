const HeroSection = () => {
    return ( 
 <main className="hero container">
    <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
       <p> YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="hero-btn">
        <button className="first">shopnow</button>
        <button className="second">category</button>
        </div>

        <div className="shopping">
            <p>Also Avalible on</p>
            <div className="brand-icons">
                <img src="/images/flipkart.png" alt="fiipkart" />
                <img src="/images/amazon.png" alt="Amazon" />
            </div>
        </div>
    </div>

    <div className="hero-img">
     <img src="/images/shoe_image.png" alt="shoes image" />
    </div>
 </main>
    )
}

export default HeroSection;