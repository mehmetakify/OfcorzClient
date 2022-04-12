import { useDispatch, useSelector } from 'react-redux';
import TagElement from './TagElement';
import { deleteSkill, editSkill } from '../store/actions';
import axios from 'axios';
import SkillEditModal from './SkillEditModal';
import { useState } from 'react';

export default function SkillCard({ skill }) {
  const dispatch = useDispatch();
  const [openEditModal, setOpenEditModal] = useState(false);
  const { id, tagline, category, locationOption, travelFee } = skill;
  const userId = useSelector((state) => state.main.userId);
  return (
    <>
      {
        openEditModal &&
        <SkillEditModal
          handleClose={() => setOpenEditModal(prev => !prev)}
          isAdd={false}
          id={id}
          tagline={tagline}
          category={category}
          locationOption={locationOption}
          travelFee={travelFee}
          userId={userId}
        />
      }
      <div
        style={{
          boxShadow: '6px 10px 10px 0 rgba(0, 0, 0, 0.1)',
          width: 200,
          margin: 22,
          padding: 15,
          backgroundColor: '#f6f6f6',
          border: 'solid',
          borderColor: '#dedede',
          borderWidth: 1,
          borderRadius: 10,
          fontSize: 15,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: 30, height: 50 }}>{category}</div>
          <div>
            {tagline}
            <div style={{ marginTop: 15 }}>{locationOption.map(el => <TagElement key={el} elementName={el}/>)}</div>
            {travelFee && (
              <div style={{ marginTop: 15 }}>{`${travelFee} €/km`}</div>
            )}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            marginTop: 50,
            flexDirection: 'row',
          }}
        >
          <button onClick={() => setOpenEditModal(true)} className="btn" style={{ backgroundColor: '#28AA6E' }}>
            <i className="fa fa-edit" />
          </button>
          <button onClick={() => dispatch(
            deleteSkill(axios, id)
          )} className="btn" style={{ backgroundColor: '#F90001' }}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </div>
    </>
  );
}
