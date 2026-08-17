import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Paper,
} from '@mui/material';
import {
  Nightlife as NightlifeIcon,
  MusicNote as MusicNoteIcon,
  QueueMusic as QueueMusicIcon,
  Waves as WavesIcon,
  MicExternalOn as MicExternalOnIcon,
  Whatshot as WhatshotIcon,
  GraphicEq as GraphicEqIcon,
  AutoAwesome as SparkleIcon,
  Stadium as StadiumIcon,
  Celebration as CelebrationIcon,
  FormatQuote as QuoteIcon,
  CheckCircle as CheckCircleIcon,
  Speaker as SpeakerIcon,
  Group as GroupIcon,
  Tune as TuneIcon,
  VolunteerActivism as CommunityIcon,
} from '@mui/icons-material';
import { SOUND_PILLARS, GIBRAN_BIO } from '../data/djData';

const ICONS = {
  house: <NightlifeIcon sx={{ fontSize: 24, display: 'block' }} />,
  latin: <MusicNoteIcon sx={{ fontSize: 24, display: 'block' }} />,
  'rnb-hiphop': <QueueMusicIcon sx={{ fontSize: 24, display: 'block' }} />,
  waterfront: <WavesIcon sx={{ fontSize: 24, display: 'block' }} />,
  'tour-mc': <MicExternalOnIcon sx={{ fontSize: 24, display: 'block' }} />,
};

