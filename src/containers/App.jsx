import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Social from '../components/Social';
import Certificate from '../components/Certificate';

import {
  retrieveCurriculumVitae,
  curriculumVitae
} from '../store/curriculumVitae/curriculumVitaeSlice';

import {
  getTheme
} from '../store/application/aplicationSlice';

const App = () => {
  const dispatch = useDispatch();
  const { cv, loading, error } = useSelector(curriculumVitae);
  const { name, profession, address, email, website, phone, avatar, profile, certificate, academic, experience, skills, interest, languages, social } = cv;
  
  useEffect(() => {
    dispatch(retrieveCurriculumVitae())
    dispatch(getTheme())
  }, []);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='bg-homeBg min-h-screen  dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full'>
        <Header 
          avatar={avatar} 
          name = {name} 
          profession={profession} >
          <About 
            address={address}
            email={email}
            phone={phone}
            website={website} />
        </Header>
        <Profile profile={profile} />
        <Experience 
          experience={experience} 
          certificate={certificate}/>
        <Certificate certificate={certificate}/>
        <Academic academic={academic} />
        <Skills skills={skills} />
        <Interest interest={interest} />
        <Languages languages={languages} />
        <Social social={social} />
      </div>
    </>
  )
};

export default App;
