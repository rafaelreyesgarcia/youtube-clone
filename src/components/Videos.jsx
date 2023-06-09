import { Stack, Box } from '@mui/material'
import {VideoCard, ChannelCard, Loader} from './'

// eslint-disable-next-line react/prop-types
const Videos = ({videos, direction}) => {
  // console.log('videos', videos)
  if(!videos?.length) return <Loader />
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap='wrap'
      justifyContent='start'
      gap={2}
    >
      {videos.map((item, i) => (
        <Box
          key={i}
        >
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos

