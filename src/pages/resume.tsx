import App from '../components/App';
import Article from '../components/Article';
import Heading from '../components/Heading';
import AutoGrid from '../components/AutoGrid';
import Grid from '../components/Grid';
import List from '../components/List';
import Section from '../components/Section';
import Card from '../components/Card';

function PrimaryHeading(props) {
  return <Heading is="h3" color="primary" fontSize={20} {...props} />;
}

function SubHeading(props) {
  return <Heading is="h4" fontSize={12} {...props} />;
}

function WorkExperience() {
  return (
    <Section is="article" heading="Work Experience">
      <Heading is="h2">Wayfair</Heading>
      <PrimaryHeading>Staff Engineer - Frontend Platforms</PrimaryHeading>
      <SubHeading>November 2022 - Present</SubHeading>
      <List>
        <List.Item>
          Introducing and maintaining a NextJS application for all of Wayfairs
          brands B2C and B2B services.
        </List.Item>
        <List.Item>
          Upgrading our Next JS framework to server components.
        </List.Item>
        <List.Item>
          Introducing Storybook at scale for all teams to build components in
          isolation.
        </List.Item>
        <List.Item>
          Implemented and help create tracking service for NextJS website.
        </List.Item>
      </List>
      <PrimaryHeading>
        Senior Software Engineer - Homebase, Wayfair Design System
      </PrimaryHeading>
      <SubHeading>April 2019 - November 2022</SubHeading>
      <List>
        <List.Item>
          Providing and maintaining reusable Design System for Wayfairs 5
          Storefront Brands (Wayfair, Joss and Main, Birch Lane, All Modern &
          Perigold) as well as our internal user, supplier and business to
          business themes.
        </List.Item>
        <List.Item>
          Responsible for creating and maintaining reusable UI components
          library solutions.
        </List.Item>
      </List>
      <PrimaryHeading>
        Senior Software Engineer - Arlow, Interior Design Application & Wayfair
        B2B (Business to Business)
      </PrimaryHeading>
      <SubHeading>October 2017 - April 2019</SubHeading>
      <List>
        <List.Item>
          Created an interior design application that allowed users to save and
          pick from all Wayfair brand and non Wayfair brand products and create
          services invoices.
        </List.Item>
      </List>
      <PrimaryHeading>
        Senior Software Engineer - Lifestyles Brands (Joss and Main, Birch Lane,
        All Modern & Perigold)
      </PrimaryHeading>
      <SubHeading>February 2015 - October 2017</SubHeading>
      <List>
        <List.Item>
          Lead frontend breakdown and creation of new Brand website Perigold.
        </List.Item>
        <List.Item>
          Prototyped and implemented first responsive blueprint for Wayfair and
          all storefront brand websites. (Same blueprint implemented today.)
        </List.Item>
        <List.Item>
          Created and developed first category pages for Wayfair.
        </List.Item>
        <List.Item>
          Created and maintained UI and features for Lifestyles brand pages
          including responsive headers footers and page features.
        </List.Item>
      </List>
      <PrimaryHeading>Frontend Developer - Joss and Main</PrimaryHeading>
      <SubHeading>April 2014 - Februrary 2015</SubHeading>
      <List>
        <List.Item>
          Lead migrating Jossandmain.com to the same platform as Wayfair.com
        </List.Item>
        <List.Item>Responsible for UI on all of JossandMain.com</List.Item>
        <List.Item>Developed UI for a responsive My account flow.</List.Item>
        <List.Item>Helped create UI for early SPA pages.</List.Item>
      </List>
    </Section>
  );
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
  );
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
  );
}
export default function Resume() {
  return (
    <App>
      <AutoGrid alignItems="flexStart">
        <WorkExperience />
        <Grid is="article">
          <Knowledge />
          <Education />
        </Grid>
      </AutoGrid>
    </App>
  );
}
