import { useState, useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { useTranslation } from 'react-i18next';


const Contact = () => {

  const { t } = useTranslation();
  const formRef = useRef();
  const [form, setForm]= useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value});

  }
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setLoading();

    emailjs.send( 
      'service_c1ohr9d',
      'template_hmg6byd',
      {
        from_name: form.name,
        to_name: 'Graciela',
        from_email: form.email,
        to_email: 'gracielavargasg@gmail.com',
        message: form.message
      },
      'UbwIJ89IzeI9igr9s'
    )
    .then(()=> {
      setLoading(false);
      alert('Thank you! I will get back to you as soon as possible.');
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong.');
    })
  }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>{t('Contact_subt')}</p>
        <h3 className={styles.sectionHeadText}>{t('Contact_title')}</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t('Form_name')}</span>
            <input 
              type="text" 
              name='name' 
              value={form.name}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder: text-secondary text-white rounded-lg outline-none border-none font-medium'  
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t('Form_email')}</span>
            <input 
              type="email" 
              name='email' 
              value={form.email}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder: text-secondary text-white rounded-lg outline-none border-none font-medium'  
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>{t('Form_msg')}</span>
            <textarea 
              rows='7'
              name='message' 
              value={form.message}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder: text-secondary text-white rounded-lg outline-none border-none font-medium'  
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? t('Form_sending') : t('Form_send')}
          </button>
        </form>
      </motion.div>

      <motion.div
      variants={slideIn('right', "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[330px] '
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")