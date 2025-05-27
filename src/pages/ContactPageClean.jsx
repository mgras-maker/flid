import styled from 'styled-components';
import { motion } from 'framer-motion';
import useForm from '../hooks/useForm';
import MetaTags from '../components/MetaTags';

const ContactPage = () => {
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

// Styled Components with sophisticated design, extensive white space, no gradients or rounded corners
const PageContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
  color: #1a1a1a;
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 120px 60px;
  text-align: center;
  border-bottom: 1px solid #e5e5e5;
  
  @media (max-width: 768px) {
    padding: 80px 30px;
    min-height: 40vh;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(4rem, 8vw, 7rem);
  font-weight: 200;
  letter-spacing: -0.02em;
  margin: 0 0 40px 0;
  color: #1a1a1a;
  line-height: 0.9;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.2rem, 2.5vw, 1.5rem);
  font-weight: 300;
  line-height: 1.6;
  color: #666666;
  max-width: 600px;
  margin: 0 auto;
`;

const ContentSection = styled.section`
  padding: 120px 60px;
  
  @media (max-width: 768px) {
    padding: 80px 30px;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 120px;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 80px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const InfoSection = styled.div`
  margin-bottom: 20px;
`;

const InfoTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0 0 30px 0;
  color: #1a1a1a;
  letter-spacing: -0.01em;
`;

const InfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #666666;
  margin: 0;
`;

const ContactItem = styled.div`
  border-left: 2px solid #1a1a1a;
  padding-left: 30px;
`;

const ContactLabel = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #999999;
  margin: 0 0 15px 0;
`;

const ContactValue = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #1a1a1a;
  font-weight: 300;
`;

const FormContainer = styled.div`
  background: #fafafa;
  padding: 80px;
  border: 1px solid #e5e5e5;
  
  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;

const FormTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  margin: 0 0 60px 0;
  color: #1a1a1a;
  letter-spacing: -0.01em;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ContactTypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ContactTypeCard = styled.button`
  padding: 30px;
  text-align: left;
  background: ${props => props.$active ? '#1a1a1a' : '#ffffff'};
  color: ${props => props.$active ? '#ffffff' : '#1a1a1a'};
  border: 2px solid ${props => props.$active ? '#1a1a1a' : '#e5e5e5'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #1a1a1a;
    background: ${props => props.$active ? '#333333' : '#f5f5f5'};
  }
`;

const ContactTypeTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 0 10px 0;
`;

const ContactTypeDesc = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0;
  line-height: 1.4;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #666666;
`;

const Input = styled.input`
  padding: 20px 0;
  font-size: 1.1rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${props => props.$hasError ? '#dc3545' : '#e5e5e5'};
  color: #1a1a1a;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-bottom-color: #1a1a1a;
  }
  
  &::placeholder {
    color: #999999;
  }
`;

const Textarea = styled.textarea`
  padding: 20px 0;
  font-size: 1.1rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${props => props.$hasError ? '#dc3545' : '#e5e5e5'};
  color: #1a1a1a;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-bottom-color: #1a1a1a;
  }
  
  &::placeholder {
    color: #999999;
  }
`;

const ErrorMessage = styled.span`
  font-size: 0.9rem;
  color: #dc3545;
  margin-top: -10px;
`;

const SuccessMessage = styled.div`
  padding: 20px;
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  padding: 25px 50px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: ${props => props.$isLoading ? '#666666' : '#1a1a1a'};
  color: #ffffff;
  border: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.3s ease;
  margin-top: 20px;
  
  &:hover:not(:disabled) {
    background: #333333;
  }
`;

export default ContactPage;
