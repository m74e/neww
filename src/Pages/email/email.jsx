import React from "react";
import "./email.css";
import Eye from "/public/eye.svg";
import Greeneye from "/public/greeneye.svg"
// const [name, setName] = useState();
export default function email() {
  // const handleChange = (name) => setName(name);
  return (

    
    <>
      <main>
        <div className="lines">
          <div className="one-line"></div>
          <div className="two-line"></div>
          <div className="three-line"></div>
        </div>
        <div className="enInfo">
          <h1>Enter Your Information</h1>
          <p>
            Please enter your personal information to complete the registration{" "}
            <br />
            process.
          </p>
          <div className="inputname">
            <p>Name</p>
            <input type="name" placeholder="Enter your Full name " />
          </div>
          <div className="inputname">
            <p>Email</p>
            <input type="email" placeholder="Enter your Email Address " />
          </div>
          <div className="inputname">
            <p>Password</p>
            <div className="inside">
              <input type="password" placeholder="Enter Password " />
              <img className="internalimg" src={Eye} alt="" />
              <img className="internalimggreen" src={Greeneye} alt="" />
            </div>
          </div>
        </div>
        <button className="next3" >
          <p>Complete registration</p>
        </button>
      </main>
    </>
  );
}
