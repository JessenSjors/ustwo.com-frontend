import React from 'react';
import window from 'app/adaptors/server/window';
import { get } from 'lodash';

import ScrollWrapper from 'app/components/scroll-wrapper';
import Hero from 'app/components/hero';
import ContactBlockAuto from 'app/components/contact-block-auto';
import ContactButton from 'app/components/contact-button';
import Footer from 'app/components/footer';
import UstwoAutoWhatwedo from 'app/components/ustwo-auto-whatwedo';
import FeaturedCaseStudy from 'app/components/featured-case-study';
import TestimonialCarousel from 'app/components/testimonial-carousel';
import WorkCaseStudies from 'app/components/work-case-studies';
import WorkClientsBoard from 'app/components/work-clients-board';
import WorkVerticals from 'app/components/work-verticals';
import VideoBlock from 'app/components/video-block';

function UstwoAuto({ page, documentScrollPosition, viewportDimensions, footer, studios, currentPage, isMobile, fixedHeight, scrollProgress }) {

  let styles;
  if (documentScrollPosition > window.innerHeight + 100) {
    styles = { position: `relative` }
  }

  const renderTestimonials = ustwoAutoData.testimonials.length > 0
    ? <TestimonialCarousel testimonials={ustwoAutoData.testimonials} fixedHeight={fixedHeight} />
    : null;

  const renderTwitter = ustwoAutoData.twitter.length > 0
    ? <TestimonialCarousel testimonials={ustwoAutoData.twitter} fixedHeight={fixedHeight} type="twitter-auto" />
    : null;

  const caseStudies = get(page, '_embedded.ustwo:case_studies', []);

  let src;
  if (window.innerWidth < 600) {
    src= 'https://player.vimeo.com/external/212009946.sd.mp4?s=f537d6446bb57ac154c6dd9fae12a281c1671686&profile_id=164';
  } else {
    src= 'https://player.vimeo.com/external/212009946.sd.mp4?s=f537d6446bb57ac154c6dd9fae12a281c1671686&profile_id=165';
  }
  const videoPoster = '/images/ustwo-roadshow-first-frame.jpg';

  return (
    <div className="work-ustwo-auto">

      <div className="home-pinned-header-wrapper">
        <div className="home-pinned-header-inner" style={styles}>
          <ScrollWrapper
            component={
              <Hero
                title={ustwoAutoData.title}
                subheading={ustwoAutoData.subtitle}
                transitionImage={true}
                showDownIndicator={true}
                eventLabel=''
                fixedHeight={fixedHeight}
                isMobile={isMobile}
                scrollProgress={scrollProgress}
                heroImage={true}
              />
            }
            documentScrollPosition={documentScrollPosition}
            viewportDimensions={viewportDimensions}
          />
        </div>
      </div>

      <div className="home-main-content-wrapper">

        <ScrollWrapper
          component={
            <UstwoAutoWhatwedo data={ustwoAutoData} isMobile={isMobile} />
          }
          documentScrollPosition={documentScrollPosition}
          viewportDimensions={viewportDimensions}
        />

        <FeaturedCaseStudy content={ustwoAutoData.latestPromo} />

        <div className="ustwo-auto-how">
          <div className="ustwo-auto-how-inner">
            <VideoBlock title="How we do it" videoPoster={videoPoster} src={src} />
            {ustwoAutoData.howWeDoIt.map(para => <p>{para}</p>)}
          </div>
        </div>

        <div className="ustwo-auto-team">
          <div className="ustwo-auto-team-inner">

            <h2>Meet the Team</h2>

            <ul className="ustwo-auto-team-profiles">
              <li>
                <section className="profile">
                  <div className="profile-photo"><img src="/images/auto/tim-smith.png" /></div>
                  <h3 className="profile-name">Tim Smith</h3>
                  <p className="profile-title">Design Principal</p>
                  <p className="profile-contact">@mypoorbrain</p>
                </section>
              </li>
              <li>
                <section className="profile">
                  <div className="profile-photo"><img src="/images/auto/harsha-vardhan.png" /></div>
                  <h3 className="profile-name">Harsha Vardhan</h3>
                  <p className="profile-title">Interaction Lead</p>
                  <p className="profile-contact">@wabisabifiction</p>
                </section>
              </li>
              <li>
                <section className="profile">
                  <div className="profile-photo"><img src="/images/auto/lexi-cherniavsky.png" /></div>
                  <h3 className="profile-name">Lexi Cherniavsky</h3>
                  <p className="profile-title">Client Partner</p>
                </section>
              </li>
            </ul>

            <p>{ustwoAutoData.teamProfile}</p>

          </div>
        </div>

        {renderTestimonials}

        <FeaturedCaseStudy content={featuredCaseStudy} />

        <WorkCaseStudies
          caseStudies={caseStudies}
          page={page}
          numberOfCaseStudiesShowing="12"
          caseStudyFilter="all"
        />

        <div className="ustwo-auto-logos-wrapper">
          <WorkClientsBoard logos={ustwoAutoData.clients} title="Our Clients" />
          <WorkClientsBoard logos={ustwoAutoData.partners} title="Our Partners" />
        </div>

        <div className="ustwo-auto-news">
          NEWS
        </div>

        {renderTwitter}

        <ScrollWrapper
          component={<ContactBlockAuto />}
          documentScrollPosition={documentScrollPosition}
          viewportDimensions={viewportDimensions}
          requireScreenPosition={true}
          className="scroll-wrapper-contact-block"
        />
        <Footer data={footer} studios={studios} currentPage={currentPage}/>

      </div>

    </div>
  );
}

