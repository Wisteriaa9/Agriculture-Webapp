import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
function LandingPage() {
    const navigate=useNavigate();
  return (
    <div>
              <nav className="header navbar navbar-expand-lg border border-dark border-top-0 border-left-0 border-right-0">
        <div className="container-fluid">
          <div className="logo">
            {/* <img className="navimg" src={img1} width='40px' alt="" /> */}
            <ul className="navbar-nav ">
              <li>
                <a className="nav-link ">
                  <b className='text-white'>LETS_ENDORSE</b>
                </a>
              </li>
            </ul>
          </div>

          <div className="child1" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link text-[white]">
                  <div className='text-white'>Aboutus</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
         <div className="flex flex-wrap">
        <div className="h-[400px] w-[400px] bg-[#5655c6] rounded-2xl mt-[100px] mr-[100px] ml-[50px] justify-center text-center">
          <div className="pt-[100px]">
          <h1 className="text-white m-[15px] font-sans ">Login as Farmer</h1>
          <Link to="/farmerregister">
          <button className="border border-1 border-[#5655c6] w-[100px] bg-[#5655c6] text-white rounded-3xl mt-[20px] py-2 px-3 cursor-pointer">
            LOGIN
          </button>
          </Link>
          </div>
        </div>

        <div className="h-[400px] w-[400px] bg-[#5655c6] rounded-2xl mt-[100px] justify-center text-center">
          <div className="pt-[100px]">
          <h1 className="text-white m-[15px] font-sans ">Login as CPU</h1>
          <Link to="/cpulogin">
          <button className="border border-1 border-[#5655c6] w-[100px] bg-[#5655c6] text-white rounded-3xl mt-[20px] py-2 px-3 cursor-pointer">
            LOGIN
          </button>
          </Link>
          </div>
        </div>


        <div className="h-[400px] w-[400px] bg-[#5655c6] rounded-2xl m-[100px] justify-center text-center">
          <div className="pt-[100px]">
          <h1 className="text-white m-[15px] font-sans ">Login as AC/DC</h1>
          <Link to="/acordclogin">
          <button className="border border-1 border-[#5655c6] w-[100px] bg-[#5655c6] text-white rounded-3xl mt-[20px] py-2 px-3 cursor-pointer">
            LOGIN
          </button>
          </Link>
          </div>
        </div>

        <div className="h-[400px] w-[400px] bg-[#5655c6] rounded-2xl ml-[400px] mb-[100px] justify-center text-center">
          <div className="pt-[100px]">
          <h1 className="text-white m-[15px] font-sans ">Login as MFE</h1>
          <Link to="mfelogin">
          <button className="border border-1 border-[#5655c6] w-[100px] bg-[#5655c6] text-white rounded-3xl mt-[20px] py-2 px-3 cursor-pointer">
            LOGIN
          </button>
          </Link>
          </div>
        </div>


        <div className="h-[400px] w-[400px] bg-[#5655c6] rounded-2xl ml-[100px] mb-[100px] justify-center text-center">
          <div className="pt-[100px]">
          <h1 className="text-white m-[15px] font-sans ">Login as CPC</h1>
          <Link to="cpclogin">
          <button className="border border-1 border-[#5655c6] w-[100px] bg-[#5655c6] text-white rounded-3xl mt-[20px] py-2 px-3 cursor-pointer">
            LOGIN
          </button>
          </Link>
          </div>
        </div>


        

      </div>

      <div>
        <div className="border-2 border-right-0 flex justify-around flex-wrap pt-[50px] mt-[50px]">
        <div className="v">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <span className="font-lg text-[black] font-bold">LETS ENDORSE</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
                qwer yafyd guyags uuigc uigauigsgf igugasug haiujkksd cjiodg ohgiuh aiuhfiush dfusaufgsdiug saguiagfifgs ihauigff iuiaiufsd iuhiuahfuisa huiasf iiahuifhuu uiuahfius iuihaiufhaiu.
            </p>
        </div>
        <div>
        <div className="co">
          <h5 className="text-uppercase fw-bold mb-4 ">
            CONTACT
          </h5>
          <p>
            <a href="#!" className="text-reset">xxxxxx,xxx</a>
          </p>
          <p>
            <a href="#!" className="text-reset">xxxxxxxxx@gmail.com</a>
          </p>
          <p>
            <a href="#!" className="text-reset">+91 9999999999</a>
          </p>
          <p>
          <a href="#!" className="text-reset">xxxxx.ac.in</a>
          </p>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default LandingPage