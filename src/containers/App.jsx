import React, { useEffect } from 'react';
// import '../styles/components/App.styl';
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
} from '../store/curriculumVitae/curriculumVitaeSlice';

const App = () => {
  const dispatch = useDispatch();
  const { cv, loading, error } = useSelector(state => state.curriculumVitae);
  const { name, profession, address, email, website, phone, avatar, profile, certificate, academic, experience, skills, interest, languages, social } = cv;
  
  useEffect(() => {
    dispatch(retrieveCurriculumVitae())
  }, []);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
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
    </>
  )
};

export default App;
