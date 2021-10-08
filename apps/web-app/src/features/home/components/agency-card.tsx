import AddReactionIcon from '@mui/icons-material/AddReaction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StarsIcon from '@mui/icons-material/Stars';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Grid,
  Box,
  Icon,
  Divider,
} from '@mui/material';

import { LazyImage } from '@your-org/ui-lib/component/image/lazy-image';
import AgencyIcon from '@/components/icons/AgencyIcon';
import { GetAgenciesData } from '@/features/home/api/fetch.agencies';

type Props = {
  agency?: GetAgenciesData['agencies'][0];
  children?: never;
};

export const AgencyCard: React.FC<Props> = (props) => {
  const { agency } = props;

  return (
    <Card style={{ height: '277px', padding: '28px' }}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
          }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <AgencyIcon width="41" height="41" />
            <Box
              sx={{ display: 'flex', flexDirection: 'column' }}
              style={{ marginLeft: '36px' }}>
              <Typography variant="h6" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests.
              </Typography>
              <Typography variant="subtitle2">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests.
              </Typography>
              <Typography variant="body2">
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <StarsIcon />
            <span style={{ marginLeft: '6px' }}>4.6</span>
          </Box>
        </Box>
        <Divider style={{ marginTop: '20px' }} />
        <Box style={{ marginLeft: '0px', marginTop: '20px' }}>
          <LocationOnIcon style={{ color: '#FF774A' }} />
          <span style={{ marginRight: '35px' }}>London, UK</span>
          <AddReactionIcon style={{ color: '#FF774A' }} />
          <span style={{ marginRight: '35px' }}>Gaming</span>
          <ShoppingBagIcon style={{ color: '#FF774A' }} />
          <span style={{ marginRight: '35px' }}>23</span>
          <PeopleIcon style={{ color: '#FF774A' }} />
          <span style={{ marginRight: '35px' }}>12</span>
        </Box>
      </CardContent>
    </Card>

    // <div className="">
    //   <div className="aspect-w-16 aspect-h-9 lg:aspect-none h-56">
    //     <LazyImage
    //       strategy={'browser'}
    //       imgLoading={'lazy'}
    //       imgProps={{
    //         className:
    //           'w-full h-full object-center object-cover lg:w-full lg:h-full',
    //         srcSet: `https://sortlist.gumlet.io/sortlist-core-api/${agency.logo.key}?w=150&format=auto 480w,
    //                  https://sortlist.gumlet.io/sortlist-core-api/${agency.logo.key}?w=200&format=auto 800w`,
    //         sizes: '(max-width: 600px) 480px, 800px',
    //         width: 200,
    //         src: `https://sortlist.gumlet.io/sortlist-core-api/${agency.logo.key}?w=200&format=auto`,
    //         alt: agency.name,
    //       }}
    //     />
    //     {/*
    //     <img
    //       className="w-full h-full object-center object-cover lg:w-full lg:h-full"
    //       src={image ?? ''}
    //       alt={title}
    //     />
    //     */}
    //   </div>
    //   <article className="prose px-6 py-4">
    //     <div className="font-bold text-xl mb-2">{agency.name}</div>
    //     <p className="text-gray-700 text-base line-clamp-4">
    //       {agency.location_name}
    //     </p>
    //   </article>
    //   {/*
    //   <div className="px-6 pt-4 pb-2">
    //     {agency..map((keyword) => {
    //       return (
    //         <span
    //           key={keyword}
    //           className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //           #{keyword}
    //         </span>
    //       );
    //     })}
    //   </div>
    //   */}
    // </div>
  );
};
