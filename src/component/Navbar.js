import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
//import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  console.log("menu", menuList);
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const goToLogin = () => {
    navigate("/login");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      //console.log("we click this keey", event.key);
      //d입력한 검색어를 읽어 와서
      let keyword = event.target.value;
      //url을 바꿔준다
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      {authenticate ? (
        <div className="login-button" onClick={() => setAuthenticate(false)}>
          <FontAwesomeIcon icon={faUser} />
          <span>로그아웃</span>
        </div>
      ) : (
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div className="login">로그인</div>
        </div>
      )}

      <div className="nav">
        <img
          width={120}
          src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/3e17273b-330d-4466-b158-d302aaa27d43"
          alt="H&M"
          onClick={goToHome}
        />
      </div>
      <div className="menuArea">
        <ul className="menulist">
          {menuList.map((menu) => (
            <li key={menu.index}>{menu}</li>
          ))}
        </ul>

        <div className="menuRight">
          <FontAwesomeIcon className="search" icon={faSearch} />
          <input type="text" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
