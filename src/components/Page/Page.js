import React, { useRef, useEffect } from 'react';
import styles from './Page.module.scss';

type Props = {
  title?: string,
  children: React.Node
};

const Page = ({ title, children }: Props) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
    console.log(title)
  });

  return (
    <div ref={pageRef} className={styles['page']}>
        <div className={styles['page__inner']}>
          { title && <h1 className={styles['page__title']}>{title}</h1>}
          <div className={styles['page__body']}>
          {children}
          {title === "Contact me" && 
            <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>   
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
          }
        </div>
      </div>
    </div>
  );
};

export default Page;