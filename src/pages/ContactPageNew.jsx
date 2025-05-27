import styled from 'styled-components';
import { motion } from 'framer-motion';
import useForm from '../hooks/useForm';
import MetaTags from '../components/MetaTags';

const ContactPageNew = () => {
  // Form validation function
  const validateForm = (values) => {}













































































































































































































































































export default ContactPageNew;`;  }    background: #333333;  &:hover:not(:disabled) {    margin-top: 20px;  transition: background-color 0.3s ease;  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};  border: none;  color: #ffffff;  background: ${props => props.$isLoading ? '#666666' : '#1a1a1a'};  letter-spacing: 0.1em;  text-transform: uppercase;  font-weight: 500;  font-size: 1rem;  padding: 25px 50px;const SubmitButton = styled.button``;  font-size: 1rem;  border: 1px solid #c3e6cb;  color: #155724;  background: #d4edda;  padding: 20px;const SuccessMessage = styled.div``;  margin-top: -10px;  color: #dc3545;  font-size: 0.9rem;const ErrorMessage = styled.span``;  }    color: #999999;  &::placeholder {    }    border-bottom-color: #1a1a1a;    outline: none;  &:focus {    transition: border-color 0.3s ease;  font-family: inherit;  min-height: 120px;  resize: vertical;  color: #1a1a1a;  border-bottom: 2px solid ${props => props.$hasError ? '#dc3545' : '#e5e5e5'};  border: none;  background: transparent;  font-size: 1.1rem;  padding: 20px 0;const Textarea = styled.textarea``;  }    color: #999999;  &::placeholder {    }    border-bottom-color: #1a1a1a;    outline: none;  &:focus {    transition: border-color 0.3s ease;  color: #1a1a1a;  border-bottom: 2px solid ${props => props.$hasError ? '#dc3545' : '#e5e5e5'};  border: none;  background: transparent;  font-size: 1.1rem;  padding: 20px 0;const Input = styled.input``;  color: #666666;  letter-spacing: 0.1em;  text-transform: uppercase;  font-weight: 500;  font-size: 0.9rem;const Label = styled.label``;  gap: 15px;  flex-direction: column;  display: flex;const FormField = styled.div``;  }    grid-template-columns: 1fr;  @media (max-width: 640px) {    gap: 30px;  grid-template-columns: 1fr 1fr;  display: grid;const FormRow = styled.div``;  line-height: 1.4;  margin: 0;  opacity: 0.8;  font-size: 0.9rem;const ContactTypeDesc = styled.p``;  margin: 0 0 10px 0;  font-weight: 500;  font-size: 1.1rem;const ContactTypeTitle = styled.h4``;  }    background: ${props => props.$active ? '#333333' : '#f5f5f5'};    border-color: #1a1a1a;  &:hover {    transition: all 0.3s ease;  cursor: pointer;  border: 2px solid ${props => props.$active ? '#1a1a1a' : '#e5e5e5'};  color: ${props => props.$active ? '#ffffff' : '#1a1a1a'};  background: ${props => props.$active ? '#1a1a1a' : '#ffffff'};  text-align: left;  padding: 30px;const ContactTypeCard = styled.button``;  }    grid-template-columns: 1fr;  @media (max-width: 640px) {    margin-bottom: 20px;  gap: 20px;  grid-template-columns: repeat(2, 1fr);  display: grid;const ContactTypeGrid = styled.div``;  gap: 40px;  flex-direction: column;  display: flex;const ContactForm = styled.form``;  letter-spacing: -0.01em;  color: #1a1a1a;  margin: 0 0 60px 0;  font-weight: 300;  font-size: 2.5rem;const FormTitle = styled.h2``;  }    padding: 40px 30px;  @media (max-width: 768px) {    border: 1px solid #e5e5e5;  padding: 80px;  background: #fafafa;const FormContainer = styled.div``;  font-weight: 300;  color: #1a1a1a;  line-height: 1.6;  font-size: 1.1rem;const ContactValue = styled.div``;  margin: 0 0 15px 0;  color: #999999;  letter-spacing: 0.1em;  text-transform: uppercase;  font-weight: 600;  font-size: 0.9rem;const ContactLabel = styled.h3``;  padding-left: 30px;  border-left: 2px solid #1a1a1a;const ContactItem = styled.div``;  margin: 0;  color: #666666;  line-height: 1.7;  font-size: 1.1rem;const InfoText = styled.p``;  letter-spacing: -0.01em;  color: #1a1a1a;  margin: 0 0 30px 0;  font-weight: 300;  font-size: 2.5rem;const InfoTitle = styled.h2``;  margin-bottom: 20px;const InfoSection = styled.div``;  gap: 60px;  flex-direction: column;  display: flex;const ContactInfo = styled.div``;  }    gap: 80px;    grid-template-columns: 1fr;  @media (max-width: 1024px) {    margin: 0 auto;  max-width: 1400px;  gap: 120px;  grid-template-columns: 1fr 1.2fr;  display: grid;const ContentGrid = styled.div``;  }    padding: 80px 30px;  @media (max-width: 768px) {    padding: 120px 60px;const ContentSection = styled.section``;  margin: 0 auto;  max-width: 600px;  color: #666666;  line-height: 1.6;  font-weight: 300;  font-size: clamp(1.2rem, 2.5vw, 1.5rem);const HeroSubtitle = styled.p``;  line-height: 0.9;  color: #1a1a1a;  margin: 0 0 40px 0;  letter-spacing: -0.02em;  font-weight: 200;  font-size: clamp(4rem, 8vw, 7rem);const HeroTitle = styled.h1``;  }    min-height: 40vh;    padding: 80px 30px;  @media (max-width: 768px) {    border-bottom: 1px solid #e5e5e5;  text-align: center;  padding: 120px 60px;  min-height: 50vh;  justify-content: center;  align-items: center;  display: flex;const HeroSection = styled.section``;  color: #1a1a1a;  background: #ffffff;  min-height: 100vh;const PageContainer = styled.div`// Styled Components    const errors = {};
    
    if (!values.name || values.name.trim().length < 3) {
      errors.name = 'Imię i nazwisko są wymagane (min. 3 znaki)';
    }
    
    if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Wprowadź poprawny adres email';
    }
    
    if (!values.message || values.message.trim().length < 10) {
      errors.message = 'Wiadomość jest wymagana (min. 10 znaków)';
    }
    
    return errors;
  };

  // Form submission handler
  const handleSubmit = async (formValues, { resetForm }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted successfully:', formValues);
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      return 'Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.';
    }
  };

  const {
    values: formData,
    errors: formErrors,
    generalError: formError,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleBlur,
    handleSubmit: handleFormSubmit,
    resetForm
  } = useForm(
    {
      name: '',
      email: '',
      phone: '',
      contactType: '',
      message: ''
    },
    validateForm,
    handleSubmit
  );

  return (
    <>
      <MetaTags 
        title="Kontakt - FLID Foundation"
        description="Skontaktuj się z nami. FLID Foundation - Fundacja na rzecz rozwoju nauki, kultury i edukacji."
        keywords="kontakt, FLID Foundation, fundacja, nauka, kultura, edukacja"
      />
      
      <PageContainer>
        {/* Hero Section */}
        <HeroSection>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HeroTitle>Kontakt</HeroTitle>
            <HeroSubtitle>
              Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania<br />
              i omówić możliwości współpracy
            </HeroSubtitle>
          </motion.div>
        </HeroSection>

        {/* Main Content */}
        <ContentSection>
          <ContentGrid>
            {/* Contact Information */}
            <ContactInfo
              as={motion.div}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <InfoSection>
                <InfoTitle>Informacje kontaktowe</InfoTitle>
                <InfoText>
                  Skontaktuj się z nami w dowolny sposób, który jest dla Ciebie najwygodniejszy.
                  Odpowiemy tak szybko, jak to możliwe.
                </InfoText>
              </InfoSection>

              <ContactItem>
                <ContactLabel>Adres email</ContactLabel>
                <ContactValue>kontakt@flidfoundation.org</ContactValue>
              </ContactItem>

              <ContactItem>
                <ContactLabel>Telefon</ContactLabel>
                <ContactValue>+48 123 456 789</ContactValue>
              </ContactItem>

              <ContactItem>
                <ContactLabel>Adres</ContactLabel>
                <ContactValue>
                  ul. Przykładowa 123<br />
                  00-001 Warszawa<br />
                  Polska
                </ContactValue>
              </ContactItem>

              <ContactItem>
                <ContactLabel>Godziny pracy</ContactLabel>
                <ContactValue>
                  Poniedziałek - Piątek: 9:00 - 17:00<br />
                  Sobota - Niedziela: Zamknięte
                </ContactValue>
              </ContactItem>
            </ContactInfo>

            {/* Contact Form */}
            <FormContainer
              as={motion.div}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <FormTitle>Wyślij wiadomość</FormTitle>
              
              <ContactForm onSubmit={handleFormSubmit}>
                {/* Contact Type Selection */}
                <ContactTypeGrid>
                  <ContactTypeCard
                    type="button"
                    $active={formData.contactType === 'general'}
                    onClick={() => handleChange({ target: { name: 'contactType', value: 'general' }})}
                  >
                    <ContactTypeTitle>Zapytanie ogólne</ContactTypeTitle>
                    <ContactTypeDesc>Pytania dotyczące naszej działalności</ContactTypeDesc>
                  </ContactTypeCard>
                  
                  <ContactTypeCard
                    type="button"
                    $active={formData.contactType === 'partnership'}
                    onClick={() => handleChange({ target: { name: 'contactType', value: 'partnership' }})}
                  >
                    <ContactTypeTitle>Współpraca</ContactTypeTitle>
                    <ContactTypeDesc>Propozycje partnerstwa i współpracy</ContactTypeDesc>
                  </ContactTypeCard>
                  
                  <ContactTypeCard
                    type="button"
                    $active={formData.contactType === 'project'}
                    onClick={() => handleChange({ target: { name: 'contactType', value: 'project' }})}
                  >
                    <ContactTypeTitle>Projekt</ContactTypeTitle>
                    <ContactTypeDesc>Informacje o projektach i programach</ContactTypeDesc>
                  </ContactTypeCard>
                  
                  <ContactTypeCard
                    type="button"
                    $active={formData.contactType === 'media'}
                    onClick={() => handleChange({ target: { name: 'contactType', value: 'media' }})}
                  >
                    <ContactTypeTitle>Media</ContactTypeTitle>
                    <ContactTypeDesc>Zapytania prasowe i medialne</ContactTypeDesc>
                  </ContactTypeCard>
                </ContactTypeGrid>

                {/* Form Fields */}
                <FormRow>
                  <FormField>
                    <Label>Imię i nazwisko *</Label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      $hasError={formErrors.name}
                      placeholder="Wprowadź swoje imię i nazwisko"
                    />
                    {formErrors.name && <ErrorMessage>{formErrors.name}</ErrorMessage>}
                  </FormField>

                  <FormField>
                    <Label>Email *</Label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      $hasError={formErrors.email}
                      placeholder="twoj@email.com"
                    />
                    {formErrors.email && <ErrorMessage>{formErrors.email}</ErrorMessage>}
                  </FormField>
                </FormRow>

                <FormField>
                  <Label>Telefon</Label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+48 123 456 789"
                  />
                </FormField>

                <FormField>
                  <Label>Wiadomość *</Label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    $hasError={formErrors.message}
                    placeholder="Opisz szczegółowo swoje zapytanie lub propozycję..."
                    rows={6}
                  />
                  {formErrors.message && <ErrorMessage>{formErrors.message}</ErrorMessage>}
                </FormField>

                {formError && <ErrorMessage>{formError}</ErrorMessage>}

                {isSubmitted && !formError && (
                  <SuccessMessage>
                    Dziękujemy za wiadomość! Odpowiemy tak szybko, jak to możliwe.
                  </SuccessMessage>
                )}

                <SubmitButton
                  type="submit"
                  disabled={isSubmitting}
                  $isLoading={isSubmitting}
                >
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                </SubmitButton>
              </ContactForm>
            </FormContainer>
          </ContentGrid>
        </ContentSection>
      </PageContainer>
    </>
  );
};
  // Form validation function
  const validateForm = (values) => {
    const errors = {};
    
    if (!values.name || values.name.trim().length < 3) {
      errors.name = 'Imię i nazwisko są wymagane (min. 3 znaki)';
    }
    
    if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Wprowadź poprawny adres email';
    }
    
    if (!values.message || values.message.trim().length < 10) {
      errors.message = 'Wiadomość jest wymagana (min. 10 znaków)';
    }
    
    return errors;
  };

  // Form submission handler
  const handleSubmit = async (formValues, { resetForm }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted successfully:', formValues);
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      return 'Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.';
    }
  };

  const {
    values: formData,
    errors: formErrors,
    generalError: formError,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleBlur,
    handleSubmit: handleFormSubmit,
    resetForm
  } = useForm(
    {
      name: '',
      email: '',
      subject: '',
      message: '',
      company: '',
      type: 'cooperation'
    }, 
    validateForm,
    handleSubmit
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <>
      <MetaTags 
        title="Kontakt - Fundacja FLID"
        description="Skontaktuj się z Fundacją Ludzie-Innowacje-Design. Wyrafinowana forma kontaktu."
        keywords="kontakt, flid, fundacja, formularz kontaktowy"
        canonical="/contact"
      />
      
      <PageContainer>
        {/* Hero Section */}
        <HeroSection>
          <HeroContent>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <HeroTitle>Kontakt</HeroTitle>
              <HeroSubtitle>
                Rozpocznijmy rozmowę o przyszłości designu
              </HeroSubtitle>
            </motion.div>
          </HeroContent>
        </HeroSection>

        {/* Main Content */}
        <ContentSection>
          <Container>
            <ContentGrid
              as={motion.div}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Contact Info */}
              <InfoSection
                as={motion.div}
                variants={itemVariants}
              >
                <SectionLabel>01</SectionLabel>
                <SectionTitle>Informacje</SectionTitle>
                
                <InfoGrid>
                  <InfoItem>
                    <InfoLabel>Adres</InfoLabel>
                    <InfoText>
                      Fundacja Ludzie-Innowacje-Design<br />
                      ul. Gazownicza 9<br />
                      43-300 Bielsko-Biała
                    </InfoText>
                  </InfoItem>

                  <InfoItem>
                    <InfoLabel>Telefon</InfoLabel>
                    <InfoText>(33) 812 43 86</InfoText>
                  </InfoItem>

                  <InfoItem>
                    <InfoLabel>Email</InfoLabel>
                    <InfoText>biuro@flid.pl</InfoText>
                  </InfoItem>

                  <InfoItem>
                    <InfoLabel>Media społecznościowe</InfoLabel>
                    <SocialLink 
                      href="https://www.facebook.com/fundacja.ludzie.innowacje.design" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Facebook →
                    </SocialLink>
                  </InfoItem>
                </InfoGrid>

                {/* Map */}
                <MapContainer>
                  <MapFrame 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2578.9963557259424!2d19.0414658!3d49.8207946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716992fe51daeb5%3A0x237c6ab8a6ed42fd!2sGazownicza%209%2C%2043-300%20Bielsko-Bia%C5%82a!5e0!3m2!1spl!2spl!4v1653558965489!5m2!1spl!2spl" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Lokalizacja Fundacji FLID"
                  />
                </MapContainer>
              </InfoSection>

              {/* Contact Form */}
              <FormSection
                as={motion.div}
                variants={itemVariants}
              >
                <SectionLabel>02</SectionLabel>
                <SectionTitle>Wyślij wiadomość</SectionTitle>

                {isSubmitted ? (
                  <SuccessMessage
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <SuccessIcon>✓</SuccessIcon>
                    <SuccessTitle>Wiadomość wysłana</SuccessTitle>
                    <SuccessText>
                      Dziękujemy za kontakt. Odpowiemy tak szybko, jak to możliwe.
                    </SuccessText>
                    <ResetButton onClick={resetForm}>
                      Wyślij kolejną wiadomość
                    </ResetButton>
                  </SuccessMessage>
                ) : (
                  <ContactForm onSubmit={handleFormSubmit}>
                    {formError && (
                      <ErrorMessage>{formError}</ErrorMessage>
                    )}

                    {/* Contact Type Selection */}
                    <FormSection>
                      <TypeGrid>
                        <TypeOption 
                          isSelected={formData.type === 'cooperation'}
                          onClick={() => handleChange({ target: { name: 'type', value: 'cooperation' } })}
                        >
                          <TypeLabel>Współpraca</TypeLabel>
                          <TypeDesc>Projekty partnerskie, inicjatywy</TypeDesc>
                        </TypeOption>
                        
                        <TypeOption 
                          isSelected={formData.type === 'work'}
                          onClick={() => handleChange({ target: { name: 'type', value: 'work' } })}
                        >
                          <TypeLabel>Kariera</TypeLabel>
                          <TypeDesc>Oferty pracy, staże</TypeDesc>
                        </TypeOption>
                        
                        <TypeOption 
                          isSelected={formData.type === 'media'}
                          onClick={() => handleChange({ target: { name: 'type', value: 'media' } })}
                        >
                          <TypeLabel>Media</TypeLabel>
                          <TypeDesc>Zapytania prasowe, wywiady</TypeDesc>
                        </TypeOption>
                        
                        <TypeOption 
                          isSelected={formData.type === 'other'}
                          onClick={() => handleChange({ target: { name: 'type', value: 'other' } })}
                        >
                          <TypeLabel>Inne</TypeLabel>
                          <TypeDesc>Pytania ogólne</TypeDesc>
                        </TypeOption>
                      </TypeGrid>
                    </FormSection>

                    {/* Form Fields */}
                    <FieldsGrid>
                      <FormGroup>
                        <FormInput 
                          type="text" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Imię i nazwisko *"
                          hasError={formErrors.name}
                        />
                        {formErrors.name && <FieldError>{formErrors.name}</FieldError>}
                      </FormGroup>

                      <FormGroup>
                        <FormInput 
                          type="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Adres email *"
                          hasError={formErrors.email}
                        />
                        {formErrors.email && <FieldError>{formErrors.email}</FieldError>}
                      </FormGroup>

                      <FormGroup $fullWidth>
                        <FormInput 
                          type="text" 
                          name="subject" 
                          value={formData.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Temat wiadomości"
                        />
                      </FormGroup>

                      {formData.type === 'cooperation' && (
                        <FormGroup $fullWidth>
                          <FormInput 
                            type="text" 
                            name="company" 
                            value={formData.company}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Organizacja / Firma"
                          />
                        </FormGroup>
                      )}

                      <FormGroup $fullWidth>
                        <FormTextarea 
                          name="message" 
                          rows="6"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Twoja wiadomość *"
                          hasError={formErrors.message}
                        />
                        {formErrors.message && <FieldError>{formErrors.message}</FieldError>}
                      </FormGroup>
                    </FieldsGrid>

                    <SubmitButton 
                      type="submit" 
                      disabled={isSubmitting}
                      as={motion.button}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                    </SubmitButton>
                  </ContactForm>
                )}
              </FormSection>
            </ContentGrid>
          </Container>
        </ContentSection>

        {/* Bottom Spacer */}
        <Spacer />
      </PageContainer>
    </>
  );
};

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: var(--background);
  color: var(--text-primary);
