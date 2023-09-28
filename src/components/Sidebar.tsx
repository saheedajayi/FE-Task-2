import React, {Fragment} from 'react';
import {Menu} from 'antd';
import {CgHomeAlt} from "react-icons/cg";
import {GrGroup, GrShareOption} from "react-icons/gr";
import {PiCalendarCheck} from "react-icons/pi";
import {LiaFileAltSolid} from "react-icons/lia";
import {BiBook} from "react-icons/bi";
import {AiOutlineHeart} from "react-icons/ai";
import {MdKeyboardArrowLeft} from "react-icons/md";
import styles from "./styles/Sidebar.module.css"
import {FaCircle} from "react-icons/fa";

interface IProps {
}

const menuItems = [
    {key: 'circle', icon: <FaCircle/>},
    {key: 'home', icon: <CgHomeAlt/>},
    {key: 'group', icon: <GrGroup/>},
    {key: 'calendar', icon: <PiCalendarCheck/>},
    {key: 'share', icon: <GrShareOption/>},
    {key: 'file', icon: <LiaFileAltSolid/>},
    {key: 'book', icon: <BiBook/>},
    {key: 'heart', icon: <AiOutlineHeart/>},
    {key: 'back', icon: <MdKeyboardArrowLeft/>},
];

function SideBar(props: IProps) {
    return (
        <Fragment>
            <div className={styles.sidebar}>
                <Menu mode="vertical">
                    {menuItems.map((item) => (
                        <Menu.Item key={item.key}>
                            <span className={styles.icon}>{item.icon}</span>
                        </Menu.Item>
                    ))}
                </Menu>
            </div>
            <div></div>
        </Fragment>
    );
}

export default SideBar;
