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
      subject: '',
      message: '',
      company: '',
      type: 'cooperation'
    }, 
    validateForm,
    handleSubmit
  );

  // Get dynamic fields based on inquiry type
  const getDynamicFields = (type) => {
    switch (type) {
      case 'cooperation':
        return [
          { name: 'company', label: 'Organizacja/Firma', type: 'text', required: false },
          { name: 'projectBudget', label: 'Budżet projektu (opcjonalnie)', type: 'text', required: false },
          { name: 'projectTimeline', label: 'Przewidywany czas realizacji', type: 'text', required: false }
        ];
      case 'work':
        return [
          { name: 'position', label: 'Pozycja, która Cię interesuje', type: 'text', required: false },
          { name: 'experience', label: 'Doświadczenie zawodowe', type: 'textarea', required: false }
        ];
      case 'press':
        return [
          { name: 'mediaOutlet', label: 'Medium/Portal', type: 'text', required: false },
          { name: 'deadline', label: 'Termin publikacji', type: 'date', required: false }
        ];
      default:
        return [];
    }
  };

  const dynamicFields = getDynamicFields(formData.type);
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        duration: 0.7,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };
    return (
    <>      <MetaTags 
        title="Kontakt"
        description="Skontaktuj się z Fundacją Ludzie-Innowacje-Design. Napisz do nas, odwiedź nas lub zadzwoń."
        keywords="kontakt, flid, fundacja, formularz kontaktowy, adres, telefon"
        canonical="/contact"
      />
      
      <ContactSection>
        <div className="container">
          <ContactWrapper
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          ><ContactInfo
              as={motion.div}
              variants={itemVariants}
            >
              <ContactInfoTitle variants={itemVariants}>Informacje kontaktowe</ContactInfoTitle>              <ContactInfoItem
                as={motion.div}
                variants={itemVariants}
                whileHover={{ x: 5, backgroundColor: 'rgba(74, 144, 226, 0.05)' }}
              >
                <ContactIcon>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                  </svg>
                </ContactIcon>
                <div>
                  <ContactLabel>Adres</ContactLabel>
                  <ContactText>
                    Fundacja Ludzie-Innowacje-Design<br />
                    ul. Gazownicza 9<br />
                    43-300 Bielsko-Biała
                  </ContactText>
                </div>
              </ContactInfoItem>              <ContactInfoItem
                as={motion.div}
                variants={itemVariants}
                whileHover={{ x: 5, backgroundColor: 'rgba(74, 144, 226, 0.05)' }}
              >
                <ContactIcon>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                  </svg>
                </ContactIcon>
                <div>
                  <ContactLabel>Telefon</ContactLabel>
                  <ContactText>(33) 812 43 86</ContactText>
                </div>
              </ContactInfoItem>              <ContactInfoItem
                as={motion.div}
                variants={itemVariants}
                whileHover={{ x: 5, backgroundColor: 'rgba(74, 144, 226, 0.05)' }}
              >
                <ContactIcon>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                  </svg>
                </ContactIcon>
                <div>
                  <ContactLabel>Email</ContactLabel>
                  <ContactText>biuro@flid.pl</ContactText>
                </div>
              </ContactInfoItem>              <ContactInfoItem
                as={motion.div}
                variants={itemVariants}
                whileHover={{ x: 5, backgroundColor: 'rgba(74, 144, 226, 0.05)' }}
              >
                <ContactIcon>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2 0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08C6.03 6.34 7.57 5.06 9.4 4.44 8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56-1.83-.63-3.37-1.9-4.32-3.56M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor"/>
                  </svg>
                </ContactIcon>
                <div>
                  <ContactLabel>Media społecznościowe</ContactLabel>                  <SocialLinks><SocialLink 
                      as={motion.a}
                      href="https://www.facebook.com/fundacja.ludzie.innowacje.design" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      whileHover={{ y: -5, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                      </svg>
                    </SocialLink>
                  </SocialLinks>
                </div>
              </ContactInfoItem>                <MapContainer
                as={motion.div}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
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
            </ContactInfo>            <ContactFormContainer
              as={motion.div}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              {isSubmitted ? (
                <ThankYouMessage
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ThankYouIcon
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >✓</ThankYouIcon>
                  <ThankYouTitle
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >Dziękujemy za wiadomość!</ThankYouTitle>
                  <ThankYouText
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    Twoja wiadomość została wysłana. Odpowiemy na nią tak szybko,
                    jak to możliwe.
                  </ThankYouText>                  <ResetButton
                    as={motion.button}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={resetForm}
                  >
                      Wyślij nową wiadomość
                    </ResetButton>
                  </ThankYouMessage>
                ) : (
                  <motion.div
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <ContactFormTitle>Wyślij nam wiadomość</ContactFormTitle>
                    
                    {formError && (
                      <FormError>
                        {formError}
                      </FormError>
                    )}
                    
                    <ContactForm onSubmit={handleFormSubmit}>                      <FormGroup>
                        <FormInput 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder=" "
                          aria-required="true"
                          aria-invalid={formErrors.name ? "true" : "false"}
                          aria-describedby={formErrors.name ? "name-error" : undefined}
                        />
                        <FormLabel htmlFor="name">Imię i nazwisko *</FormLabel>
                        {formErrors.name && <ErrorText id="name-error">{formErrors.name}</ErrorText>}
                      </FormGroup>
                      
                      <FormGroup>
                        <FormInput 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder=" "
                          aria-required="true"
                          aria-invalid={formErrors.email ? "true" : "false"}
                          aria-describedby={formErrors.email ? "email-error" : undefined}
                        />
                        <FormLabel htmlFor="email">Email *</FormLabel>
                        {formErrors.email && <ErrorText id="email-error">{formErrors.email}</ErrorText>}
                      </FormGroup>
                        <FormGroup>
                        <FormInput 
                          type="text" 
                          id="subject" 
                          name="subject" 
                          value={formData.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder=" "
                        />
                        <FormLabel htmlFor="subject">Temat</FormLabel>
                      </FormGroup>                      {/* Dynamic fields based on inquiry type */}
                      {dynamicFields.map((field) => (
                        <motion.div
                          key={field.name}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                        >
                          <FormGroup>
                            {field.type === 'textarea' ? (
                              <FormTextarea 
                                id={field.name}
                                name={field.name}
                                rows="3"
                                value={formData[field.name] || ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder=" "
                              />
                            ) : (
                              <FormInput 
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                value={formData[field.name] || ''}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder=" "
                              />
                            )}
                            <FormLabel htmlFor={field.name}>
                              {field.label}{field.required ? ' *' : ''}
                            </FormLabel>
                          </FormGroup>
                        </motion.div>
                      ))}
                        <FormGroup>
                        <InquiryTypeTitle>Wybierz rodzaj zapytania</InquiryTypeTitle>
                        <InquiryTypeDescription>
                          Wybierz kategorię, która najlepiej opisuje Twoje zapytanie, aby mogliśmy je skierować do odpowiedniej osoby
                        </InquiryTypeDescription>
                        <InquiryTypeGrid>                          <InquiryTypeCard 
                            isSelected={formData.type === 'cooperation'}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <InquiryTypeInput 
                              type="radio" 
                              id="cooperation" 
                              name="type" 
                              value="cooperation"
                              checked={formData.type === 'cooperation'}
                              onChange={handleChange}
                            />                            <InquiryTypeLabel htmlFor="cooperation">
                              <InquiryTypeIcon>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 7v2c0 .55.45 1 1 1h2v7c0 1.1.9 2 2 2s2-.9 2-2v-3h2v3c0 1.1.9 2 2 2s2-.9 2-2V10h2c.55 0 1-.45 1-1V7c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2z" fill="currentColor"/>
                                </svg>
                              </InquiryTypeIcon>
                              <div>
                                <InquiryTypeCardTitle>Współpraca</InquiryTypeCardTitle>
                                <InquiryTypeDesc>
                                  Projekty partnerskie, inicjatywy społeczne
                                </InquiryTypeDesc>
                              </div>
                            </InquiryTypeLabel>
                          </InquiryTypeCard>
                            <InquiryTypeCard 
                            isSelected={formData.type === 'work'}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <InquiryTypeInput 
                              type="radio" 
                              id="work" 
                              name="type" 
                              value="work"
                              checked={formData.type === 'work'}
                              onChange={handleChange}
                            />                            <InquiryTypeLabel htmlFor="work">
                              <InquiryTypeIcon>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.89 2-2V9c0-1.1-.9-2-2-2zM10 7h4V5.5l-4-.5V7z" fill="currentColor"/>
                                </svg>
                              </InquiryTypeIcon>
                              <div>
                                <InquiryTypeCardTitle>Praca</InquiryTypeCardTitle>
                                <InquiryTypeDesc>
                                  Oferty pracy, staże, wolontariat
                                </InquiryTypeDesc>
                              </div>
                            </InquiryTypeLabel>
                          </InquiryTypeCard>
                            <InquiryTypeCard 
                            isSelected={formData.type === 'press'}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <InquiryTypeInput 
                              type="radio" 
                              id="press" 
                              name="type" 
                              value="press"
                              checked={formData.type === 'press'}
                              onChange={handleChange}
                            />                            <InquiryTypeLabel htmlFor="press">
                              <InquiryTypeIcon>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" fill="currentColor"/>
                                </svg>
                              </InquiryTypeIcon>
                              <div>
                                <InquiryTypeCardTitle>Media</InquiryTypeCardTitle>
                                <InquiryTypeDesc>
                                  Zapytania prasowe, wywiady, publikacje
                                </InquiryTypeDesc>
                              </div>
                            </InquiryTypeLabel>
                          </InquiryTypeCard>
                            <InquiryTypeCard 
                            isSelected={formData.type === 'other'}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <InquiryTypeInput 
                              type="radio" 
                              id="other" 
                              name="type" 
                              value="other"
                              checked={formData.type === 'other'}
                              onChange={handleChange}
                            />                            <InquiryTypeLabel htmlFor="other">
                              <InquiryTypeIcon>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.4 0 .8-.2 1-.5L16 18h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" fill="currentColor"/>
                                </svg>
                              </InquiryTypeIcon>
                              <div>
                                <InquiryTypeCardTitle>Inne</InquiryTypeCardTitle>
                                <InquiryTypeDesc>
                                  Pytania ogólne, informacje o projektach
                                </InquiryTypeDesc>
                              </div>
                            </InquiryTypeLabel>
                          </InquiryTypeCard>
                        </InquiryTypeGrid>
                      </FormGroup><FormGroup>
                        <FormTextarea 
                          id="message" 
                          name="message" 
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder=" "
                          aria-required="true"
                          aria-invalid={formErrors.message ? "true" : "false"}
                          aria-describedby={formErrors.message ? "message-error" : undefined}
                        />
                        <FormLabel htmlFor="message">Wiadomość *</FormLabel>
                        {formErrors.message && <ErrorText id="message-error">{formErrors.message}</ErrorText>}
                      </FormGroup>                        <SubmitButton 
                        as={motion.button}
                        type="submit" 
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>
                          {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                          {!isSubmitting && <span style={{ fontSize: '1.2rem' }}>→</span>}
                        </span>
                      </SubmitButton>                    </ContactForm>
                  </motion.div>
                )}
            </ContactFormContainer></ContactWrapper>
        </div>
      </ContactSection>
    </>
  );
};

// Contact Section
const ContactSection = styled.section`
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 15% 15%, rgba(74, 144, 226, 0.02) 0%, transparent 50%);
    z-index: -1;
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 85% 85%, rgba(74, 144, 226, 0.02) 0%, transparent 50%);
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

// Contact Wrapper
const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 1200px) {
    max-width: 1200px;
    gap: 3rem;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

// Contact Info Styles
const ContactInfo = styled.div`
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.95) 0%, 
    rgba(147, 137, 224, 0.02) 50%, 
    rgba(255, 255, 255, 0.95) 100%
  );
  border-radius: 20px;
  padding: 2.5rem;
  height: fit-content;
  box-shadow: 
    0 20px 40px rgba(147, 137, 224, 0.08),
    0 8px 25px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(147, 137, 224, 0.1);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, rgba(147, 137, 224, 0.6) 0%, var(--primary) 50%, var(--accent) 100%);
    border-radius: 20px 20px 0 0;
  }
  
  &:hover {
    box-shadow: 
      0 25px 50px rgba(147, 137, 224, 0.12),
      0 12px 35px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
    transform: translateY(-3px);
  }
