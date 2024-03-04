// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AdminStudent from './pages/AdminStudent';
// import StudentLogin from './pages/StudentLogin';
// import AdminLogin from './pages/AdminLogin';
// import StudentSignup from './pages/StudentSignup';
// import AdminSignup from './pages/AdminSignup';
// import StudentHomepage from './pages/StudentHomepage';
// import AdminDashboard from './pages/AdminDashboard';
// import AdminAnnouncements from './pages/AdminAnnouncements';
// import AdminEvents from './pages/AdminEvents';
// import AdminArticles from './pages/AdminArticles';
// import AdminTeachers from './pages/AdminTeachers';
// import AdminSideBar from './components/AdminSideBar';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public routes */}
//         <Route path="/" element={<AdminStudent />} />
//         <Route path="/Login/Student" element={<StudentLogin />} />
//         <Route path="/Login/Admin" element={<AdminLogin />} />
//         <Route path="/Signup/Student" element={<StudentSignup />} />
//         <Route path="/Signup/Admin" element={<AdminSignup />} />

//         {/* Private routes with AdminSideBar */}
//         <Route element={<AdminSideBar />}>
//           <Route path="/AdminDashboard" element={<AdminDashboard />} />
//           <Route path="/AdminAnnouncements" element={<AdminAnnouncements />} />
//           <Route path="/AdminEvents" element={<AdminEvents />} />
//           <Route path="/AdminArticles" element={<AdminArticles />} />
//           <Route path="/AdminTeachers" element={<AdminTeachers />} />
//         </Route>

//         {/* Student homepage */}
//         <Route path="/StudentHomepage" element={<StudentHomepage />} />
//       </Routes>
//     </Router>
//   );
// } 

// export default App;






import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminStudent from './pages/AdminStudent';
import StudentLogin from './pages/StudentLogin';
import AdminLogin from './pages/AdminLogin';
import StudentSignup from './pages/StudentSignup';
import AdminSignup from './pages/AdminSignup';
import StudentHomepage from './pages/StudentHomepage';
import AdminDashboard from './pages/AdminDashboard';
import AdminSideBar from './components/AdminSideBar';
import AdminAnnouncements from './pages/AdminAnnouncements';
import AdminEvents from './pages/AdminEvents';
import AdminArticles from './pages/AdminArticles';
import AdminTeachers from './pages/AdminTeachers';


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<AdminStudent />} />
      <Route path="/Login/Student" element={<StudentLogin />} />
      <Route path="/Login/Admin" element={<AdminLogin/>} />
      <Route path="/Signup/Student" element={<StudentSignup/>} />
      <Route path="/Signup/Admin" element={<AdminSignup/>} />

      <Route path="/StudentHomepage" element={<StudentHomepage/>} />

      <Route path="/AdminDashboard" element={<AdminDashboard/>} />
      <Route path="/AdminAnnouncements" element={<AdminAnnouncements/>} />
      <Route path="/AdminEvents" element={<AdminEvents/>} />
      <Route path="/AdminArticles" element={<AdminArticles/>} />
      <Route path="/AdminTeachers" element={<AdminTeachers/>} />
    </Routes>
  </Router>
);
}
export default App;
