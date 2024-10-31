import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Cambiar Switch a Routes
import { HelmetMeta } from "./HelmetMeta";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";
import { logCredits } from "../utils/logCredits";

import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Resume } from "../pages/Resume";
import { PageNotFound } from "../pages/PageNotFound";

export const App = () => {
    logCredits();

    return (
        <ThemeProvider>
            <CssBaseline />
            <Router>
                <HelmetMeta />
                <Routes> {/* Cambiar Switch a Routes */}
                    <Route path="/" element={<Home />} /> {/* Cambiar component a element */}
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};
