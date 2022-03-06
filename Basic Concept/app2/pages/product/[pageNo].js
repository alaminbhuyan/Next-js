import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blog.module.css'



export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const paths = data.map((currentElement) => {
        return {
            params: {
                pageNo: currentElement.id.toString()
            }
        };
    });

    return {
        paths, fallback: false
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.pageNo;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return {
        props: {
            data
        }
    };
};

const makeUpperCase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const PageNumber = ({ data }) => {

    return (
        <React.Fragment>
            <div className={styles.mypost}>
                <span className={styles.ID}>{data.id}</span>
                <h3 className={styles.postTitle} >{makeUpperCase(data.title)}</h3>
                <p className={styles.postBody}>{makeUpperCase(data.body)}</p>
                <hr />
            </div>
        </React.Fragment>
    )
}



// const PageNumber = () => {
//     const router = useRouter();

//     const { pageNo, foo } = router.query; // /product/abc?foo=bar

//     { pageNo } --> this is the dynamic file name
//     const { pageNo } = router.query;
//     console.log(pageNo);

//     const pno = router.query.pageno;
//     console.log(pno);

//     return (
//         <React.Fragment>
//             <div>
//                 <h2>{pageNo}</h2>
//                 <h2>{pno}</h2>
//             </div>
//         </React.Fragment>
//     )
// }

export default PageNumber;