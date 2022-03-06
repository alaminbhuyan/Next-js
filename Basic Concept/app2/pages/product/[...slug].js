import { useRouter } from 'next/router'


const Slug = () => {
    const router = useRouter();
    
    // const { slug } = router.query;
    const { ...slug } = router.query;
    console.log(slug);
    return (
        <>
            <div>
                <h3>Something</h3>
            </div>
        </>
    )
}

export default Slug;