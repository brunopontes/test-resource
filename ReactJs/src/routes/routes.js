import Loadable from 'react-loadable';
import Loading from '../views/utils/loading';

const ExtractList = Loadable({
  loader: () => import('../views/extract/extractList'),
  loading: Loading,
});

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: ExtractList,
  },
  {
    path: '/extract',
    exact: true,
    name: 'Extrato',
    component: ExtractList,
  },
];

export default routes;
