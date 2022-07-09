import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";
import ErrorBoundary from "components/ErrorBoundary";
import Home from "pages/home";
import About from "pages/about";
import Blogs from "pages/blogs";
import Gallery from "pages/gallery";
import Contact from "pages/contact";

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 120px 16px 0px 16px;
  align-items: center;
  flex: 1;
  z-index: 1;
`;

function App() {
  return (
    <ErrorBoundary>
      <AppWrapper>
        <HeaderWrapper>
          <div>
            <h1>hdu35</h1>
            <nav>
              <ul>
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"blogs"}>Blogs</NavLink>
                </li>
                <li>
                  <NavLink to={"gallery"}>Gallery</NavLink>
                </li>
                <li>
                  <NavLink to={"contact"}>Contact</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </HeaderWrapper>
      </AppWrapper>

      <BodyWrapper>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BodyWrapper>
    </ErrorBoundary>
  );
}

export default App;
