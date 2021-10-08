import Button from '@mui/material/Button';
import { blue, red } from '@mui/material/colors';

export const LongtailHeader: React.FC = () => {
  return (
    <>
      <div className="flex flex-row">
        <div style={{ background: red, height: '20', width: '20' }}>test</div>
        <div>
          <div className="flex flex-row justify-end">
            <Button variant="contained" color="success">
              I'm an agency
            </Button>
            <Button variant="contained" color="success">
              Post a project
            </Button>
          </div>
          <div className="flex flex-row">
            <img src={'/images/orange-octopus.svg'} alt="octopus-logo" />
            <div>
              <h2>Hiii 8 tickles! Thanks for trusting me, human.</h2>
              <p>
                Here are a few more details about my nominees. Hope it will help
                Treat them well.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Button variant="contained" color="success">
        Gaming in London
      </Button>
    </>
  );
};
