// imports
import React, {useState} from 'react';
import {Container, MainContainer} from "./HomePage.styled";
import Navbar from "Layouts/Navbar/Navbar";
import CreatePost from "Layouts/CreatePost/CreatePost";
import TopCommunities from "Layouts/CommunityCard/CommunityCard";
import PopularPosts from "Layouts/PopularPosts/PopularPosts";
import CreatePostSideBar from "Layouts/CreatePostSideBar/CreatePostSideBar";
import Footer from "Layouts/Footer/Footer";
import * as styles from "App.styled";
import lightTheme from "Theme/lightTheme";
import defaultTheme from "Theme/defaultTheme";
import {ThemeProvider} from "styled-components";
import ScrollButton from "Components/ScrollButton/ScrollButton";
import darkTheme from "Theme/darkTheme";
import RecentPosts from "Layouts/RecentPosts/RecentPosts";

/**
 * Component that displays a list of layouts such as  posts , navigation , and sidebar.
 *
 * @returns {React.Component} returns an instance of HomePage with a list of layouts created
 */

const HomePage = () => {
    const [theme, setTheme] = useState({...defaultTheme, ...lightTheme});
    const handleToggleTheme = () => {
        if (theme.id === "dark") {
            setTheme({...defaultTheme, ...lightTheme});
        } else {
            setTheme({...defaultTheme, ...darkTheme});
        }
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <styles.AppContainer>
                    <styles.AppHeader>
                        <Navbar toggleMode={handleToggleTheme} theme={theme}/>
                        <MainContainer>
                            <div className="main"/>
                            <Container>
                                <div className={'content-posts'}>
                                    <CreatePost/>
                                    <PopularPosts/>
                                    {/*<Button onClick={handleToggleTheme}>*/}
                                    {/*    Toggle theme*/}
                                    {/*</Button>*/}
                                    {/*<div className={'posts'}>*/}
                                    {/*</div>*/}
                                </div>
                                <aside>
                                    <div className={'sidebar'}>
                                        <TopCommunities/>

                                        <div className={'create-community'}>
                                            <CreatePostSideBar/>
                                        </div>
                                        <div className={'recent-posts'}>
                                            <div>
                                            <RecentPosts/>
                                            </div>
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
        </>
    );
};

export default HomePage;