`;

const ContactInfoTitle = styled(motion.h2)`
  font-size: 1.75rem;
  margin-bottom: 2.5rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
    border-radius: 3px;
  }
`;

const ContactInfoItem = styled(motion.div)`
  display: flex;
  margin-bottom: 1.5rem;
  align-items: flex-start;
  padding: 0.8rem;
  border-radius: 10px;
  transition: all 0.3s ease;
    &:hover {
    background-color: rgba(128, 128, 128, 0.03);
    transform: translateX(3px);
  }
`;

const ContactIcon = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, rgba(147, 137, 224, 0.08) 0%, rgba(147, 137, 224, 0.12) 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #8B7DC8;
  box-shadow: 0 3px 10px rgba(147, 137, 224, 0.15);
  transition: all 0.3s ease;
  
  svg {
    transition: all 0.3s ease;
  }
  
  ${ContactInfoItem}:hover & {
    transform: scale(1.05);
    background: linear-gradient(135deg, rgba(147, 137, 224, 0.15) 0%, rgba(147, 137, 224, 0.25) 100%);
    color: var(--primary);
    box-shadow: 0 5px 15px rgba(147, 137, 224, 0.25);
    
    svg {
      transform: scale(1.1);
    }
  }
`;

const ContactLabel = styled.h3`
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: var(--primary);
  transition: all 0.3s ease;
  
  ${ContactInfoItem}:hover & {
    transform: translateX(2px);
  }
`;

