import { useRoutes, BrowserRouter,useLocation } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/RootLayout";
import LandingPage from "./components/LandingPage";
import FarmerRegister from "./components/FarmerRegister";
import FarmerLogin from "./components/FarmerLogin";
import CpuLogin from "./components/CpuLogin";
import AcordcLogin from "./components/AcordcLogin";
import MfeLogin from "./components/MfeLogin";
import CpcLogin from "./components/CpcLogin";
import FarmerInterface from "./components/FarmerInterface";
import Sidebar from './components/Sidebar';
import Dashboard from './components/Acdc_List';
import About from './components/Acdc_About';
import Analytics from './components/Acdc_Cost';
import Product from './components/Acdc_Capacity';
import ProductList from './components/Acdc_List';
import CPUAbout from "./components/CPUAbout";
import CPUAnalytics from "./components/CPUAnalytics";
import CPUComment from "./components/CPUComment";
import CPUDashboard from "./components/CPUDashboard";
import CPUProduct from "./components/CPUProduct";
import CPUSidebar from "./components/CPUSidebar";
import MFEId from "./components/MFE_Id";
import MFEAbout from "./components/MFE_About";
import MFECost from "./components/MFE_Cost";
import MFECapacity from "./components/MFE_Capacity";
import MFEProductList from "./components/MFE_LIST";
import MFESidebar from "./components/MFESidebar";
import CPCId from "./components/CPC_Id";
import CPCAbout from "./components/CPC_About";
import CPCCost from "./components/CPC_Cost";
import CPCCapacity from "./components/CPC_Capacity";
import CPCProductList from "./components/CPC_LIST";
import CPCSidebar from "./components/CPC_Sidebar";

{/* <BrowserRouter>
<CPCSidebar>
  <Routes>
    <Route path="/" element={<CPCId />} />
    <Route path="/CPC_Id" element={<CPCId />} />
    <Route path="/CPC_About" element={<CPCAbout />} />
    <Route path="/CPC_Cost" element={<CPCCost />} />
    <Route path="/CPC_Capacity" element={<CPCCapacity />} />
    <Route path="/CPC_List" element={<CPCProductList />} />
  </Routes>
</CPCSidebar>
</BrowserRouter> */}


const Main = () => {
  const location = useLocation();
  const isDashboardRoute = location.pathname === "/acdcinterface" || location.pathname === "/Acdc_Id" || location.pathname === "/Acdc_About" ||  location.pathname === "/Acdc_Cost" || location.pathname === "/Acdc_List" || location.pathname === "/Acdc_Capacity";
  const iscpuroute= location.pathname === "/CPUDashboard" || location.pathname === "/CPUAbout" || location.pathname === "/CPUComment" || location.pathname === "/CPUAnalytics" || location.pathname ==="/CPUProduct" || location.pathname === "/CPUProductList"
  const ismferoute= location.pathname === "/MFE_Id" || location.pathname === "/MFE_About" || location.pathname === "/MFE_Cost" || location.pathname === "/MFE_Capacity" || location.pathname ==="/MFE_List"
  const iscpcroute= location.pathname === "/CPC_Id" || location.pathname === "/CPC_About" || location.pathname === "/CPC_Cost" || location.pathname === "/CPC_Capacity" || location.pathname ==="/CPUProduct" || location.pathname === "/CPC_List"



  const routes = useRoutes([
    {
      path:"/",
      element:<LandingPage/>,
    },
    {
      path:"/farmerregister",
      element:<FarmerRegister/>
    },
    {
      path:"/farmerlogin",
      element:<FarmerLogin/>,
    },
    {
      path:"/cpulogin",
      element:<CpuLogin/>
    },
    {
      path:"/acordclogin",
      element:<AcordcLogin/>
    },
    {
      path:"/mfelogin",
      element:<MfeLogin/>
    },
    {
      path:"/cpclogin",
      element:<CpcLogin/>
    },
    {
      path:"/farmerinterface",
      element:<FarmerInterface/>
    },
    {
      path:"/acdcinterface",
      element:<Dashboard />,

    },
    {
      path:"/Acdc_Id",
      element:<Dashboard />,
    },
    {
      path:"/Acdc_About",
      element:<About />,
    },
    {
      path:"Acdc_Cost",
      element:<Analytics />
    },
    {
      path:"/Acdc_Capacity",
      element:<Product />
    },
    {
      path:"/Acdc_List",
      element:<ProductList />,
    },
    {
      path:"/CPUDashboard",
      element:<CPUDashboard />,
    },
    {
      path:"/CPUAbout",
      element:<CPUAbout />,
    },
    {
      path:"/CPUComment",
      element:<CPUComment />,
    },
    {
      path:"/CPUAnalytics",
      element:<CPUAnalytics />,
    },
    {
      path:"/CPUProduct",
      element:<CPUProduct/>,
    },
    {
      path:"/CPUProductList",
      element:<CPUProduct/>,
    },
    {
      path:"/MFE_Id",
      element:<MFEId/>,
    },
    {
      path:"/MFE_About",
      element:<MFEAbout/>,
    },
    {
      path:"/MFE_Cost",
      element:<MFECost/>,
    },
    {
      path:"/MFE_Capacity",
      element:<MFECapacity/>,
    },
    {
      path:"/MFE_List",
      element:<MFEProductList/>,
    },
    {
      path:"/CPC_Id",
      element:<CPCId/>,
    },
    {
      path:"/CPC_About",
      element:<CPCAbout/>,
    },
    {
      path:"/CPC_Cost",
      element:<CPCCost/>,
    },
    {
      path:"/CPC_Capacity",
      element:<CPCCapacity/>,
    },
    {
      path:"/CPC_List",
      element:<CPCProductList/>,
    }
  ]);

  if (isDashboardRoute) {
    return <Sidebar>{routes}</Sidebar>
  } else if (iscpuroute) {
    return <CPUSidebar>{routes}</CPUSidebar>
  }
    else if (ismferoute) {
      return <MFESidebar>{routes}</MFESidebar>
    }
    else if (iscpcroute) {
      return <CPCSidebar>{routes}</CPCSidebar>
    }
   else {
    return routes
  }
}


function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
