import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';
import {
  PlayArrow as PlayArrowIcon,
  CalendarMonth as CalendarMonthIcon,
  GraphicEq as GraphicEqIcon,
  Close as CloseIcon,
  Place as PlaceIcon,
  AccessTime as AccessTimeIcon,
  EventAvailable as EventAvailableIcon,
  Whatshot as WhatshotIcon,
} from '@mui/icons-material';
import { DJ_PROFILE, TOUR_DATES_2026 } from '../data/djData';

export default function Hero() {
  const [scheduleOpen, setScheduleOpen] = useState(false);

  // Lock background body/html scroll when schedule modal is open
  useEffect(() => {
    if (scheduleOpen) {
      document.documentElement.classList.add('scroll-locked');
      document.body.classList.add('scroll-locked');
    } else {
      document.documentElement.classList.remove('scroll-locked');
      document.body.classList.remove('scroll-locked');
    }
    return () => {
      document.documentElement.classList.remove('scroll-locked');
      document.body.classList.remove('scroll-locked');
    };
  }, [scheduleOpen]);

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

  const handleOpenSchedule = (e) => {
    if (e && e.currentTarget && typeof e.currentTarget.blur === 'function') {
      e.currentTarget.blur();
    }
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setScheduleOpen(true);
  };

  const handleCloseSchedule = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setScheduleOpen(false);
  };

  const handleBookFromSchedule = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setScheduleOpen(false);
    scrollTo('booking');
  };

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        minHeight: { xs: '88vh', md: '94vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: { xs: 12, sm: 14, md: 17 },
        pb: { xs: 8, sm: 10, md: 12 },
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255, 199, 0, 0.16), rgba(11, 11, 11, 0) 70%), radial-gradient(ellipse 60% 40% at 90% 70%, rgba(255, 199, 0, 0.06), rgba(11, 11, 11, 0) 70%), #0B0B0B',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100vw',
      }}
    >
      {/* Ambient Lighting Spheres */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: { xs: 140, md: 450 },
          height: { xs: 140, md: 450 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 199, 0, 0.12) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: { xs: 140, md: 500 },
          height: { xs: 140, md: 500 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(253, 251, 240, 0.06) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, px: { xs: 2.5, sm: 4 }, width: '100%', mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          sx={{
            maxWidth: { xs: '100%', md: 950, lg: 1100 },
            width: '100%',
            mx: 'auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          
          {/* Interactive Clickable 2026 Dates Badge */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: { xs: 2.2, sm: 3 }, width: '100%' }}>
            <Chip
              onClick={handleOpenSchedule}
              clickable
              icon={
                <Box
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    backgroundColor: '#FFC700',
                    boxShadow: '0 0 10px #FFC700',
                    animation: 'pulseDot 2s infinite',
                    ml: 1,
                  }}
                />
              }
              label="PROVIDENCE RESIDENT • VIEW 2026 DATES →"
              variant="outlined"
              sx={{
                borderColor: 'rgba(255, 199, 0, 0.5)',
                backgroundColor: 'rgba(255, 199, 0, 0.08)',
                color: '#FFC700',
                fontSize: { xs: '0.66rem', sm: '0.74rem' },
                letterSpacing: '0.04em',
                fontWeight: 800,
                py: { xs: 1.8, sm: 2.2 },
                px: 1,
                maxWidth: '100%',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: '0 0 14px rgba(255, 199, 0, 0.15)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 199, 0, 0.18)',
                  borderColor: '#FFC700',
                  transform: 'scale(1.03)',
                  boxShadow: '0 0 20px rgba(255, 199, 0, 0.35)',
                },
              }}
            />
          </Box>

          {/* Calibrated Headline with Good People Signature Logo Underneath to the Right */}
          <Box sx={{ position: 'relative', width: 'fit-content', mx: 'auto', maxWidth: '100%', mb: { xs: 1.8, sm: 2.4 } }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: {
                  xs: 'clamp(1.9rem, 7.8vw, 2.7rem)',
                  sm: '3.6rem',
                  md: '4.6rem',
                  lg: '5.4rem',
                },
                lineHeight: 1.05,
                fontWeight: 900,
                letterSpacing: { xs: '0.01em', md: '-0.02em' },
                textTransform: 'uppercase',
                color: '#FDFBF0',
                textShadow: '0 4px 30px rgba(0,0,0,0.8)',
                display: 'block',
                textAlign: 'center',
                width: '100%',
                maxWidth: '100%',
                mx: 'auto',
                boxSizing: 'border-box',
                whiteSpace: 'nowrap',
              }}
            >
              GIBRAN<span style={{ color: '#FFC700', textShadow: '0 0 30px rgba(255, 199, 0, 0.5)' }}>PVD</span>
            </Typography>

            {/* Official "Good People" Logo under name and to the right */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                mt: { xs: -0.8, sm: -1.4, md: -1.8 },
                pr: { xs: 0.5, sm: 1.5, md: 2 },
              }}
            >
              <Box
                component="img"
                src="/banner.png"
                alt="GibranPVD - Good People"
                sx={{
                  height: { xs: '24px', sm: '34px', md: '42px' },
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 14px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 16px rgba(255, 199, 0, 0.3))',
                  transform: 'rotate(-2deg)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'rotate(0deg) scale(1.06)',
                  },
                }}
              />
            </Box>
          </Box>

          {/* Subhead with Badges */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '100%',
              mx: 'auto',
              mb: { xs: 2, sm: 2.8 },
            }}
          >
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontSize: { xs: '0.85rem', sm: '1.25rem', md: '1.55rem' },
                fontWeight: 700,
                color: '#EDE7CB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: { xs: 0.6, sm: 1 },
                textAlign: 'center',
                width: '100%',
                mx: 'auto',
              }}
            >
              <span style={{ color: '#FFC700', whiteSpace: 'nowrap' }}>Open-Format DJ</span>
              <span style={{ color: 'rgba(253, 251, 240, 0.4)' }}>•</span>
              <span style={{ color: '#38BDF8', whiteSpace: 'nowrap' }}>Tour MC</span>
              <span style={{ color: 'rgba(253, 251, 240, 0.4)' }}>•</span>
              <span style={{ color: '#FDFBF0', whiteSpace: 'nowrap' }}>Live Sound</span>
            </Typography>
          </Box>

          {/* Narrative */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '0.88rem', sm: '1.02rem', md: '1.12rem' },
              color: 'rgba(253, 251, 240, 0.75)',
              lineHeight: 1.65,
              mb: { xs: 3.5, sm: 4.5 },
              maxWidth: 760,
              mx: 'auto',
              textAlign: 'center',
              px: { xs: 0.5, sm: 0 },
            }}
          >
            <span style={{ color: '#FFC700', fontWeight: 800 }}>“Entertainment for everyone. Good people deserve good music.”</span> Full-time open-format DJ, concert tour MC, and creative director handling 17+ to 24+ events monthly—from packed Providence waterfront decks and weddings to national arena stage control alongside Kendrick Lamar, Logic, Trippie Redd, and Rae Sremmurd.
          </Typography>

          {/* Action Buttons with fluid width */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 1.8,
              justifyContent: 'center',
              alignItems: 'center',
              mb: { xs: 4, sm: 5 },
              width: '100%',
              maxWidth: { xs: '100%', sm: 460, md: 'none' },
            }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayArrowIcon />}
              onClick={() => scrollTo('mixes')}
              sx={{
                width: { xs: '100%', sm: 'auto' },
                maxWidth: '100%',
                px: { xs: 2.5, sm: 3.8 },
                py: { xs: 1.4, sm: 1.6 },
                fontSize: { xs: '0.88rem', sm: '0.96rem' },
                fontWeight: 800,
                whiteSpace: 'nowrap',
              }}
            >
              Explore Live Sets
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<CalendarMonthIcon />}
              onClick={() => scrollTo('booking')}
              sx={{
                width: { xs: '100%', sm: 'auto' },
                maxWidth: '100%',
                px: { xs: 2.5, sm: 3.8 },
                py: { xs: 1.4, sm: 1.6 },
                fontSize: { xs: '0.88rem', sm: '0.96rem' },
                fontWeight: 800,
                whiteSpace: 'nowrap',
                borderColor: 'rgba(255, 199, 0, 0.5)',
                color: '#FFC700',
                '&:hover': {
                  borderColor: '#FFC700',
                  backgroundColor: 'rgba(255, 199, 0, 0.1)',
                },
              }}
            >
              Book Event
            </Button>
          </Box>

          {/* Residency Rotation Bar with Generous Spacing */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 0.8, sm: 1.2 },
              py: { xs: 1.6, sm: 1.2 },
              px: { xs: 2.5, sm: 3.2 },
              mb: { xs: 4.5, sm: 5.5 },
              borderRadius: { xs: 3, sm: 50 },
              backgroundColor: 'rgba(253, 251, 240, 0.03)',
              border: '1px solid rgba(255, 199, 0, 0.25)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
              maxWidth: '100%',
              mx: 'auto',
              textAlign: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, justifyContent: 'center' }}>
              <GraphicEqIcon sx={{ color: '#FFC700', fontSize: 17, flexShrink: 0 }} />
              <Typography variant="caption" sx={{ color: '#EDE7CB', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: { xs: '0.68rem', sm: '0.74rem' }, whiteSpace: 'nowrap' }}>
                RESIDENCY ROTATION:
              </Typography>
            </Box>
            <Typography variant="caption" sx={{ color: '#FFC700', fontWeight: 800, letterSpacing: '0.03em', fontSize: { xs: '0.74rem', sm: '0.78rem' }, lineHeight: 1.4 }}>
              The Hot Club <span style={{ color: 'rgba(253, 251, 240, 0.4)', margin: '0 4px' }}>•</span> Fish Co <span style={{ color: 'rgba(253, 251, 240, 0.4)', margin: '0 4px' }}>•</span> Cafe Ava <span style={{ color: 'rgba(253, 251, 240, 0.4)', margin: '0 4px' }}>•</span> WaterFire
            </Typography>
          </Box>

          {/* Credibility Stats Strip */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
              gap: { xs: 1.2, sm: 2 },
              width: '100%',
              maxWidth: 840,
              mx: 'auto',
            }}
          >
            {DJ_PROFILE.stats.map((stat, idx) => (
              <Paper
                key={idx}
                sx={{
                  p: { xs: 1.6, sm: 2.2 },
                  textAlign: 'center',
                  backgroundColor: 'rgba(20, 20, 20, 0.85)',
                  border: '1px solid rgba(253, 251, 240, 0.12)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  maxWidth: '100%',
                  overflow: 'hidden',
                  transition: 'all 0.2s',
                  '&:hover': {
                    borderColor: 'rgba(255, 199, 0, 0.4)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 900,
                    color: idx === 0 ? '#FFC700' : idx === 1 ? '#38BDF8' : idx === 2 ? '#EDE7CB' : '#FFC700',
                    lineHeight: 1,
                    mb: 0.5,
                    fontSize: { xs: '1.3rem', sm: '1.8rem', md: '2.1rem' },
                    whiteSpace: 'nowrap',
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="caption" sx={{ color: 'rgba(253, 251, 240, 0.7)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.02em', fontSize: { xs: '0.62rem', sm: '0.72rem' }, display: 'block', lineHeight: 1.25 }}>
                  {stat.label}
                </Typography>
              </Paper>
            ))}
          </Box>

        </Box>
      </Container>

      {/* 2026 TOUR & RESIDENCY SCHEDULE MODAL */}
      <Dialog
        open={scheduleOpen}
        onClose={handleCloseSchedule}
        disableRestoreFocus
        disableScrollLock={false}
        maxWidth="md"
        fullWidth
        slotProps={{
          backdrop: {
            sx: {
              touchAction: 'none',
            },
          },
          paper: {
            sx: {
              backgroundColor: '#141414',
              backgroundImage: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255, 199, 0, 0.15), transparent 70%)',
              border: '1px solid rgba(255, 199, 0, 0.4)',
              borderRadius: 4,
              p: { xs: 1.5, sm: 3 },
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 199, 0, 0.15)',
              boxSizing: 'border-box',
              maxWidth: 780,
              m: 2,
              overscrollBehavior: 'contain',
            },
          },
        }}
      >
        <DialogTitle sx={{ p: { xs: 1.5, sm: 2 }, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.6 }}>
              <WhatshotIcon sx={{ color: '#FFC700', fontSize: 20 }} />
              <Typography variant="overline" sx={{ color: '#FFC700', fontWeight: 800, letterSpacing: '0.08em', fontSize: '0.72rem' }}>
                CONFIRMED 2026 CALENDAR
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 900, color: '#FDFBF0', fontSize: { xs: '1.35rem', sm: '1.85rem' } }}>
              2026 Tour & Residency Dates
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(253, 251, 240, 0.7)', fontSize: '0.84rem', mt: 0.3 }}>
              Upcoming waterfront sessions, club headliners, and arena stage dates across New England.
            </Typography>
          </Box>

          <IconButton
            autoFocus
            onClick={handleCloseSchedule}
            aria-label="close schedule"
            sx={{
              color: '#EDE7CB',
              backgroundColor: 'rgba(253, 251, 240, 0.05)',
              border: '1px solid rgba(253, 251, 240, 0.1)',
              width: 44,
              height: 44,
              minWidth: 44,
              minHeight: 44,
              borderRadius: '50%',
              p: 0,
              flexShrink: 0,
              '&:hover': {
                backgroundColor: 'rgba(255, 199, 0, 0.15)',
                borderColor: '#FFC700',
                color: '#FDFBF0',
              },
            }}
          >
            <CloseIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </DialogTitle>

        <DialogContent
          sx={{
            p: { xs: 1, sm: 2 },
            maxHeight: '70vh',
            overflowY: 'auto',
            overscrollBehavior: 'contain',
            touchAction: 'pan-y',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8 }}>
            {TOUR_DATES_2026.map((item, idx) => (
              <Paper
                key={idx}
                sx={{
                  p: { xs: 2, sm: 2.5 },
                  backgroundColor: '#181818',
                  border: '1px solid rgba(253, 251, 240, 0.1)',
                  borderRadius: 3,
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  justifyContent: 'space-between',
                  gap: 1.8,
                  transition: 'all 0.2s',
                  '&:hover': {
                    borderColor: 'rgba(255, 199, 0, 0.45)',
                    backgroundColor: 'rgba(253, 251, 240, 0.03)',
                  },
                }}
              >
                {/* Left: Date Badge */}
                <Box
                  sx={{
                    minWidth: { sm: 120 },
                    textAlign: { xs: 'left', sm: 'center' },
                    p: { xs: '4px 12px', sm: '8px 14px' },
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 199, 0, 0.1)',
                    border: '1px solid rgba(255, 199, 0, 0.3)',
                    flexShrink: 0,
                  }}
                >
                  <Typography variant="caption" sx={{ color: '#FFC700', fontWeight: 800, fontSize: '0.64rem', display: 'block', letterSpacing: '0.08em' }}>
                    {item.day}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#FDFBF0', fontWeight: 900, fontSize: { xs: '0.86rem', sm: '0.96rem' }, whiteSpace: 'nowrap' }}>
                    {item.date}
                  </Typography>
                </Box>

                {/* Middle: Event & Venue Info */}
                <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 900, color: '#FDFBF0', fontSize: { xs: '1rem', sm: '1.15rem' }, lineHeight: 1.2 }}>
                      {item.event}
                    </Typography>
                    <Chip
                      label={item.status}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(255, 199, 0, 0.15)',
                        color: '#FFC700',
                        fontWeight: 800,
                        fontSize: '0.62rem',
                        height: 20,
                        border: '1px solid rgba(255, 199, 0, 0.3)',
                      }}
                    />
                  </Box>

                  <Typography variant="subtitle2" sx={{ color: '#FFC700', fontWeight: 800, fontSize: '0.84rem', mb: 0.4 }}>
                    {item.venue}
                  </Typography>

                  {/* Google Maps Location */}
                  <Box
                    component="a"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${item.venue} ${item.location}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.5,
                      color: 'rgba(253, 251, 240, 0.7)',
                      textDecoration: 'none',
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      mb: 0.4,
                      '&:hover': { color: '#FFC700', textDecoration: 'underline' },
                    }}
                  >
                    <PlaceIcon sx={{ fontSize: 13, color: '#FFC700' }} />
                    {item.location}
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: 'rgba(253, 251, 240, 0.5)' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
                      <AccessTimeIcon sx={{ fontSize: 13 }} />
                      <Typography variant="caption" sx={{ fontSize: '0.72rem', fontWeight: 600 }}>{item.time}</Typography>
                    </Box>
                    <Typography variant="caption" sx={{ color: '#EDE7CB', fontSize: '0.72rem', fontWeight: 600 }}>
                      • {item.genre}
                    </Typography>
                  </Box>
                </Box>

                {/* Right: Inquire Action */}
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<EventAvailableIcon sx={{ fontSize: 15 }} />}
                  onClick={handleBookFromSchedule}
                  sx={{
                    flexShrink: 0,
                    width: { xs: '100%', sm: 'auto' },
                    borderColor: 'rgba(255, 199, 0, 0.4)',
                    color: '#FFC700',
                    fontWeight: 800,
                    fontSize: '0.74rem',
                    py: 0.8,
                    px: 1.8,
                    '&:hover': {
                      borderColor: '#FFC700',
                      backgroundColor: 'rgba(255, 199, 0, 0.12)',
                    },
                  }}
                >
                  Book / Inquire
                </Button>
              </Paper>
            ))}
          </Box>

          {/* Modal Footer Callout */}
          <Box
            sx={{
              mt: 2.5,
              p: 2,
              borderRadius: 2.5,
              backgroundColor: 'rgba(255, 199, 0, 0.06)',
              border: '1px solid rgba(255, 199, 0, 0.2)',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 1.5,
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#FDFBF0', fontSize: '0.88rem' }}>
                Planning a Private Gala, College Event, or Festival?
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(253, 251, 240, 0.7)', fontSize: '0.76rem' }}>
                Custom dates and tour bookings are handled directly with Gibran.
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="small"
              onClick={handleBookFromSchedule}
              sx={{
                fontWeight: 900,
                fontSize: '0.78rem',
                py: 0.9,
                px: 2.2,
                flexShrink: 0,
                whiteSpace: 'nowrap',
              }}
            >
              Direct Inquiry
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
