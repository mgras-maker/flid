import { useEffect } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import MetaTags from '../components/MetaTags';
import OptimizedImage from '../components/OptimizedImage';
import { ButtonPrimary } from '../components/Buttons';
import { CreativeHeading } from '../components/CreativeElements';
import { GradientText } from '../components/CreativeTypography';
import { Placeholder, TeamMemberPlaceholder } from '../components/PlaceholderImages';

const AboutPage = () => {  // Animation controls for scroll animations
  const controlsMission = useAnimation();
  const controlsVision = useAnimation();
  const controlsValues = useAnimation();
  const controlsTeam = useAnimation();
  const controlsHistory = useAnimation();
  const controlsCta = useAnimation();
  
  // References for scroll detection
  const [refMission, inViewMission] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refVision, inViewVision] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refValues, inViewValues] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refTeam, inViewTeam] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refHistory, inViewHistory] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refCta, inViewCta] = useInView({ threshold: 0.2, triggerOnce: true });
  
  // Trigger animations when sections come into view
  useEffect(() => {
    if (inViewMission) {
      controlsMission.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    }
    if (inViewVision) {
      controlsVision.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    }
    if (inViewValues) {
      controlsValues.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    }
    if (inViewTeam) {
      controlsTeam.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    }
    if (inViewHistory) {
      controlsHistory.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    }
    if (inViewCta) {
      controlsCta.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    }
  }, [inViewMission, inViewVision, inViewValues, inViewTeam, inViewHistory, inViewCta, 
      controlsMission, controlsVision, controlsValues, controlsTeam, controlsHistory, controlsCta]);
  
  return (
    <>      <MetaTags 
        title="O Fundacji FLID"
        description="Poznaj Fundację Ludzie-Innowacje-Design - nasza misja, zespół oraz historia działalności w obszarze zrównoważonego designu."
        keywords="fundacja flid, zespół, misja, design, o nas, zrównoważony rozwój"
        canonical="/about"
      />
      
      {/* Hero section */}
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTagline>Fundacja Ludzie-Innowacje-Design</HeroTagline>
            <HeroTitle>
              Projektujemy <GradientText>przyszłość</GradientText> łącząc ludzi i innowacje
            </HeroTitle>
            <HeroDescription>
              Działamy na rzecz społeczeństwa, środowiska i gospodarki poprzez projektowanie innowacyjnych, 
              zrównoważonych rozwiązań. Łączymy ekspertów, projektantów i społeczności, 
              aby wspólnie tworzyć lepszą przyszłość.
            </HeroDescription>
          </HeroContent>
          <HeroImageWrapper>
            <OptimizedImage 
              src="/images/placeholder.svg" 
              alt="Fundacja FLID"
              aspectRatio="16:9"
              priority
              className="hero-image"
            />
            <HeroImageAccent />
          </HeroImageWrapper>
        </Container>
      </HeroSection>
      
      {/* Misja section */}
      <Section ref={refMission}>
        <Container>          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={controlsMission}
          >
            <SectionGrid $reverseOnMobile={false}>
              <SectionContent>
                <SectionHeading>Nasza misja</SectionHeading>
                <SectionText>
                  <p>
                    Misją Fundacji Ludzie-Innowacje-Design jest wspieranie pozytywnej 
                    zmiany społecznej poprzez projektowanie innowacyjnych, zrównoważonych 
                    rozwiązań odpowiadających na rzeczywiste wyzwania współczesnego świata.
                  </p>
                  <p>
                    Tworzymy platformę współpracy dla projektantów, badaczy, edukatorów i społeczności, 
                    aby wspólnie tworzyć lepszą przyszłość zarówno w wymiarze lokalnym, jak i globalnym.
                  </p>
                </SectionText>
              </SectionContent>              <SectionImage>
                <Placeholder 
                  height="300px" 
                  text="Misja Fundacji FLID" 
                  bgColor="var(--primary-light)"
                  textColor="var(--primary)"
                />
              </SectionImage>
            </SectionGrid>
          </motion.div>
        </Container>
      </Section>
      
      {/* Wizja section */}
      <Section ref={refVision}>
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={controlsVision}
          >
            <SectionGrid $reverseOnMobile={true}>              <SectionImage>
                <Placeholder 
                  height="300px" 
                  text="Wizja Fundacji FLID" 
                  bgColor="var(--secondary-light)"
                  textColor="var(--secondary)"
                />
              </SectionImage>
              <SectionContent>
                <SectionHeading>Nasza wizja</SectionHeading>
                <SectionText>
                  <p>
                    Dążymy do świata, w którym design jest narzędziem pozytywnej zmiany społecznej,
                    gdzie projektanci współpracują z różnymi interesariuszami, by tworzyć rozwiązania
                    odpowiadające na rzeczywiste potrzeby ludzi, jednocześnie szanując ograniczenia
                    planety.
                  </p>
                  <p>
                    Chcemy, by myślenie projektowe stało się powszechnym narzędziem rozwiązywania
                    problemów na różnych poziomach - od społeczności lokalnych po wyzwania globalne.
                  </p>
                </SectionText>
              </SectionContent>
            </SectionGrid>
          </motion.div>
        </Container>
      </Section>
      
      {/* Wartości section */}
      <Section ref={refValues}>
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={controlsValues}
          >
            <SectionHeading $centered>Nasze wartości</SectionHeading>
            <ValuesGrid>
              <ValueCard>
                <ValueIcon>🌱</ValueIcon>
                <ValueTitle>Zrównoważony rozwój</ValueTitle>
                <ValueDescription>
                  Projektujemy z myślą o przyszłych pokoleniach, uwzględniając potrzeby 
                  społeczne, ekonomiczne i środowiskowe.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard>
                <ValueIcon>🤝</ValueIcon>
                <ValueTitle>Współpraca</ValueTitle>
                <ValueDescription>
                  Wierzymy w siłę wspólnego działania i łączenia różnych perspektyw
                  w procesie projektowym.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard>
                <ValueIcon>💡</ValueIcon>
                <ValueTitle>Innowacyjność</ValueTitle>
                <ValueDescription>
                  Poszukujemy nowych, nieoczywistych rozwiązań, które mogą przynieść
                  realną zmianę w otaczającym nas świecie.
                </ValueDescription>
              </ValueCard>
              
              <ValueCard>
                <ValueIcon>♻️</ValueIcon>
                <ValueTitle>Odpowiedzialność</ValueTitle>
                <ValueDescription>
                  Bierzemy odpowiedzialność za efekty naszych działań i ich wpływ
                  na społeczeństwo i środowisko.
                </ValueDescription>
              </ValueCard>
            </ValuesGrid>
          </motion.div>
        </Container>
      </Section>
      
      {/* Team section */}
      <Section ref={refTeam}>
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={controlsTeam}
          >
            <SectionHeading $centered>Nasz zespół</SectionHeading>
            <TeamGrid>
              <TeamMember>
                <TeamMemberImageContainer>
                  <TeamMemberPlaceholder name="Anna Kowalska" />
                </TeamMemberImageContainer>
                <TeamMemberInfo>
                  <TeamMemberName>Anna Kowalska</TeamMemberName>
                  <TeamMemberRole>Prezes Zarządu</TeamMemberRole>
                  <TeamMemberBio>
                    Ekspertka w dziedzinie designu usług i innowacji społecznych. 
                    Z wykształcenia projektantka i socjolożka, z pasją do 
                    zrównoważonego rozwoju.
                  </TeamMemberBio>
                </TeamMemberInfo>
              </TeamMember>
              
              <TeamMember>
                <TeamMemberImageContainer>
                  <TeamMemberPlaceholder name="Jan Nowak" />
                </TeamMemberImageContainer>
                <TeamMemberInfo>
                  <TeamMemberName>Jan Nowak</TeamMemberName>
                  <TeamMemberRole>Koordynator projektów</TeamMemberRole>
                  <TeamMemberBio>
                    Projektant z bogatym doświadczeniem w prowadzeniu 
                    interdyscyplinarnych zespołów. Specjalista w zakresie 
                    metodologii Design Thinking.
                  </TeamMemberBio>
                </TeamMemberInfo>
              </TeamMember>
              
              <TeamMember>
                <TeamMemberImageContainer>
                  <TeamMemberPlaceholder name="Maria Wiśniewska" />
                </TeamMemberImageContainer>
                <TeamMemberInfo>
                  <TeamMemberName>Maria Wiśniewska</TeamMemberName>
                  <TeamMemberRole>Specjalistka ds. edukacji</TeamMemberRole>
                  <TeamMemberBio>
                    Pedagożka z pasją do innowacyjnych metod nauczania. 
                    Prowadzi warsztaty i szkolenia z zakresu myślenia projektowego 
                    dla dzieci i młodzieży.
                  </TeamMemberBio>
                </TeamMemberInfo>
              </TeamMember>
              
              <TeamMember>
                <TeamMemberImageContainer>
                  <TeamMemberPlaceholder name="Piotr Zieliński" />
                </TeamMemberImageContainer>
                <TeamMemberInfo>
                  <TeamMemberName>Piotr Zieliński</TeamMemberName>
                  <TeamMemberRole>Specjalista ds. komunikacji</TeamMemberRole>
                  <TeamMemberBio>
                    Ekspert w dziedzinie strategii komunikacji i marketingu. 
                    Odpowiada za promocję działań Fundacji i budowanie relacji 
                    z partnerami.
                  </TeamMemberBio>
                </TeamMemberInfo>
              </TeamMember>
            </TeamGrid>
          </motion.div>
        </Container>
      </Section>
      
      {/* Historia section */}
      <Section ref={refHistory}>
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={controlsHistory}
          >
            <SectionHeading $centered>Historia Fundacji</SectionHeading>
            <Timeline>
              <TimelineItem>
                <TimelineDate>2019</TimelineDate>
                <TimelineContent>
                  <TimelineTitle>Powstanie Fundacji</TimelineTitle>
                  <TimelineDescription>
                    Fundacja Ludzie-Innowacje-Design została powołana do życia 
                    przez grupę projektantów, edukatorów i aktywistów z Bielska-Białej.
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineDate>2020</TimelineDate>
                <TimelineContent>
                  <TimelineTitle>Pierwsze projekty</TimelineTitle>
                  <TimelineDescription>
                    Zrealizowanie pierwszych projektów społecznych, w tym "Ławeczki Beskidzkiej" 
                    oraz uruchomienie "Artystycznej Chaty na Trzonce".
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineDate>2021</TimelineDate>
                <TimelineContent>
                  <TimelineTitle>Rozwój programów edukacyjnych</TimelineTitle>
                  <TimelineDescription>
                    Uruchomienie programu warsztatów Design Thinking dla szkół 
                    oraz stworzenie portalu D-spot.pl poświęconego designowi.
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineDate>2022</TimelineDate>
                <TimelineContent>
                  <TimelineTitle>Międzynarodowa współpraca</TimelineTitle>
                  <TimelineDescription>
                    Rozpoczęcie współpracy z partnerami z Czech i Słowacji, 
                    organizacja międzynarodowych warsztatów "Energia Jutra".
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineDate>2023</TimelineDate>
                <TimelineContent>
                  <TimelineTitle>Otwarcie BB__Design Lab</TimelineTitle>
                  <TimelineDescription>
                    Uruchomienie laboratorium projektowego w Bielsku-Białej, 
                    przestrzeni dla kreatynych działań i współpracy.
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </motion.div>
        </Container>
      </Section>
      
      {/* CTA section */}
      <Section ref={refCta}>
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={controlsCta}
          >
            <CtaSection>
              <CtaContent>
                <CreativeHeading level={2}>Dołącz do nas!</CreativeHeading>
                <CtaText>
                  Jeśli podzielasz nasze wartości i chcesz wspólnie z nami projektować lepszą przyszłość, 
                  skontaktuj się z nami. Zawsze szukamy nowych współpracowników, wolontariuszy i partnerów.
                </CtaText>
                <CtaButtons>
                  <ButtonPrimary to="/contact">Skontaktuj się z nami</ButtonPrimary>
                </CtaButtons>
              </CtaContent>
            </CtaSection>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

// Styled Components
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

// Hero Section Styles
const HeroSection = styled.section`
  padding: 6rem 0 4rem;
  margin-bottom: 2rem;
  overflow: hidden;
  animation: fadeIn 0.8s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @media (min-width: 992px) {
    padding: 8rem 0 6rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin-bottom: 3rem;
  
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const HeroTagline = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
`;

const HeroImageWrapper = styled.div`
  position: relative;
  max-width: 100%;
  margin-top: 2rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 992px) {
    margin-top: 0;
  }
    img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.7s ease-in-out;
  }
  
  &:hover img {
    transform: scale(1.05);
    filter: brightness(1.05);
  }
`;

const HeroImageAccent = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background: var(--accent);
  opacity: 0.15;
  border-radius: 50%;
  bottom: -50px;
  right: -50px;
  z-index: 1;
`;

// Section Styles
const Section = styled.section`
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 992px) {
    grid-template-columns: ${({ $reverseOnMobile }) => 
      $reverseOnMobile ? '1fr 1fr' : '1fr 1fr'};
    gap: 4rem;
    ${({ $reverseOnMobile }) => 
      $reverseOnMobile && 'direction: rtl;'}
  }
  
  & > * {
    direction: ltr;
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionHeading = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--heading);
  text-align: ${({ $centered }) => $centered ? 'center' : 'left'};
