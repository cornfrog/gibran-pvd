import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  Button,
  Paper,
} from '@mui/material';
import {
  Place as PlaceIcon,
  AccessTime as AccessTimeIcon,
  MusicNote as MusicNoteIcon,
  Facebook as FacebookIcon,
  CalendarMonth as CalendarMonthIcon,
  Whatshot as WhatshotIcon,
  Equalizer as EqualizerIcon,
} from '@mui/icons-material';
import { SETS_DATA, DJ_PROFILE } from '../data/djData';

const CATEGORIES = [
  'All Sets',
  'Waterfront Sunset',
  'Reggaeton & Latin',
  'R&B & Hip-Hop',
  'House & Club',
  'Dance Classics',
];

const SET_ACCENTS = {
  'hot-club-sunset': { glow: 'rgba(255, 199, 0, 0.2)', border: 'rgba(255, 199, 0, 0.4)', tagColor: '#FFC700' },
  'cafecito-vol4': { glow: 'rgba(239, 68, 68, 0.2)', border: 'rgba(239, 68, 68, 0.4)', tagColor: '#F87171' },
  'pvd-midnight-vault': { glow: 'rgba(236, 72, 153, 0.2)', border: 'rgba(236, 72, 153, 0.4)', tagColor: '#F472B6' },
  'tour-stage-hype': { glow: 'rgba(6, 182, 212, 0.2)', border: 'rgba(6, 182, 212, 0.4)', tagColor: '#38BDF8' },
  'watertower-grooves': { glow: 'rgba(16, 185, 129, 0.2)', border: 'rgba(16, 185, 129, 0.4)', tagColor: '#34D399' },
};

