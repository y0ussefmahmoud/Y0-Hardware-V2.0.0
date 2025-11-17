/**
 * Footer Component - التذييل العام للموقع
 * ---------------------------------------------------------------
 * Purpose (الغرض): Displays company info, quick links, categories,
 * and contact details at the bottom of every page.
 * Layout (البنية): Four-section responsive grid with social links
 * and bottom bar including legal + location info.
 * Usage (الاستخدام): Imported inside `App.jsx` and rendered once per view.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createLink } from '../../utils/router';
import { 
  FaMicrochip, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart
} from 'react-icons/fa';

// FooterContainer: Uses margin-top:auto to push footer to the bottom when content is short
// الحاوية الرئيسية تستخدم margin-top:auto لضمان بقاء التذييل في الأسفل
const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.background.secondary};
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  }
`;

// FooterGrid: Responsive grid (4 columns shrinking to single column on phones)
// شبكة مرنة تتحول من أربعة أعمدة إلى عمود واحد على الهواتف
const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const FooterListItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

// SocialLink: Hover elevates tile + swaps colors for better affordance
// رابط السوشيال مع تأثير تحويم يغير اللون ويرفع العنصر قليلاً
const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.background.hover};
  color: ${({ theme }) => theme.colors.text.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
    transform: translateY(-2px);
  }
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }
`;

// FooterBottom: Flex container to keep copyright + slogans aligned
// شريط سفلي يستخدم Flex لتنظيم النصوص والأيقونات
const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  padding-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

// Copyright: Displays legal text + heart icon inline
// نص حقوق النشر مع أيقونة القلب ضمن السطر
const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  
  svg {
    color: ${({ theme }) => theme.colors.error};
  }
`;

// FooterLogo: Branding block reused in the footer intro section
// شعار الشركة المستخدم في القسم الأول من التذييل
const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  }
`;

const Footer = () => {
  // currentYear: Keeps the footer date fresh automatically each year
  // السنة الحالية لحفظ حقوق النشر بشكل ديناميكي
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          {/* Company Info */}
          <FooterSection>
            <FooterLogo>
              <FaMicrochip />
              Y0 Hardware
            </FooterLogo>
            <FooterText>
              متجر Y0 Hardware المتخصص في بيع قطع الكمبيوتر واللابتوب والاكسسوارات 
              بأفضل الأسعار وأعلى جودة في السوق المصري.
            </FooterText>
            {/* Social links placeholders - replace hrefs with real profiles later */}
            {/* روابط تواصل اجتماعي وهمية حالياً حتى يتم إضافة الروابط الحقيقية */}
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                <FaFacebook />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="#" aria-label="YouTube">
                <FaYoutube />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          {/* Quick Links */}
          <FooterSection>
            <FooterTitle>روابط سريعة</FooterTitle>
            <FooterList>
              {/* createLink يحافظ على التوجيه الصحيح مع GitHub Pages */}
              {/* createLink keeps URLs compatible with GitHub Pages deployments */}
              <li><FooterLink as="a" href={createLink('/')}>الرئيسية</FooterLink></li>
              <li><FooterLink as="a" href={createLink('/shop')}>المنتجات</FooterLink></li>
              <li><FooterLink as="a" href={createLink('/about')}>من نحن</FooterLink></li>
              <li><FooterLink as="a" href={createLink('/contact')}>تواصل معنا</FooterLink></li>
              <li><FooterLink as="a" href={createLink('/cart')}>سلة التسوق</FooterLink></li>
            </FooterList>
          </FooterSection>

          {/* Categories */}
          <FooterSection>
            <FooterTitle>الفئات</FooterTitle>
            <FooterList>
              <li><FooterLink as="a" href={createLink('/shop?category=pc-parts')}>قطع الكمبيوتر</FooterLink></li>
              <li><FooterLink as="a" href={createLink('/shop?category=laptops')}>اللابتوب</FooterLink></li>
              <li><FooterLink as="a" href={createLink('/shop?category=accessories')}>الاكسسوارات</FooterLink></li>
              <li><FooterLink as="a" href={createLink('/shop?category=gaming')}>ألعاب</FooterLink></li>
              <li><FooterLink as="a" href={createLink('/shop?deals=true')}>العروض الخاصة</FooterLink></li>
            </FooterList>
          </FooterSection>

          {/* Contact Info */}
          <FooterSection>
            <FooterTitle>معلومات التواصل</FooterTitle>
            <FooterList>
              <FooterListItem>
                <FaPhone />
                <span>01234567890</span>
              </FooterListItem>
              <FooterListItem>
                <FaEnvelope />
                <span>info@y0hardware.com</span>
              </FooterListItem>
              <FooterListItem>
                <FaMapMarkerAlt />
                <span>القاهرة، مصر</span>
              </FooterListItem>
            </FooterList>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © {currentYear} Y0 Hardware. جميع الحقوق محفوظة.
          </Copyright>
          <Copyright>
            صُنع بـ <FaHeart /> في مصر
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
