import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

export const Comment = ({ fullName, avatarUrl, text }) => {
  return (
    <ListItem alignItems='flex-start'>
      <ListItemAvatar>
        <Avatar alt='Remy Sharp' src={avatarUrl} />
      </ListItemAvatar>
      <ListItemText
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component='span'
              variant='body2'
              color='text.primary'>
              {fullName}
            </Typography>
            {text}
          </>
        }
      />
    </ListItem>
  )
}
