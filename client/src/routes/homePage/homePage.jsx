import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find your dream property</h1>
          <p>

          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg1.jpg" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