export default function MixesSection() {
  const [activeCategory, setActiveCategory] = useState('All Sets');

  const filteredSets =
    activeCategory === 'All Sets'
      ? SETS_DATA
      : SETS_DATA.filter((set) => set.category === activeCategory);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
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
      id="mixes"
      sx={{
        py: { xs: 8, sm: 11, md: 14 },
        backgroundColor: '#0B0B0B',
        position: 'relative',
        width: '100%',
        maxWidth: '100vw',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Background Glow Spheres */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '-5%',
          width: { xs: 180, md: 450 },
          height: { xs: 180, md: 450 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 199, 0, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          left: '-5%',
          width: { xs: 180, md: 450 },
          height: { xs: 180, md: 450 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(253, 251, 240, 0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4 }, position: 'relative', zIndex: 1, mx: 'auto' }}>
        {/* Section Header */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 4, sm: 5, md: 6 },
            maxWidth: { xs: '100%', md: 950, lg: 1100 },
            mx: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.8,
              py: 0.7,
              px: 1.8,
              mb: 1.8,
              borderRadius: '50px',
              backgroundColor: 'rgba(255, 199, 0, 0.08)',
              border: '1px solid rgba(255, 199, 0, 0.35)',
              boxSizing: 'border-box',
              maxWidth: '100%',
            }}
          >
            <EqualizerIcon sx={{ color: '#FFC700', fontSize: 16, display: 'block' }} />
            <Typography
              sx={{
                color: '#FFC700',
                fontWeight: 800,
                fontSize: { xs: '0.66rem', sm: '0.74rem' },
                letterSpacing: '0.06em',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}
            >
              LIVE RESIDENCY SETS & SOUND CURATION
            </Typography>
          </Box>

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '1.65rem', sm: '2.1rem', md: '2.6rem', lg: '3.1rem' },
              fontWeight: 900,
              letterSpacing: { xs: '-0.01em', md: '-0.02em' },
              lineHeight: 1.15,
              mb: 1.5,
              textAlign: 'center',
              width: '100%',
              mx: 'auto',
              display: 'block',
              whiteSpace: { xs: 'normal', md: 'nowrap' },
              color: '#FDFBF0',
            }}
          >
            SIGNATURE <span style={{ color: '#FFC700', textShadow: '0 0 30px rgba(255, 199, 0, 0.35)' }}>LIVE SETS</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(253, 251, 240, 0.75)',
              fontSize: { xs: '0.88rem', sm: '1rem', md: '1.05rem' },
              lineHeight: 1.6,
              maxWidth: 680,
              width: '100%',
              mx: 'auto',
              textAlign: 'center',
              display: 'block',
            }}
          >
            High-octane curation crafted for Providence’s top waterfront decks, underground Latin movements, and arena tour stages.
          </Typography>
        </Box>

        {/* Category Filter Pills Track - Mobile Left-Aligned Scroll, Desktop Centered */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'flex-start', md: 'center' },
            overflowX: 'auto',
            mb: { xs: 4, sm: 6 },
            pb: 1,
            px: { xs: 0.5, sm: 0 },
            width: '100%',
            maxWidth: '100%',
            WebkitOverflowScrolling: 'touch',
            '::-webkit-scrollbar': { display: 'none' },
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              gap: 1,
              p: 0.8,
              borderRadius: '50px',
              backgroundColor: 'rgba(253, 251, 240, 0.03)',
              border: '1px solid rgba(253, 251, 240, 0.1)',
              flexShrink: 0,
              minWidth: 'max-content',
            }}
          >
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <Button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  sx={{
                    fontWeight: isSelected ? 800 : 700,
                    fontSize: { xs: '0.74rem', sm: '0.82rem' },
                    letterSpacing: '0.02em',
                    px: { xs: 1.8, sm: 2.4 },
                    py: 0.7,
                    borderRadius: '50px',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    backgroundColor: isSelected ? '#FFC700' : 'transparent',
                    color: isSelected ? '#0B0B0B' : 'rgba(253, 251, 240, 0.75)',
                    boxShadow: isSelected ? '0 4px 16px rgba(255, 199, 0, 0.4)' : 'none',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      backgroundColor: isSelected ? '#FFD633' : 'rgba(253, 251, 240, 0.08)',
                      color: isSelected ? '#0B0B0B' : '#FDFBF0',
                    },
                  }}
                >
                  {cat}
                </Button>
              );
            })}
          </Box>
        </Box>

        {/* Sets Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: { xs: 2.8, sm: 3.5 },
            width: '100%',
          }}
        >
          {filteredSets.map((set, idx) => {
            const accent = SET_ACCENTS[set.id] || { glow: 'rgba(255, 199, 0, 0.2)', border: 'rgba(255, 199, 0, 0.4)', tagColor: '#FFC700' };
            const setNumber = `0${idx + 1}`;

            return (
              <Card
                key={set.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: '#141414',
                  backgroundImage: `radial-gradient(ellipse 60% 50% at 90% 10%, ${accent.glow}, transparent 70%)`,
                  border: '1px solid rgba(253, 251, 240, 0.12)',
                  p: { xs: 2.5, sm: 3.5 },
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  width: '100%',
                  boxSizing: 'border-box',
                  '&:hover': {
                    borderColor: accent.border,
                    transform: 'translateY(-3px)',
                    boxShadow: `0 18px 40px rgba(0, 0, 0, 0.8), 0 0 24px ${accent.glow}`,
                  },
                }}
              >
                {/* Index Watermark in Top Right */}
                <Typography
                  sx={{
                    position: 'absolute',
                    top: 14,
                    right: 20,
                    fontFamily: '"Syne", sans-serif',
                    fontSize: '2.8rem',
                    fontWeight: 900,
                    lineHeight: 1,
                    color: 'rgba(253, 251, 240, 0.04)',
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  {setNumber}
                </Typography>

                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  {/* Meta Bar - Non-wrapping and polished on mobile */}
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      justifyContent: 'space-between',
                      alignItems: { xs: 'flex-start', sm: 'center' },
                      gap: { xs: 1.2, sm: 1.5 },
                      mb: 2,
                      width: '100%',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        py: 0.5,
                        px: 1.2,
                        borderRadius: '50px',
                        backgroundColor: 'rgba(253, 251, 240, 0.05)',
                        border: `1px solid ${accent.border}`,
                        color: accent.tagColor,
                        fontWeight: 800,
                        fontSize: '0.68rem',
                        letterSpacing: '0.03em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {set.category}
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1.2, alignItems: 'center', flexShrink: 0, width: { xs: '100%', sm: 'auto' }, justifyContent: { xs: 'space-between', sm: 'flex-end' } }}>
                      <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, color: 'rgba(253, 251, 240, 0.7)', whiteSpace: 'nowrap' }}>
                        <AccessTimeIcon sx={{ fontSize: 14, color: 'rgba(253, 251, 240, 0.7)', display: 'block', flexShrink: 0 }} />
                        <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.72rem', whiteSpace: 'nowrap', lineHeight: 1 }}>
                          {set.duration}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.5,
                          py: 0.35,
                          px: 0.9,
                          borderRadius: '6px',
                          backgroundColor: 'rgba(56, 189, 248, 0.1)',
                          border: '1px solid rgba(56, 189, 248, 0.25)',
                          color: '#38BDF8',
                          whiteSpace: 'nowrap',
                          flexShrink: 0,
                        }}
                      >
                        <EqualizerIcon sx={{ fontSize: 14, color: '#38BDF8', display: 'block', flexShrink: 0 }} />
                        <Typography
                          variant="caption"
                          sx={{
                            fontWeight: 800,
                            fontSize: '0.72rem',
                            letterSpacing: '0.02em',
                            whiteSpace: 'nowrap',
                            lineHeight: 1,
                            color: '#38BDF8',
                          }}
                        >
                          {set.bpmRange}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 900,
                      fontSize: { xs: '1.2rem', sm: '1.45rem' },
                      color: '#FDFBF0',
                      lineHeight: 1.25,
                      mb: 0.8,
                    }}
                  >
                    {set.title}
                  </Typography>

                  {/* Recorded At Venue - Clickable to Google Maps */}
                  <Box
                    component="a"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(set.recordedAt)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 0.6,
                      mb: 1.8,
                      color: '#38BDF8',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      width: 'fit-content',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        '& .venue-name': {
                          color: '#FFC700',
                          textDecoration: 'underline',
                        },
                      },
                    }}
                  >
                    <PlaceIcon sx={{ fontSize: 15, color: '#FFC700', flexShrink: 0 }} />
                    <Typography
                      className="venue-name"
                      variant="caption"
                      sx={{
                        fontWeight: 700,
                        letterSpacing: '0.02em',
                        fontSize: '0.78rem',
                        color: '#38BDF8',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {set.recordedAt}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(253, 251, 240, 0.75)',
                      lineHeight: 1.6,
                      fontSize: '0.86rem',
                      mb: 2.5,
                    }}
                  >
                    {set.description}
                  </Typography>

                  {/* Vibe & Genre Tags (Smooth Horizontal Swipe Track) */}
                  <Box sx={{ mb: 2.5 }}>
                    <Typography variant="caption" sx={{ display: 'block', color: 'rgba(253, 251, 240, 0.5)', fontWeight: 800, mb: 0.8, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.64rem' }}>
                      CURATION HIGHLIGHTS & GENRES:
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 0.8,
                        overflowX: 'auto',
                        pb: 0.6,
                        width: '100%',
                        maxWidth: '100%',
                        WebkitOverflowScrolling: 'touch',
                        '::-webkit-scrollbar': { display: 'none' },
                      }}
                    >
                      {set.vibeHighlights.map((vibe) => (
                        <Box
                          key={vibe}
                          sx={{
                            flexShrink: 0,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 0.6,
                            py: 0.5,
                            px: 1.2,
                            borderRadius: '50px',
                            backgroundColor: 'rgba(253, 251, 240, 0.04)',
                            border: '1px solid rgba(253, 251, 240, 0.1)',
                          }}
                        >
                          <WhatshotIcon sx={{ color: accent.tagColor, fontSize: 13, display: 'block', flexShrink: 0 }} />
                          <Typography
                            component="span"
                            sx={{
                              color: '#FDFBF0',
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              lineHeight: 1,
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {vibe}
                          </Typography>
                        </Box>
                      ))}
                      {set.genres.map((genre) => (
                        <Box
                          key={genre}
                          sx={{
                            flexShrink: 0,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 0.6,
                            py: 0.5,
                            px: 1.2,
                            borderRadius: '50px',
                            backgroundColor: 'rgba(253, 251, 240, 0.02)',
                            border: '1px solid rgba(253, 251, 240, 0.06)',
                          }}
                        >
                          <MusicNoteIcon sx={{ color: 'rgba(253, 251, 240, 0.6)', fontSize: 13, display: 'block', flexShrink: 0 }} />
                          <Typography
                            component="span"
                            sx={{
                              color: 'rgba(253, 251, 240, 0.7)',
                              fontSize: '0.7rem',
                              fontWeight: 600,
                              lineHeight: 1,
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {genre}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>

                {/* Card Action Buttons */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 1.2,
                    alignItems: 'center',
                    pt: 2,
                    borderTop: '1px solid rgba(253, 251, 240, 0.08)',
                    mt: 'auto',
                    width: '100%',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<FacebookIcon sx={{ color: '#60A5FA', fontSize: 16 }} />}
                    component="a"
                    href={DJ_PROFILE.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: { xs: '100%', sm: 'auto' },
                      maxWidth: '100%',
                      borderColor: 'rgba(59, 130, 246, 0.35)',
                      color: '#93C5FD',
                      fontSize: { xs: '0.76rem', sm: '0.8rem' },
                      fontWeight: 800,
                      px: 2,
                      py: 0.9,
                      whiteSpace: 'nowrap',
                      backgroundColor: 'rgba(59, 130, 246, 0.05)',
                      '&:hover': {
                        borderColor: '#3B82F6',
                        backgroundColor: 'rgba(59, 130, 246, 0.15)',
                      },
                    }}
                  >
                    Event Updates
                  </Button>

                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<CalendarMonthIcon sx={{ fontSize: 16 }} />}
                    onClick={scrollToBooking}
                    sx={{
                      width: { xs: '100%', sm: 'auto' },
                      maxWidth: '100%',
                      fontSize: { xs: '0.76rem', sm: '0.8rem' },
                      fontWeight: 900,
                      px: 2.4,
                      py: 0.9,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Book This Vibe
                  </Button>
                </Box>
              </Card>
            );
          })}
        </Box>

        {/* Live Social & Media Hub Showcase Banner */}
        <Paper
          sx={{
            mt: { xs: 4, sm: 7 },
            p: { xs: 3, sm: 4.5 },
            backgroundColor: '#141414',
            backgroundImage: 'radial-gradient(ellipse 60% 50% at 0% 50%, rgba(255, 199, 0, 0.12), transparent 70%), radial-gradient(ellipse 60% 50% at 100% 50%, rgba(59, 130, 246, 0.1), transparent 70%)',
            border: '1px solid rgba(255, 199, 0, 0.35)',
            borderRadius: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 3, md: 4.5 },
            textAlign: { xs: 'center', md: 'left' },
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 620 }}>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 1 }}>
              <FacebookIcon sx={{ color: '#60A5FA', fontSize: 18 }} />
              <Typography variant="overline" sx={{ color: '#93C5FD', fontWeight: 800, letterSpacing: '0.08em', fontSize: '0.7rem' }}>
                COMMUNITY & TOUR UPDATES
              </Typography>
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 900, color: '#FDFBF0', mb: 1, fontSize: { xs: '1.25rem', sm: '1.55rem' } }}>
              Follow Gibran’s Live Sets & Schedule
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(253, 251, 240, 0.75)', fontSize: '0.88rem', lineHeight: 1.65 }}>
              Live party updates, venue announcements, and tour dates are posted on his official Facebook community page.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 1.8, sm: 2.2 }, flexShrink: 0, width: { xs: '100%', sm: 'auto' }, maxWidth: '100%' }}>
            <Button
              variant="contained"
              fullWidth
              startIcon={<FacebookIcon sx={{ fontSize: 20, mr: 0.5 }} />}
              component="a"
              href={DJ_PROFILE.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                color: '#FFF',
                fontWeight: 900,
                px: { xs: 3, sm: 3.4 },
                py: { xs: 1.4, sm: 1.5 },
                fontSize: { xs: '0.86rem', sm: '0.92rem' },
                maxWidth: '100%',
                boxShadow: '0 4px 20px rgba(37, 99, 235, 0.4)',
                whiteSpace: 'nowrap',
                '&:hover': {
                  background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                  boxShadow: '0 6px 26px rgba(37, 99, 235, 0.6)',
                },
              }}
            >
              Facebook @gibranpvd
            </Button>

            <Button
              variant="outlined"
              fullWidth
              startIcon={<CalendarMonthIcon sx={{ fontSize: 18, mr: 0.5 }} />}
              onClick={scrollToBooking}
              sx={{
                borderColor: 'rgba(255, 199, 0, 0.4)',
                color: '#FFC700',
                fontWeight: 800,
                px: { xs: 3, sm: 3.2 },
                py: { xs: 1.4, sm: 1.5 },
                fontSize: { xs: '0.86rem', sm: '0.92rem' },
                maxWidth: '100%',
                whiteSpace: 'nowrap',
                backgroundColor: 'rgba(255, 199, 0, 0.05)',
                '&:hover': {
                  borderColor: '#FFC700',
                  backgroundColor: 'rgba(255, 199, 0, 0.15)',
                },
              }}
            >
              Direct Inquiry
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
