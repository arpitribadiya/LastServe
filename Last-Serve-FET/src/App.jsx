import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminSidebar from "./components/Admin/AdminSidebar";
import NewPassword from "./components/NewPassword/NewPassword";
import PasswordReset from "./components/PasswordReset/PasswordReset";
import SignUp from "./components/Signup/Signup";
import UserProfile from "./components/UserProfile/UserProfile";
import SignupRestaurant from "./components/SignupRestaurant/SignupRestaurant";
import RestaurantApprovalPending from "./components/RestaurantApprovalPending/RestaurantApprovalPending";
import RestaurantSideBar from "./components/RestaurantSideBar/RestaurantSideBar";
import Subscription from "./components/Subscription/Subscription";
import Appointment from "./components/Appoinment/Appointment";
import SignupVolunteer from "./components/Volunteer/SignupVolunteer";
import RestaurantLogin from "./components/RestaurantLogin/RestaurantLogin";
import ProtectedRoute from "./components/Authentication/ProtectedRoute";
import PastPosts from "./components/PastPosts/PastPosts";
import CreatePost from "./components/CreatePost/CreatePost";
import EditPost from "./components/EditPost/EditPost";
import ViewPost from "./components/ViewPost/ViewPost";
import DonationAmount from "./components/Donations/DonationAmount";
import DonationForm from "./components/Donations/DonationForm";
import DonationFinal from "./components/Donations/DonationFinal";

const App = () => {
  return (
    <StyledApp className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Landing />
            </ProtectedRoute>
          }
        />
        <Route path="/passwordReset" element={<PasswordReset />} />
        <Route path="/newPassword" element={<NewPassword />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/signupRestaurant" element={<SignupRestaurant />} />
        <Route path="/restaurantLogin" element={<RestaurantLogin />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/approvalPending"
          element={<RestaurantApprovalPending />}
        />
        <Route path="/restaurantSideBar" element={<RestaurantSideBar />} />
        <Route path="/adminDashboard" element={<AdminSidebar />} />
        <Route path="/restaurants" element={<Subscription />} />
        <Route path="/signupVolunteer" element={<SignupVolunteer />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/pastPosts" element={<PastPosts />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/updatePost" element={<EditPost />} />
        <Route path="/viewPost" element={<ViewPost />} />
        <Route path="/donationAmount" element={<DonationAmount />} />
        <Route path="/donationForm" element={<DonationForm />} />
        <Route path="/donationfinal" element={<DonationFinal />} />
      </Routes>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default App;
