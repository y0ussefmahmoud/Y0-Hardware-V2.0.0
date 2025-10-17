import React from 'react';
import styled from 'styled-components';
import { 
  FaRocket, 
  FaUsers, 
  FaAward, 
  FaHeart,
  FaShieldAlt,
  FaTruck,
  FaHeadset,
  FaStar
} from 'react-icons/fa';
import Card from '../components/common/Card';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  min-height: calc(100vh - 160px);
`;

const HeroSection = styled.section`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary}10 0%,
    ${({ theme }) => theme.colors.secondary}10 100%
  );
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes['4xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const StatCard = styled(Card)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background.card};
  border: 2px solid transparent;
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-4px);
  }
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
    color: ${({ theme }) => theme.colors.text.inverse};
  }
`;

const StatNumber = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StatLabel = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  margin: 0;
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: start;
`;

const ContentCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.xl};
  height: 100%;
`;

const CardIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.primary}20;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  svg {
    font-size: ${({ theme }) => theme.fonts.sizes.xl};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin: 0;
`;

const StorySection = styled.div`
  background: ${({ theme }) => theme.colors.background.secondary};
  padding: ${({ theme }) => theme.spacing['3xl']};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  margin: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const StoryContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const StoryText = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const TeamCard = styled(Card)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px ${({ theme }) => theme.colors.shadow.medium};
  }
`;

const TeamAvatar = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  color: ${({ theme }) => theme.colors.text.inverse};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
`;

const TeamName = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TeamRole = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const TeamDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  line-height: 1.5;
  margin: 0;
`;

const About = () => {
  const stats = [
    { icon: <FaUsers />, number: '10,000+', label: 'عميل راضٍ' },
    { icon: <FaAward />, number: '5+', label: 'سنوات خبرة' },
    { icon: <FaStar />, number: '4.9', label: 'تقييم العملاء' },
    { icon: <FaRocket />, number: '50,000+', label: 'منتج مباع' },
  ];

  const values = [
    {
      icon: <FaShieldAlt />,
      title: 'الجودة والثقة',
      description: 'نحن ملتزمون بتقديم منتجات أصلية عالية الجودة من أفضل الماركات العالمية مع ضمان شامل على جميع المنتجات.'
    },
    {
      icon: <FaTruck />,
      title: 'التوصيل السريع',
      description: 'نوفر خدمة توصيل سريعة وآمنة في جميع أنحاء مصر مع إمكانية التتبع المباشر لطلبك حتى وصوله إليك.'
    },
    {
      icon: <FaHeadset />,
      title: 'الدعم المتميز',
      description: 'فريق دعم فني متخصص متاح 24/7 لمساعدتك في اختيار المنتجات المناسبة وحل أي مشاكل تقنية قد تواجهها.'
    },
    {
      icon: <FaHeart />,
      title: 'رضا العملاء',
      description: 'هدفنا الأول هو رضا عملائنا، لذلك نسعى دائماً لتقديم أفضل خدمة وأسعار تنافسية مع ضمان الجودة.'
    }
  ];

  const team = [
    {
      name: 'يوسف محمود',
      role: 'المؤسس والمدير التنفيذي',
      description: 'خبرة أكثر من 10 سنوات في مجال التكنولوجيا وقطع الكمبيوتر',
      avatar: 'ي'
    },
    {
      name: 'أحمد علي',
      role: 'مدير المبيعات',
      description: 'متخصص في استشارات الأجهزة وحلول الألعاب',
      avatar: 'أ'
    },
    {
      name: 'فاطمة حسن',
      role: 'مديرة خدمة العملاء',
      description: 'خبيرة في تقديم الدعم الفني وحل مشاكل العملاء',
      avatar: 'ف'
    },
    {
      name: 'محمد سعد',
      role: 'مدير التقنية',
      description: 'مطور ومصمم الموقع الإلكتروني وأنظمة الإدارة',
      avatar: 'م'
    }
  ];

  return (
    <AboutContainer>
      <HeroSection>
        <HeroTitle>من نحن</HeroTitle>
        <HeroSubtitle>
          Y0 Hardware هو متجرك الموثوق لقطع الكمبيوتر واللابتوب والاكسسوارات في مصر. 
          نحن نقدم أحدث التقنيات بأفضل الأسعار مع خدمة عملاء متميزة.
        </HeroSubtitle>
      </HeroSection>

      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard key={index}>
            <StatIcon>{stat.icon}</StatIcon>
            <StatNumber>{stat.number}</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatCard>
        ))}
      </StatsGrid>

      <StorySection>
        <StoryContent>
          <SectionTitle>قصتنا</SectionTitle>
          <StoryText>
            بدأت Y0 Hardware في عام 2019 كحلم بسيط لتوفير قطع الكمبيوتر عالية الجودة بأسعار معقولة للجميع. 
            من خلال شغفنا بالتكنولوجيا وفهمنا العميق لاحتياجات العملاء، تمكنا من بناء علاقات قوية مع أفضل 
            الموردين والماركات العالمية.
          </StoryText>
          <StoryText>
            اليوم، نحن فخورون بخدمة أكثر من 10,000 عميل راضٍ في جميع أنحاء مصر، ونواصل نموّنا وتطويرنا 
            لنكون الخيار الأول لكل من يبحث عن التميز في عالم التكنولوجيا.
          </StoryText>
        </StoryContent>
      </StorySection>

      <Section>
        <SectionTitle>قيمنا ومبادئنا</SectionTitle>
        <ContentGrid>
          {values.map((value, index) => (
            <ContentCard key={index}>
              <CardIcon>{value.icon}</CardIcon>
              <CardTitle>{value.title}</CardTitle>
              <CardDescription>{value.description}</CardDescription>
            </ContentCard>
          ))}
        </ContentGrid>
      </Section>

      <Section>
        <SectionTitle>فريق العمل</SectionTitle>
        <TeamGrid>
          {team.map((member, index) => (
            <TeamCard key={index}>
              <TeamAvatar>{member.avatar}</TeamAvatar>
              <TeamName>{member.name}</TeamName>
              <TeamRole>{member.role}</TeamRole>
              <TeamDescription>{member.description}</TeamDescription>
            </TeamCard>
          ))}
        </TeamGrid>
      </Section>
    </AboutContainer>
  );
};

export default About;
