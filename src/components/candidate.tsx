import React from 'react';
import styles from "./styles/Candidate.module.css";

interface ICandidateProps {
    name: string;
    location: string;
    education: string;
    skills: string[];
    experience: string[];
}

function getInitials(name: string) {
    let initials = "";
    let nameArray = name.split(" ");
    for (let i = 0; i < nameArray.length; i++) {
        initials += nameArray[i][0];
    }
    return initials;
}

function Candidate(props: ICandidateProps) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerSub}>
                <div className={styles.mainContainerImage}>
                    <p>{getInitials(props.name)}</p>
                </div>
            </div>

            <div className={styles.mainContainerContent}>
                <h3>{props.name}</h3>
                <h4>{props.location}</h4>
                <h5>{props.education}</h5>
                <p className={styles.experience}>{props.experience.join(" ")}</p>
                {props.skills.map((skill, index) => (
                    <span className={styles.skillItem} key={index}>
            {skill}
                        {index < props.skills.length - 1 && <span className={styles.skillSeparator}> </span>}
        </span>
                ))}
            </div>
        </div>
    );
}

export default Candidate;