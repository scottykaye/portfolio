import AutoGrid from '@components/AutoGrid'
import Grid from '@components/Grid'
import List from '@components/List'
import Heading from '@components/v2/Heading'
import Section from '@components/v2/Section'

function PrimaryHeading(props) {
  return (
    <Heading
      is="h3"
      color="primary"
      {...props}
      className="print:text-black text-base leading-5 print:!text-[12px]"
    />
  )
}

function SubHeading(props) {
  return <Heading is="h4" className="print:!text-[11px] text-xs" {...props} />
}

function ListItem(props) {
  return <List.Item className="text-xs print:!text-[10px]" {...props} />
}

function WorkExperience() {
  return (
    <Section is="article" heading="Work Experience" headingIs="h1">
      <Heading className="text-lg print:!text-[13px]">Fireworks AI</Heading>
      <PrimaryHeading>Staff Frontend Engineer</PrimaryHeading>
      <SubHeading>March 2024 - Present</SubHeading>
      <List>
        <ListItem>
          Building out new products available from Firectl into UI products for
          deployment management, user management and more.
        </ListItem>
        <ListItem>
          Adding testing frameworks and mechanisms like playwright and Github
          actions to ensure confidence in deploys.
        </ListItem>
        <ListItem>
          Overhauling branding and building a design system to architect a
          Next.js website platform for customers using our LLMs & Image models
          to stream line their AI workflow.
        </ListItem>
      </List>
      <Heading className="text-lg print:!text-[13px]">Wayfair</Heading>
      <PrimaryHeading>Staff Engineer - Frontend Platforms</PrimaryHeading>
      <SubHeading>November 2022 - March 2024</SubHeading>
      <List>
        <ListItem>
          Architecting and delivering on upgrading the Next.js platform to the
          app router leveraging server components and streaming. Led to large
          increase in performance benefits.
        </ListItem>
        <ListItem>
          Building, scaling and maintaining a Next.js application for all
          Wayfair brands. Scaling the product to hundreds of engineers.
        </ListItem>
        <ListItem>
          Introducing Storybook at scale for all teams to develop libraries
          outside of applications.
        </ListItem>
        <ListItem>
          Introducing new performance metrics TTFB, FCP and INP at scale for all
          brands and pages and recorded real time monitoring in Datadog.
        </ListItem>
        <ListItem>
          Developing a scalable frontend architecture for our internal tracking
          service used by hundreds of engineers.
        </ListItem>
      </List>
      <PrimaryHeading>
        Senior Software Engineer - Wayfair Design System
      </PrimaryHeading>
      <SubHeading>April 2019 - November 2022</SubHeading>
      <List>
        <ListItem>
          Providing and maintaining a scalable reusable Design System for
          Wayfair brands as well as our internal user, supplier and business to
          business themes.
        </ListItem>
        <ListItem>
          Responsible for developing complex components: Sidebars, Drawers,
          Modals and reusable accessible solutions.
        </ListItem>
        <ListItem>
          Responsible for documentation and onboarding new engineers on the
          design system and best practices.
        </ListItem>
      </List>
      <PrimaryHeading>
        Senior Software Engineer - Lifestyles Brands
      </PrimaryHeading>
      <SubHeading>February 2015 - April 2019</SubHeading>
      <List>
        <ListItem>
          Leading frontend prototyping and creating new Perigold brand website.
        </ListItem>
        <ListItem>
          Prototyping and implementing first responsive website for Wayfair and
          all brands. <em>(Still used today)</em>
        </ListItem>
      </List>
      <PrimaryHeading>Frontend Developer - Joss and Main</PrimaryHeading>
      <SubHeading>April 2014 - February 2015</SubHeading>
      <List>
        <ListItem>
          Leading Jossandmain.com site migration Wayfair.com platform.
        </ListItem>
      </List>
    </Section>
  )
}

