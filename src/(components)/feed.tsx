import { fetchUserDataset } from '@/models/methods'

import styles from './feed.module.css'

export const Feed = async ({ uid }: { uid: string }) => {
    const user = await fetchUserDataset(uid)

    return (
        <section className={styles.feed}>
            {user?.newPosts.map((post) => (
                <article className={styles.post}>
                    <img
                        className={styles.image}
                        src={post.imgsrc}
                        width={255}
                        height={282}
                        alt={post.city}
                    />
                    <div className={styles.action}>
                        <p className={styles.city} key={post.city}>
                            {post.city}
                        </p>
                    </div>
                </article>
            ))}
        </section>
    )
}
