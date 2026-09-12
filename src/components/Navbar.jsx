import { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Box,
  Container,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  GraphicEq as GraphicEqIcon,
  QueueMusic as QueueMusicIcon,
  Collections as CollectionsIcon,
  LocationCity as LocationCityIcon,
  Mic as MicIcon,
  Facebook as FacebookIcon,
  Email as EmailIcon,
  ChevronRight as ChevronRightIcon,
  EventAvailable as EventAvailableIcon,
} from '@mui/icons-material';
import { DJ_PROFILE } from '../data/djData';

const NAV_LINKS = [
  { num: '01', label: 'Sound Profile', href: '#sound', icon: <GraphicEqIcon sx={{ fontSize: 18 }} /> },
  { num: '02', label: 'Live Sets', href: '#mixes', icon: <QueueMusicIcon sx={{ fontSize: 18 }} /> },
  { num: '03', label: 'Media', href: '#gallery', icon: <CollectionsIcon sx={{ fontSize: 18 }} /> },
  { num: '04', label: 'Venues', href: '#residencies', icon: <LocationCityIcon sx={{ fontSize: 18 }} /> },
  { num: '05', label: 'Tour MC', href: '#tours', icon: <MicIcon sx={{ fontSize: 18 }} /> },
  { num: '06', label: 'Book Event', href: '#booking', icon: <EventAvailableIcon sx={{ fontSize: 18 }} /> },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navContainerRef = useRef(null);
  const linkRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, top: 0, width: 0, height: 0, opacity: 0 });
  const isProgrammaticScrollRef = useRef(false);
  const scrollEndTimerRef = useRef(null);

  useEffect(() => {
    const detectActiveSection = () => {
      // 1. Hero check: Top 100px is Hero (no nav links highlighted)
      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }

      // 2. Absolute bottom of page guarantee: If scrolled near the bottom, booking is locked
      const scrollPosition = window.innerHeight + window.scrollY;
      const totalHeight = document.documentElement.scrollHeight;
      if (scrollPosition >= totalHeight - 80) {
        setActiveSection('booking');
        return;
      }

      // 3. Reverse Top Threshold: Check sections from bottom to top
      const sections = [
        { id: 'booking', threshold: 0.65 },
        { id: 'tours', threshold: 0.50 },
        { id: 'residencies', threshold: 0.50 },
        { id: 'gallery', threshold: 0.50 },
        { id: 'mixes', threshold: 0.50 },
        { id: 'sound', threshold: 0.50 },
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * section.threshold) {
          setActiveSection(section.id);
          return;
        }
      }
    };

    const handleScroll = () => {
      // If mobile drawer is open, do nothing
      if (mobileOpen) return;

      setScrolled(window.scrollY > 20);

      // If a programmatic smooth scroll is active, keep isProgrammaticScroll locked
      // and reset the debounce timer until scrolling completely stops
      if (isProgrammaticScrollRef.current) {
        if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
        scrollEndTimerRef.current = setTimeout(() => {
          isProgrammaticScrollRef.current = false;
          detectActiveSection();
        }, 150);
        return;
      }

      detectActiveSection();
    };

    const handleScrollEnd = () => {
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
      isProgrammaticScrollRef.current = false;
      detectActiveSection();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scrollend', handleScrollEnd, { passive: true });
    detectActiveSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleScrollEnd);
      if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);
    };
  }, [mobileOpen]);

  // Update sliding indicator pill position whenever activeSection or window size changes
  useEffect(() => {
    const updateIndicator = () => {
      const activeIndex = NAV_LINKS.findIndex((link) => link.href.replace('#', '') === activeSection);
      if (activeIndex !== -1 && linkRefs.current[activeIndex] && navContainerRef.current) {
        const containerRect = navContainerRef.current.getBoundingClientRect();
        const activeElementRect = linkRefs.current[activeIndex].getBoundingClientRect();
        setIndicatorStyle({
          left: activeElementRect.left - containerRect.left,
          top: activeElementRect.top - containerRect.top,
          width: activeElementRect.width,
          height: activeElementRect.height,
          opacity: 1,
        });
      } else {
        setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection]);

  // Lock background body/html scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
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
  }, [mobileOpen]);

  const handleDrawerToggle = (e) => {
    if (e && e.currentTarget && typeof e.currentTarget.blur === 'function') {
      e.currentTarget.blur();
    }
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    setMobileOpen((prev) => !prev);
  };

  const scrollToSection = (href) => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    // Immediately unlock body/html scroll so window.scrollTo can execute cleanly
    document.documentElement.classList.remove('scroll-locked');
    document.body.classList.remove('scroll-locked');

    const id = href.replace('#', '');
    setActiveSection(id); // Lock active section immediately!

    // Lock programmatic scrolling so window scroll events don't overwrite activeSection mid-flight
    isProgrammaticScrollRef.current = true;
    if (scrollEndTimerRef.current) clearTimeout(scrollEndTimerRef.current);

    const performScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const navOffset = 75;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        window.scrollTo({
          top: Math.max(0, elementPosition - navOffset),
          behavior: 'smooth',
        });
      }
    };

    if (mobileOpen) {
      setMobileOpen(false);
      setTimeout(performScroll, 80);
      setTimeout(performScroll, 220);
    } else {
      performScroll();
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? 'rgba(11, 11, 11, 0.94)' : 'rgba(11, 11, 11, 0.7)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid',
          borderColor: scrolled ? 'rgba(253, 251, 240, 0.12)' : 'rgba(253, 251, 240, 0.05)',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.8)' : 'none',
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 4 }, width: '100%', mx: 'auto' }}>
          <Toolbar
            disableGutters
            sx={{
              height: { xs: 66, md: 74 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            {/* Brand Logo with Official "Good People" Banner */}
            <Box
              component="a"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'transform 0.25s ease, opacity 0.2s ease',
                '&:hover': { transform: 'scale(1.03)', opacity: 0.95 },
              }}
            >
              <Box
                component="img"
                src="/banner.png"
                alt="Good People - GibranPVD"
                sx={{
                  height: { xs: '32px', sm: '42px' },
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </Box>

            {/* Desktop Navigation Links Track with Fluid Sliding Active Indicator */}
            <Box
              ref={navContainerRef}
              sx={{
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
                backgroundColor: 'rgba(253, 251, 240, 0.03)',
                border: '1px solid rgba(253, 251, 240, 0.1)',
                borderRadius: '50px',
                p: '3px 4px',
                position: 'relative',
                flexShrink: 0,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
              }}
            >
              {/* The Smooth Sliding Active Indicator Pill */}
              <Box
                sx={{
                  position: 'absolute',
                  left: `${indicatorStyle.left}px`,
                  top: `${indicatorStyle.top}px`,
                  width: `${indicatorStyle.width}px`,
                  height: `${indicatorStyle.height}px`,
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, #FFC700 0%, #E5B200 100%)',
                  boxShadow: '0 2px 16px rgba(255, 199, 0, 0.45)',
                  opacity: indicatorStyle.opacity,
                  transition: 'left 0.28s cubic-bezier(0.16, 1, 0.3, 1), width 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />

              {NAV_LINKS.map((link, idx) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <Button
                    key={link.label}
                    ref={(el) => { linkRefs.current[idx] = el; }}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    sx={{
                      color: isActive ? '#0B0B0B' : 'rgba(253, 251, 240, 0.75)',
                      backgroundColor: 'transparent',
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      letterSpacing: '0.02em',
                      px: 2,
                      py: 0.7,
                      borderRadius: '50px',
                      whiteSpace: 'nowrap',
                      minWidth: 'auto',
                      position: 'relative',
                      zIndex: 1,
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        backgroundColor: isActive ? 'transparent' : 'rgba(253, 251, 240, 0.08)',
                        color: isActive ? '#0B0B0B' : '#FDFBF0',
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}
            </Box>

            {/* Desktop Actions: Social Icons + CTA (Hidden on mobile) */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
              <IconButton
                component="a"
                href={DJ_PROFILE.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                sx={{
                  display: { xs: 'none', md: 'inline-flex' },
                  width: 44,
                  height: 44,
                  minWidth: 44,
                  minHeight: 44,
                  borderRadius: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 0,
                  flexShrink: 0,
                  color: 'rgba(253, 251, 240, 0.7)',
                  backgroundColor: 'rgba(253, 251, 240, 0.04)',
                  border: '1px solid rgba(253, 251, 240, 0.1)',
                  '&:hover': {
                    color: '#3B82F6',
                    borderColor: '#3B82F6',
                    backgroundColor: 'rgba(59, 130, 246, 0.12)',
                  },
                }}
              >
                <FacebookIcon sx={{ fontSize: 18 }} />
              </IconButton>

              <Button
                variant="contained"
                size="small"
                onClick={() => scrollToSection('#booking')}
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  px: 2.2,
                  py: 0.8,
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                Book Gibran
              </Button>

              {/* Mobile Drawer Trigger */}
              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  display: { xs: 'inline-flex', lg: 'none' },
                  width: 44,
                  height: 44,
                  minWidth: 44,
                  minHeight: 44,
                  borderRadius: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 0,
                  flexShrink: 0,
                  color: '#FDFBF0',
                  backgroundColor: 'rgba(253, 251, 240, 0.06)',
                  border: '1px solid rgba(255, 199, 0, 0.3)',
                  boxShadow: '0 0 12px rgba(255, 199, 0, 0.15)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 199, 0, 0.15)',
                    borderColor: '#FFC700',
                  },
                }}
              >
                {mobileOpen ? <CloseIcon sx={{ fontSize: 20 }} /> : <MenuIcon sx={{ fontSize: 20 }} />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* FULL-PAGE MOBILE OVERLAY (TOP-JUSTIFIED LINKS) */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        disableRestoreFocus
        disableScrollLock
        transitionDuration={{ enter: 225, exit: 150 }}
        slotProps={{
          backdrop: {
            sx: {
              touchAction: 'none',
            },
          },
          paper: {
            sx: {
              width: '100vw',
              height: '100vh',
              maxWidth: '100vw',
              maxHeight: '100vh',
              backgroundColor: '#0B0B0B',
              backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255, 199, 0, 0.14), rgba(11, 11, 11, 0) 70%)',
              boxSizing: 'border-box',
              p: 0,
              overflowY: 'auto',
              overflowX: 'hidden',
              overscrollBehavior: 'contain',
              touchAction: 'pan-y',
            },
          },
        }}
      >
        {/* Inset Container with Top-Justified Flow */}
        <Box
          sx={{
            width: '100%',
            minHeight: '100vh',
            boxSizing: 'border-box',
            px: { xs: 3.5, sm: 5 },
            pt: { xs: 3, sm: 4 },
            pb: { xs: 3.5, sm: 4.5 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            maxWidth: 460,
            mx: 'auto',
          }}
        >
          {/* Top Header Row with Generous Spacing */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              pb: 2.5,
              borderBottom: '1px solid rgba(253, 251, 240, 0.08)',
              gap: { xs: 3, sm: 4 },
            }}
          >
            <Box
              component="a"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}
            >
              <Box
                component="img"
                src="/banner.png"
                alt="Good People - GibranPVD"
                sx={{
                  height: { xs: '30px', sm: '38px' },
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </Box>

            <IconButton
              autoFocus
              onClick={handleDrawerToggle}
              aria-label="close drawer"
              sx={{
                ml: 'auto',
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
                color: '#EDE7CB',
                backgroundColor: 'rgba(253, 251, 240, 0.06)',
                border: '1px solid rgba(253, 251, 240, 0.12)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 199, 0, 0.18)',
                  borderColor: '#FFC700',
                  color: '#FDFBF0',
                },
              }}
            >
              <CloseIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Box>

          {/* Top-Justified Navigation Links (Starts immediately below header) */}
          <Box sx={{ pt: 2.5, pb: 2, width: '100%' }}>
            <List sx={{ p: 0, width: '100%' }}>
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <ListItem key={link.label} disablePadding sx={{ mb: 1.2, width: '100%' }}>
                    <ListItemButton
                      onClick={() => scrollToSection(link.href)}
                      sx={{
                        borderRadius: 2.5,
                        py: 1.3,
                        px: 2.2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: isActive ? 'rgba(255, 199, 0, 0.16)' : 'rgba(253, 251, 240, 0.02)',
                        border: '1.5px solid',
                        borderColor: isActive ? '#FFC700' : 'rgba(253, 251, 240, 0.08)',
                        boxShadow: isActive ? '0 0 20px rgba(255, 199, 0, 0.25), inset 0 0 10px rgba(255, 199, 0, 0.08)' : 'none',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          backgroundColor: isActive ? 'rgba(255, 199, 0, 0.22)' : 'rgba(255, 199, 0, 0.08)',
                          borderColor: '#FFC700',
                          transform: 'translateX(3px)',
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.6 }}>
                        <Typography
                          sx={{
                            fontSize: '0.74rem',
                            fontWeight: 900,
                            fontFamily: '"Syne", sans-serif',
                            color: isActive ? '#FFC700' : 'rgba(253, 251, 240, 0.5)',
                            width: 22,
                          }}
                        >
                          {link.num}
                        </Typography>
                        <Box sx={{ color: isActive ? '#FFC700' : 'rgba(253, 251, 240, 0.7)', display: 'flex', alignItems: 'center' }}>
                          {link.icon}
                        </Box>
                        <Typography
                          sx={{
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            fontWeight: isActive ? 900 : 700,
                            fontSize: '0.98rem',
                            letterSpacing: '0.01em',
                            color: isActive ? '#FFC700' : '#FDFBF0',
                          }}
                        >
                          {link.label}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                        {isActive && (
                          <Box
                            sx={{
                              width: 7,
                              height: 7,
                              borderRadius: '50%',
                              backgroundColor: '#FFC700',
                              boxShadow: '0 0 10px #FFC700',
                            }}
                          />
                        )}
                        <ChevronRightIcon sx={{ fontSize: 18, color: isActive ? '#FFC700' : 'rgba(253, 251, 240, 0.4)' }} />
                      </Box>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          {/* Bottom Section: Pinned Cleanly to the Bottom */}
          <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid rgba(253, 251, 240, 0.08)', width: '100%' }}>
            <Button
              variant="contained"
              fullWidth
              size="large"
              startIcon={<EventAvailableIcon sx={{ fontSize: 18 }} />}
              onClick={() => scrollToSection('#booking')}
              sx={{
                mb: 1.5,
                py: 1.3,
                fontWeight: 900,
                fontSize: '0.92rem',
                letterSpacing: '0.03em',
                background: 'linear-gradient(135deg, #FFC700 0%, #E5B200 100%)',
                color: '#0B0B0B',
                boxShadow: '0 4px 20px rgba(255, 199, 0, 0.35)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #FFD633 0%, #FFC700 100%)',
                },
              }}
            >
              Lock In GibranPVD
            </Button>

            {/* Social Channels Row */}
            <Box sx={{ mb: 1.2, width: '100%' }}>
              <Button
                variant="outlined"
                size="small"
                fullWidth
                startIcon={<FacebookIcon sx={{ color: '#60A5FA', fontSize: 16 }} />}
                component="a"
                href={DJ_PROFILE.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: 'rgba(59, 130, 246, 0.35)',
                  color: '#93C5FD',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  py: 1,
                  backgroundColor: 'rgba(59, 130, 246, 0.05)',
                  '&:hover': {
                    borderColor: '#3B82F6',
                    backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  },
                }}
              >
                Connect on Facebook
              </Button>
            </Box>

            {/* Direct Email Badge */}
            <Box
              component="a"
              href={`mailto:${DJ_PROFILE.bookingEmail}`}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.8,
                py: 0.8,
                borderRadius: 2,
                backgroundColor: 'rgba(253, 251, 240, 0.03)',
                border: '1px solid rgba(253, 251, 240, 0.08)',
                textDecoration: 'none',
                mb: 0.8,
                width: '100%',
                boxSizing: 'border-box',
                '&:hover': {
                  borderColor: '#FFC700',
                  backgroundColor: 'rgba(255, 199, 0, 0.06)',
                },
              }}
            >
              <EmailIcon sx={{ color: '#FFC700', fontSize: 15 }} />
              <Typography variant="caption" sx={{ color: '#EDE7CB', fontWeight: 700, fontSize: '0.74rem' }}>
                Direct: {DJ_PROFILE.bookingEmail}
              </Typography>
            </Box>

            <Typography variant="caption" display="block" align="center" sx={{ color: 'rgba(253, 251, 240, 0.5)', fontSize: '0.64rem' }}>
              GIBRANPVD • Providence, Rhode Island
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
