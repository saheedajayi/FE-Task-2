import React, {Fragment} from 'react';
import SideBar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import styles from "./styles/Page.module.css"
import Content from "../components/Content";




interface IProps {
}

function Page(props: IProps) {
    return (
        <div className={styles.main}>
            <div className={styles.sidebar}>
                <SideBar/>
            </div>
            <div className={styles.rightSide}>
                <div><TopBar/></div>
                <div><Content/></div>
            </div>
        </div>
    );
}

export default Page;
