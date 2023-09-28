import React from 'react';
import {BsFillPersonCheckFill, BsFillPersonPlusFill, BsFillPersonXFill} from "react-icons/bs";
import {FaTag} from "react-icons/fa";
import {IoMdMail} from "react-icons/io";
import styles from "./styles/TopBar.module.css";

interface IProps {

}

const topBarIcons = [
    {key: "tag", icon: <FaTag/>},
    {key: "person", icon: <BsFillPersonXFill className={styles.personIcon}/>},
    {key: "personCheck", icon: <BsFillPersonCheckFill className={styles.personCheck}/>},
    {key: "personPlus", icon: <BsFillPersonPlusFill className={styles.personPlus}/>},
    {key: "mail", icon: <IoMdMail/>}

]

function TopBar(props: IProps) {
    return (
        <div className={styles.main}>
            <div>
                <h1>London Internship Program</h1>
                <p>London</p>
            </div>
            <div>
                <p>Opportunity Browsing</p>
            </div>
            <div className={styles.farRight}>
                <div className={styles.iconsDiv}>
                    {topBarIcons.map(item => (
                        <div key={item.key}>
                            <span className={styles.tBIcon}>{item.icon}</span>
                        </div>
                    ))}
                </div>
                <p>Move to Video interview</p>
            </div>
        </div>
    )
}

export default TopBar