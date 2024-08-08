export default function Page() {
  return (
    <>
      <h1 className="text-2xl">Why I am a fit for Tailwind Labs</h1>
      <p className="my-3">
        As an engineer I am most passionate about helping others and helping
        develop work faster.
      </p>
      <p className="my-3">
        I have a love for building cool and usable UI. I want engineers who use
        my tools to be able to focus on their goals and priorities while making
        sure we make the web accessible for everyone.
      </p>
      <p className="my-3">
        My background and foundation in coding is CSS and HTML. In the past few
        years {`I've`} grown strongly in accessibility and JavaScript in my role
        on the platforms team.
      </p>
      <p className="my-3">
        I love to teach, share and help those around me grow to be more
        comfortable using CSS and JavaScript programming.
      </p>
      <h2 className="text-xl mt-4">Interesting Projects</h2>
      <h3 className="text-lg mt-4">Accessible Navigation</h3>
      <p className="my-3">
        I have recently started to build out a suite of{' '}
        <a
          className="text-primary hover:underline focus:underline"
          href="https://github.com/scottykaye/accessible-navigation/tree/main/packages/keyboard-navigation"
          target="_blank"
        >
          accessible navigation
        </a>{' '}
        solutions to try to make keyboard navigation seamless.{' '}
      </p>
      <p className="my-3">
        The problem this package is solving for is that keyboard navigation
        often adds overhead to UI components. The goal is to abstract this in a
        way where we can get the appropriate navigation behavior for free and
        allow the UI components to be slimmer and focus on the goal of the
        component.{' '}
      </p>
      <p className="my-3">
        Following{' '}
        <a
          className="text-primary hover:underline focus:underline"
          href="https://www.w3.org/WAI/ARIA/"
          target="_blank"
        >
          WAI-ARIA
        </a>{' '}
        guidelines, I have created an pub/sub observer that handles focus
        trapping elements.
      </p>
      <p className="my-3">
        I am actively working on handling more challenging keyboard navigation
        features in a{' '}
        <a
          className="text-primary hover:underline focus:underline"
          href="https://github.com/scottykaye/accessible-navigation/pull/4"
          target="_blank"
        >
          PR
        </a>{' '}
        for handling navigations.
      </p>
      <h3 className="text-lg mt-4">Accessible Block Links</h3>
      <p className="my-3">
        This was a project I got brought in on being an accessibility advocate.
        The issue was on our Browse page each individual product card would be
        wrapped in an anchor link which caused all the internal elements of the
        anchor tag to lose their semantic value.
      </p>
      <p className="my-3">
        The solution was to build a react hook that we could hook into to make a
        Product Card visually clickable but preserve {`it's`} semantic value.
      </p>
      <h3 className="text-lg mt-4">Contextual Modals/Drawers/Sidebars</h3>
      <p className="my-3">
        I identified while working on the design system that we had the
        opportunity to create a hierarchy for our tools. The example I used was
        an admin toolbar that should wrap a page, but we {`don't`} want it to
        interact with the modals or other pop up elements.
      </p>{' '}
      <p className="my-3">
        I developed this contextual pattern concept that would leverage react
        portals to set boundaries between items. For example, for an admin user,
        we would set the entire application in the portal around the admin tool
        bar so the user could experience all modals, toasts and any other fixed
        or absolutely positioned elements appropriately and still use their
        toolbar.{' '}
      </p>
      <h2 className="text-xl mt-4">Previous Experience</h2>
      <p className="my-3">
        {`I've`} worked on many teams and different initiatives in my time as an
        engineer, some of the most notable (and coolest):
      </p>
      <ul className="my-3">
        <li className="my-2">
          Lead upgrading our Next.js application from the Pages Directory to the
          App Router. Blueprinted and scaffolded out a solution that we executed
          and delivered on.
        </li>
        <li className="my-2">
          Blueprinting and executing on making {`Wayfair's`} frontend go from
          adaptive to response.
        </li>
        <li className="my-2">
          Leading the frontend of building the newest brands platform{' '}
          <a
            className="text-primary hover:underline focus:underline"
            href="https://perigold.com"
            target="_blank"
          >
            Perigold.com
          </a>
          .
        </li>
        <li className="my-2">
          Prototyping and developing a suite of components for our Design
          System: Sidebars, Modals, Drawers, Tabs, Accordions, Input components
          and taking ownership of accessibility.
        </li>
        <li className="my-2">
          Taught an education course on our design system on how to use it, how
          to request new features and provide feedback.
        </li>
        <li className="my-2">
          Developing patterns and standards for how to document components on
          our design system website.
        </li>
        <li className="my-2">
          Rebuilding our internal development toolbar as a hackathon project.
        </li>
      </ul>
      <h2 className="text-xl mt-4">Open source projects</h2>
      <ul className="my-3">
        <li className="my-2">
          <a
            className="text-primary hover:underline focus:underline"
            href="https://github.com/scottykaye/accessible-navigation/tree/main/packages/keyboard-navigation"
            target="_blank"
          >
            Accessible Navigation
          </a>{' '}
          - A pub/sub observer that handles accessible keyboard navigation for
          UI components.{' '}
        </li>
        <li className="my-2">
          <a
            className="text-primary hover:underline focus:underline"
            href="https://github.com/scottykaye/useAccessibleBlockLink"
            target="_blank"
          >
            Acessible Block Link
          </a>{' '}
          - A reusable react hook that preserves a components semantic
          accessibility to create a visual block link.
        </li>
        <li className="my-2">
          <a
            className="text-primary hover:underline focus:underline"
            href="https://github.com/ballercat/jambox"
            target="_blank"
          >
            Jambox
          </a>{' '}
          - A svelte project created to record server and client network
          requests. Often used to record production requests to use reliably in
          development.
        </li>
      </ul>
      <h2 className="text-xl mt-4">Technical writing</h2>
      <p className="my-3">
        Most of my writing is often technical documentation. Unfortunately a lot
        of that documentation is internal facing, I would recommend looking at
        my public facing solutions for{' '}
        <a
          className="text-primary hover:underline focus:underline"
          href="https://github.com/scottykaye/accessible-navigation/tree/main/packages/keyboard-navigation"
          target="_blank"
        >
          Accessible Navigation
        </a>{' '}
        and{' '}
        <a
          className="text-primary hover:underline focus:underline"
          href="https://github.com/scottykaye/useAccessibleBlockLink"
          target="_blank"
        >
          Accessible Block Links
        </a>{' '}
        documentation.
      </p>
      <h2 className="text-2xl mt-4">Thank you!</h2>
      <p className="my-3">I appreciate your time and consideration! 🙏</p>
      <p className="my-3">
        If you want to see what I am currently working on please follow me on
        Twitter{' '}
        <a
          className="text-primary hover:underline focus:underline"
          href="https://twitter.com/scottykaye"
          target="_blank"
        >
          @scottykaye
        </a>
        . Or follow me on any social media platform in the footer below.
      </p>
    </>
  )
}
