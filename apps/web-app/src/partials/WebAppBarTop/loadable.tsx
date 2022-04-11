import dynamic from 'next/dynamic';

const DynamicWebAppBarTop = dynamic(() => import('.'));

export default DynamicWebAppBarTop;
