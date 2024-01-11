import styles from "./about.module.scss";

export function About() {
  return (
    <div className={styles.about}>
      <h3 className={styles.about__title}>
        МАГАЗИН ТЕКСТИЛЬНИХ ВИРОБІВ З ПРИНТАМИ АНІМЕ
      </h3>
      <div className={styles.about__content}>
        <p className={styles.about__subtitle}>Магазин подарунків Kage.store</p>
        <p className={styles.about__text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
          distinctio voluptatem laudantium, suscipit animi eum quas, commodi
          accusamus unde, natus magnam? Eligendi rem error vel? Eaque sequi
          excepturi sint perferendis sunt tempora laboriosam corporis nulla
          delectus saepe repudiandae eos, iste quidem molestias libero ducimus
          nostrum temporibus repellendus? Minima, veritatis placeat.
        </p>
        <p className={styles.about__text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quos
          facilis eveniet eum omnis exercitationem, ad numquam ducimus quibusdam
          alias, voluptatibus repudiandae vitae beatae! Commodi nam nostrum
          impedit praesentium, qui accusamus veniam dolore, libero accusantium
          debitis deserunt alias ut nesciunt?
        </p>
        <p className={styles.about__text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, animi.
          Adipisci est voluptatem in illum odio obcaecati saepe numquam debitis
          dolores! Iusto sapiente corporis deleniti, animi omnis quia officiis
          nemo.
        </p>
        <p className={styles.about__text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          temporibus ea qui, molestias voluptate omnis. Tempora adipisci aut
          asperiores, eius itaque blanditiis culpa totam molestiae id, nam,
          deserunt qui delectus perferendis labore pariatur laborum sunt a sed
          commodi perspiciatis. Suscipit ab a sapiente explicabo enim.
        </p>
      </div>
    </div>
  );
}
