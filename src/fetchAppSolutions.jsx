import {useState, useEffect} from "react";
import { createClient } from "contentful";

const client = createClient({
    space: '1bf096ggcc0p',
    environment: 'dev',
    accessToken: 'e-Oj8Q6_9ab55EcnbqmEwFnjWaoOzijFmLkpR0__fcg',
});


export const useFetchAppSolutions = () => {
    const [loading, setLoading] = useState(true);
    const [appSolutions, setAppSolutions] = useState([]);


    const getData = async () => {
        try {
            const response = await client.getEntries({content_type: 'appSolutions'});
            const dataAppSolutions = response.items.map((item) => {
                const {title, docUrl, image} = item.fields
                const id = item.sys.id;
                const img = image?.fields?.file?.url;
                return {title, docUrl, id, img};
            });
            setAppSolutions(dataAppSolutions);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return {loading, appSolutions};
};