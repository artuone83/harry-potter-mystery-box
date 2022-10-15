import { useParams } from 'react-router-dom';

import { ROUTER_PATHS } from 'routes';

export const useSummaryParams = () => useParams<{ [ROUTER_PATHS.summary.key]: string }>();
