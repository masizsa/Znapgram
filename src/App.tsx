import { Routes, Route } from "react-router-dom";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import { Home, Explore, Saved, AllUser, CreatePost, UpdatePost, PostDetails, Profile,UpdateProfile  } from "./_root/pages";
import "./globals.css";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <main className="flex h-screen">
      {/* Public Route */}
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        <Route element={<RootLayout/>}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUser />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<UpdatePost />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
        {/* Private Route */}
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
