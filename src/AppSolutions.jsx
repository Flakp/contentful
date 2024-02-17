import {useFetchAppSolutions} from "./fetchAppSolutions.jsx";
const AppSolutions = () => {
    const {loading, appSolutions} = useFetchAppSolutions();

    if (loading) {
        return (
            <section className='projects'>
                <h2>Loading...</h2>
            </section>
        );
    }

    return (
        <section className='projects'>
            <div className='title'>
                <h2>Solutions</h2>
                <div className='title-underline'></div>
            </div>

            <div className='projects-center'>
                {appSolutions.map((solution) => {
                    const {id, title, img, docUrl} = solution;

                    console.log(solution);

                    return (
                        <a key={id} href={docUrl} className='project' >
                            <img src={img} alt={title} className='img'/>
                            <h5>{title}</h5>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};
export default AppSolutions;
