"use client";

import LoginForm from "./LoginForm";

export default function Home({ adminId, posterId }) {
  return (
    <div className="">
      <Header />
      {/* <Test /> */}
      <LoginForm adminId={adminId} posterId={posterId} />

      <Footer />
    </div>
  );
}