const ContactText = styled.p`
  color: var(--text-secondary);
  margin-bottom: 0;
  line-height: 1.6;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
  
  a {
    color: var(--primary);
    text-decoration: none;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background-color: var(--primary);
      transition: width 0.3s ease;
    }
    
    &:hover:after {
      width: 100%;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-top: 0.5rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(147, 137, 224, 0.08) 0%, rgba(147, 137, 224, 0.12) 100%);
  color: #8B7DC8;
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px rgba(147, 137, 224, 0.15);
  
  svg {
    width: 18px;
    height: 18px;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(147, 137, 224, 0.25);
    background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
    color: white;
      svg {
      transform: scale(1.1);
    }
  }
`;

const MapContainer = styled(motion.div)`
  height: 240px;
  margin-top: 2rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.08);
    &:hover {
    transform: scale(1.01);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
`;

const MapIframe = styled.iframe`
  border-radius: 12px;
  transition: all 0.3s ease;
`;

// Contact Form Styles
const ContactFormContainer = styled.div`
  background: linear-gradient(135deg, 
    rgba(var(--background-rgb), 0.95) 0%, 
    rgba(var(--accent-rgb), 0.02) 50%, 
    rgba(var(--background-rgb), 0.95) 100%
  );
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 
    0 20px 40px rgba(var(--accent-rgb), 0.08),
    0 8px 25px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(var(--card-bg-rgb), 0.6);
  border: 1px solid var(--border);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary) 0%, rgba(var(--accent-rgb), 0.6) 50%, var(--accent) 100%);
    border-radius: 20px 20px 0 0;
  }
  
  &:hover {
    box-shadow: 
      0 25px 50px rgba(var(--accent-rgb), 0.12),
      0 12px 35px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
    transform: translateY(-3px);
  }
`;

