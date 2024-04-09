import React, { useState } from 'react';
import styles from './text.module.scss';
import { Gallery } from '../Gallery/Gallery';
import { useGetAllContent } from '../../hooks/useGetAllContent'; // Import the hook to fetch Contentful data

export const Textcontent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { data: allData } = useGetAllContent(); // Fetch all data from Contentful

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const images = allData?.items || []; // Extract images from the fetched Contentful data

  return (
    <div className={styles.textwrapper}>
      <h3>Choose our best sellers</h3>
      <p>Step into the world of exceptional tea offerings, where quality meets craftsmanship in every sip. Explore our curated selection of meticulously sourced teas, each blend carefully chosen for its unique flavor profile. From robust black teas to delicate green teas, there's something for every palate. Take your time browsing our collection, and when you're ready, simply click the button below to discover more about our premium blends and find your perfect cup of tea.</p>
      <section className={`${styles.modal} ${modalOpen ? styles.active : ''}`}>
        <button className={styles.modal_close} onClick={closeModal}>X</button>
        <div className={styles.modal_content}>
          <h2>BestSellers</h2>
          <div>
            <Gallery images={images} />
          </div>
        </div>
      </section>
      <div className={styles.blur}>
        <button className={styles.modal_btn} onClick={openModal}>Check Them Out</button>
      </div>
    </div>
  );
};
