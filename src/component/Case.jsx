import React from "react";
import Navbar from "./navbar";

export default function Case({ children }) {
    return (
    
        <div className="bg-gray-900 dark:bg-gray-900 min-h-screen">
        <Navbar />
        <section>{children}</section>
        </div>
    );
}