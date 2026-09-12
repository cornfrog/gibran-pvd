import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Chip,
  Paper,
  Dialog,
  DialogContent,
} from '@mui/material';
import {
  ArrowBackIosNew as PrevIcon,
  ArrowForwardIos as NextIcon,
  PlayArrow as PlayIcon,
  Fullscreen as FullscreenIcon,
  Close as CloseIcon,
  PhotoCamera as PhotoCameraIcon,
  Videocam as VideocamIcon,
} from '@mui/icons-material';
import { MEDIA_ITEMS } from '../data/mediaContent';

export default function MediaCarousel() {
  const [filter, setFilter] = useState('all'); // 'all' | 'image' | 'video'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const filteredItems = MEDIA_ITEMS.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  // Reset index if filter changes and index is out of bounds
  useEffect(() => {
    setCurrentIndex(0);
    setIsVideoPlaying(false);
  }, [filter]);

  const currentItem = filteredItems[currentIndex] || filteredItems[0];

  const handlePrev = () => {
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const handleSelect = (idx) => {
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setCurrentIndex(idx);
  };

  const handleToggleVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredItems.length]);

  if (!currentItem) return null;

  return (
    <Box
      id="gallery"
      component="section"
      sx={{
        py: { xs: 8, sm: 11, md: 14 },
        backgroundColor: '#090909',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(253, 251, 240, 0.08)',
        width: '100%',
      }}
    >
      {/* Ambient Lighting Spheres */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: { xs: 160, md: 450 },
          height: { xs: 160, md: 450 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 199, 0, 0.07) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: { xs: 160, md: 400 },
          height: { xs: 160, md: 400 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4 }, position: 'relative', zIndex: 1, mx: 'auto' }}>
        
        {/* Section Header */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 3.5, sm: 4.5, md: 5.5 },
            maxWidth: 880,
            mx: 'auto',
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '1.65rem', sm: '2.1rem', md: '2.6rem', lg: '3.1rem' },
              fontWeight: 900,
              letterSpacing: { xs: '-0.01em', md: '-0.02em' },
              lineHeight: 1.15,
              mb: 1.5,
              color: '#FDFBF0',
            }}
          >
            PHOTOS &amp; <span style={{ color: '#FFC700', textShadow: '0 0 30px rgba(255, 199, 0, 0.35)' }}>VIDEOS</span>
          </Typography>

          {/* Filter Pills */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              mt: 2.5,
              flexWrap: 'wrap',
            }}
          >
            {[
              { key: 'all', label: `All Media (${MEDIA_ITEMS.length})`, icon: null },
              ...(MEDIA_ITEMS.some(i => i.type === 'image') ? [
                { key: 'image', label: `Photos (${MEDIA_ITEMS.filter(i => i.type === 'image').length})`, icon: <PhotoCameraIcon sx={{ fontSize: 15 }} /> },
              ] : []),
              ...(MEDIA_ITEMS.some(i => i.type === 'video') ? [
                { key: 'video', label: `Videos (${MEDIA_ITEMS.filter(i => i.type === 'video').length})`, icon: <VideocamIcon sx={{ fontSize: 15 }} /> },
              ] : []),
            ].map((tab) => {
              const active = filter === tab.key;
              return (
                <Chip
                  key={tab.key}
                  clickable
                  icon={tab.icon}
                  label={tab.label}
                  onClick={() => setFilter(tab.key)}
                  sx={{
                    backgroundColor: active ? '#FFC700' : 'rgba(253, 251, 240, 0.04)',
                    color: active ? '#0B0B0B' : '#EDE7CB',
                    fontWeight: 800,
                    fontSize: { xs: '0.72rem', sm: '0.78rem' },
                    border: '1px solid',
                    borderColor: active ? '#FFC700' : 'rgba(253, 251, 240, 0.1)',
                    transition: 'all 0.2s ease',
                    boxShadow: active ? '0 2px 14px rgba(255, 199, 0, 0.35)' : 'none',
                    '& .MuiChip-icon': {
                      color: active ? '#0B0B0B' : '#FFC700',
                    },
                    '&:hover': {
                      backgroundColor: active ? '#FFD633' : 'rgba(255, 199, 0, 0.12)',
                      borderColor: '#FFC700',
                    },
                  }}
                />
              );
            })}
          </Box>
        </Box>

        {/* MAIN CAROUSEL STAGE */}
        <Paper
          elevation={0}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          sx={{
            position: 'relative',
            width: '100%',
            maxWidth: 1040,
            mx: 'auto',
            borderRadius: { xs: 3, sm: 4 },
            overflow: 'hidden',
            backgroundColor: '#121212',
            border: '1px solid rgba(255, 199, 0, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(255, 199, 0, 0.12)',
          }}
        >
          {/* MEDIA DISPLAY AREA */}
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: { xs: 260, sm: 420, md: 520, lg: 580 },
              overflow: 'hidden',
              backgroundColor: '#000',
            }}
          >
            {currentItem.type === 'image' ? (
              <Box
                component="img"
                key={currentItem.id}
                src={currentItem.src}
                alt={currentItem.title}
                onClick={() => setLightboxOpen(true)}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  cursor: 'zoom-in',
                  transition: 'transform 0.5s ease, opacity 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              />
            ) : (
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#050505',
                }}
              >
                <video
                  key={currentItem.src}
                  ref={videoRef}
                  src={`${currentItem.src}#t=0.1`}
                  controls
                  playsInline
                  preload="metadata"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    backgroundColor: '#000',
                  }}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                />
                {!isVideoPlaying && (
                  <IconButton
                    onClick={handleToggleVideo}
                    aria-label="Play video"
                    sx={{
                      position: 'absolute',
                      width: { xs: 64, sm: 84 },
                      height: { xs: 64, sm: 84 },
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 199, 0, 0.92)',
                      color: '#0B0B0B',
                      boxShadow: '0 0 35px rgba(255, 199, 0, 0.7)',
                      transition: 'all 0.25s ease',
                      zIndex: 3,
                      '&:hover': {
                        backgroundColor: '#FFD633',
                        transform: 'scale(1.08)',
                      },
                    }}
                  >
                    <PlayIcon sx={{ fontSize: { xs: 34, sm: 44 }, ml: 0.5 }} />
                  </IconButton>
                )}
              </Box>
            )}

            {/* Top Right Controls: Fullscreen & Index Counter */}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 14, sm: 20 },
                right: { xs: 14, sm: 20 },
                display: 'flex',
                gap: 1,
                alignItems: 'center',
                zIndex: 2,
              }}
            >
              {currentItem.type === 'image' && (
                <IconButton
                  size="small"
                  onClick={() => setLightboxOpen(true)}
                  aria-label="View Fullscreen"
                  sx={{
                    backgroundColor: 'rgba(11, 11, 11, 0.8)',
                    backdropFilter: 'blur(10px)',
                    color: '#EDE7CB',
                    border: '1px solid rgba(253, 251, 240, 0.15)',
                    width: 36,
                    height: 36,
                    '&:hover': {
                      backgroundColor: '#FFC700',
                      color: '#0B0B0B',
                    },
                  }}
                >
                  <FullscreenIcon sx={{ fontSize: 20 }} />
                </IconButton>
              )}
              <Box
                sx={{
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  backgroundColor: 'rgba(11, 11, 11, 0.85)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(253, 251, 240, 0.15)',
                  color: '#FFC700',
                  fontWeight: 900,
                  fontFamily: '"Syne", sans-serif',
                  fontSize: { xs: '0.72rem', sm: '0.82rem' },
                  letterSpacing: '0.04em',
                }}
              >
                {String(currentIndex + 1).padStart(2, '0')} / {String(filteredItems.length).padStart(2, '0')}
              </Box>
            </Box>

            {/* Carousel Previous & Next Stage Arrows */}
            <IconButton
              onClick={handlePrev}
              aria-label="Previous slide"
              sx={{
                position: 'absolute',
                left: { xs: 10, sm: 20 },
                top: '50%',
                transform: 'translateY(-50%)',
                width: { xs: 42, sm: 52 },
                height: { xs: 42, sm: 52 },
                borderRadius: '50%',
                backgroundColor: 'rgba(11, 11, 11, 0.82)',
                backdropFilter: 'blur(12px)',
                color: '#FDFBF0',
                border: '1.5px solid rgba(255, 199, 0, 0.35)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.7)',
                zIndex: 2,
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: '#FFC700',
                  color: '#0B0B0B',
                  borderColor: '#FFC700',
                  transform: 'translateY(-50%) scale(1.08)',
                  boxShadow: '0 0 25px rgba(255, 199, 0, 0.6)',
                },
              }}
            >
              <PrevIcon sx={{ fontSize: { xs: 18, sm: 22 }, mr: 0.2 }} />
            </IconButton>

            <IconButton
              onClick={handleNext}
              aria-label="Next slide"
              sx={{
                position: 'absolute',
                right: { xs: 10, sm: 20 },
                top: '50%',
                transform: 'translateY(-50%)',
                width: { xs: 42, sm: 52 },
                height: { xs: 42, sm: 52 },
                borderRadius: '50%',
                backgroundColor: 'rgba(11, 11, 11, 0.82)',
                backdropFilter: 'blur(12px)',
                color: '#FDFBF0',
                border: '1.5px solid rgba(255, 199, 0, 0.35)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.7)',
                zIndex: 2,
                transition: 'all 0.25s ease',
                '&:hover': {
                  backgroundColor: '#FFC700',
                  color: '#0B0B0B',
                  borderColor: '#FFC700',
                  transform: 'translateY(-50%) scale(1.08)',
                  boxShadow: '0 0 25px rgba(255, 199, 0, 0.6)',
                },
              }}
            >
              <NextIcon sx={{ fontSize: { xs: 18, sm: 22 }, ml: 0.2 }} />
            </IconButton>
          </Box>

          {/* BOTTOM THUMBNAIL TRACK */}
          <Box
            sx={{
              p: { xs: 1.5, sm: 2 },
              backgroundColor: '#161616',
              borderTop: '1px solid rgba(253, 251, 240, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 1, sm: 1.8 },
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              '::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {filteredItems.map((item, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <Box
                  key={item.id}
                  component="button"
                  onClick={() => handleSelect(idx)}
                  aria-label={`Jump to slide ${idx + 1}: ${item.title}`}
                  sx={{
                    position: 'relative',
                    width: { xs: 68, sm: 96, md: 110 },
                    height: { xs: 44, sm: 60, md: 70 },
                    borderRadius: 2,
                    overflow: 'hidden',
                    p: 0,
                    cursor: 'pointer',
                    backgroundColor: '#000',
                    border: '2px solid',
                    borderColor: isSelected ? '#FFC700' : 'rgba(253, 251, 240, 0.15)',
                    opacity: isSelected ? 1 : 0.6,
                    transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: isSelected ? '0 0 16px rgba(255, 199, 0, 0.5)' : 'none',
                    transition: 'all 0.25s ease',
                    flexShrink: 0,
                    '&:hover': {
                      opacity: 1,
                      borderColor: '#FFC700',
                    },
                  }}
                >
                  {item.type === 'video' ? (
                    <Box
                      component="video"
                      src={`${item.src}#t=0.5`}
                      preload="metadata"
                      muted
                      playsInline
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        pointerEvents: 'none',
                        backgroundColor: '#000',
                      }}
                    />
                  ) : (
                    <Box
                      component="img"
                      src={item.src}
                      alt={item.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  )}
                  {item.type === 'video' && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFC700',
                      }}
                    >
                      <PlayIcon sx={{ fontSize: 14 }} />
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        </Paper>
      </Container>

      {/* LIGHTBOX FULLSCREEN PREVIEW DIALOG */}
      <Dialog
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        maxWidth="lg"
        fullWidth
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(16px)',
            },
          },
          paper: {
            sx: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              overflow: 'hidden',
              m: { xs: 1, sm: 2 },
            },
          },
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative', textAlign: 'center' }}>
          <IconButton
            onClick={() => setLightboxOpen(false)}
            aria-label="Close fullscreen view"
            sx={{
              position: 'absolute',
              top: 14,
              right: 14,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: '1px solid rgba(255, 199, 0, 0.4)',
              color: '#FDFBF0',
              width: 44,
              height: 44,
              zIndex: 10,
              '&:hover': {
                backgroundColor: '#FFC700',
                color: '#0B0B0B',
              },
            }}
          >
            <CloseIcon sx={{ fontSize: 22 }} />
          </IconButton>

          {currentItem.type === 'video' ? (
            <Box
              component="video"
              src={currentItem.src}
              controls
              autoPlay
              playsInline
              sx={{
                width: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: 3,
                border: '1px solid rgba(255, 199, 0, 0.3)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
                backgroundColor: '#000',
              }}
            />
          ) : (
            <Box
              component="img"
              src={currentItem.src}
              alt={currentItem.title}
              sx={{
                width: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: 3,
                border: '1px solid rgba(255, 199, 0, 0.3)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
