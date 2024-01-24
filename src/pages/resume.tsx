import Head from 'next/head'
import Heading from '../components/Heading'
import AutoGrid from '../components/AutoGrid'
import Grid from '../components/Grid'
import List from '../components/List'
import Section from '../components/Section'

function PrimaryHeading(props) {
  return <Heading is="h3" color="primary" fontSize={20} {...props} />
}

function SubHeading(props) {
  return <Heading is="h4" fontSize={12} {...props} />
}

function WorkExperience() {
  return (
    <Section is="article" heading="Work Experience">
      <Heading is="h2">Wayfair</Heading>
      <PrimaryHeading>Staff Engineer - Frontend Platforms</PrimaryHeading>
      <SubHeading>November 2022 - Present</SubHeading>
      <List>
        <List.Item>
          Architecting and delivering on upgrading the Next.js platform to the
          app router leveraging server components and streaming. Led to large
          increase in performance benefits.
        </List.Item>
        <List.Item>
          Building, scaling and maintaining a Next.js application for all
          Wayfair brands. Scaling the product to hundreds of engineers.
        </List.Item>
        <List.Item>
          Introducing Storybook at scale for all teams to develop libraries
          outside of applications.
        </List.Item>
        <List.Item>
          Added new performance metrics TTFB, FCP and INP at scale for all
          brands and pages and recorded real time monitoring in Datadog.
        </List.Item>
        <List.Item>
          Developing a scalable frontend architecture for our internal tracking
          service used by hundreds of engineers.
        </List.Item>
      </List>
      <PrimaryHeading>
        Senior Software Engineer - Wayfair Design System
      </PrimaryHeading>
      <SubHeading>April 2019 - November 2022</SubHeading>
      <List>
        <List.Item>
          Providing and maintaining a scalable reusable Design System for
          Wayfair brands as well as our internal user, supplier and business to
          business themes.
        </List.Item>
        <List.Item>
          Responsible for developing complex components: Sidebars, Drawers,
          Modals and reusable accessible solutions.
        </List.Item>
        <List.Item>
          Responsible for documentation and onboarding new engineers on the
          design system and best practices.
        </List.Item>
      </List>
      <PrimaryHeading>
        {`Senior Software Engineer - "Arlow" an Interior Design Application`}
      </PrimaryHeading>
      <SubHeading>October 2017 - April 2019</SubHeading>
      <List>
        <List.Item>
          Scaffolded the frontend for an interior design application that
          allowed to save any product online and create services invoices.
        </List.Item>
      </List>
      <PrimaryHeading>
        Senior Software Engineer - Lifestyles Brands
      </PrimaryHeading>
      <SubHeading>February 2015 - October 2017</SubHeading>
      <List>
        <List.Item>
          Led frontend prototyping and creating new Perigold brand website.
        </List.Item>
        <List.Item>
          Prototyped and implemented first responsive website for Wayfair and
          all brands. <em>(Same blueprint implemented today)</em>
        </List.Item>
        <List.Item>
          Created and maintained UI and features for Lifestyles brand pages
          including responsive headers footers and page features.
        </List.Item>
      </List>
      <PrimaryHeading>Frontend Developer - Joss and Main</PrimaryHeading>
      <SubHeading>April 2014 - February 2015</SubHeading>
      <List>
        <List.Item>
          Led migrating Jossandmain.com to the same platform as Wayfair.com.
        </List.Item>
        <List.Item>Developed UI for a responsive account flow.</List.Item>
      </List>
    </Section>
  )
}

function Knowledge() {
  return (
    <Section heading="Knowledge">
      <List>
        <List.Item>
          <PrimaryHeading fontSize={18}>JavaScript</PrimaryHeading>
          <List>
            <List.Item>React</List.Item>
            <List.Item>TypeScript</List.Item>
            <List.Item>NextJS</List.Item>
            <List.Item>Jest</List.Item>
            <List.Item>Cypress</List.Item>
            <List.Item>Webpack</List.Item>
            <List.Item>Node</List.Item>
            <List.Item>Babel</List.Item>
          </List>
        </List.Item>
        <List.Item>
          <PrimaryHeading fontSize={18}>HTML</PrimaryHeading>
          <List>
            <List.Item>ARIA</List.Item>
            <List.Item>Accessibility best practices</List.Item>
          </List>
        </List.Item>
        <List.Item>
          <PrimaryHeading fontSize={18}>CSS</PrimaryHeading>
          <List>
            <List.Item>SASS</List.Item>
            <List.Item>Styled Components</List.Item>
            <List.Item>Vanilla Extract</List.Item>
            <List.Item>Tailwind</List.Item>
          </List>
        </List.Item>
        <List.Item>
          <PrimaryHeading fontSize={18}>Storybook</PrimaryHeading>
        </List.Item>
        <List.Item>
          <PrimaryHeading fontSize={18}>Wordpress</PrimaryHeading>
        </List.Item>
        <List.Item>
          <PrimaryHeading fontSize={18}>PHP</PrimaryHeading>
        </List.Item>
        <List.Item>
          <PrimaryHeading>Design</PrimaryHeading>
          <List>
            <List.Item>Adobe Photoshop</List.Item>
            <List.Item>Adobe Illustrator</List.Item>
            <List.Item>Figma</List.Item>
            <List.Item>Sketch</List.Item>
          </List>
        </List.Item>
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
        <List.Item margin="0">Boston, MA</List.Item>
        <List.Item margin="0">BA in Graphic Design</List.Item>
        <List.Item margin="0">Graduated in May 2012</List.Item>
      </List>
    </Section>
  )
}

export default function Resume() {
  return (
    <>
      <Head>
        <title>Scotty Kaye Resume</title>
        <meta
          name="description"
          content="Scotty Kaye is a Staff Frontend Engineer working on Frontend Platform teams as well as Design Systems. "
        />
        <link rel="scottykaye favicon" href="/static/favicon.ico" />
        <meta name="color-scheme" content="light dark" />
        <noscript id="__next_css__DO_NOT_USE__"></noscript>
      </Head>
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
