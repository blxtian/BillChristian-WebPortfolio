import deliverit from '../assets/jpg/deliverit.jpg'
import gcorp from '../assets/jpg/gcorp.jpg'
import gcevs from '../assets/jpg/gcvote.jpg'

export const projectsData = [

    {
        id: 1,
        projectName: 'Project STUDIO',
        projectDesc: 'Project STUDIO is a Web Application from Deliverit Software Pty Ltd from the Australia. This project integrates POS, online/mobile ordering, payments, and delivery services.',
        tags: ['NextJS', 'Typescript', 'Bootstrap', 'GraphQL','Prisma ORM','Redis'],
        image: deliverit,
    },
    
    {
        id: 2,
        projectName: 'Gordon College Event Request Portal',
        projectDesc: 'GCORP is a Progressive Web Application and build using React Framework that allows Gordon College Users to streamline their computerized Event Request. It was a Capstone Project in 4th Year Standing.',
        tags: ['React', 'PWA', 'JavaScript', 'CSS', 'PHP','MySQL'],
        image: gcorp,
    },
    {
        id: 3,
        projectName: 'Gordon College Enhanced Voting System',
        projectDesc: 'Gordon College Enhanced Voting System is a web application built using Angular and PHP. It serves as a voting platform specifically designed for the student council elections at Gordon College.',
        tags: ['Angular','TypeScript','PHP','MySQL', 'Bootstrap', 'SASS'],
        image: gcevs,
       
    },
   
]


