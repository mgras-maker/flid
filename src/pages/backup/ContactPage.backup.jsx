import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { GradientButton, BorderAnimationButton } from '../components/CreativeButtons';
import { CreativeDivider, FloatingElement } from '../components/CreativeElements';
import { GradientText } from '../components/CreativeTypography';
import PageHeader from '../components/PageHeader';
import { Placeholder } from '../components/PlaceholderImages';
import useForm from '../hooks/useForm';
import MetaTags from '../components/MetaTags';
import useMatchMedia from '../hooks/useMatchMedia';

const ContactPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const mapRef = useRef(null);
  const isMapInView = useInView(mapRef, { once: false, amount: 0.3 });
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: false, amount: 0.3 });
  const isMobile = useMatchMedia('(max-width: 768px)');

  // Definicje ikon dla lepszego wyglądu
  const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

  const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const WebIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );

  const validateForm = (values) => {
    const errors = {};
    
    // Name validation - require at least 3 characters
    if (!values.name) {
      errors.name = 'Imię i nazwisko są wymagane';
    } else if (values.name.trim().length < 3) {
      errors.name = 'Imię i nazwisko powinny zawierać co najmniej 3 znaki';
    }
    
    // Email validation with more thorough regex
    if (!values.email) {
      errors.email = 'Email jest wymagany';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Wprowadź poprawny adres email';
    }
    
    // Message validation - require at least 10 characters
    if (!values.message) {
      errors.message = 'Wiadomość jest wymagana';
    } else if (values.message.trim().length < 10) {
      errors.message = 'Wiadomość powinna zawierać co najmniej 10 znaków';
    }
    
    return errors;
  };
  
  // Form submission handler
  const handleSubmit = async (formValues, { resetForm }) => {
    setSubmitting(true);
    
    try {
      // Simulate API call with setTimeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted successfully:', formValues);
      setSubmitSuccess(true);
      resetForm();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitError(null), 5000);
    } finally {
      setSubmitting(false);
    }
  };
  
  // Use the form hook
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
      type: 'cooperation' // Default: cooperation, alternatives: job, other
    }, 
    validateForm,
    handleSubmit
  );
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
        duration: 0.8,
        ease: [0.19, 1.0, 0.22, 1.0]
      }
    }
  };
  
  const itemVariants = {
    hidden: { 
      y: 30, 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24,
        duration: 0.7 
      }
    }
  };

  // Field focus tracking for enhanced animations
  const [focusedField, setFocusedField] = useState(null);
  
  // Map tracking animation
  const [mapLoaded, setMapLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate map loading to trigger animation
    setTimeout(() => {
      setMapLoaded(true);
    }, 1000);
  }, []);
  
  return (
    <>
      <MetaTags 
        title="Kontakt"
        description="Skontaktuj się z Fundacją Ludzie-Innowacje-Design. Napisz do nas, odwiedź nas lub zadzwoń."
        keywords="kontakt, flid, fundacja, formularz kontaktowy, adres, telefon"
        canonical="/contact"
      />
      
      <PageHeader 
        title="Kontakt" 
        subtitle="Skontaktuj się z nami"
      />
      
      <section>
        <div className="container">
          <ContactWrapper
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >            <ContactInfo
              as={motion.div}
              variants={itemVariants}
            >
              <ContactInfoTitle>Informacje kontaktowe</ContactInfoTitle>
              
              <ContactInfoItem
                as={motion.div}
                variants={itemVariants}
              >
                <ContactIcon><LocationIcon /></ContactIcon>
                <div>
                  <ContactLabel>Adres</ContactLabel>
                  <ContactText>
                    Fundacja Ludzie-Innowacje-Design<br />
                    ul. Gazownicza 9<br />
                    43-300 Bielsko-Biała
                  </ContactText>
                </div>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactIcon><PhoneIcon /></ContactIcon>
                <div>
                  <ContactLabel>Telefon</ContactLabel>
                  <ContactText>(33) 812 43 86</ContactText>
                </div>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactIcon><EmailIcon /></ContactIcon>
                <div>
                  <ContactLabel>Email</ContactLabel>
                  <ContactText>biuro@flid.pl</ContactText>
                </div>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactIcon><WebIcon /></ContactIcon>
                <div>
                  <ContactLabel>Media społecznościowe</ContactLabel>
                  <SocialLinks>
                    <SocialLink 
                      href="https://www.facebook.com/fundacja.ludzie.innowacje.design" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                      </svg>
                    </SocialLink>
                  </SocialLinks>
                </div>
              </ContactInfoItem>
              
              <MapContainer ref={mapRef}>
                <MapIframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2578.9963557259424!2d19.0414658!3d49.8207946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716992fe51daeb5%3A0x237c6ab8a6ed42fd!2sGazownicza%209%2C%2043-300%20Bielsko-Bia%C5%82a!5e0!3m2!1spl!2spl!4v1653558965489!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa dojazdu do fundacji"
                />
              </MapContainer>
            </ContactInfo>
              <ContactFormContainer
              as={motion.div}
              variants={itemVariants}
              ref={formRef}
            >
              {isSubmitted ? (
                <ThankYouMessage>
                  <ThankYouIcon>✓</ThankYouIcon>
                  <ThankYouTitle>Dziękujemy za wiadomość!</ThankYouTitle>
                  <ThankYouText>
                    Twoja wiadomość została wysłana. Odpowiemy na nią tak szybko,
                    jak to możliwe.
                  </ThankYouText>
                  <ResetButton onClick={resetForm}>
                    Wyślij nową wiadomość
                  </ResetButton>
                </ThankYouMessage>
              ) : (
                <>
                  <ContactFormTitle>Wyślij nam wiadomość</ContactFormTitle>
                  
                  {formError && (
                    <FormError>
                      {formError}
                    </FormError>
                  )}
                  
                  <ContactForm onSubmit={handleFormSubmit}>
                    <FormGroup>
                      <FormLabel htmlFor="name">Imię i nazwisko *</FormLabel>
                      <FormInput 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      {formErrors.name && <ErrorText>{formErrors.name}</ErrorText>}
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="email">Email *</FormLabel>
                      <FormInput 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      {formErrors.email && <ErrorText>{formErrors.email}</ErrorText>}
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="subject">Temat</FormLabel>
                      <FormInput 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel>Rodzaj zapytania</FormLabel>
                      <RadioGroup>
                        <RadioItem>
                          <RadioInput 
                            type="radio" 
                            id="cooperation" 
                            name="type" 
                            value="cooperation"
                            checked={formData.type === 'cooperation'}
                            onChange={handleChange}
                          />
                          <RadioLabel htmlFor="cooperation">Współpraca</RadioLabel>
                        </RadioItem>
                        
                        <RadioItem>
                          <RadioInput 
                            type="radio" 
                            id="job" 
                            name="type" 
                            value="job"
                            checked={formData.type === 'job'}
                            onChange={handleChange}
                          />
                          <RadioLabel htmlFor="job">Praca</RadioLabel>
                        </RadioItem>
                        
                        <RadioItem>
                          <RadioInput 
                            type="radio" 
                            id="other" 
                            name="type" 
                            value="other"
                            checked={formData.type === 'other'}
                            onChange={handleChange}
                          />
                          <RadioLabel htmlFor="other">Inne</RadioLabel>
                        </RadioItem>
                      </RadioGroup>
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="message">Wiadomość *</FormLabel>
                      <FormTextarea 
                        id="message" 
                        name="message" 
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
                      {formErrors.message && <ErrorText>{formErrors.message}</ErrorText>}
                    </FormGroup>
                    
                    <SubmitButton 
                      type="submit" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                    </SubmitButton>
                  </ContactForm>
                </>
              )}
            </ContactFormContainer>
          </ContactWrapper>
        </div>
      </section>
    </>
  );
};

