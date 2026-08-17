import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Button,
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Headphones as HeadphonesIcon,
} from '@mui/icons-material';
import { DJ_PROFILE } from '../data/djData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#050507',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        pt: { xs: 3.5, sm: 4.5 },
        pb: 3,
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4 }, mx: 'auto' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr 1fr' },
            gap: { xs: 3.5, sm: 4 },
            mb: { xs: 4, sm: 6 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Logo & Bio */}
          <Box sx={{ maxWidth: { md: 360 }, mx: { xs: 'auto', md: 0 } }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.2,
                mb: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  minWidth: 30,
                  minHeight: 30,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <HeadphonesIcon sx={{ color: '#09090B', fontSize: 16 }} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Syne", sans-serif',
                  fontWeight: 900,
                  letterSpacing: '0.06em',
                  color: '#FFFFFF',
                  fontSize: '1.15rem',
                  whiteSpace: 'nowrap',
                }}
              >
                GIBRAN<span style={{ color: '#F59E0B' }}>PVD</span>
              </Typography>
            </Box>

            <Typography variant="body2" sx={{ color: '#94A3B8', lineHeight: 1.6, mb: 1.5, fontSize: '0.85rem' }}>
              <span style={{ color: '#FCD34D', fontWeight: 700 }}>“Entertainment for everyone. Good people deserve good music.”</span> Full-time open-format DJ, concert tour MC, and creative director handling 17+ to 24+ monthly events across New England, New York, and national concert stages.
            </Typography>

            <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 700, letterSpacing: '0.06em', fontSize: '0.68rem' }}>
              PROVIDENCE, RI • EST. 2004
            </Typography>
          </Box>

          {/* Quick Navigation */}
          <Box>
            <Typography variant="subtitle2" sx={{ color: '#FFFFFF', fontWeight: 800, mb: 1.8, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.82rem' }}>
              Quick Navigation
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: { xs: 'center', md: 'flex-start' } }}>
              {[
                { label: 'Sound Profile', id: 'sound' },
                { label: 'Live Sets', id: 'mixes' },
                { label: 'Providence Residencies', id: 'residencies' },
                { label: 'Tour Stage Credits', id: 'tours' },
                { label: 'Book Event Inquiry', id: 'booking' },
              ].map((item) => (
                <Typography
                  key={item.id}
                  component="button"
                  onClick={() => scrollTo(item.id)}
                  sx={{
                    background: 'none',
                    border: 'none',
                    padding: '4px 0',
                    cursor: 'pointer',
                    color: '#94A3B8',
                    fontSize: '0.85rem',
                    textAlign: { xs: 'center', md: 'left' },
                    transition: 'color 0.2s',
                    '&:hover': { color: '#F59E0B' },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Connect & Socials */}
          <Box>
            <Typography variant="subtitle2" sx={{ color: '#FFFFFF', fontWeight: 800, mb: 1.8, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.82rem' }}>
              Connect & Follow
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, justifyContent: { xs: 'center', md: 'flex-start' }, mb: 2 }}>
              <IconButton
                component="a"
                href={DJ_PROFILE.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                sx={{
                  width: 44,
                  height: 44,
                  minWidth: 44,
                  minHeight: 44,
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 0,
                  flexShrink: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  color: '#CBD5E1',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  '&:hover': { color: '#3B82F6', borderColor: '#3B82F6', backgroundColor: 'rgba(59, 130, 246, 0.12)' },
                }}
              >
                <FacebookIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>

            <Typography variant="body2" sx={{ color: '#64748B', fontSize: '0.82rem' }}>
              Direct Booking: <span style={{ color: '#F59E0B', fontWeight: 700 }}>gibran@me.com</span>
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.06)', mb: 3 }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <Typography variant="caption" sx={{ color: '#64748B', fontSize: '0.72rem', textAlign: { xs: 'center', sm: 'left' } }}>
            © {new Date().getFullYear()} GIBRANPVD. All rights reserved.
          </Typography>

          <Button
            variant="text"
            size="small"
            endIcon={<KeyboardArrowUpIcon />}
            onClick={scrollToTop}
            sx={{
              color: '#94A3B8',
              fontSize: '0.78rem',
              fontWeight: 700,
              '&:hover': { color: '#F59E0B' },
            }}
          >
            Back to Top
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
