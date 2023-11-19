import imgs from "./assets/images/img.png"
export const HeroSection = () =>{

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-6">
                    <h1>Hello I am </h1>
                    <h1>Gungun Sadhwani</h1>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-6">
                    <img src={imgs} alt="no profile"/>
                </div>

            </div>
        </div>
    )
}