export default UstwoAuto;

const ustwoAutoData = {
  title: 'auto',
  subtitle: 'For the journey',
  intro: "Our mission is to make journeys more magically connected. We help brands drive change by combining insight and creativity with breakthrough technology. We create experiences that enhance people's lives from the dashboard to the city to the sky.",
  introFurther: 'We do this with clients around the world and collaborate with research partners on our own experimental projects.',
  items: [{
    name: 'humanising-autonomy',
    title: 'Humanising Autonomy',
    image: '/images/auto/humanising-autonomy.svg',
    text: 'Conducting experimental research to uncover needs and opportunities for the design of future mobility experiences.'
  },{
    name: 'smart-mobility',
    title: 'Smarter Mobility',
    image: '/images/auto/smart-mobility.svg',
    text: 'Creating new services that improve the way people and things get around.'
  },{
    name: 'connected-car',
    title: 'Connecting the Car',
    image: '/images/auto/connected-car.svg',
    text: "Harnessing the potential that a connected experience can bring to people’s life."
  },{
    name: 'contextual-hmi',
    title: 'Contextual HMI',
    image: '/images/auto/contextual-hmi.svg',
    text: 'Making interfaces within transport more user friendly, personal and situational.'
  },],
  latestPromo: {
    title: 'Download our new Book',
    excerpt: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh',
    link: '/',
    linkText: 'Link text',
    latest: true,
    image: '/images/work/expertise-image-mobility.jpg',
    imageBackground: true
  },
  howWeDoIt: [
    "Our design methodology is inclusive and from the ground up because we know this creates a better experience for everyone.",
    "We have a collaborative way of working and partnership mindset. This often involves bringing experts together across many disciplines to solve a common problem, whether designers, anthropologists, scientists, engineers, mobility providers, manufacturers, policy makers, city operators or academic and research partners.",
    "Clients work with us to help them build new capabilities and sometimes change the status quo."
  ],
  teamProfile: "We're a community of designers, inventors and engineers. We don't make cars but we have a small collection. We conduct our own research experiments because we’re passionate about what we do and want to solve the problems we see around us. We’re embedded within ustwo with over 50 of us across our studios globally with specific sector expertise.",
  testimonials: [{
    testimonial: "The automotive eBook is a rarity, it's wonderful.",
    source: {
      name: 'Apple Design Team',
      title: 'San Francisco',
      company: ''
    }
  },{
    testimonial: "There was a recognition that we were attempting to do something that had never been down before. There was no pre-existing capability so that prompted us to work with ustwo.",
    source: {
      name: 'Doug Nicoll',
      title: 'Ford Smart Mobility, London',
      company: ''
    }
  },{
    testimonial: "BS shovelling art schools grads",
    source: {
      name: 'A Jalopnik reader',
      title: '',
      company: ''
    }
  },{
    testimonial: "It speaks volumes that a lot of people got inspired and had new thoughts after your presentation",
    source: {
      name: 'Autonomy design lead, Germany',
      title: '',
      company: ''
    }
  },{
    testimonial: "I know a lot of design agencies but they are the best. They have the best design skills; a great working style and the team are really smart",
    source: {
      name: 'Shusuke Miyazawa',
      title: 'Nissan, Tokyo',
      company: ''
    }
  },{
    testimonial: "Brilliant car UI from Monument Valley geniuses",
    source: {
      name: 'Wired',
      title: '',
      company: ''
    }
  },{
    testimonial: "Ustwo has a new idea to reinvent the instrument cluster in cars, one that creates a beautiful and more immediately readable presentation",
    source: {
      name: 'John Wenz',
      title: 'Popular Mechanics',
      company: ''
    }
  }],
  twitter: [{
    testimonial: "Electric vehicles are quiet and sneaky. For safety, NHTSA suggest all Ev's should make a sound. But what? We explore",
    source: {
      name: '@ustwoauto',
      title: 'Apr 3 2017',
      company: ''
    }
  },{
    testimonial: "Another tweet goes here",
    source: {
      name: '@ustwoauto',
      title: 'Feb 11 2017',
      company: ''
    }
  }],
  clients: ['BMW Group', 'Ford', 'Qantas', 'Emirates', 'TFL', 'Skanetrafiken', 'JLR', 'Nissan', 'Toyota', 'Alphabet'],
  partners: ['UCL', 'University of Washington', 'Wayfindr', 'Car Design Research', 'Stanford University', 'London School of Economics', 'Royal Society for Blind Children', 'Garmin'],
  projects: [{
    type: 'Research Project',
    shortTitle: 'auto-hmi',
    title: 'ARE WE THERE YET? THOUGHTS ON IN-CAR HMI',
    text: 'In this five part blog series ustwo Auto look into this phenomenon of growing in-car HMI complexity.',
    slug: '/work/ustwoauto'
  },{
    type: 'Research Project',
    shortTitle: 'auto-mobility',
    title: 'CITIES SHOW US THE WAY',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
    slug: '/work/ustwoauto',
    small: true
  },{
    type: 'Research Project',
    shortTitle: 'auto-reimagine',
    title: 'USTWO REIMAGINE THE IN-CAR CLUSTER',
    text: 'Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.',
    slug: '/work/ustwoauto',
    small: true
  }]
}

const featuredCaseStudy = {
  title: 'Ford GoPark',
  excerpt: 'A smart parking service tackling congestion in one of London’s busiest boroughs',
  colours: ['#87e283', '#92e9b2'],
  image: '/images/work/featured-gopark.png',
  imageAlt: 'iPhone showing Ford GoPark App',
  slug: '/work/ford-gopark'
}
