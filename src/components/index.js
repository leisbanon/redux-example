import Loadable from 'react-loadable'

const components = (path) => Loadable({
    loader:() => import(`@/components/${path}`),
    loading:() => (null)
});

const List = components('list/list');
const SubHeader = components('subHeader/subHeader.jsx');
export {
    List,
    SubHeader,
}