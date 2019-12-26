import React from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import CourseGrid from "./components/CourseGrid";
import "./styles/styles.scss";

const App = () => (
    <>
        <Banner />
        <Form name={"EDTeam"} />
        <CourseGrid />
    </>
);

export default App;