`;

const HeroSection = styled.section`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem 4rem;
  
  @media (max-width: 768px) {
    min-height: 50vh;
    padding: 6rem 1rem 3rem;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 200;
  letter-spacing: -0.02em;
  margin: 0 0 2rem 0;
  font-family: 'Inter', sans-serif;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  color: var(--text-secondary);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContentSection = styled.section`
  padding: 4rem 0 8rem;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 8rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: 350px 1fr;
    gap: 6rem;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const InfoSection = styled.div`
  
`;

const FormSection = styled.div`
  
`;

const SectionLabel = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: -0.01em;
  margin: 0 0 3rem 0;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  gap: 3rem;
  margin-bottom: 4rem;
`;

const InfoItem = styled.div`
  
`;

const InfoLabel = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const InfoText = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-primary);
`;

const SocialLink = styled.a`
  display: inline-block;
  font-size: 1rem;
  color: var(--text-primary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
  
  &:hover {
    border-bottom-color: var(--text-primary);
    transform: translateX(4px);
  }
`;

const MapContainer = styled.div`
  height: 300px;
  border: 1px solid var(--border);
  background: var(--background-secondary);
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  filter: grayscale(100%) contrast(1.1);
`;

const ContactForm = styled.form`
  
`;

const TypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TypeOption = styled.div`
  padding: 1.5rem;
  border: 1px solid ${props => props.isSelected ? 'var(--text-primary)' : 'var(--border)'};
  background: ${props => props.isSelected ? 'var(--text-primary)' : 'transparent'};
  color: ${props => props.isSelected ? 'var(--background)' : 'var(--text-primary)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--text-primary);
  }
`;

const TypeLabel = styled.div`
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const TypeDesc = styled.div`
  font-size: 0.875rem;
  opacity: 0.8;
`;

const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  grid-column: ${props => props.$fullWidth ? '1 / -1' : 'auto'};
  
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem 0;
  border: none;
  border-bottom: 1px solid ${props => props.hasError ? '#ef4444' : 'var(--border)'};
  background: transparent;
  font-size: 1rem;
  color: var(--text-primary);
  outline: none;
  transition: border-color 0.3s ease;
  
  &::placeholder {
    color: var(--text-secondary);
  }
  
  &:focus {
    border-bottom-color: var(--text-primary);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem 0;
  border: none;
  border-bottom: 1px solid ${props => props.hasError ? '#ef4444' : 'var(--border)'};
  background: transparent;
  font-size: 1rem;
  color: var(--text-primary);
  outline: none;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: border-color 0.3s ease;
  
  &::placeholder {
    color: var(--text-secondary);
  }
  
  &:focus {
    border-bottom-color: var(--text-primary);
  }
`;

const FieldError = styled.div`
  font-size: 0.875rem;
  color: #ef4444;
  margin-top: 0.5rem;
`;

const ErrorMessage = styled.div`
  padding: 1rem;
  background: #fee2e2;
  color: #dc2626;
  margin-bottom: 2rem;
  font-size: 0.875rem;
`;

const SubmitButton = styled.button`
  padding: 1rem 3rem;
  background: var(--text-primary);
  color: var(--background);
  border: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &:hover {
    background: var(--text-secondary);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 3rem 0;
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  border: 2px solid var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 2rem;
  font-weight: 300;
`;

const SuccessTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0 0 1rem 0;
`;

const SuccessText = styled.p`
  color: var(--text-secondary);
  margin: 0 0 2rem 0;
  line-height: 1.6;
`;

const ResetButton = styled.button`
  padding: 0.75rem 2rem;
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--text-primary);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &:hover {
    background: var(--text-primary);
    color: var(--background);
  }
`;

const Spacer = styled.div`
  height: 8rem;
  
  @media (max-width: 768px) {
    height: 4rem;
  }
`;

export default ContactPageNew;
