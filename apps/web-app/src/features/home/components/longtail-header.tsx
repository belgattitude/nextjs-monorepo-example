import Button from '@mui/material/Button';
import { blue, red } from '@mui/material/colors';
import { OctopusTrust } from '@/components/octopus-trust/octopus-trust';

export const LongtailHeader: React.FC = () => {
  return (
      
      <div className="flex flex-row">
        <div className="w-50"></div>
        <div className="w-50"><OctopusTrust /></div>
      </div>
  );
};