export default function SoundProfile() {
  return (
    <Box
      id="sound"
      sx={{
        py: { xs: 8, sm: 11, md: 14 },
        backgroundColor: '#07070A',
        position: 'relative',
        width: '100%',
        maxWidth: '100vw',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Lighting */}
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          left: '-5%',
          width: { xs: 160, md: 450 },
          height: { xs: 160, md: 450 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
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
              backgroundColor: 'rgba(6, 182, 212, 0.08)',
              border: '1px solid rgba(6, 182, 212, 0.35)',
              boxSizing: 'border-box',
              maxWidth: '100%',
            }}
          >
            <GraphicEqIcon sx={{ color: '#06B6D4', fontSize: 16, display: 'block' }} />
            <Typography
              sx={{
                color: '#06B6D4',
                fontWeight: 800,
                fontSize: { xs: '0.66rem', sm: '0.74rem' },
                letterSpacing: '0.06em',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}
            >
              SOUND PROFILE & OPEN-FORMAT MASTERY
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
              color: '#FFFFFF',
            }}
          >
            THE <span style={{ color: '#F59E0B', textShadow: '0 0 30px rgba(245, 158, 11, 0.35)' }}>OPEN-FORMAT</span> DNA
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#94A3B8',
              fontSize: { xs: '0.88rem', sm: '1rem', md: '1.05rem' },
              lineHeight: 1.6,
              maxWidth: 680,
              width: '100%',
              mx: 'auto',
              textAlign: 'center',
              display: 'block',
            }}
          >
            Engineered for dancefloors that refuse to be boxed in. Fluidly moving through high-octane club grooves, sultry Latin percussion, golden era throwbacks, and waterfront anthems.
          </Typography>
        </Box>

        {/* Sound Pillars Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: { xs: 2.8, sm: 3.5 },
            width: '100%',
          }}
        >
          {SOUND_PILLARS.map((pillar) => (
            <Card
              key={pillar.id}
              sx={{
                gridColumn: pillar.id === 'tour-mc' ? { sm: '1 / -1' } : 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: { xs: 2.8, sm: 3.5 },
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#0E0E14',
                backgroundImage: `radial-gradient(ellipse 70% 60% at 95% 10%, ${pillar.color}22 0%, transparent 70%)`,
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 4,
                boxSizing: 'border-box',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: `${pillar.color}88`,
                  transform: 'translateY(-3px)',
                  boxShadow: `0 18px 40px rgba(0,0,0,0.8), 0 0 24px ${pillar.color}22`,
                },
              }}
            >
              {/* Glow Accent Top Right */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -40,
                  right: -40,
                  width: 140,
                  height: 140,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${pillar.color}33 0%, rgba(0,0,0,0) 70%)`,
                  pointerEvents: 'none',
                }}
              />

              <CardContent sx={{ p: 0, position: 'relative', zIndex: 1 }}>
                {/* Header Row with Exact Center-Aligned Custom Tag Pill */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 1.5,
                    mb: 2.5,
                    width: '100%',
                  }}
                >
                  <Box
                    sx={{
                      width: 46,
                      height: 46,
                      minWidth: 46,
                      minHeight: 46,
                      borderRadius: 2.5,
                      backgroundColor: `${pillar.color}15`,
                      color: pillar.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${pillar.color}33`,
                      boxShadow: `0 0 14px ${pillar.color}18`,
                      flexShrink: 0,
                    }}
                  >
                    {ICONS[pillar.id]}
                  </Box>

                  {/* Pixel-Perfect Center-Aligned Tag Pill */}
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 0.7,
                      py: 0.65,
                      px: 1.4,
                      borderRadius: '50px',
                      backgroundColor: `${pillar.color}15`,
                      border: `1px solid ${pillar.color}44`,
                      boxSizing: 'border-box',
                      flexShrink: 0,
                    }}
                  >
                    <WhatshotIcon
                      sx={{
                        color: pillar.color,
                        fontSize: 14,
                        display: 'block',
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      component="span"
                      sx={{
                        color: pillar.color,
                        fontWeight: 800,
                        fontSize: { xs: '0.72rem', sm: '0.76rem' },
                        letterSpacing: '0.02em',
                        lineHeight: 1,
                        display: 'block',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {pillar.tag}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 900,
                    mb: 0.8,
                    color: '#FFFFFF',
                    fontSize: { xs: '1.2rem', sm: '1.4rem' },
                    lineHeight: 1.25,
                  }}
                >
                  {pillar.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: '#94A3B8',
                    lineHeight: 1.65,
                    fontSize: '0.88rem',
                    mb: 2.8,
                  }}
                >
                  {pillar.description}
                </Typography>
              </CardContent>

              <Box
                sx={{
                  pt: 1.8,
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 1,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '0.68rem' }}>
                  TEMPO & VIBE
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: pillar.color,
                    fontWeight: 800,
                    letterSpacing: '0.03em',
                    fontSize: '0.76rem',
                  }}
                >
                  {pillar.vibe}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>

        {/* ARTIST HERITAGE & PEDIGREE: THE CANVAS, THE FASHION & THE MIC */}
        <Box sx={{ mt: { xs: 8, sm: 11, md: 14 } }}>
          <Paper
            sx={{
              p: { xs: 3, sm: 5, md: 6 },
              backgroundColor: '#0C0C12',
              backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245, 158, 11, 0.12), transparent 70%), radial-gradient(ellipse 60% 40% at 90% 90%, rgba(168, 85, 247, 0.08), transparent 70%)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: 4,
              boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(245, 158, 11, 0.1)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Badge */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <SparkleIcon sx={{ color: '#F59E0B', fontSize: 18 }} />
              <Typography variant="overline" sx={{ color: '#F59E0B', fontWeight: 800, letterSpacing: '0.08em', fontSize: '0.72rem' }}>
                ARTIST PEDIGREE & HERITAGE • SOUND & STAGE MASTERY
              </Typography>
            </Box>

            {/* Headline Quote Banner */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.5,
                mb: 3.5,
                p: { xs: 2.2, sm: 3 },
                borderRadius: 3,
                backgroundColor: 'rgba(245, 158, 11, 0.08)',
                border: '1px solid rgba(245, 158, 11, 0.35)',
              }}
            >
              <QuoteIcon sx={{ color: '#F59E0B', fontSize: { xs: 28, sm: 36 }, transform: 'rotate(180deg)', flexShrink: 0 }} />
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: '"Syne", sans-serif',
                    fontWeight: 900,
                    fontSize: { xs: '1.25rem', sm: '1.65rem', md: '1.95rem' },
                    color: '#FFFFFF',
                    lineHeight: 1.2,
                    mb: 0.8,
                  }}
                >
                  “GibranPVD is energy. Positive. Pure. Raw. Fierce.”
                </Typography>
                <Typography variant="body2" sx={{ color: '#FCD34D', fontWeight: 700, fontSize: { xs: '0.82rem', sm: '0.92rem' } }}>
                  Kinesthetic • Professional • Fun • “Stand Under the Tent & Move It Wider”
                </Typography>
              </Box>
            </Box>

            {/* Narrative Paragraphs */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4.5 }}>
              {GIBRAN_BIO.paragraphs.map((p, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{
                    color: '#CBD5E1',
                    fontSize: { xs: '0.88rem', sm: '0.98rem' },
                    lineHeight: 1.7,
                  }}
                >
                  {p}
                </Typography>
              ))}
            </Box>

            {/* 3-Column Pedigree Breakdown */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                gap: { xs: 2.5, sm: 3 },
                pt: 3.5,
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {/* Box 1: Event & Venue Specializations */}
              <Paper
                sx={{
                  p: { xs: 2.2, sm: 2.8 },
                  backgroundColor: '#101018',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 3,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                  <CelebrationIcon sx={{ color: '#F59E0B', fontSize: 18 }} />
                  <Typography variant="subtitle2" sx={{ color: '#FFF', fontWeight: 800, fontSize: '0.88rem' }}>
                    Event & Venue Specializations
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{ color: '#94A3B8', display: 'block', mb: 1.8, fontSize: '0.74rem' }}>
                  17–24+ Events Handled Monthly Across New England
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {GIBRAN_BIO.eventSpecializations.map((spec) => (
                    <Box key={spec} sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                      <CheckCircleIcon sx={{ fontSize: 14, color: '#F59E0B', flexShrink: 0 }} />
                      <Typography variant="caption" sx={{ color: '#E2E8F0', fontWeight: 700, fontSize: '0.76rem' }}>
                        {spec}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>

              {/* Box 2: Concert Tour MC & Arena Credentials */}
              <Paper
                sx={{
                  p: { xs: 2.2, sm: 2.8 },
                  backgroundColor: '#101018',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 3,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                  <StadiumIcon sx={{ color: '#38BDF8', fontSize: 18 }} />
                  <Typography variant="subtitle2" sx={{ color: '#FFF', fontWeight: 800, fontSize: '0.88rem' }}>
                    Tour MC & Concert Support
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{ color: '#94A3B8', display: 'block', mb: 1.8, fontSize: '0.74rem' }}>
                  National Bus & Arena Stage Direct Support
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {GIBRAN_BIO.tourCredentials.map((credit) => (
                    <Box key={credit} sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                      <CheckCircleIcon sx={{ fontSize: 14, color: '#38BDF8', flexShrink: 0 }} />
                      <Typography variant="caption" sx={{ color: '#E2E8F0', fontWeight: 700, fontSize: '0.76rem' }}>
                        {credit}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>

              {/* Box 3: Live Sound & Production Capabilities */}
              <Paper
                sx={{
                  p: { xs: 2.2, sm: 2.8 },
                  backgroundColor: '#101018',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 3,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                  <TuneIcon sx={{ color: '#EC4899', fontSize: 18 }} />
                  <Typography variant="subtitle2" sx={{ color: '#FFF', fontWeight: 800, fontSize: '0.88rem' }}>
                    Sound & Production Power
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{ color: '#94A3B8', display: 'block', mb: 1.8, fontSize: '0.74rem' }}>
                  Live Stem Separation, EV Active PA & Multi-Zone
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {GIBRAN_BIO.soundCapabilities.map((cap) => (
                    <Box key={cap} sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                      <CheckCircleIcon sx={{ fontSize: 14, color: '#EC4899', flexShrink: 0 }} />
                      <Typography variant="caption" sx={{ color: '#E2E8F0', fontWeight: 700, fontSize: '0.76rem' }}>
                        {cap}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>

            {/* Bottom Section: Lo Key Collective, Youth Mentorship & Pro Touring Rig */}
            <Box
              sx={{
                mt: 4,
                pt: 3.5,
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' },
                gap: { xs: 2.5, sm: 3 },
              }}
            >
              {/* Lo Key DJ Collective & Community */}
              <Paper
                sx={{
                  p: { xs: 2.2, sm: 3 },
                  backgroundColor: '#101018',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  borderRadius: 3,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.2 }}>
                  <GroupIcon sx={{ color: '#F59E0B', fontSize: 20 }} />
                  <Typography variant="subtitle1" sx={{ color: '#FFF', fontWeight: 900, fontSize: '0.96rem' }}>
                    Lo Key DJ Collective & Underground Sound
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#CBD5E1', fontSize: '0.84rem', lineHeight: 1.6, mb: 1.8 }}>
                  Member of Providence’s 7-DJ powerhouse collective <strong>Lo Key</strong>. Pushing unconventional sounds across New England—specializing in Baltimore & NOLA Bounce (New Orleans), Jersey Club, Jersey House, and Chicago grooves alongside Latin rhythms.
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pt: 1.5, borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <CommunityIcon sx={{ color: '#34D399', fontSize: 18 }} />
                  <Typography variant="caption" sx={{ color: '#E2E8F0', fontWeight: 700, fontSize: '0.78rem' }}>
                    AS220 Inner-City Youth Arts & DJ Program Lead (Providence, RI)
                  </Typography>
                </Box>
              </Paper>

              {/* Touring Performance Rig (The Multi-Tool Switchblade) */}
              <Paper
                sx={{
                  p: { xs: 2.2, sm: 3 },
                  backgroundColor: '#101018',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  borderRadius: 3,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.2 }}>
                  <SpeakerIcon sx={{ color: '#38BDF8', fontSize: 20 }} />
                  <Typography variant="subtitle1" sx={{ color: '#FFF', fontWeight: 900, fontSize: '0.96rem' }}>
                    Touring Sound Rig & Live Switchblade Setup
                  </Typography>
                </Box>
                <Typography variant="caption" sx={{ color: '#94A3B8', display: 'block', mb: 1.5, fontSize: '0.74rem' }}>
                  100% Self-Contained Weatherproof Club & Arena Rig
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
                  {GIBRAN_BIO.rig.map((item) => (
                    <Box key={item.name} sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.8 }}>
                      <TuneIcon sx={{ fontSize: 14, color: '#38BDF8', mt: 0.3, flexShrink: 0 }} />
                      <Typography variant="caption" sx={{ color: '#E2E8F0', fontSize: '0.76rem', lineHeight: 1.4 }}>
                        <strong style={{ color: '#FFF' }}>{item.name}:</strong> {item.detail}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>

            {/* Bottom Slogan, Superpower & Tent Philosophy Banner */}
            <Box
              sx={{
                mt: 3.5,
                p: 2.8,
                borderRadius: 2.5,
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(168, 85, 247, 0.08) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.35)',
                textAlign: 'center',
              }}
            >
              <Typography variant="subtitle1" sx={{ color: '#FCD34D', fontWeight: 900, fontSize: { xs: '0.92rem', sm: '1.08rem' }, mb: 0.8 }}>
                “Entertainment for everyone. Good people deserve good music.”
              </Typography>
              <Typography variant="body2" sx={{ color: '#CBD5E1', fontSize: { xs: '0.8rem', sm: '0.88rem' }, lineHeight: 1.6, mb: 1, maxWidth: 840, mx: 'auto' }}>
                “I’m just looking to stand under the tent and not be the tent. What can I do inside of that tent for my community that can better everybody? If I can help move the tent just a little wider so that more people can be under that tent, that’s what matters.”
              </Typography>
              <Typography variant="caption" sx={{ color: '#94A3B8', fontSize: '0.76rem', fontWeight: 700, display: 'block' }}>
                “If I can sway one person in a room full of nobody, that’s my superpower—because I can sway a thousand people with no problem.”
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
