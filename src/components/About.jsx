import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { useTranslation } from 'react-i18next' 


const About = () => {
  
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('Introduction')}</p>
        <h2 className={styles.sectionHeadText}>{t('Overview')}.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       {t('Intro_description')}
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about")