import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Time Keeper</h1>

			<div className="card">
			<img className="card-img-top" src="https://ak.picdn.net/shutterstock/videos/386866/thumb/1.jpg?ip=x480" alt="cardbackground" height={'320px'} />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and fill the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
			<p>
				
				<img src="https://www.chungkong.nl/wp-content/uploads/2017/05/No802-1-My-The-Terminator-1-minimal-movie-poster-720PX.jpg" alt="Smiley face" />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
		</div>
	);
};

export default Home;
