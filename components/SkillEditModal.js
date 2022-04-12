import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ModalCloseIcon from './ModalCloseIcon';
import styles from '../styles/Home.module.css';
import { addSkill, editSkill } from '../store/actions';
import axios from 'axios';

export default function SkillEditModal(props) {
  const dispatch = useDispatch();
  const locationText = props.locationOption ? props.locationOption.map(el => el.charAt(0)).join("") : ""
  const [choose, setChoose] = useState(locationText.includes("c"));
  const [instructor, setInstructor] = useState(locationText.includes("i"));
  const [online, setOnline] = useState(locationText.includes("o"));
  const [category, setCategory] = useState(props.category || '');
  const [tagline, setTagline] = useState(props.tagline || '');
  const [travelFee, setTravelFee] = useState(props.travelFee || null);

    const keyPressHandler = useCallback(e => {
        if (e.key === "Escape") {
          props.handleClose()
        } else if (e.key === "Enter") {

        }
    }, [])

  useEffect(() => {
    document.body.addEventListener("keyup", keyPressHandler)
    return () => {
      document.body.removeEventListener("keyup", keyPressHandler)
    }
  }, [])

  const action = async () => {
    const locationOption = (choose ? "c" : "") + (instructor ? "i" : "") + (online ? "o" : "")
    if (locationOption && category) {
      if (props.isAdd) {
        dispatch(
          addSkill(axios, {
            userId: props.userId,
            category,
            tagline,
            locationOption,
            travelFee: choose ? travelFee : null
          })
        );
      } else {
        dispatch(
          editSkill(axios, {
            id: props.id,
            category,
            tagline,
            locationOption,
            travelFee: choose ? travelFee : null
          })
        );
      }
      props.handleClose()
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        background: 'rgba(35, 43, 57, 0.7)',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        textAlign: 'center',
        zIndex: 2,
        verticalAlign: 'middle'
      }}
    >
      <section
        style={{
          borderRadius: 4,
          display: 'inline-block',
          margin: '0 auto',
          background: '#f5f5f5',
          width: 600,
          marginTop: '10%',
          maxHeight: '92%',
          verticalAlign: 'middle',
        }}
      >
        <ModalCloseIcon
          onClick={() => props.handleClose()}
          style={{ float: 'right', cursor: 'pointer', margin: 16 }}
        />
        <div>
          <p>{'EDIT SKILL'}</p>

        </div>
        <div
          style={{
            borderRadius: 4,
            backgroundColor: '#f5f5f5',
            padding: 10,
            paddingLeft: 43,
            paddingRight: 43,
            textAlign: 'left',
          }}
        >
          <div className={styles.field}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="category">Category</label>
            <div className="sec-2">
              <input
                id="category"
                type="text"
                className={styles.field}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.field} style={{marginTop: 20}}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="tagline">Tagline</label>
            <div className="sec-2">
              <input
                id="tagline"
                type="text"
                value={tagline}
                className={styles.field}
                onChange={(e) => setTagline(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.field} style={{marginTop: 20, flexDirection: "row"}}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="locationOptions">Location Options</label>
            <div style={{marginTop: 20}}>
              <button className={styles.login}
                      onClick={() => setChoose(prev => !prev)}
                      style={{margin: 10, backgroundColor: choose ? "#F90001" : "#28AA6E"}}>choose</button>
              <button className={styles.login}
                      onClick={() => setInstructor(prev => !prev)}
                      style={{margin: 10, backgroundColor: instructor ? "#F90001" : "#28AA6E"}}>instructor</button>
              <button className={styles.login}
                      onClick={() => setOnline(prev => !prev)}
                      style={{margin: 10, backgroundColor: online ? "#F90001" : "#28AA6E"}}>online</button>
            </div>
          </div>
          { choose &&
            <div className={styles.field} style={{ marginTop: 20 }}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label htmlFor='travelFee'>Travel Fee</label>
              <div className='sec-2'>
                <input
                  id='travelFee'
                  type='text'
                  value={travelFee || 0}
                  className={styles.field}
                  onChange={(e) => setTravelFee(parseFloat(e.target.value) || 0)}
                />
              </div>
            </div>}
        </div>
        <div
          style={{
            margin: 24,
            marginTop: 14,
          }}
        >
            <button onClick={() => action()} className={styles.login}>Save</button>
        </div>
      </section>
    </div>
  );
}
