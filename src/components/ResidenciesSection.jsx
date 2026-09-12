import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  LocationCity as LocationCityIcon,
  Stadium as StadiumIcon,
  Mic as MicIcon,
  Whatshot as WhatshotIcon,
  Place as PlaceIcon,
  ConfirmationNumber as PassIcon,
} from '@mui/icons-material';
import { RESIDENCIES, TOUR_ARTISTS, CIRCUIT_CITIES } from '../data/djData';

export default function ResidenciesSection() {
  return (
    <Box sx={{ backgroundColor: '#0B0B0B', width: '100%', maxWidth: '100vw', overflow: 'hidden' }}>
      
      {/* SECTION 1: PROVIDENCE RESIDENCIES */}
      <Box
        id="residencies"
        sx={{
          py: { xs: 8, sm: 11, md: 14 },
          position: 'relative',
          borderBottom: '1px solid rgba(253, 251, 240, 0.08)',
          width: '100%',
        }}
      >
        {/* Subtle Ambient Glow */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: { xs: 180, md: 500 },
            height: { xs: 180, md: 500 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 199, 0, 0.08) 0%, transparent 70%)',
            filter: 'blur(70px)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4 }, position: 'relative', zIndex: 1, mx: 'auto' }}>
          {/* Header */}
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
              <LocationCityIcon sx={{ color: '#FFC700', fontSize: 16, display: 'block' }} />
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
                PROVIDENCE RESIDENCIES & VENUES
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
              PROVIDENCE <span style={{ color: '#FFC700', textShadow: '0 0 30px rgba(255, 199, 0, 0.35)' }}>RESIDENCIES</span>
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
              The heartbeat of Rhode Island nightlife—headlining premier waterfront river decks, cultural institutions, and regional circuits.
            </Typography>

            {/* Active Tour & Performance Circuit Pill Track */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: { xs: 0.8, sm: 1 },
                mt: 2.8,
                maxWidth: 820,
                mx: 'auto',
              }}
            >
              <Typography variant="caption" sx={{ color: '#FFC700', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', mr: 0.5, fontSize: { xs: '0.68rem', sm: '0.72rem' } }}>
                PERFORMANCE CIRCUIT:
              </Typography>
              {CIRCUIT_CITIES.map((city) => (
                <Chip
                  key={city}
                  label={city}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(255, 199, 0, 0.08)',
                    borderColor: 'rgba(255, 199, 0, 0.3)',
                    color: '#EDE7CB',
                    fontWeight: 800,
                    fontSize: { xs: '0.68rem', sm: '0.74rem' },
                    border: '1px solid',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 199, 0, 0.2)',
                      borderColor: '#FFC700',
                      color: '#FFC700',
                      transform: 'translateY(-1px)',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Residencies Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
              gap: { xs: 2.8, sm: 3.5 },
              width: '100%',
            }}
          >
            {RESIDENCIES.map((residency, index) => {
              const isFlagship = index === 0;

              return (
                <Paper
                  key={residency.name}
                  sx={{
                    gridColumn: isFlagship ? { lg: '1 / -1' } : 'auto',
                    p: { xs: 2.8, sm: 4 },
                    backgroundColor: isFlagship ? '#181818' : '#141414',
                    backgroundImage: isFlagship
                      ? 'radial-gradient(ellipse 70% 60% at 95% 10%, rgba(255, 199, 0, 0.18), transparent 70%), radial-gradient(ellipse 50% 50% at 5% 90%, rgba(253, 251, 240, 0.04), transparent 70%)'
                      : 'radial-gradient(ellipse 60% 50% at 95% 10%, rgba(253, 251, 240, 0.03), transparent 70%)',
                    border: '1px solid',
                    borderColor: isFlagship ? 'rgba(255, 199, 0, 0.45)' : 'rgba(253, 251, 240, 0.12)',
                    borderRadius: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                    boxSizing: 'border-box',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: isFlagship ? '#FFC700' : 'rgba(255, 199, 0, 0.4)',
                      transform: 'translateY(-3px)',
                      boxShadow: isFlagship
                        ? '0 20px 45px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 199, 0, 0.2)'
                        : '0 16px 36px rgba(0, 0, 0, 0.7), 0 0 20px rgba(255, 199, 0, 0.1)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    {/* Category Tag Pill with Pixel-Perfect Center Alignment */}
                    <Box sx={{ mb: 1.5 }}>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 0.7,
                          py: 0.6,
                          px: 1.4,
                          borderRadius: '50px',
                          backgroundColor: isFlagship ? 'rgba(255, 199, 0, 0.15)' : 'rgba(253, 251, 240, 0.05)',
                          border: '1px solid rgba(255, 199, 0, 0.35)',
                          boxSizing: 'border-box',
                        }}
                      >
                        <WhatshotIcon sx={{ color: '#FFC700', fontSize: 14, display: 'block', flexShrink: 0 }} />
                        <Typography
                          component="span"
                          sx={{
                            color: '#FFC700',
                            fontWeight: 800,
                            fontSize: '0.72rem',
                            letterSpacing: '0.03em',
                            lineHeight: 1,
                            display: 'block',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {residency.tag}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Venue Name & Location Address Stacked Vertically */}
                    <Box sx={{ mb: 1.6 }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 900,
                          fontSize: isFlagship ? { xs: '1.35rem', sm: '1.85rem' } : { xs: '1.2rem', sm: '1.5rem' },
                          color: '#FDFBF0',
                          mb: 0.5,
                          lineHeight: 1.2,
                        }}
                      >
                        {residency.name}
                      </Typography>

                      {/* Location Address - Stacked directly beneath venue name & Clickable to Google Maps */}
                      <Box
                        component="a"
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${residency.name} ${residency.location}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.6,
                          color: 'rgba(253, 251, 240, 0.7)',
                          mb: 0.8,
                          textDecoration: 'none',
                          cursor: 'pointer',
                          width: 'fit-content',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            color: '#FFC700',
                            '& .address-text': {
                              color: '#FFC700',
                              textDecoration: 'underline',
                            },
                          },
                        }}
                      >
                        <PlaceIcon sx={{ fontSize: 15, color: '#FFC700', flexShrink: 0 }} />
                        <Typography
                          className="address-text"
                          variant="caption"
                          sx={{
                            fontWeight: 700,
                            letterSpacing: '0.02em',
                            fontSize: { xs: '0.76rem', sm: '0.82rem' },
                            color: '#EDE7CB',
                            transition: 'color 0.2s ease',
                          }}
                        >
                          {residency.location}
                        </Typography>
                      </Box>

                      {/* Residency Subtitle / Type */}
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: '#38BDF8',
                          fontWeight: 800,
                          fontSize: { xs: '0.82rem', sm: '0.9rem' },
                          letterSpacing: '0.02em',
                        }}
                      >
                        {residency.type}
                      </Typography>
                    </Box>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(253, 251, 240, 0.75)',
                        lineHeight: 1.65,
                        fontSize: '0.88rem',
                        mb: 2.8,
                        maxWidth: isFlagship ? 800 : 'none',
                      }}
                    >
                      {residency.description}
                    </Typography>
                  </Box>

                  {/* Horizontal Scroll Track for Features */}
                  <Box sx={{ pt: 2, borderTop: '1px solid rgba(253, 251, 240, 0.08)', position: 'relative', zIndex: 1 }}>
                    <Typography variant="caption" sx={{ display: 'block', color: 'rgba(253, 251, 240, 0.5)', fontWeight: 800, mb: 0.8, textTransform: 'uppercase', letterSpacing: '0.06em', fontSize: '0.64rem' }}>
                      VENUE KEY ATTRIBUTES:
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
                      {residency.features.map((feature) => (
                        <Box
                          key={feature}
                          sx={{
                            flexShrink: 0,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 0.6,
                            py: 0.5,
                            px: 1.2,
                            borderRadius: '50px',
                            backgroundColor: 'rgba(253, 251, 240, 0.03)',
                            border: '1px solid rgba(253, 251, 240, 0.1)',
                          }}
                        >
                          <CheckCircleIcon sx={{ fontSize: 13, color: '#FFC700', display: 'block', flexShrink: 0 }} />
                          <Typography
                            component="span"
                            sx={{
                              color: '#EDE7CB',
                              fontSize: '0.72rem',
                              fontWeight: 700,
                              lineHeight: 1,
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Paper>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* SECTION 2: NATIONAL TOUR MC STAGE CREDITS */}
      <Box
        id="tours"
        sx={{
          pt: { xs: 8, sm: 11, md: 14 },
          pb: 0,
          position: 'relative',
          width: '100%',
        }}
      >
        {/* Subtle Ambient Glow */}
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            right: '5%',
            width: { xs: 180, md: 500 },
            height: { xs: 180, md: 500 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 199, 0, 0.06) 0%, transparent 70%)',
            filter: 'blur(70px)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4 }, position: 'relative', zIndex: 1, mx: 'auto' }}>
          {/* Header */}
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
              <StadiumIcon sx={{ color: '#FFC700', fontSize: 16, display: 'block' }} />
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
                NATIONAL CONCERT TOURS & ARENA STAGES
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
              TOUR MC <span style={{ color: '#FFC700', textShadow: '0 0 30px rgba(255, 199, 0, 0.35)' }}>STAGE CREDITS</span>
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
              Trusted by multi-platinum artists, festival promoters, and national amphitheaters to command arena crowds and maintain peak momentum.
            </Typography>
          </Box>

          {/* Spotlight Marquee Banner */}
          <Paper
            sx={{
              p: { xs: 3, sm: 4.5 },
              mb: { xs: 3, sm: 4.5 },
              background: 'linear-gradient(135deg, rgba(255, 199, 0, 0.12) 0%, rgba(20, 20, 20, 0.98) 100%)',
              border: '1px solid rgba(255, 199, 0, 0.35)',
              borderRadius: 4,
              width: '100%',
              boxSizing: 'border-box',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2.5, alignItems: { md: 'center' }, justifyContent: 'space-between' }}>
              <Box sx={{ maxWidth: 720 }}>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 1 }}>
                  <MicIcon sx={{ color: '#FFC700', fontSize: 18 }} />
                  <Typography variant="overline" sx={{ color: '#FFC700', fontWeight: 800, letterSpacing: '0.08em', fontSize: '0.72rem' }}>
                    LIVE ARENA & AMPHITHEATER HOST
                  </Typography>
                </Box>
                <Typography variant="h4" sx={{ fontWeight: 900, color: '#FDFBF0', mb: 1, fontSize: { xs: '1.28rem', sm: '1.75rem' }, lineHeight: 1.25 }}>
                  National Tour Host & Direct Stage Support (2010 — Present)
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(253, 251, 240, 0.8)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  Direct stage support, concert DJing, and live crowd hosting across national amphitheater and arena tours with multi-platinum headliners: Kendrick Lamar, Logic & Rat Pack, Trippie Redd, Kanye West, Lupe Fiasco, Rae Sremmurd, Bad Rabbits, Chance the Rapper, and Steve Aoki.
                </Typography>
              </Box>
              <Chip
                icon={<PassIcon sx={{ color: '#0B0B0B !important', fontSize: '15px !important' }} />}
                label="100% LIVE STAGE CONTROL"
                sx={{
                  background: 'linear-gradient(135deg, #FFC700 0%, #E5B200 100%)',
                  color: '#0B0B0B',
                  fontWeight: 900,
                  fontSize: { xs: '0.74rem', sm: '0.82rem' },
                  py: 2.2,
                  px: 1.5,
                  alignSelf: { xs: 'flex-start', md: 'center' },
                  boxShadow: '0 4px 18px rgba(255, 199, 0, 0.4)',
                  maxWidth: '100%',
                }}
              />
            </Box>
          </Paper>

          {/* All-Access VIP Artist Pass Cards Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: { xs: 1.6, sm: 2.5 },
              width: '100%',
            }}
          >
            {TOUR_ARTISTS.map((artist, idx) => (
              <Paper
                key={artist.name}
                sx={{
                  p: { xs: 2, sm: 2.8 },
                  backgroundColor: '#141414',
                  backgroundImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255, 199, 0, 0.06), transparent 70%)',
                  border: '1px solid rgba(253, 251, 240, 0.12)',
                  borderRadius: 3.5,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: '100%',
                  boxSizing: 'border-box',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    borderColor: 'rgba(255, 199, 0, 0.6)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 30px rgba(255, 199, 0, 0.18)',
                  },
                }}
              >
                {/* VIP Pass Watermark */}
                <Typography
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 12,
                    fontFamily: '"Syne", sans-serif',
                    fontSize: '1.4rem',
                    fontWeight: 900,
                    lineHeight: 1,
                    color: 'rgba(253, 251, 240, 0.04)',
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  {`#0${idx + 1}`}
                </Typography>

                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.2 }}>
                    <Chip
                      label={artist.badge}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(255, 199, 0, 0.12)',
                        color: '#FFC700',
                        fontWeight: 800,
                        fontSize: { xs: '0.62rem', sm: '0.7rem' },
                        height: 22,
                        border: '1px solid rgba(255, 199, 0, 0.25)',
                      }}
                    />
                    <StarIcon sx={{ color: '#FFC700', fontSize: 16 }} />
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 900,
                      color: '#FDFBF0',
                      fontSize: { xs: '1rem', sm: '1.2rem' },
                      mb: 0.4,
                      lineHeight: 1.2,
                    }}
                  >
                    {artist.name}
                  </Typography>

                  <Typography variant="body2" sx={{ color: '#EDE7CB', fontWeight: 800, fontSize: { xs: '0.74rem', sm: '0.82rem' }, mb: 1 }}>
                    {artist.role}
                  </Typography>
                </Box>

                <Typography
                  variant="caption"
                  sx={{
                    color: 'rgba(253, 251, 240, 0.6)',
                    pt: 1,
                    borderTop: '1px solid rgba(253, 251, 240, 0.08)',
                    fontSize: { xs: '0.66rem', sm: '0.74rem' },
                    fontWeight: 600,
                    display: 'block',
                  }}
                >
                  {artist.genre}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
