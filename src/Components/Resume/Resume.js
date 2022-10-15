import './Resume.scss'
import { Divider } from '@mui/material'
import { IconButton } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import EducationObject from './ResumeObject/EducationObject'
import ExperienceObject from './ResumeObject/ExperienceObject'
const Resume = () => {
  return (
    <div className="resume-container">
      <div className="download-resume-container">
        <button>Download Resume as PDF</button>
      </div>

      <div className="buckets education-container">
        <div className="header">
          <h1>Education</h1>
          <IconButton
            sx={{
              width: '5vmin',
              height: '5vmin',
            }}
          >
            <ExpandLessIcon />
          </IconButton>
        </div>
        <Divider sx={{ width: '90%', ml: '5%' }} />
        <EducationObject
          institutionName="University of South Florida"
          location="Tampa, Fl"
          field="Bachelor's in Computer Science"
          date="Expected December 2023"
          gpa="3.85"
        />
        <Divider sx={{ width: '90%', ml: '5%' }} />
        <EducationObject
          institutionName="University of South Florida"
          location="Tampa, Fl"
          field="Minor in Mathematics"
          date="Expected December 2023"
          gpa="3.85"
        />
        <Divider sx={{ width: '90%', ml: '5%' }} />
        <EducationObject
          institutionName="Hillsborough Community College"
          location="Brandon, Fl"
          field="Associate's in Arts (Engineering)"
          date="December 2020"
          gpa="4.0"
        />
      </div>

      <div className="buckets experience-container">
        <div className="header">
          <h1>Experience</h1>
          <IconButton
            sx={{
              width: '5vmin',
              height: '5vmin',
            }}
          >
            <ExpandLessIcon />
          </IconButton>
        </div>
        <Divider sx={{ width: '90%', ml: '5%' }} />
        <ExperienceObject
          companyName="University of South Florida"
          location="Tampa, Fl"
          jobTitle="Supervised Research"
          date="August 2022 - Present"
          jobDescription={[
            'Assisted in active research on the effects of gamifying learning experience for engineering.',
            'Read literature of effective pedagogic methods in engineering, IT, and Cybersecurity.',
            'Developed a WebGl prototype game in Unity to pose engineering challenges.',
            'Integrated game-based graded assignments to CanvasLMS using CanvasLMS APIs and the LTI 1.3 protocol using an ExpressJs server.'
        ]}
        />
         <Divider sx={{ width: '90%', ml: '5%' }} />
        <ExperienceObject
          companyName="University of South Florida"
          location="Tampa, Fl"
          jobTitle="Data Structures Teaching Assistant"
          date="August 2022 - Present"
          jobDescription={[
            'Mentored students through Data Structures projects and challenges.',
            'Assisted students in understanding C++ concepts.',
            'Participated in pair programming sessions to optimize coding solutions',
            'Assessed the ability and comprehension of students about Data Structures/Algorithms.'
        ]}
        />
         <Divider sx={{ width: '90%', ml: '5%' }} />
         <ExperienceObject
          companyName="TheIncLab"
          location="Tampa, Fl"
          jobTitle="Software Intern"
          date="June-August 2022"
          jobDescription={[
            'Developed front end applications using modern frameworks (such as React).',
            'Implemented an interface for keeping track of the battery and proximity signal of a device.',
            'Participated in pair programming sessions to optimize coding solutions.',
            'Designed efficient algorithms to build and deploy software applications.',
            'Utilized version control system (Bitbucket/Git) to write software in a team environment.'
        ]}
        />
      </div>

      <div className="buckets skills-container">
        <div className="header">
          <h1>Skills</h1>
          <IconButton
            sx={{
              width: '5vmin',
              height: '5vmin',
            }}
          >
            <ExpandLessIcon />
          </IconButton>
        </div>
        <Divider sx={{ width: '90%', ml: '5%' }} />
      </div>

      <div className="buckets awards-container">
        <div className="header">
          <h1>Awards</h1>
          <IconButton
            sx={{
              width: '5vmin',
              height: '5vmin',
            }}
          >
            <ExpandLessIcon />
          </IconButton>
        </div>
        <Divider sx={{ width: '90%', ml: '5%' }} />
      </div>
    </div>
  )
}

export default Resume
