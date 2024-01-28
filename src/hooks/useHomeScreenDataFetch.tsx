import { useQueries } from 'react-query';
import { fetchData } from '../infrastructure/api/api';
import { Endpoints } from '../shared/constants';

const useHomeScreenDataFetch = () => {
    const results = useQueries([
        { queryKey: ["sectors"], queryFn: () => fetchData(Endpoints.SECTORS) },
        { queryKey: ["brands"], queryFn: () => fetchData(Endpoints.BRANDS) },
        { queryKey: ["additionalLoans"], queryFn: () => fetchData(Endpoints.ADDITIONAL_LOANS) },
        { queryKey: ["offers"], queryFn: () => fetchData(Endpoints.OFFERS) }
    ]);

    const isLoading = results.some((query) => query?.isLoading);
    const isError = results.some((query) => query?.error);

    return {
        isLoading, isError,
        data: {
            sectors: results[0]?.data?.results,
            brands: results[1]?.data?.results,
            services: results[2]?.data?.results,
            offers: results[3]?.data?.results,
        }
    }
}

export default useHomeScreenDataFetch