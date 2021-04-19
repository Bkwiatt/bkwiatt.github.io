import React from 'react'
import { ProjectsCardHr, ProjectsWrapper, ProjectLogoWrap } from './ProjectsElements'
import Card from './Card'
import { iOSCard1, iOSCard2, cSharpCard1, sqlCard1, reactCard1, htmlCard1 } from './data'

const ProjectCards = () => {
    return (
        <>
            {/* iOS Projects */}
            <ProjectLogoWrap id="ios">
                <ProjectsWrapper>
                    <Card {...iOSCard1} />
                    <Card {...iOSCard2} />
                </ProjectsWrapper>
            </ProjectLogoWrap>

            <ProjectsCardHr />

            {/* C# Projects */}
            <ProjectLogoWrap>
                <ProjectsWrapper>
                    <Card {...cSharpCard1} />
                </ProjectsWrapper>
            </ProjectLogoWrap>

            <ProjectsCardHr />

            {/* SQL Projects */}
            <ProjectLogoWrap>
                <ProjectsWrapper>
                    <Card {...sqlCard1} />
                </ProjectsWrapper>
            </ProjectLogoWrap>

            <ProjectsCardHr />

            {/* Web Dev Projects */}
            <ProjectLogoWrap id="webapp">
                <ProjectsWrapper>
                    <Card {...reactCard1} />
                    <Card {...htmlCard1} />
                </ProjectsWrapper>
            </ProjectLogoWrap>
            
        </>
    )
}

export default ProjectCards