const ContactFormTitle = styled(motion.h2)`
  font-size: 1.75rem;
  margin-bottom: 2.5rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
    border-radius: 3px;
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

// Form Wrapper with floating labels
const FormGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 0.5rem;
  
  &:focus-within label {
    color: var(--primary);
    transform: translateY(-24px) scale(0.85);
    background-color: var(--card-bg);
    padding: 0 8px;
    z-index: 2;
  }
  
  /* If input has value, keep label in the floating position */
  input:not(:placeholder-shown) + label,
  textarea:not(:placeholder-shown) + label {
    transform: translateY(-24px) scale(0.85);
    background-color: var(--card-bg);
    padding: 0 8px;
    z-index: 2;
  }
`;

const FormLabel = styled.label`
  font-weight: 500;
  position: absolute;
  top: 16px;
  left: 16px;
  color: var(--text-secondary);
  transition: all 0.2s ease;
  pointer-events: none;
  z-index: 1;
  font-size: 0.95rem;
  opacity: 0.8;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    transition: width 0.3s ease;
  }
  
  ${FormGroup}:focus-within &:after {
    width: 100%;
  }
`;

const FormInput = styled.input`
  padding: 1rem 1.25rem;
  border-radius: 8px;
  border: 2px solid transparent;
  background-color: var(--background);
  color: var(--text);
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  }
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 4px rgba(74, 144, 226, 0.15);
  }
  
  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.6;
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem 1.25rem;
  border-radius: 8px;
  border: 2px solid transparent;
  background-color: var(--background);
  color: var(--text);
  font-size: 1rem;
  resize: vertical;
  min-height: 140px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  }
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 4px rgba(74, 144, 226, 0.15);
  }
  
  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.6;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

const RadioItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  
  & + label {
    position: relative;
    cursor: pointer;
    padding-left: 28px;
    user-select: none;
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 2px solid var(--border);
      background-color: var(--background);
      transition: all 0.2s ease;
    }
    
    &:after {
      content: '';
      position: absolute;
      left: 5px;
      top: 50%;
      transform: translateY(-50%) scale(0);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: var(--primary);
      transition: transform 0.2s ease;
    }
  }
  
  &:checked + label {
    &:before {
      border-color: var(--primary);
    }
    
    &:after {
      transform: translateY(-50%) scale(1);
    }
  }
  
  &:focus + label {
    &:before {
      box-shadow: 0 0 0 4px rgba(74, 144, 226, 0.15);
    }
  }
`;

