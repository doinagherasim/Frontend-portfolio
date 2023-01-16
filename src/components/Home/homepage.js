import frontend from "../../assets/frontend.png";

function HomePage() {
  return (
    <div className="containe-home">
        <img className="background" src={frontend}/>
        <div className="header">
            <div>gmail</div>
            <div>
                <ul>
                    <li>About me</li>
                    <li>Resources</li>
                    <li>Certificates</li>
                    <li>Projects</li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default HomePage;