// Contact Wrapper
const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

// Contact Info Styles
const ContactInfo = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 2rem;
  height: fit-content;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const ContactInfoTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const ContactInfoItem = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  align-items: flex-start;
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(74, 144, 226, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 1.25rem;
`;

const ContactLabel = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const ContactText = styled.p`
  color: var(--text-secondary);
  margin-bottom: 0;
  line-height: 1.5;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary);
    transform: translateY(-3px);
  }
`;

const MapContainer = styled.div`
  height: 250px;
  margin-top: 2rem;
  border-radius: 8px;
  overflow: hidden;
`;

const MapIframe = styled.iframe`
  border-radius: 8px;
`;

// Contact Form Styles
const ContactFormContainer = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const ContactFormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 4px;
  border: 1px solid var(--border);
  background-color: var(--background);
  color: var(--text);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.1);
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.75rem 1rem;
  border-radius: 4px;
  border: 1px solid var(--border);
  background-color: var(--background);
  color: var(--text);
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.1);
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const RadioItem = styled.div`
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  margin: 0;
  cursor: pointer;
  
  &:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
`;

const RadioLabel = styled.label`
  margin-left: 0.5rem;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const FormError = styled.div`
  background-color: rgba(255, 0, 0, 0.1);
  color: #d32f2f;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  border-left: 3px solid #d32f2f;
`;

const ErrorText = styled.span`
  color: #d32f2f;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;

// Thank You Message Styles
const ThankYouMessage = styled.div`
  text-align: left;
  padding: 2rem;
`;

const ThankYouIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: rgba(74, 144, 226, 0.1);
  color: var(--primary);
  border-radius: 50%;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
`;

const ThankYouTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ThankYouText = styled.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const ResetButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`;

export default ContactPage;