const RadioLabel = styled.label`
  font-size: 0.95rem;
  transition: color 0.2s ease;
  
  ${RadioInput}:checked + & {
    color: var(--primary);
    font-weight: 500;
  }
`;

// Enhanced Inquiry Type Styles
const InquiryTypeTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: var(--text);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:after {
    content: '';
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, var(--primary), transparent);
    border-radius: 2px;
    opacity: 0.3;
  }
`;

const InquiryTypeDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  opacity: 0.8;
`;

const InquiryTypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }
`;

const InquiryTypeCard = styled(motion.div)`
  position: relative;
  border: 2px solid ${props => props.isSelected ? 'var(--primary)' : 'rgba(147, 137, 224, 0.15)'};
  border-radius: 16px;
  padding: 1.5rem;
  background: ${props => props.isSelected 
    ? 'linear-gradient(135deg, rgba(147, 137, 224, 0.08) 0%, rgba(74, 144, 226, 0.05) 100%)'
    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(147, 137, 224, 0.02) 100%)'};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.isSelected 
    ? '0 8px 25px rgba(147, 137, 224, 0.2), 0 4px 12px rgba(74, 144, 226, 0.15)'
    : '0 4px 15px rgba(147, 137, 224, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)'};
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.isSelected 
      ? 'linear-gradient(90deg, var(--primary) 0%, rgba(147, 137, 224, 0.8) 50%, var(--accent) 100%)'
      : 'transparent'};
    border-radius: 16px 16px 0 0;
    transition: all 0.3s ease;
  }
  
  &:after {
    content: ${props => props.isSelected ? "'✓'" : "''"};
    position: absolute;
    top: 12px;
    right: 12px;
    width: 24px;
    height: 24px;
    background: ${props => props.isSelected ? 'var(--primary)' : 'transparent'};
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${props => props.isSelected ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)'};
    box-shadow: ${props => props.isSelected ? '0 4px 12px rgba(74, 144, 226, 0.3)' : 'none'};
  }
  
  &:hover {
    border-color: var(--primary);
    background: linear-gradient(135deg, rgba(147, 137, 224, 0.08) 0%, rgba(74, 144, 226, 0.05) 100%);
    box-shadow: 0 8px 25px rgba(147, 137, 224, 0.2), 0 4px 12px rgba(74, 144, 226, 0.15);
    transform: translateY(-2px) scale(1.02);
    
    &:before {      background: linear-gradient(90deg, var(--primary) 0%, rgba(147, 137, 224, 0.8) 50%, var(--accent) 100%);
    }
  }
