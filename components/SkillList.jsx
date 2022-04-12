import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import { logout } from '../store/actions';
import SkillCard from './SkillCard';
import { useState } from 'react';
import SkillEditModal from './SkillEditModal';

export default function SkillList() {
  const dispatch = useDispatch();
  const [openEditModal, setOpenEditModal] = useState(false);
  const skills = useSelector((state) => state.main.skills);
  const userId = useSelector((state) => state.main.userId);
  return (
    <>
      {
        openEditModal &&
        <SkillEditModal
          handleClose={() => setOpenEditModal(prev => !prev)}
          isAdd={true}
          userId={userId}
        />
      }
      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'flex', width: '100%', margin: 50 }}>
          {skills.map((skill) => <SkillCard key={skill.id}
                                            skill={skill}
            />
          )}
        </div>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={() => setOpenEditModal(true)} className={styles.login}>
          Add New Skill
        </button>
        <button onClick={() => dispatch(logout())} className={styles.login} style={{marginLeft: 20}}>
          Logout
        </button>
      </div>
    </>
  );
}
