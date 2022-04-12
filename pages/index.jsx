import Head from 'next/head';
import { useSelector } from 'react-redux';
import LoginCard from '../components/LoginCard.jsx';
import SkillList from '../components/SkillList.jsx';

export default function Home() {
  const skills = useSelector((state) => state.main.skills);
  return (
    <>
      <Head>
        <title>Assignment</title>
      </Head>
      {skills ? <SkillList /> : <LoginCard />}
    </>
  );
}