`;

const InquiryTypeInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`;

const InquiryTypeLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  gap: 0.8rem;
`;

const InquiryTypeIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(147, 137, 224, 0.08) 0%, rgba(147, 137, 224, 0.12) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.isSelected ? 'var(--primary)' : '#8B7DC8'};
  transition: all 0.3s ease;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(147, 137, 224, 0.1);
  
  svg {
    transition: all 0.3s ease;
  }
  
  ${InquiryTypeCard}:hover & {
    background: linear-gradient(135deg, rgba(147, 137, 224, 0.15) 0%, rgba(147, 137, 224, 0.25) 100%);
    color: var(--primary);
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(147, 137, 224, 0.2);
    
    svg {
      transform: scale(1.1);
    }
  }
`;

const InquiryTypeCardTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: ${props => props.isSelected ? 'var(--primary)' : 'var(--text)'};
  transition: all 0.3s ease;
  
  ${InquiryTypeCard}:hover & {
    color: var(--primary);
  }
`;

const InquiryTypeDesc = styled.p`
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.3;
  margin: 0;
  opacity: 0.8;
  transition: all 0.3s ease;
  
  ${InquiryTypeCard}:hover & {
    opacity: 1;
  }
`;

// Thank You Message Styles
const ThankYouMessage = styled(motion.div)`
  text-align: center;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThankYouIcon = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(74, 144, 226, 0.2) 100%);
  color: var(--primary);
  border-radius: 50%;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  box-shadow: 0 10px 25px rgba(74, 144, 226, 0.15);
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    border: 2px solid rgba(74, 144, 226, 0.2);
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      opacity: 0.7;
    }
    70% {
      transform: scale(1.05);
      opacity: 0.3;
    }
    100% {
      transform: scale(0.95);
      opacity: 0.7;
    }
  }
`;

const ThankYouTitle = styled(motion.h3)`
  font-size: 1.75rem;
  margin-bottom: 1.25rem;
  font-weight: 600;
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ThankYouText = styled(motion.p)`
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
  max-width: 500px;
  line-height: 1.6;
`;

const ResetButton = styled(motion.button)`
  background-color: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
  padding: 0.9rem 1.75rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary);
    z-index: -1;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }
  
  &:hover {
    color: white;
    box-shadow: 0 10px 20px rgba(74, 144, 226, 0.15);
      &:before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, var(--primary) 0%, rgba(147, 137, 224, 0.9) 50%, var(--accent) 100%);
  color: white;
  padding: 1.2rem 2.5rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 8px 20px rgba(147, 137, 224, 0.3),
    0 4px 10px rgba(74, 144, 226, 0.2);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.6s ease;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }
  
  span {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 
      0 12px 30px rgba(147, 137, 224, 0.4),
      0 6px 15px rgba(74, 144, 226, 0.3);
    
    &:before {
      left: 100%;
    }
    
    &:after {
      width: 300px;
      height: 300px;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(1.01);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 4px 15px rgba(147, 137, 224, 0.2);
    
    &:hover {
      transform: none;
      box-shadow: 0 4px 15px rgba(147, 137, 224, 0.2);
    }
  }
`;

export default ContactPage;
