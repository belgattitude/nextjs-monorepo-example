import dynamic from 'next/dynamic';

const DynamicWebAppFooter = dynamic(() => import('.'));

export default DynamicWebAppFooter;
