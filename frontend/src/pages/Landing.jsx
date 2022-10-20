import '../styling/Landing.css';
function Landing() {
    return (
        <div className='landing-container' style={{display: "flex", height: "100vh", alignItems: "center", justifyContent: "center", backgroundColor: "#87609f"}}>
            <div className="inner-container">
                <h1 style={{height: '150px'}}>
                    <span>Welcome</span>
                    <span>to</span>
                    <span>Tucows!</span>
                </h1>
            </div>
        </div>

    )
}

export default Landing;