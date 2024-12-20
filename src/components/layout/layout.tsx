import React, { ReactNode } from "react";
import Footer from "./footer/footer";
import NavbarWide from "./navbar-wide/navbar-wide";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="dark flex flex-col min-h-screen relative bg-zinc-900 text-primary">
      <NavbarWide />
      <main className="grow animate-fade-in">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