`;

const SectionText = styled.div`
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: var(--text);
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;

const SectionImage = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

// Values Styles
const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover, &:focus-within {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ValueIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ValueTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--heading);
`;

const ValueDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

// Team Styles
const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamMember = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  
  &:hover, &:focus-within {
    transform: translateY(-10px);
  }
`;

const TeamMemberImageContainer = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
`;

const TeamMemberInfo = styled.div`
  padding: 1.5rem;
`;

const TeamMemberName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
  color: var(--heading);
`;

const TeamMemberRole = styled.p`
  color: var(--primary);
  font-weight: 500;
  margin-bottom: 1rem;
`;

const TeamMemberBio = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
`;

// Timeline Styles
const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 3rem auto 0;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: var(--border);
    transform: translateX(-50%);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  justify-content: flex-end;
  
  &:nth-child(even) {
    justify-content: flex-start;
    
    @media (max-width: 768px) {
      justify-content: flex-end;
    }
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDate = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  background-color: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  z-index: 2;
  
  @media (max-width: 768px) {
    left: 20px;
    transform: translateX(-50%);
  }
`;

const TimelineContent = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 1.5rem;
  width: 45%;
  margin-top: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover, &:focus-within {
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    width: calc(100% - 50px);
    margin-left: 50px;
  }
`;

const TimelineTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: var(--heading);
`;

const TimelineDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
`;

// CTA Section
const CtaSection = styled.div`
  background: linear-gradient(135deg, var(--primary-light) 0%, transparent 100%);
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
  
  &:before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: var(--accent-light);
    opacity: 0.3;
    top: -100px;
    right: -100px;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: var(--primary-light);
    opacity: 0.3;
    bottom: -75px;
    left: -75px;
  }
`;

const CtaContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 700px;
  margin: 0 auto;
`;

const CtaText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 1.5rem 0 2rem;
  color: var(--text);
`;

const CtaButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export default AboutPage;
