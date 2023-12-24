import Form from '../../UI/form/Form';
import './Main.css';
import Languages from './languages/Languages';

const Main = () => {
  return (
    <main>
      <img
        srcSet='
          https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_160x56dp.png 448w,
          https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png 800w
        '
        className='google-image'
        sizes='(max-width: 448px) 448px, 800px'
        src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
        alt='Google'
        loading='lazy'
      />

      <Form toShowButtons={true} mWidth='36.5rem' />

      <Languages />
    </main>
  );
};

export default Main;
