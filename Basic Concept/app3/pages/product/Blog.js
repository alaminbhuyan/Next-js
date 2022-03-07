import React from 'react'
import Link from 'next/link'
import Title from '../../components/Title';
import styles from '../../styles/Blog.module.css'


export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const posts = await res.json();

    return {
        // props: { posts: posts }
        props: { posts }
    }
}

function makeUpperCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

const Blog = ({ posts }) => {
    return (
        <React.Fragment>
            <Title title="Blog" />
            {
                posts.map((post) => {
                    let { id, title, body } = post;
                    return (
                        <div key={id} className={styles.mypost}>
                            <span className={styles.ID}>{id}</span>
                            <Link href={`/product/${id}`}>
                                <h3 className={styles.postTitle} >{makeUpperCase(title)}</h3>
                            </Link>
                            {/* <p className={styles.postBody}>{makeUpperCase(body)}</p> */}
                            <hr />
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default Blog