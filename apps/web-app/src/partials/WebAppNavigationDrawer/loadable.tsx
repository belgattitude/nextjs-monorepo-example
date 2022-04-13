import dynamic from 'next/dynamic';

const DynamicWebAppNavigationDrawer = dynamic(() => import('.'));

export default DynamicWebAppNavigationDrawer;
