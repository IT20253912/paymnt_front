// import React from 'react';
// import{BrowserRouter, Routes, Route} from 'react-router-dom'

// //pages and compoenets
// // import Home from './pages/Home'
// import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'
// // import UserSelectPhotos from './pages/UserSelectPhotos'
// import Footer from './components/Footer'
// import HomeGallery from './components/homePageGallery'
// import HomePageCard from './components/homePageCard'
// import UserLoginPage from './components/UserManagement/userLogin'

// //Import pages - Event Management
// import EventPhotos from './pages/EventManagement/selectPhotosAlbum'
// import Album from './pages/EventManagement/photoAlbum'
// import CustomeEvent from './pages/EventManagement/userEventDetails'
// import AllAlbums from './pages/EventManagement/allAlbums'

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Navbar/>
//           <Routes>
//             <Route
//               path='/'
//               element={<>
//                 <HomeGallery />
//                 <br></br>
//                 <HomePageCard />
//               </>}
//             />
//             <Route
//               path='/signin'
//               element={<UserLoginPage/>}
//             />
//             <Route
//               path='/selectPhotos'
//               element={<>
//                 <Sidebar />
//                 <EventPhotos/>
//                 <br></br>
//               </>}
//             />
//             <Route
//               path='/viewVideos'
//               element={<>
//                 <Sidebar />
//                 <br></br>
//               </>}
//             />
//             <Route
//               path='/viewAlbum'
//               element={<>
//                 <Sidebar />
//                 <Album/>
//                 <br></br>
//               </>}
//             />
//             <Route
//               path='/paymentHistory'
//               element={<>
//                 <Sidebar />
//                 <br></br>
//               </>}
//             />
//             <Route
//               path='/cusEventInfo'
//               element={<>
//                 <CustomeEvent />
//                 <br></br>
//               </>}
//             />
//             <Route
//               path='/manageAlbums'
//               element={<>
//                 <AllAlbums />
//                 <br></br>
//               </>}
//             />
//           </Routes>
//           <br></br>
//         <Footer/>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeGallery from './components/homePageGallery';
import HomePageCard from './components/homePageCard';
import SideBar from './components/Sidebar'

//User Management - Import Pages
import UserLoginPage from './components/UserManagement/userLogin';

//Event Management - Import Pages
import EventPhotos from './pages/EventManagement/selectPhotosAlbum';
import Album from './pages/EventManagement/photoAlbum';
import CustomeEvent from './pages/EventManagement/userEventDetails';
import AllAlbums from './pages/EventManagement/allAlbums';

//Event Management - Import Components
import CustomerDetails from './components/EventManagement/userEventDetails'; 
import EditPhotoAlbum from './components/EventManagement/editPhotoAlbum'; 


import AddPayment from './components/PaymentManagement/Addpayment'; 
import AddPaymentn from './components/PaymentManagement/Addpaymentn'; 
import ViewPayment from './components/PaymentManagement/Viewpayment'; 
import DeletePayment from './components/PaymentManagement/Deletepayment'; 
import Viewpackages from './components/PaymentManagement/Viewpackages'; 
import Editpackages from './components/PaymentManagement/Editpackage'; 
import Mainpackages from './components/PaymentManagement/Mainpackages'; 
import Weddingpackages from './components/PaymentManagement/Weddingpackages'; 
import Partpackages from './components/PaymentManagement/Partpackages'; 
import Graduationpackages from './components/PaymentManagement/Graduationpackages'; 
import Otherpackages from './components/PaymentManagement/Otherpackages'; 



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<>
              <HomeGallery />
              <br />
              <HomePageCard />
            </>}
          />
          <Route
            path='/signin'
            element={<UserLoginPage />}
          />
          <Route
            path='/selectPhotos'
            element={<>
              <SideBar/>
              <EventPhotos />
              <br />
            </>}
          />
          <Route
            path='/viewVideos'
            element={<>
              <SideBar/>
              <br />
            </>}
          />
          <Route
            path='/viewAlbum'
            element={<>
              <SideBar/>
              <Album />
              <br />
            </>}
          />
          <Route
            path='/paymentHistory'
            element={<>
              <SideBar/>
              <br />
            </>}
          />
          <Route
            path='/cusEventInfo'
            element={<>
              <CustomeEvent />
              <br />
            </>}
          />
          <Route
            path='/manageAlbums'
            element={<>
              <AllAlbums />
              <br />
            </>}
          />
          <Route path='/customerDetails/:eventId' element={<CustomerDetails />} />
          <Route path='/editAlbum/:photoAlbumId' element={<EditPhotoAlbum />} />
          <Route path='/addpayment' element={<AddPayment />} />
          <Route path='/addpaymentn' element={<AddPaymentn />} />
          <Route path='/viewpayment' element={<ViewPayment />} />
          <Route path='/payment' element={<DeletePayment />} />
          <Route path='/viewpackages' element={<Viewpackages />} />
          <Route path='/editpackages' element={<Editpackages />} />
          <Route path='/mainpackages' element={<Mainpackages />} />

          <Route path='/weddingpackages' element={<Weddingpackages />} />
          <Route path='/partypackages' element={<Partpackages />} />
          <Route path='/graduationpackages' element={<Graduationpackages />} />
          <Route path='/otherpackages' element={<Otherpackages />} />
        </Routes>
        <br />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

