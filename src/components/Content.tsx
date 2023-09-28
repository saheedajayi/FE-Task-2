import React from 'react';
import styles from "./styles/Content.module.css";
import {HiOutlineSearch} from "react-icons/hi";
import {LiaFileAltSolid} from "react-icons/lia";
import Candidate from "./candidate";

interface IProps {
}

function Content(props: IProps) {
    const [checked, setChecked] = React.useState(true);
    return (
        <div className={styles.mainDiv}>

            {/*LEFT*/}
            <div className={styles.left}>
                <div className={styles.searchDiv}>
                    <HiOutlineSearch className={styles.searchIcon}/>
                    <input type="text" className={styles.searchInput}/>
                </div>
                <div className={styles.filterDiv}>
                    <div className={styles.filter}>
                        <p>Filters</p>
                        <p>0 selected</p>
                    </div>
                    <div className={styles.personalInfo}>
                        <LiaFileAltSolid/>
                        <p>Personal Information</p>
                    </div>
                    <div className={styles.edu}>
                        <LiaFileAltSolid/>
                        <p>Education</p>
                    </div>
                    <div className={styles.workExp}>
                        <LiaFileAltSolid/>
                        <p>Work Experience</p>
                    </div>
                    <div className={styles.actFil}>
                        <LiaFileAltSolid/>
                        <p>Activity Filter</p>
                    </div>
                    <div className={styles.advFil}>
                        <LiaFileAltSolid/>
                        <p>Advanced Filter</p>
                    </div>
                </div>
            </div>
            {/*RIGHT*/}
            <div className={styles.right}>
                <div className={styles.top}>
                    <div className={styles.firstPart}>
                        <input type="checkbox"
                               defaultChecked={!checked}
                               onChange={() => setChecked(!checked)}
                        />
                        <p>247 Candidates</p>
                    </div>
                    <div className={styles.secondPart}>
                        <p>Qualified</p>
                        <p>
                            <span>|</span>
                            <span>Task</span>
                            <span>25</span>
                            <span>|</span>
                        </p>
                        <p>
                            Disqualified
                            <span className={styles.seventyEight}>78</span>
                        </p>
                    </div>
                </div>
                <div className={styles.candidateDiv}>
                    <Candidate name={"Aliyah Sanderson"}
                               location={"Riyadh, Saudi Arabia"}
                               education={"Bachelor - Cambridge University (2020 - 2023)"}
                               skills={["Marketing", "London", "NewYork"]}
                               experience={["#topCandidate", "#topCandidate"]}
                    />
                </div>
                <div className={styles.candidateDiv}>
                    <Candidate
                        name={"John Doe"}
                        location={"Bostom, USA"}
                        education={"Bachelor - MIT (2023 - 2023)"}
                        skills={["Marketing", "London", "NewYork"]}
                        experience={["#topCandidate", "#topCandidate"]}
                    />
                </div>
                <div className={styles.candidateDiv}>
                    <Candidate
                        name={"John Doe"}
                        location={"Bostom, USA"}
                        education={"Bachelor - MIT (2023 - 2023)"}
                        skills={["Marketing", "London", "NewYork"]}
                        experience={["#topCandidate", "#topCandidate"]}
                    />
                </div>
            </div>
        </div>
    );
}

export default Content;