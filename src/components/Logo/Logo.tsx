import Typography from '@mui/material/Typography'
import StorefrontIcon from '@mui/icons-material/Storefront'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Typography
            variant="h4"
            component="div"
            sx={{
                flexGrow: 1,
                fontSize: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            Market
            <StorefrontIcon />
            Hub
        </Typography>
    )
}
export default Logo
