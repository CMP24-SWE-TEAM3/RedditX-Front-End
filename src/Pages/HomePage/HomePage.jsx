import React, {Component, useState} from 'react';
import {Container, MainContainer} from "./HomePage.styled";
import Navbar from "Layouts/Navbar/Navbar";
import CreatePost from "Layouts/CreatePost/CreatePost";
import TopCommunities from "Components/CommunityCard/CommunityCard";
import PopularPosts from "Layouts/PopularPosts/PopularPosts";
import CreatePostSideBar from "Layouts/CreatePostSideBar/CreatePostSideBar";
import Footer from "Layouts/Footer/Footer";
import * as styles from "App.styled";
import lightTheme from "Theme/lightTheme";
import defaultTheme from "Theme/defaultTheme";
import darkTheme from "Theme/darkTheme";
import {ThemeProvider} from "styled-components";
import ScrollButton from "Components/ScrollButton/ScrollButton";
import {SideBar} from "Components/DropDownButtonLeft/DropDownLeft";

/**
 * Component that displays a list of layouts such as  posts , navigation , and sidebar.
 *
 * @returns {React.Component} returns an instance of HomePage with a list of layouts created
 */

const HomePage = () => {

    const [theme, setTheme] = useState({...defaultTheme, ...lightTheme});
    return (

        <ThemeProvider theme={theme}>
            <styles.AppContainer>
                <styles.AppHeader>
                    <Navbar/>
                    <MainContainer>
                        {/*<SideBar/>*/}
                        <div className="main"/>
                        <Container>
                            <div className={'content-posts'}>
                                <CreatePost/>
                                <PopularPosts/>
                                {/*<div className={'posts'}>*/}
                                {/*</div>*/}
                            </div>
                            <aside>
                                <div className={'sidebar'}>
                                    <TopCommunities/>

                                    <div className={'create-community'}>
                                        <CreatePostSideBar/>
                                    </div>
                                    <footer>
                                        <div className={'child-footer'}>
                                            <Footer/>
                                        </div>
                                        <div className={'scroll-but'}>
                                            <ScrollButton/>
                                        </div>
                                    </footer>
                                </div>
                            </aside>
                        </Container>
                    </MainContainer>
                </styles.AppHeader>
            </styles.AppContainer>
        </ThemeProvider>
    );
};

export default HomePage;
