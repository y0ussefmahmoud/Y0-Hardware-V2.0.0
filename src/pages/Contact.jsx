/**
 * Contact Page - صفحة التواصل
 * --------------------------------------------------------------
 * Purpose (الغرض): Provide contact info cards, social links, a contact form,
 * and placeholder map for reaching the company.
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaPaperPlane
} from 'react-icons/fa';
import { useNotification } from '../context/NotificationContext';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

// ContactContainer: Centers page content with consistent padding
const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  min-height: calc(100vh - 160px);
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes['4xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  }
`;

const PageDescription = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing['3xl']};
  line-height: 1.6;
`;

// ContactLayout: Two-column grid (info + form) stacking on mobile
const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

// InfoCard: Hoverable card for each contact channel
const InfoCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px ${({ theme }) => theme.colors.shadow.medium};
  }
`;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes.xl};
    color: ${({ theme }) => theme.colors.text.inverse};
  }
`;

const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const InfoItem = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  line-height: 1.5;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

// SocialLink: Changes color based on platform to reinforce branding
const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: ${({ theme }) => theme.colors.background.hover};
  color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ platform, theme }) => {
      switch (platform) {
        case 'facebook': return '#1877f2';
        case 'twitter': return '#1da1f2';
        case 'instagram': return '#e4405f';
        case 'whatsapp': return '#25d366';
        default: return theme.colors.primary;
      }
    }};
    color: ${({ theme }) => theme.colors.text.inverse};
    transform: translateY(-2px);
  }
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }
`;

// ContactForm: Vertical stack of rows/inputs for message submission
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const FormCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const FormTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const FormLabel = styled.label`
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
`;

// FormInput: Reusable stylings for input fields with focus glow
const FormInput = styled.input`
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.background.card};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.shadow.colored};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }
`;

const FormTextarea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.border.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.background.card};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.shadow.colored};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const MapSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing['3xl']};
`;

const MapTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

// MapContainer: Placeholder block until an interactive map is integrated
const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  background: ${({ theme }) => theme.colors.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  border: 2px solid ${({ theme }) => theme.colors.border.primary};
`;

const Contact = () => {
  const { success, error } = useNotification();
  // formData: Controlled fields for the contact form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  // isSubmitting: Locks the form while simulating API submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * handleInputChange - تحديث الحقول النصية
   * EN: Keeps controlled inputs synced with state.
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * handleSubmit - إرسال نموذج التواصل
   * EN: Validates required fields, simulates async call, and resets form.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      error('يرجى ملء جميع الحقول المطلوبة');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      success('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      error('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // contactInfo: Structured list of info cards (icon + title + details)
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'الهاتف',
      details: [
        '01234567890',
        '01098765432',
        'متاح من 9 صباحاً حتى 10 مساءً'
      ]
    },
    {
      icon: <FaEnvelope />,
      title: 'البريد الإلكتروني',
      details: [
        'info@y0hardware.com',
        'support@y0hardware.com',
        'نرد خلال 24 ساعة'
      ]
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'العنوان',
      details: [
        'شارع التحرير، وسط البلد',
        'القاهرة، مصر',
        'الرمز البريدي: 11511'
      ]
    },
    {
      icon: <FaClock />,
      title: 'ساعات العمل',
      details: [
        'السبت - الخميس: 9:00 - 22:00',
        'الجمعة: 14:00 - 22:00',
        'خدمة العملاء متاحة 24/7'
      ]
    }
  ];

  return (
    <ContactContainer>
      <PageTitle>تواصل معنا</PageTitle>
      <PageDescription>
        نحن هنا لمساعدتك! تواصل معنا عبر أي من الطرق التالية أو املأ النموذج وسنتواصل معك في أقرب وقت ممكن.
      </PageDescription>

      <ContactLayout>
        <ContactInfo>
          {contactInfo.map((info, index) => (
            <InfoCard key={index}>
              <InfoHeader>
                <InfoIcon>{info.icon}</InfoIcon>
                <InfoTitle>{info.title}</InfoTitle>
              </InfoHeader>
              <InfoDetails>
                {info.details.map((detail, idx) => (
                  <InfoItem key={idx}>{detail}</InfoItem>
                ))}
              </InfoDetails>
              {index === 0 && (
                /* Placeholder social links (replace hrefs with real profiles) */
                <SocialLinks>
                  <SocialLink href="#" platform="facebook" aria-label="Facebook">
                    <FaFacebook />
                  </SocialLink>
                  <SocialLink href="#" platform="twitter" aria-label="Twitter">
                    <FaTwitter />
                  </SocialLink>
                  <SocialLink href="#" platform="instagram" aria-label="Instagram">
                    <FaInstagram />
                  </SocialLink>
                  <SocialLink href="#" platform="whatsapp" aria-label="WhatsApp">
                    <FaWhatsapp />
                  </SocialLink>
                </SocialLinks>
              )}
            </InfoCard>
          ))}
        </ContactInfo>

        <FormCard>
          <FormTitle>أرسل لنا رسالة</FormTitle>
          <ContactForm onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <FormLabel htmlFor="name">الاسم *</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="اسمك الكامل"
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="email">البريد الإلكتروني *</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@email.com"
                  required
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <FormLabel htmlFor="phone">رقم الهاتف</FormLabel>
                <FormInput
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="01234567890"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="subject">الموضوع</FormLabel>
                <FormInput
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="موضوع الرسالة"
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <FormLabel htmlFor="message">الرسالة *</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="اكتب رسالتك هنا..."
                required
              />
            </FormGroup>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              <FaPaperPlane />
              {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
            </Button>
          </ContactForm>
        </FormCard>
      </ContactLayout>

      <MapSection>
        <MapTitle>موقعنا على الخريطة</MapTitle>
        <MapContainer>
          {/* TODO: Replace placeholder with Google Maps iframe or Leaflet component */}
          <div>
            <FaMapMarkerAlt style={{ fontSize: '3rem', marginBottom: '1rem' }} />
            <br />
            خريطة تفاعلية - قيد التطوير
            <br />
            شارع التحرير، وسط البلد، القاهرة
          </div>
        </MapContainer>
      </MapSection>
    </ContactContainer>
  );
};

export default Contact;