function Knowledge() {
  return (
    <Section heading="Knowledge">
      <List>
        <ListItem>
          <PrimaryHeading>JavaScript</PrimaryHeading>
          <List>
            <ListItem>React</ListItem>
            <ListItem>TypeScript</ListItem>
            <ListItem>NextJS</ListItem>
            <ListItem>Jest</ListItem>
            <ListItem>Cypress</ListItem>
            <ListItem>Webpack</ListItem>
            <ListItem>Node</ListItem>
            <ListItem>Playwright</ListItem>
            <ListItem>Babel</ListItem>
          </List>
        </ListItem>
        <ListItem>
          <PrimaryHeading>HTML</PrimaryHeading>
          <List>
            <ListItem>ARIA</ListItem>
            <ListItem>Accessibility best practices</ListItem>
          </List>
        </ListItem>
        <ListItem>
          <PrimaryHeading>CSS</PrimaryHeading>
          <List>
            <ListItem>SASS</ListItem>
            <ListItem>Styled Components</ListItem>
            <ListItem>Vanilla Extract</ListItem>
            <ListItem>Tailwind</ListItem>
          </List>
        </ListItem>
        <ListItem>
          <PrimaryHeading>Storybook</PrimaryHeading>
        </ListItem>
        <ListItem>
          <PrimaryHeading>Wordpress</PrimaryHeading>
        </ListItem>
        <ListItem>
          <PrimaryHeading>PHP</PrimaryHeading>
        </ListItem>
        <ListItem>
          <PrimaryHeading>Design</PrimaryHeading>
          <List>
            <ListItem>Adobe Photoshop</ListItem>
            <ListItem>Adobe Illustrator</ListItem>
            <ListItem>Figma</ListItem>
            <ListItem>Sketch</ListItem>
          </List>
        </ListItem>
      </List>
    </Section>
  )
}
function Education() {
  return (
    <Section heading="Education">
      <PrimaryHeading>
        New England School of Art & Design @ Suffolk University
      </PrimaryHeading>
      <List listStyle="none">
        <ListItem margin="0">Boston, MA</ListItem>
        <ListItem margin="0">BA in Graphic Design</ListItem>
        <ListItem margin="0">Graduated in May 2012</ListItem>
      </List>
    </Section>
  )
}

export default function Resume() {
  return (
    <>
      <div className="hidden print:flex mb-5">
        <svg
          width="30"
          viewBox="0 0 400 400"
          className="fill-background-primary"
          aria-labelledby="title"
        >
          <title id="title">Scotty Kaye logo</title>
          <path
            className="fill-foreground"
            d="M387.546,201.298c0,103.577-83.97,187.54-187.549,187.54c-103.577,0-187.543-83.963-187.543-187.54 c0-103.584,83.966-187.546,187.543-187.546C303.577,13.752,387.546,97.714,387.546,201.298z"
          ></path>
          <path
            className="fill-background-primary"
            d="M377.652,201.293c0,98.113-79.536,177.65-177.655,177.65c-98.113,0-177.65-79.537-177.65-177.65 c0-98.111,79.538-177.647,177.65-177.647C298.116,23.646,377.652,103.182,377.652,201.293z"
          ></path>
          <path
            className="fill-foreground"
            d="M367.193,201.293c0,92.338-74.857,167.194-167.196,167.194c-92.336,0-167.19-74.856-167.19-167.194 c0-92.337,74.854-167.19,167.19-167.19C292.336,34.103,367.193,108.956,367.193,201.293z"
          ></path>
          <path
            className="fill-background-primary"
            d="M358.192,202.218c0,87.565-70.981,154.937-158.542,154.937V202.218H358.192z"
          ></path>
          <path
            className="fill-background-primary"
            d="M43.387,201.007c0-87.566,70.982-155.712,158.543-155.712v155.879L43.387,201.007z"
          ></path>
          <path
            className="fill-foreground"
            d="M340.002,200.003c0,77.319-62.681,140.001-140.005,140.001c-77.323,0-140.002-62.682-140.002-140.001 c0-77.324,62.679-140.008,140.002-140.008C277.321,59.995,340.002,122.679,340.002,200.003z"
          ></path>
          <g>
            <path
              className="fill-background-primary"
              d="M185.161,187.812c-6.08-2.077-10.528-3.263-17.795-3.263c-5.338,0-11.715,1.928-11.715,8.452 c0,12.16,34.552,4.449,34.552,32.031c0,17.796-15.867,24.912-32.031,24.912c-7.562,0-15.274-1.334-22.541-3.262l1.187-16.312 c6.228,3.114,12.753,5.042,19.573,5.042c5.042,0,13.05-1.928,13.05-9.342c0-14.978-34.551-4.745-34.551-32.327 c0-16.46,14.384-23.728,29.955-23.728c9.342,0,15.422,1.484,21.65,2.818L185.161,187.812z"
            ></path>
            <path
              className="fill-background-primary"
              d="M200.136,136.947h19.871v65.396h0.296l23.728-30.547h23.43l-28.472,34.105l32.031,42.264h-25.209 l-25.507-37.073h-0.296v37.073h-19.871V136.947z"
            ></path>
          </g>
        </svg>

        <ul className="list-none">
          <li className="text-[11px]">Scotty Kaye</li>
          <li className="text-[11px]">scottykaye.web@gmail.com</li>
          <li className="text-[11px]">978-979-9908</li>
        </ul>
      </div>
      <AutoGrid alignItems="flexStart">
        <WorkExperience />
        <Grid is="article">
          <Knowledge />
          <Education />
        </Grid>
      </AutoGrid>
    </>
  )
}
