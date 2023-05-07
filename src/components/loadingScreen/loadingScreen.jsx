import "./loadingScreen.css";

function LoadingScreen() {
  
  return (
    <div id="loadContain" className="loadContain">
      <div className="loadingScreen">
        <img
          src="./../../../img/loadingScreen/catHqd.png"
          className="cat"
        ></img>
        <img
          src="./../../../img/loadingScreen/logoParDelivery.png"
          className="label"
        ></img>
      </div>
    </div>
  );
}

export default LoadingScreen;
